import type { ImageMetadata } from './types.js';
export interface SvgComponentProps {
    meta: ImageMetadata;
    attributes: Record<string, string>;
    children: string;
}
export declare function createSvgComponent({ meta, attributes, children }: SvgComponentProps): import("../runtime/server/index.js").AstroComponentFactory & ImageMetadata;
