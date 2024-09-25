import {
  createComponent,
  render,
  spreadAttributes,
  unescapeHTML
} from "../runtime/server/index.js";
import { makeNonEnumerable, normalizeProps } from "./utils/svg.js";
let ids = 0;
function createSvgComponent({ meta, attributes, children }) {
  const id = `a:${ids++}`;
  const rendered = /* @__PURE__ */ new WeakSet();
  const Component = createComponent((result, props) => {
    const { title: titleProp, viewBox, ...normalizedProps } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (normalizedProps["inline"]) {
      delete normalizedProps.inline;
      return render`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
    }
    let symbol = "";
    if (!rendered.has(result.response)) {
      symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
      rendered.add(result.response);
    }
    return render`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use xlink:href="#${id}" /></svg>`;
  });
  makeNonEnumerable(Component);
  if (import.meta.env.DEV) {
    Object.defineProperty(Component, Symbol.for("nodejs.util.inspect.custom"), {
      value: (_, opts, inspect) => inspect(meta, opts)
    });
  }
  return Object.assign(Component, meta);
}
export {
  createSvgComponent
};
