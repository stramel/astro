import path from "node:path";
import vue from "@vitejs/plugin-vue";
import { MagicString } from "@vue/compiler-sfc";
const VIRTUAL_MODULE_ID = "virtual:@astrojs/vue/app";
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;
function getRenderer() {
  return {
    name: "@astrojs/vue",
    clientEntrypoint: "@astrojs/vue/client.js",
    serverEntrypoint: "@astrojs/vue/server.js"
  };
}
function getJsxRenderer() {
  return {
    name: "@astrojs/vue (jsx)",
    clientEntrypoint: "@astrojs/vue/client.js",
    serverEntrypoint: "@astrojs/vue/server.js"
  };
}
function getContainerRenderer() {
  return {
    name: "@astrojs/vue",
    serverEntrypoint: "@astrojs/vue/server.js"
  };
}
function virtualAppEntrypoint(options) {
  let isBuild;
  let root;
  let appEntrypoint;
  return {
    name: "@astrojs/vue/virtual-app",
    config(_, { command }) {
      isBuild = command === "build";
    },
    configResolved(config) {
      root = config.root;
      if (options?.appEntrypoint) {
        appEntrypoint = options.appEntrypoint.startsWith(".") ? path.resolve(root, options.appEntrypoint) : options.appEntrypoint;
      }
    },
    resolveId(id) {
      if (id == VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID;
      }
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        if (appEntrypoint) {
          return `import * as mod from ${JSON.stringify(appEntrypoint)};

export const setup = async (app) => {
	if ('default' in mod) {
		await mod.default(app);
	} else {
		${!isBuild ? `console.warn("[@astrojs/vue] appEntrypoint \`" + ${JSON.stringify(
            appEntrypoint
          )} + "\` does not export a default function. Check out https://docs.astro.build/en/guides/integrations-guide/vue/#appentrypoint.");` : ""}
	}
}`;
        }
        return `export const setup = () => {};`;
      }
    },
    // Ensure that Vue components reference appEntrypoint directly
    // This allows Astro to associate global styles imported in this file
    // with the pages they should be injected to
    transform(code, id) {
      if (!appEntrypoint) return;
      if (id.endsWith(".vue")) {
        const s = new MagicString(code);
        s.prepend(`import ${JSON.stringify(appEntrypoint)};
`);
        return {
          code: s.toString(),
          map: s.generateMap({ hires: "boundary" })
        };
      }
    }
  };
}
async function getViteConfiguration(command, options) {
  let vueOptions = {
    ...options,
    template: {
      ...options?.template,
      transformAssetUrls: false
    }
  };
  const config = {
    optimizeDeps: {
      include: ["@astrojs/vue/client.js", "vue"],
      exclude: ["@astrojs/vue/server.js", VIRTUAL_MODULE_ID]
    },
    plugins: [vue(vueOptions), virtualAppEntrypoint(vueOptions)],
    ssr: {
      noExternal: ["vuetify", "vueperslides", "primevue"]
    }
  };
  if (options?.jsx) {
    const vueJsx = (await import("@vitejs/plugin-vue-jsx")).default;
    const jsxOptions = typeof options.jsx === "object" ? options.jsx : void 0;
    config.plugins?.push(vueJsx(jsxOptions));
  }
  if (command === "dev" && options?.devtools) {
    const vueDevTools = (await import("vite-plugin-vue-devtools")).default;
    const devToolsOptions = typeof options.devtools === "object" ? options.devtools : {};
    config.plugins?.push(
      vueDevTools({
        ...devToolsOptions,
        appendTo: VIRTUAL_MODULE_ID
      })
    );
  }
  return config;
}
function src_default(options) {
  return {
    name: "@astrojs/vue",
    hooks: {
      "astro:config:setup": async ({ addRenderer, updateConfig, command }) => {
        addRenderer(getRenderer());
        if (options?.jsx) {
          addRenderer(getJsxRenderer());
        }
        updateConfig({ vite: await getViteConfiguration(command, options) });
      }
    }
  };
}
export {
  src_default as default,
  getContainerRenderer
};
