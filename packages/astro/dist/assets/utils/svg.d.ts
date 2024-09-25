import type { ImageMetadata } from '../types.js';
type SvgAttributes = Record<string, any>;
export declare function normalizeProps(attributes: SvgAttributes, { size, ...props }: SvgAttributes): SvgAttributes;
export declare function makeNonEnumerable(object: Record<string, any>): void;
export declare function makeSvgComponent(meta: ImageMetadata, contents: Buffer | string): string;
export {};
