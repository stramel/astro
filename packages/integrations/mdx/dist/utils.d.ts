import type { Options as AcornOpts } from 'acorn';
import type { AstroConfig, AstroIntegrationLogger } from 'astro';
import matter from 'gray-matter';
import type { MdxjsEsm } from 'mdast-util-mdx';
import type { PluggableList } from 'unified';
export interface FileInfo {
    fileId: string;
    fileUrl: string;
}
/** @see 'vite-plugin-utils' for source */
export declare function getFileInfo(id: string, config: AstroConfig): FileInfo;
/**
 * Match YAML exception handling from Astro core errors
 * @see 'astro/src/core/errors.ts'
 */
export declare function parseFrontmatter(code: string, id: string): matter.GrayMatterFile<string>;
export declare function jsToTreeNode(jsString: string, acornOpts?: AcornOpts): MdxjsEsm;
export declare function ignoreStringPlugins(plugins: any[], logger: AstroIntegrationLogger): PluggableList;
