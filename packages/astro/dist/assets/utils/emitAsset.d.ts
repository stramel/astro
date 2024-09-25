/// <reference types="node" resolution-mode="require"/>
import type * as vite from 'vite';
import type { ImageMetadata } from '../types.js';
type ImageMetadataWithContents = ImageMetadata & {
    contents?: Buffer;
};
type FileEmitter = vite.Rollup.EmitFile;
export declare function emitESMImage(id: string | undefined, 
/** @deprecated */
_watchMode: boolean, fileEmitter?: FileEmitter): Promise<ImageMetadataWithContents | undefined>;
export {};
