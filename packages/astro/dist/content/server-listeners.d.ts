import type fsMod from 'node:fs';
import type { ViteDevServer } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import type { Logger } from '../core/logger/core.js';
interface ContentServerListenerParams {
    fs: typeof fsMod;
    logger: Logger;
    settings: AstroSettings;
    viteServer: ViteDevServer;
}
export declare function attachContentServerListeners({ viteServer, fs, logger, settings, }: ContentServerListenerParams): Promise<void>;
export {};
