import { parse, renderSync } from "ultrahtml";
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}
function makeNonEnumerable(object) {
  for (const property in object) {
    Object.defineProperty(object, property, { enumerable: false });
  }
}
function parseSvg(contents) {
  const root = parse(contents);
  const [{ attributes, children }] = root.children;
  const body = renderSync({ ...root, children });
  return { attributes, body };
}
function makeSvgComponent(meta, contents) {
  const file = typeof contents === "string" ? contents : contents.toString("utf-8");
  const { attributes, body: children } = parseSvg(file);
  const props = {
    meta,
    attributes: dropAttributes(attributes),
    children
  };
  return `import { createSvgComponent } from 'astro/assets/runtime';
export default createSvgComponent(${JSON.stringify(props)})`;
}
export {
  makeNonEnumerable,
  makeSvgComponent,
  normalizeProps
};
