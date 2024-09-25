import { SQL } from 'drizzle-orm';
import { type ZodTypeDef, z } from 'zod';
import { type SerializedSQL } from '../runtime/types.js';
import type { NumberColumn, TextColumn } from './types.js';
export type MaybeArray<T> = T | T[];
export declare const booleanColumnSchema: z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    };
}, {
    type: "boolean";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    };
}>;
declare const numberColumnBaseSchema: z.ZodIntersection<z.ZodObject<Omit<{
    label: z.ZodOptional<z.ZodString>;
    optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodString>;
    collection: z.ZodOptional<z.ZodString>;
}, "optional">, "strip", z.ZodTypeAny, {
    unique: boolean;
    deprecated: boolean;
    name?: string | undefined;
    label?: string | undefined;
    collection?: string | undefined;
}, {
    name?: string | undefined;
    label?: string | undefined;
    unique?: boolean | undefined;
    deprecated?: boolean | undefined;
    collection?: string | undefined;
}>, z.ZodUnion<[z.ZodObject<{
    primaryKey: z.ZodDefault<z.ZodOptional<z.ZodLiteral<false>>>;
    optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    default: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
}, "strip", z.ZodTypeAny, {
    optional: boolean;
    primaryKey: false;
    default?: number | SerializedSQL | undefined;
}, {
    optional?: boolean | undefined;
    default?: number | SQL<any> | undefined;
    primaryKey?: false | undefined;
}>, z.ZodObject<{
    primaryKey: z.ZodLiteral<true>;
    optional: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodLiteral<undefined>>;
}, "strip", z.ZodTypeAny, {
    primaryKey: true;
    optional?: false | undefined;
    default?: undefined;
}, {
    primaryKey: true;
    optional?: false | undefined;
    default?: undefined;
}>]>>;
export declare const numberColumnOptsSchema: z.ZodType<z.infer<typeof numberColumnBaseSchema> & {
    references?: NumberColumn;
}, ZodTypeDef, z.input<typeof numberColumnBaseSchema> & {
    references?: () => z.input<typeof numberColumnSchema>;
}>;
export declare const numberColumnSchema: z.ZodObject<{
    type: z.ZodLiteral<"number">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    };
}, {
    type: "number";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    };
}>;
declare const textColumnBaseSchema: z.ZodIntersection<z.ZodObject<z.objectUtil.extendShape<Omit<{
    label: z.ZodOptional<z.ZodString>;
    optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodString>;
    collection: z.ZodOptional<z.ZodString>;
}, "optional">, {
    default: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
    multiline: z.ZodOptional<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    unique: boolean;
    deprecated: boolean;
    name?: string | undefined;
    label?: string | undefined;
    collection?: string | undefined;
    default?: string | SerializedSQL | undefined;
    multiline?: boolean | undefined;
}, {
    name?: string | undefined;
    label?: string | undefined;
    unique?: boolean | undefined;
    deprecated?: boolean | undefined;
    collection?: string | undefined;
    default?: string | SQL<any> | undefined;
    multiline?: boolean | undefined;
}>, z.ZodUnion<[z.ZodObject<{
    primaryKey: z.ZodDefault<z.ZodOptional<z.ZodLiteral<false>>>;
    optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    optional: boolean;
    primaryKey: false;
}, {
    optional?: boolean | undefined;
    primaryKey?: false | undefined;
}>, z.ZodObject<{
    primaryKey: z.ZodLiteral<true>;
    optional: z.ZodOptional<z.ZodLiteral<false>>;
}, "strip", z.ZodTypeAny, {
    primaryKey: true;
    optional?: false | undefined;
}, {
    primaryKey: true;
    optional?: false | undefined;
}>]>>;
export declare const textColumnOptsSchema: z.ZodType<z.infer<typeof textColumnBaseSchema> & {
    references?: TextColumn;
}, ZodTypeDef, z.input<typeof textColumnBaseSchema> & {
    references?: () => z.input<typeof textColumnSchema>;
}>;
export declare const textColumnSchema: z.ZodObject<{
    type: z.ZodLiteral<"text">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    };
}, {
    type: "text";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    };
}>;
export declare const dateColumnSchema: z.ZodObject<{
    type: z.ZodLiteral<"date">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "date";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    };
}, {
    type: "date";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    };
}>;
export declare const jsonColumnSchema: z.ZodObject<{
    type: z.ZodLiteral<"json">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "json";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}, {
    type: "json";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}>;
