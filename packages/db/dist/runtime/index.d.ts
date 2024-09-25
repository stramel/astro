import { type ColumnDataType } from 'drizzle-orm';
import type { LibSQLDatabase } from 'drizzle-orm/libsql';
import type { DBColumn, DBTable } from '../core/types.js';
export type Database = Omit<LibSQLDatabase, 'transaction'>;
export type { Table } from './types.js';
export { createRemoteDatabaseClient, createLocalDatabaseClient } from './db-client.js';
export declare function hasPrimaryKey(column: DBColumn): boolean;
export declare function asDrizzleTable(name: string, table: DBTable): import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: string;
    schema: undefined;
    columns: {
        [x: string]: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: string;
            tableName: string;
            dataType: ColumnDataType;
            columnType: string;
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: string[] | undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "sqlite";
}>;
export declare function normalizeDatabaseUrl(envDbUrl: string | undefined, defaultDbUrl: string): string;
