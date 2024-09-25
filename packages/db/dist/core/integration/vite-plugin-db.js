import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { sql } from "drizzle-orm";
import { SQLiteAsyncDialect } from "drizzle-orm/sqlite-core";
import { createLocalDatabaseClient } from "../../runtime/db-client.js";
import { normalizeDatabaseUrl } from "../../runtime/index.js";
import { DB_PATH, RUNTIME_IMPORT, RUNTIME_VIRTUAL_IMPORT, VIRTUAL_MODULE_ID } from "../consts.js";
import { getResolvedFileUrl } from "../load-file.js";
import { SEED_DEV_FILE_NAME, getCreateIndexQueries, getCreateTableQuery } from "../queries.js";
import {
  getAstroEnv,
  getDbDirectoryUrl,
  getRemoteDatabaseInfo
} from "../utils.js";
const resolved = {
  module: "\0" + VIRTUAL_MODULE_ID,
  importedFromSeedFile: "\0" + VIRTUAL_MODULE_ID + ":seed"
};
function vitePluginDb(params) {
  let command = "build";
  return {
    name: "astro:db",
    enforce: "pre",
    configResolved(resolvedConfig) {
      command = resolvedConfig.command;
    },
    async resolveId(id) {
      if (id !== VIRTUAL_MODULE_ID) return;
      if (params.seedHandler.inProgress) {
        return resolved.importedFromSeedFile;
      }
      return resolved.module;
    },
    async load(id) {
      if (id !== resolved.module && id !== resolved.importedFromSeedFile) return;
      if (params.connectToStudio) {
        return getStudioVirtualModContents({
          appToken: params.appToken,
          tables: params.tables.get(),
          isBuild: command === "build",
          output: params.output
        });
      }
      if (id === resolved.importedFromSeedFile) {
        return getLocalVirtualModContents({
          root: params.root,
          tables: params.tables.get()
        });
      }
      await recreateTables(params);
      const seedFiles = getResolvedSeedFiles(params);
      for await (const seedFile of seedFiles) {
        this.addWatchFile(fileURLToPath(seedFile));
        if (existsSync(seedFile)) {
          params.seedHandler.inProgress = true;
          await params.seedHandler.execute(seedFile);
        }
      }
      if (params.seedHandler.inProgress) {
        (params.logger ?? console).info("Seeded database.");
        params.seedHandler.inProgress = false;
      }
      return getLocalVirtualModContents({
        root: params.root,
        tables: params.tables.get()
      });
    }
  };
}
function getConfigVirtualModContents() {
  return `export * from ${RUNTIME_VIRTUAL_IMPORT}`;
}
function getLocalVirtualModContents({
  tables,
  root
}) {
  const dbInfo = getRemoteDatabaseInfo();
  const dbUrl = new URL(DB_PATH, root);
  return `
import { asDrizzleTable, createLocalDatabaseClient, normalizeDatabaseUrl } from ${RUNTIME_IMPORT};

const dbUrl = normalizeDatabaseUrl(import.meta.env.ASTRO_DATABASE_FILE, ${JSON.stringify(dbUrl)});
export const db = createLocalDatabaseClient({ dbUrl, enableTransactions: ${dbInfo.url === "libsql"} });

export * from ${RUNTIME_VIRTUAL_IMPORT};

${getStringifiedTableExports(tables)}`;
}
function getStudioVirtualModContents({
  tables,
  appToken,
  isBuild,
  output
}) {
  const dbInfo = getRemoteDatabaseInfo();
  function appTokenArg() {
    if (isBuild) {
      const envPrefix = dbInfo.type === "studio" ? "ASTRO_STUDIO" : "ASTRO_DB";
      if (output === "server") {
        return `process.env.${envPrefix}_APP_TOKEN`;
      } else {
        return `process.env.${envPrefix}_APP_TOKEN ?? ${JSON.stringify(appToken)}`;
      }
    } else {
      return JSON.stringify(appToken);
    }
  }
  function dbUrlArg() {
    const dbStr = JSON.stringify(dbInfo.url);
    return dbInfo.type === "studio" ? `import.meta.env.ASTRO_STUDIO_REMOTE_DB_URL ?? ${dbStr}` : `import.meta.env.ASTRO_DB_REMOTE_URL ?? ${dbStr}`;
  }
  return `
import {asDrizzleTable, createRemoteDatabaseClient} from ${RUNTIME_IMPORT};

export const db = await createRemoteDatabaseClient({
  dbType: ${JSON.stringify(dbInfo.type)},
  remoteUrl: ${dbUrlArg()},
  appToken: ${appTokenArg()},
});

export * from ${RUNTIME_VIRTUAL_IMPORT};

${getStringifiedTableExports(tables)}
	`;
}
function getStringifiedTableExports(tables) {
  return Object.entries(tables).map(
    ([name, table]) => `export const ${name} = asDrizzleTable(${JSON.stringify(name)}, ${JSON.stringify(
      table
    )}, false)`
  ).join("\n");
}
const sqlite = new SQLiteAsyncDialect();
async function recreateTables({ tables, root }) {
  const dbInfo = getRemoteDatabaseInfo();
  const { ASTRO_DATABASE_FILE } = getAstroEnv();
  const dbUrl = normalizeDatabaseUrl(ASTRO_DATABASE_FILE, new URL(DB_PATH, root).href);
  const db = createLocalDatabaseClient({ dbUrl, enableTransations: dbInfo.type === "libsql" });
  const setupQueries = [];
  for (const [name, table] of Object.entries(tables.get() ?? {})) {
    const dropQuery = sql.raw(`DROP TABLE IF EXISTS ${sqlite.escapeName(name)}`);
    const createQuery = sql.raw(getCreateTableQuery(name, table));
    const indexQueries = getCreateIndexQueries(name, table);
    setupQueries.push(dropQuery, createQuery, ...indexQueries.map((s) => sql.raw(s)));
  }
  await db.batch([
    db.run(sql`pragma defer_foreign_keys=true;`),
    ...setupQueries.map((q) => db.run(q))
  ]);
}
function getResolvedSeedFiles({
  root,
  seedFiles
}) {
  const localSeedFiles = SEED_DEV_FILE_NAME.map((name) => new URL(name, getDbDirectoryUrl(root)));
  const integrationSeedFiles = seedFiles.get().map((s) => getResolvedFileUrl(root, s));
  return [...integrationSeedFiles, ...localSeedFiles];
}
export {
  getConfigVirtualModContents,
  getLocalVirtualModContents,
  getStudioVirtualModContents,
  resolved,
  vitePluginDb
};
