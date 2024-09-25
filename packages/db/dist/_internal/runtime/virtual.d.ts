import { LibsqlError } from '@libsql/client';
import type { BooleanColumnInput, ColumnsConfig, DBConfigInput, DateColumnInput, JsonColumnInput, NumberColumnOpts, TableConfig, TextColumnOpts } from '../core/types.js';
export declare function isDbError(err: unknown): err is LibsqlError;
export declare const column: {
    number: <T extends NumberColumnOpts>(opts?: T) => {
        type: "number";
        /**
         * @internal
         */
        schema: T;
    };
    boolean: <T extends BooleanColumnInput["schema"]>(opts?: T) => {
        type: "boolean";
        /**
         * @internal
         */
        schema: T;
    };
    text: <T extends TextColumnOpts>(opts?: T) => {
        type: "text";
        /**
         * @internal
         */
        schema: T;
    };
    date<T extends DateColumnInput["schema"]>(opts?: T): {
        type: "date";
        /**
         * @internal
         */
        schema: T;
    };
    json<T extends JsonColumnInput["schema"]>(opts?: T): {
        type: "json";
        /**
         * @internal
         */
        schema: T;
    };
};
export declare function defineTable<TColumns extends ColumnsConfig>(userConfig: TableConfig<TColumns>): TableConfig<TColumns>;
export declare function defineDb(userConfig: DBConfigInput): {
    tables?: unknown;
};
export declare const NOW: import("drizzle-orm").SQL<unknown>;
export declare const TRUE: import("drizzle-orm").SQL<unknown>;
export declare const FALSE: import("drizzle-orm").SQL<unknown>;
export { sql, eq, gt, gte, lt, lte, ne, isNull, isNotNull, inArray, notInArray, exists, notExists, between, notBetween, like, notIlike, not, asc, desc, and, or, count, countDistinct, avg, avgDistinct, sum, sumDistinct, max, min, } from 'drizzle-orm';
export { alias } from 'drizzle-orm/sqlite-core';
