import type { AstroSettings } from '../../@types/astro.js';
interface IconData {
    body: string;
    width?: number;
    height?: number;
}
export declare function getIconData(settings: AstroSettings, collection: string, name: string): Promise<IconData | undefined>;
export {};
