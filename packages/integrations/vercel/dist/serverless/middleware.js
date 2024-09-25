import { existsSync } from "node:fs";
import { builtinModules } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  ASTRO_LOCALS_HEADER,
  ASTRO_MIDDLEWARE_SECRET_HEADER,
  ASTRO_PATH_HEADER,
  NODE_PATH
} from "./adapter.js";
async function generateEdgeMiddleware(astroMiddlewareEntryPointPath, vercelEdgeMiddlewareHandlerPath, outPath, middlewareSecret, logger) {
  const code = edgeMiddlewareTemplate(
    astroMiddlewareEntryPointPath,
    vercelEdgeMiddlewareHandlerPath,
    middlewareSecret,
    logger
  );
  const bundledFilePath = fileURLToPath(outPath);
  const esbuild = await import("esbuild");
  await esbuild.build({
    stdin: {
      contents: code,
      resolveDir: process.cwd()
    },
    target: "es2020",
    platform: "browser",
    // https://runtime-keys.proposal.wintercg.org/#edge-light
    conditions: ["edge-light", "worker", "browser"],
    outfile: bundledFilePath,
    allowOverwrite: true,
    format: "esm",
    bundle: true,
    minify: false,
    // ensure node built-in modules are namespaced with `node:`
    plugins: [
      {
        name: "esbuild-namespace-node-built-in-modules",
        setup(build) {
          const filter = new RegExp(builtinModules.map((mod) => `(^${mod}$)`).join("|"));
          build.onResolve({ filter }, (args) => ({ path: "node:" + args.path, external: true }));
        }
      }
    ]
  });
  return pathToFileURL(bundledFilePath);
}
function edgeMiddlewareTemplate(astroMiddlewareEntryPointPath, vercelEdgeMiddlewareHandlerPath, middlewareSecret, logger) {
  const middlewarePath = JSON.stringify(
    fileURLToPath(astroMiddlewareEntryPointPath).replace(/\\/g, "/")
  );
  const filePathEdgeMiddleware = fileURLToPath(vercelEdgeMiddlewareHandlerPath);
  let handlerTemplateImport = "";
  let handlerTemplateCall = "{}";
  if (existsSync(filePathEdgeMiddleware + ".js") || existsSync(filePathEdgeMiddleware + ".ts")) {
    logger.warn(
      "Usage of `vercel-edge-middleware.js` is deprecated. You can now use the `waitUntil(promise)` function directly as `ctx.locals.waitUntil(promise)`."
    );
    const stringified = JSON.stringify(filePathEdgeMiddleware.replace(/\\/g, "/"));
    handlerTemplateImport = `import handler from ${stringified}`;
    handlerTemplateCall = `await handler({ request, context })`;
  } else {
  }
  return `
	${handlerTemplateImport}
import { onRequest } from ${middlewarePath};
import { createContext, trySerializeLocals } from 'astro/middleware';
export default async function middleware(request, context) {
	const ctx = createContext({
		request,
		params: {}
	});
	ctx.locals = { vercel: { edge: context }, ...${handlerTemplateCall} };
	const { origin } = new URL(request.url);
	const next = () => {
		const { vercel, ...locals } = ctx.locals;
		return fetch(new URL('/${NODE_PATH}', request.url), {
			headers: {
				...Object.fromEntries(request.headers.entries()),
				'${ASTRO_MIDDLEWARE_SECRET_HEADER}': '${middlewareSecret}',
				'${ASTRO_PATH_HEADER}': request.url.replace(origin, ''),
				'${ASTRO_LOCALS_HEADER}': trySerializeLocals(locals)
			}
		})
	}

	return onRequest(ctx, next);
}`;
}
export {
  generateEdgeMiddleware
};
//# sourceMappingURL=middleware.js.map
