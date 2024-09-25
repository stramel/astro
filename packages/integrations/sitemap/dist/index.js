import path from "node:path";
import { fileURLToPath } from "node:url";
import { ZodError } from "zod";
import { generateSitemap } from "./generate-sitemap.js";
import { validateOptions } from "./validate-options.js";
import { writeSitemap } from "./write-sitemap.js";
import { EnumChangefreq } from "sitemap";
function formatConfigErrorMessage(err) {
  const errorList = err.issues.map((issue) => ` ${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
const PKG_NAME = "@astrojs/sitemap";
const OUTFILE = "sitemap-index.xml";
const STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["404", "500"]);
const isStatusCodePage = (locales) => {
  const statusPathNames = new Set(
    locales.flatMap((locale) => [...STATUS_CODE_PAGES].map((page) => `${locale}/${page}`)).concat([...STATUS_CODE_PAGES])
  );
  return (pathname) => {
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    if (pathname.startsWith("/")) {
      pathname = pathname.slice(1);
    }
    return statusPathNames.has(pathname);
  };
};
const createPlugin = (options) => {
  let config;
  return {
    name: PKG_NAME,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir, routes, pages, logger }) => {
        try {
          if (!config.site) {
            logger.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const opts = validateOptions(config.site, options);
          const { filter, customPages, serialize, entryLimit } = opts;
          let finalSiteUrl = new URL(config.base, config.site);
          const shouldIgnoreStatus = isStatusCodePage(Object.keys(opts.i18n?.locales ?? {}));
          let pageUrls = pages.filter((p) => !shouldIgnoreStatus(p.pathname)).map((p) => {
            if (p.pathname !== "" && !finalSiteUrl.pathname.endsWith("/"))
              finalSiteUrl.pathname += "/";
            if (p.pathname.startsWith("/")) p.pathname = p.pathname.slice(1);
            const fullPath = finalSiteUrl.pathname + p.pathname;
            return new URL(fullPath, finalSiteUrl).href;
          });
          let routeUrls = routes.reduce((urls, r) => {
            if (r.type !== "page") return urls;
            if (r.pathname) {
              if (shouldIgnoreStatus(r.pathname ?? r.route)) return urls;
              let fullPath = finalSiteUrl.pathname;
              if (fullPath.endsWith("/")) fullPath += r.generate(r.pathname).substring(1);
              else fullPath += r.generate(r.pathname);
              let newUrl = new URL(fullPath, finalSiteUrl).href;
              if (config.trailingSlash === "never") {
                urls.push(newUrl);
              } else if (config.build.format === "directory" && !newUrl.endsWith("/")) {
                urls.push(newUrl + "/");
              } else {
                urls.push(newUrl);
              }
            }
            return urls;
          }, []);
          pageUrls = Array.from(/* @__PURE__ */ new Set([...pageUrls, ...routeUrls, ...customPages ?? []]));
          try {
            if (filter) {
              pageUrls = pageUrls.filter(filter);
            }
          } catch (err) {
            logger.error(`Error filtering pages
${err.toString()}`);
            return;
          }
          if (pageUrls.length === 0) {
            logger.warn(`No pages found!
\`${OUTFILE}\` not created.`);
            return;
          }
          let urlData = generateSitemap(pageUrls, finalSiteUrl.href, opts);
          if (serialize) {
            try {
              const serializedUrls = [];
              for (const item of urlData) {
                const serialized = await Promise.resolve(serialize(item));
                if (serialized) {
                  serializedUrls.push(serialized);
                }
              }
              if (serializedUrls.length === 0) {
                logger.warn("No pages found!");
                return;
              }
              urlData = serializedUrls;
            } catch (err) {
              logger.error(`Error serializing pages
${err.toString()}`);
              return;
            }
          }
          const destDir = fileURLToPath(dir);
          await writeSitemap(
            {
              hostname: finalSiteUrl.href,
              destinationDir: destDir,
              publicBasePath: config.base,
              sourceData: urlData,
              limit: entryLimit
            },
            config
          );
          logger.info(`\`${OUTFILE}\` created at \`${path.relative(process.cwd(), destDir)}\``);
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var src_default = createPlugin;
export {
  EnumChangefreq as ChangeFreqEnum,
  src_default as default
};