export declare const columnSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    };
}, {
    type: "boolean";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"number">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    };
}, {
    type: "number";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"text">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    };
}, {
    type: "text";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"date">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "date";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    };
}, {
    type: "date";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"json">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "json";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}, {
    type: "json";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}>]>;
export declare const referenceableColumnSchema: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"text">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    };
}, {
    type: "text";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"number">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    };
}, {
    type: "number";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    };
}>]>;
export declare const columnsSchema: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: boolean | SerializedSQL | undefined;
    };
}, {
    type: "boolean";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: boolean | SQL<any> | undefined;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"number">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
        default?: number | SerializedSQL | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: NumberColumn;
    };
}, {
    type: "number";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
    } & ({
        optional?: boolean | undefined;
        default?: number | SQL<any> | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
        default?: undefined;
    })) & {
        references?: () => z.input<typeof numberColumnSchema>;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"text">;
    schema: z.ZodType<({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    }, ZodTypeDef, ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    schema: ({
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional: boolean;
        primaryKey: false;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: TextColumn;
    };
}, {
    type: "text";
    schema: ({
        name?: string | undefined;
        label?: string | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: string | SQL<any> | undefined;
        multiline?: boolean | undefined;
    } & ({
        optional?: boolean | undefined;
        primaryKey?: false | undefined;
    } | {
        primaryKey: true;
        optional?: false | undefined;
    })) & {
        references?: () => z.input<typeof textColumnSchema>;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"date">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "date";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: string | SerializedSQL | undefined;
    };
}, {
    type: "date";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: Date | SQL<any> | undefined;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"json">;
    schema: z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodOptional<z.ZodString>;
        optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
        collection: z.ZodOptional<z.ZodString>;
    }, {
        default: z.ZodOptional<z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    }, {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "json";
    schema: {
        optional: boolean;
        unique: boolean;
        deprecated: boolean;
        name?: string | undefined;
        label?: string | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}, {
    type: "json";
    schema: {
        name?: string | undefined;
        label?: string | undefined;
        optional?: boolean | undefined;
        unique?: boolean | undefined;
        deprecated?: boolean | undefined;
        collection?: string | undefined;
        default?: unknown;
    };
}>]>>;
type ForeignKeysInput = {
    columns: MaybeArray<string>;
    references: () => MaybeArray<Omit<z.input<typeof referenceableColumnSchema>, 'references'>>;
};
type ForeignKeysOutput = Omit<ForeignKeysInput, 'references'> & {
    references: MaybeArray<Omit<z.output<typeof referenceableColumnSchema>, 'references'>>;
};
export declare const resolvedIndexSchema: z.ZodObject<{
    on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    unique: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    on: string | string[];
    unique?: boolean | undefined;
}, {
    on: string | string[];
    unique?: boolean | undefined;
}>;
export declare const indexSchema: z.ZodObject<{
    on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    unique: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    on: string | string[];
    name?: string | undefined;
    unique?: boolean | undefined;
}, {
    on: string | string[];
    name?: string | undefined;
    unique?: boolean | undefined;
}>;
export declare const tableSchema: z.ZodObject<{
    columns: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        };
    }, {
        type: "boolean";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"number">;
        schema: z.ZodType<({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        }, ZodTypeDef, ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        };
    }, {
        type: "number";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        schema: z.ZodType<({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        }, ZodTypeDef, ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        };
    }, {
        type: "text";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"date">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "date";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        };
    }, {
        type: "date";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"json">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnknown>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "json";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }, {
        type: "json";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>]>>;
    indexes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
        on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        unique: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }, {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }>, "many">, z.ZodRecord<z.ZodString, z.ZodObject<{
        on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        unique: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        on: string | string[];
        unique?: boolean | undefined;
    }, {
        on: string | string[];
        unique?: boolean | undefined;
    }>>]>>;
    foreignKeys: z.ZodOptional<z.ZodArray<z.ZodType<ForeignKeysOutput, ZodTypeDef, ForeignKeysInput>, "many">>;
    deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    deprecated: boolean;
    columns: Record<string, {
        type: "boolean";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        };
    } | {
        type: "number";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        };
    } | {
        type: "text";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        };
    } | {
        type: "date";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        };
    } | {
        type: "json";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>;
    indexes?: {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }[] | Record<string, {
        on: string | string[];
        unique?: boolean | undefined;
    }> | undefined;
    foreignKeys?: ForeignKeysOutput[] | undefined;
}, {
    columns: Record<string, {
        type: "boolean";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        };
    } | {
        type: "number";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        };
    } | {
        type: "text";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        };
    } | {
        type: "date";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        };
    } | {
        type: "json";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>;
    deprecated?: boolean | undefined;
    indexes?: {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }[] | Record<string, {
        on: string | string[];
        unique?: boolean | undefined;
    }> | undefined;
    foreignKeys?: ForeignKeysInput[] | undefined;
}>;
export declare const tablesSchema: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodObject<{
    columns: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        };
    }, {
        type: "boolean";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"number">;
        schema: z.ZodType<({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        }, ZodTypeDef, ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        };
    }, {
        type: "number";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        schema: z.ZodType<({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        }, ZodTypeDef, ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        };
    }, {
        type: "text";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"date">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "date";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        };
    }, {
        type: "date";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"json">;
        schema: z.ZodObject<z.objectUtil.extendShape<{
            label: z.ZodOptional<z.ZodString>;
            optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodString>;
            collection: z.ZodOptional<z.ZodString>;
        }, {
            default: z.ZodOptional<z.ZodUnknown>;
        }>, "strip", z.ZodTypeAny, {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        }, {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "json";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }, {
        type: "json";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>]>>;
    indexes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
        on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        unique: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }, {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }>, "many">, z.ZodRecord<z.ZodString, z.ZodObject<{
        on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        unique: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        on: string | string[];
        unique?: boolean | undefined;
    }, {
        on: string | string[];
        unique?: boolean | undefined;
    }>>]>>;
    foreignKeys: z.ZodOptional<z.ZodArray<z.ZodType<ForeignKeysOutput, ZodTypeDef, ForeignKeysInput>, "many">>;
    deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    deprecated: boolean;
    columns: Record<string, {
        type: "boolean";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        };
    } | {
        type: "number";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        };
    } | {
        type: "text";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        };
    } | {
        type: "date";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        };
    } | {
        type: "json";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>;
    indexes?: {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }[] | Record<string, {
        on: string | string[];
        unique?: boolean | undefined;
    }> | undefined;
    foreignKeys?: ForeignKeysOutput[] | undefined;
}, {
    columns: Record<string, {
        type: "boolean";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: boolean | SQL<any> | undefined;
        };
    } | {
        type: "number";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
        } & ({
            optional?: boolean | undefined;
            default?: number | SQL<any> | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: () => z.input<typeof numberColumnSchema>;
        };
    } | {
        type: "text";
        schema: ({
            name?: string | undefined;
            label?: string | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: string | SQL<any> | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional?: boolean | undefined;
            primaryKey?: false | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: () => z.input<typeof textColumnSchema>;
        };
    } | {
        type: "date";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: Date | SQL<any> | undefined;
        };
    } | {
        type: "json";
        schema: {
            name?: string | undefined;
            label?: string | undefined;
            optional?: boolean | undefined;
            unique?: boolean | undefined;
            deprecated?: boolean | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>;
    deprecated?: boolean | undefined;
    indexes?: {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }[] | Record<string, {
        on: string | string[];
        unique?: boolean | undefined;
    }> | undefined;
    foreignKeys?: ForeignKeysInput[] | undefined;
}>>, Record<string, {
    deprecated: boolean;
    columns: Record<string, {
        type: "boolean";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: boolean | SerializedSQL | undefined;
        };
    } | {
        type: "number";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
            default?: number | SerializedSQL | undefined;
        } | {
            primaryKey: true;
            optional?: false | undefined;
            default?: undefined;
        })) & {
            references?: NumberColumn;
        };
    } | {
        type: "text";
        schema: ({
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
            multiline?: boolean | undefined;
        } & ({
            optional: boolean;
            primaryKey: false;
        } | {
            primaryKey: true;
            optional?: false | undefined;
        })) & {
            references?: TextColumn;
        };
    } | {
        type: "date";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: string | SerializedSQL | undefined;
        };
    } | {
        type: "json";
        schema: {
            optional: boolean;
            unique: boolean;
            deprecated: boolean;
            name?: string | undefined;
            label?: string | undefined;
            collection?: string | undefined;
            default?: unknown;
        };
    }>;
    indexes?: {
        on: string | string[];
        name?: string | undefined;
        unique?: boolean | undefined;
    }[] | Record<string, {
        on: string | string[];
        unique?: boolean | undefined;
    }> | undefined;
    foreignKeys?: ForeignKeysOutput[] | undefined;
}>, unknown>;
export declare const dbConfigSchema: z.ZodEffects<z.ZodObject<{
    tables: z.ZodOptional<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodObject<{
        columns: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            schema: z.ZodObject<z.objectUtil.extendShape<{
                label: z.ZodOptional<z.ZodString>;
                optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                name: z.ZodOptional<z.ZodString>;
                collection: z.ZodOptional<z.ZodString>;
            }, {
                default: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>]>>;
            }>, "strip", z.ZodTypeAny, {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            }, {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: boolean | SQL<any> | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            };
        }, {
            type: "boolean";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: boolean | SQL<any> | undefined;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"number">;
            schema: z.ZodType<({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            }, ZodTypeDef, ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
            } & ({
                optional?: boolean | undefined;
                default?: number | SQL<any> | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: () => z.input<typeof numberColumnSchema>;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "number";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            };
        }, {
            type: "number";
            schema: ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
            } & ({
                optional?: boolean | undefined;
                default?: number | SQL<any> | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: () => z.input<typeof numberColumnSchema>;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            schema: z.ZodType<({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            }, ZodTypeDef, ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: string | SQL<any> | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional?: boolean | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: () => z.input<typeof textColumnSchema>;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "text";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            };
        }, {
            type: "text";
            schema: ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: string | SQL<any> | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional?: boolean | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: () => z.input<typeof textColumnSchema>;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"date">;
            schema: z.ZodObject<z.objectUtil.extendShape<{
                label: z.ZodOptional<z.ZodString>;
                optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                name: z.ZodOptional<z.ZodString>;
                collection: z.ZodOptional<z.ZodString>;
            }, {
                default: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodType<SQL<any>, ZodTypeDef, SQL<any>>, SerializedSQL, SQL<any>>, z.ZodEffects<z.ZodDate, string, Date>]>>;
            }>, "strip", z.ZodTypeAny, {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            }, {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: Date | SQL<any> | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "date";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            };
        }, {
            type: "date";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: Date | SQL<any> | undefined;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"json">;
            schema: z.ZodObject<z.objectUtil.extendShape<{
                label: z.ZodOptional<z.ZodString>;
                optional: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                unique: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                name: z.ZodOptional<z.ZodString>;
                collection: z.ZodOptional<z.ZodString>;
            }, {
                default: z.ZodOptional<z.ZodUnknown>;
            }>, "strip", z.ZodTypeAny, {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            }, {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: unknown;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "json";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }, {
            type: "json";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>]>>;
        indexes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
            on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            unique: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }, {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }>, "many">, z.ZodRecord<z.ZodString, z.ZodObject<{
            on: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            unique: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            on: string | string[];
            unique?: boolean | undefined;
        }, {
            on: string | string[];
            unique?: boolean | undefined;
        }>>]>>;
        foreignKeys: z.ZodOptional<z.ZodArray<z.ZodType<ForeignKeysOutput, ZodTypeDef, ForeignKeysInput>, "many">>;
        deprecated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        deprecated: boolean;
        columns: Record<string, {
            type: "boolean";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            };
        } | {
            type: "number";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            };
        } | {
            type: "text";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            };
        } | {
            type: "date";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            };
        } | {
            type: "json";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>;
        indexes?: {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }[] | Record<string, {
            on: string | string[];
            unique?: boolean | undefined;
        }> | undefined;
        foreignKeys?: ForeignKeysOutput[] | undefined;
    }, {
        columns: Record<string, {
            type: "boolean";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: boolean | SQL<any> | undefined;
            };
        } | {
            type: "number";
            schema: ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
            } & ({
                optional?: boolean | undefined;
                default?: number | SQL<any> | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: () => z.input<typeof numberColumnSchema>;
            };
        } | {
            type: "text";
            schema: ({
                name?: string | undefined;
                label?: string | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: string | SQL<any> | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional?: boolean | undefined;
                primaryKey?: false | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: () => z.input<typeof textColumnSchema>;
            };
        } | {
            type: "date";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: Date | SQL<any> | undefined;
            };
        } | {
            type: "json";
            schema: {
                name?: string | undefined;
                label?: string | undefined;
                optional?: boolean | undefined;
                unique?: boolean | undefined;
                deprecated?: boolean | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>;
        deprecated?: boolean | undefined;
        indexes?: {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }[] | Record<string, {
            on: string | string[];
            unique?: boolean | undefined;
        }> | undefined;
        foreignKeys?: ForeignKeysInput[] | undefined;
    }>>, Record<string, {
        deprecated: boolean;
        columns: Record<string, {
            type: "boolean";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            };
        } | {
            type: "number";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            };
        } | {
            type: "text";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            };
        } | {
            type: "date";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            };
        } | {
            type: "json";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>;
        indexes?: {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }[] | Record<string, {
            on: string | string[];
            unique?: boolean | undefined;
        }> | undefined;
        foreignKeys?: ForeignKeysOutput[] | undefined;
    }>, unknown>>;
}, "strip", z.ZodTypeAny, {
    tables?: Record<string, {
        deprecated: boolean;
        columns: Record<string, {
            type: "boolean";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            };
        } | {
            type: "number";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            };
        } | {
            type: "text";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            };
        } | {
            type: "date";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            };
        } | {
            type: "json";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>;
        indexes?: {
            on: string | string[];
            name?: string | undefined;
            unique?: boolean | undefined;
        }[] | Record<string, {
            on: string | string[];
            unique?: boolean | undefined;
        }> | undefined;
        foreignKeys?: ForeignKeysOutput[] | undefined;
    }> | undefined;
}, {
    tables?: unknown;
}>, {
    tables: Record<string, {
        indexes: Record<string, {
            on: string | string[];
            unique?: boolean | undefined;
        }>;
        deprecated: boolean;
        columns: Record<string, {
            type: "boolean";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: boolean | SerializedSQL | undefined;
            };
        } | {
            type: "number";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
                default?: number | SerializedSQL | undefined;
            } | {
                primaryKey: true;
                optional?: false | undefined;
                default?: undefined;
            })) & {
                references?: NumberColumn;
            };
        } | {
            type: "text";
            schema: ({
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
                multiline?: boolean | undefined;
            } & ({
                optional: boolean;
                primaryKey: false;
            } | {
                primaryKey: true;
                optional?: false | undefined;
            })) & {
                references?: TextColumn;
            };
        } | {
            type: "date";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: string | SerializedSQL | undefined;
            };
        } | {
            type: "json";
            schema: {
                optional: boolean;
                unique: boolean;
                deprecated: boolean;
                name?: string | undefined;
                label?: string | undefined;
                collection?: string | undefined;
                default?: unknown;
            };
        }>;
        foreignKeys?: ForeignKeysOutput[] | undefined;
    }>;
}, {
    tables?: unknown;
}>;
export {};
