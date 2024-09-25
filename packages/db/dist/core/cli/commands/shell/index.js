import { sql } from "drizzle-orm";
import {
  createLocalDatabaseClient,
  createRemoteDatabaseClient
} from "../../../../runtime/db-client.js";
import { normalizeDatabaseUrl } from "../../../../runtime/index.js";
import { DB_PATH } from "../../../consts.js";
import { SHELL_QUERY_MISSING_ERROR } from "../../../errors.js";
import { getAstroEnv, getManagedRemoteToken, getRemoteDatabaseInfo } from "../../../utils.js";
async function cmd({
  flags,
  astroConfig
}) {
  const query = flags.query;
  if (!query) {
    console.error(SHELL_QUERY_MISSING_ERROR);
    process.exit(1);
  }
  const dbInfo = getRemoteDatabaseInfo();
  if (flags.remote) {
    const appToken = await getManagedRemoteToken(flags.token, dbInfo);
    const db = createRemoteDatabaseClient({
      dbType: dbInfo.type,
      remoteUrl: dbInfo.url,
      appToken: appToken.token
    });
    const result = await db.run(sql.raw(query));
    await appToken.destroy();
    console.log(result);
  } else {
    const { ASTRO_DATABASE_FILE } = getAstroEnv();
    const dbUrl = normalizeDatabaseUrl(
      ASTRO_DATABASE_FILE,
      new URL(DB_PATH, astroConfig.root).href
    );
    const db = createLocalDatabaseClient({ dbUrl, enableTransations: dbInfo.type === "libsql" });
    const result = await db.run(sql.raw(query));
    console.log(result);
  }
}
export {
  cmd
};
