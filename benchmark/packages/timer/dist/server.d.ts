import type { IncomingMessage, ServerResponse } from 'node:http';
import type { SSRManifest } from 'astro';
export declare function createExports(manifest: SSRManifest): {
    handler: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
};
