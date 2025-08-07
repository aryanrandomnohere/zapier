/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Zap
 *
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>;
/**
 * Model Folder
 *
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>;
/**
 * Model Record
 *
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>;
/**
 * Model Trigger
 *
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>;
/**
 * Model UserConnection
 *
 */
export type UserConnection =
  $Result.DefaultSelection<Prisma.$UserConnectionPayload>;
/**
 * Model AvailableTriggers
 *
 */
export type AvailableTriggers =
  $Result.DefaultSelection<Prisma.$AvailableTriggersPayload>;
/**
 * Model Action
 *
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>;
/**
 * Model AvailableActions
 *
 */
export type AvailableActions =
  $Result.DefaultSelection<Prisma.$AvailableActionsPayload>;
/**
 * Model ZapRun
 *
 */
export type ZapRun = $Result.DefaultSelection<Prisma.$ZapRunPayload>;
/**
 * Model ZapRunOutbox
 *
 */
export type ZapRunOutbox =
  $Result.DefaultSelection<Prisma.$ZapRunOutboxPayload>;
/**
 * Model ZapChangeHistory
 *
 */
export type ZapChangeHistory =
  $Result.DefaultSelection<Prisma.$ZapChangeHistoryPayload>;
/**
 * Model ZapNote
 *
 */
export type ZapNote = $Result.DefaultSelection<Prisma.$ZapNotePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ZapRunStatus: {
    PENDING: "PENDING";
    RUNNING: "RUNNING";
    SUCCESS: "SUCCESS";
    FAILED: "FAILED";
  };

  export type ZapRunStatus = (typeof ZapRunStatus)[keyof typeof ZapRunStatus];

  export const ZapNoteType: {
    ZAP_NOTE: "ZAP_NOTE";
    STEP_NOTE: "STEP_NOTE";
  };

  export type ZapNoteType = (typeof ZapNoteType)[keyof typeof ZapNoteType];

  export const ZapHistoryType: {
    ZAP_CREATED: "ZAP_CREATED";
    ZAP_TURNED_OFF: "ZAP_TURNED_OFF";
    ZAP_DELETED: "ZAP_DELETED";
    OWNER_CHANGED: "OWNER_CHANGED";
    ZAP_RESTORED: "ZAP_RESTORED";
    ZAP_TURNED_ON: "ZAP_TURNED_ON";
    VERSION_PUBLISHED: "VERSION_PUBLISHED";
    APPROVAL_REQUEST_SENT: "APPROVAL_REQUEST_SENT";
    APPROVAL_REQUEST_APPROVED: "APPROVAL_REQUEST_APPROVED";
    APPROVAL_REQUEST_DENIED: "APPROVAL_REQUEST_DENIED";
    APPROVAL_REQUEST_CANCELLED: "APPROVAL_REQUEST_CANCELLED";
  };

  export type ZapHistoryType =
    (typeof ZapHistoryType)[keyof typeof ZapHistoryType];
}

export type ZapRunStatus = $Enums.ZapRunStatus;

export const ZapRunStatus: typeof $Enums.ZapRunStatus;

export type ZapNoteType = $Enums.ZapNoteType;

export const ZapNoteType: typeof $Enums.ZapNoteType;

export type ZapHistoryType = $Enums.ZapHistoryType;

export const ZapHistoryType: typeof $Enums.ZapHistoryType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Zaps
   * const zaps = await prisma.zap.findMany()
   * ```
   */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Folders
   * const folders = await prisma.folder.findMany()
   * ```
   */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Records
   * const records = await prisma.record.findMany()
   * ```
   */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Triggers
   * const triggers = await prisma.trigger.findMany()
   * ```
   */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userConnection`: Exposes CRUD operations for the **UserConnection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserConnections
   * const userConnections = await prisma.userConnection.findMany()
   * ```
   */
  get userConnection(): Prisma.UserConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTriggers`: Exposes CRUD operations for the **AvailableTriggers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AvailableTriggers
   * const availableTriggers = await prisma.availableTriggers.findMany()
   * ```
   */
  get availableTriggers(): Prisma.AvailableTriggersDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Actions
   * const actions = await prisma.action.findMany()
   * ```
   */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableActions`: Exposes CRUD operations for the **AvailableActions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AvailableActions
   * const availableActions = await prisma.availableActions.findMany()
   * ```
   */
  get availableActions(): Prisma.AvailableActionsDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.zapRun`: Exposes CRUD operations for the **ZapRun** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ZapRuns
   * const zapRuns = await prisma.zapRun.findMany()
   * ```
   */
  get zapRun(): Prisma.ZapRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunOutbox`: Exposes CRUD operations for the **ZapRunOutbox** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ZapRunOutboxes
   * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
   * ```
   */
  get zapRunOutbox(): Prisma.ZapRunOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapChangeHistory`: Exposes CRUD operations for the **ZapChangeHistory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ZapChangeHistories
   * const zapChangeHistories = await prisma.zapChangeHistory.findMany()
   * ```
   */
  get zapChangeHistory(): Prisma.ZapChangeHistoryDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.zapNote`: Exposes CRUD operations for the **ZapNote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ZapNotes
   * const zapNotes = await prisma.zapNote.findMany()
   * ```
   */
  get zapNote(): Prisma.ZapNoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Zap: "Zap";
    Folder: "Folder";
    Record: "Record";
    Trigger: "Trigger";
    UserConnection: "UserConnection";
    AvailableTriggers: "AvailableTriggers";
    Action: "Action";
    AvailableActions: "AvailableActions";
    ZapRun: "ZapRun";
    ZapRunOutbox: "ZapRunOutbox";
    ZapChangeHistory: "ZapChangeHistory";
    ZapNote: "ZapNote";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "zap"
        | "folder"
        | "record"
        | "trigger"
        | "userConnection"
        | "availableTriggers"
        | "action"
        | "availableActions"
        | "zapRun"
        | "zapRunOutbox"
        | "zapChangeHistory"
        | "zapNote";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>;
        fields: Prisma.ZapFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[];
          };
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[];
          };
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>;
          };
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateZap>;
          };
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ZapGroupByOutputType>[];
          };
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>;
            result: $Utils.Optional<ZapCountAggregateOutputType> | number;
          };
        };
      };
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>;
        fields: Prisma.FolderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[];
          };
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[];
          };
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFolder>;
          };
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FolderGroupByOutputType>[];
          };
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>;
            result: $Utils.Optional<FolderCountAggregateOutputType> | number;
          };
        };
      };
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>;
        fields: Prisma.RecordFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[];
          };
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[];
          };
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>;
          };
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecord>;
          };
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecordGroupByOutputType>[];
          };
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>;
            result: $Utils.Optional<RecordCountAggregateOutputType> | number;
          };
        };
      };
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>;
        fields: Prisma.TriggerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[];
          };
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[];
          };
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>;
          };
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrigger>;
          };
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TriggerGroupByOutputType>[];
          };
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>;
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number;
          };
        };
      };
      UserConnection: {
        payload: Prisma.$UserConnectionPayload<ExtArgs>;
        fields: Prisma.UserConnectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserConnectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserConnectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          findFirst: {
            args: Prisma.UserConnectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserConnectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          findMany: {
            args: Prisma.UserConnectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>[];
          };
          create: {
            args: Prisma.UserConnectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          createMany: {
            args: Prisma.UserConnectionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserConnectionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>[];
          };
          delete: {
            args: Prisma.UserConnectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          update: {
            args: Prisma.UserConnectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          deleteMany: {
            args: Prisma.UserConnectionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserConnectionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserConnectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserConnectionPayload>;
          };
          aggregate: {
            args: Prisma.UserConnectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserConnection>;
          };
          groupBy: {
            args: Prisma.UserConnectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserConnectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserConnectionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserConnectionCountAggregateOutputType>
              | number;
          };
        };
      };
      AvailableTriggers: {
        payload: Prisma.$AvailableTriggersPayload<ExtArgs>;
        fields: Prisma.AvailableTriggersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          findFirst: {
            args: Prisma.AvailableTriggersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AvailableTriggersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          findMany: {
            args: Prisma.AvailableTriggersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[];
          };
          create: {
            args: Prisma.AvailableTriggersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          createMany: {
            args: Prisma.AvailableTriggersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AvailableTriggersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[];
          };
          delete: {
            args: Prisma.AvailableTriggersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          update: {
            args: Prisma.AvailableTriggersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          deleteMany: {
            args: Prisma.AvailableTriggersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AvailableTriggersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AvailableTriggersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>;
          };
          aggregate: {
            args: Prisma.AvailableTriggersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAvailableTriggers>;
          };
          groupBy: {
            args: Prisma.AvailableTriggersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AvailableTriggersGroupByOutputType>[];
          };
          count: {
            args: Prisma.AvailableTriggersCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AvailableTriggersCountAggregateOutputType>
              | number;
          };
        };
      };
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>;
        fields: Prisma.ActionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[];
          };
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[];
          };
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>;
          };
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAction>;
          };
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ActionGroupByOutputType>[];
          };
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>;
            result: $Utils.Optional<ActionCountAggregateOutputType> | number;
          };
        };
      };
      AvailableActions: {
        payload: Prisma.$AvailableActionsPayload<ExtArgs>;
        fields: Prisma.AvailableActionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AvailableActionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AvailableActionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          findFirst: {
            args: Prisma.AvailableActionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AvailableActionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          findMany: {
            args: Prisma.AvailableActionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[];
          };
          create: {
            args: Prisma.AvailableActionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          createMany: {
            args: Prisma.AvailableActionsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AvailableActionsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[];
          };
          delete: {
            args: Prisma.AvailableActionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          update: {
            args: Prisma.AvailableActionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          deleteMany: {
            args: Prisma.AvailableActionsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AvailableActionsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AvailableActionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>;
          };
          aggregate: {
            args: Prisma.AvailableActionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAvailableActions>;
          };
          groupBy: {
            args: Prisma.AvailableActionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AvailableActionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.AvailableActionsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AvailableActionsCountAggregateOutputType>
              | number;
          };
        };
      };
      ZapRun: {
        payload: Prisma.$ZapRunPayload<ExtArgs>;
        fields: Prisma.ZapRunFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ZapRunFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ZapRunFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          findFirst: {
            args: Prisma.ZapRunFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ZapRunFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          findMany: {
            args: Prisma.ZapRunFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[];
          };
          create: {
            args: Prisma.ZapRunCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          createMany: {
            args: Prisma.ZapRunCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ZapRunCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[];
          };
          delete: {
            args: Prisma.ZapRunDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          update: {
            args: Prisma.ZapRunUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          deleteMany: {
            args: Prisma.ZapRunDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ZapRunUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ZapRunUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>;
          };
          aggregate: {
            args: Prisma.ZapRunAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateZapRun>;
          };
          groupBy: {
            args: Prisma.ZapRunGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ZapRunGroupByOutputType>[];
          };
          count: {
            args: Prisma.ZapRunCountArgs<ExtArgs>;
            result: $Utils.Optional<ZapRunCountAggregateOutputType> | number;
          };
        };
      };
      ZapRunOutbox: {
        payload: Prisma.$ZapRunOutboxPayload<ExtArgs>;
        fields: Prisma.ZapRunOutboxFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ZapRunOutboxFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          findFirst: {
            args: Prisma.ZapRunOutboxFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          findMany: {
            args: Prisma.ZapRunOutboxFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[];
          };
          create: {
            args: Prisma.ZapRunOutboxCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          createMany: {
            args: Prisma.ZapRunOutboxCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[];
          };
          delete: {
            args: Prisma.ZapRunOutboxDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          update: {
            args: Prisma.ZapRunOutboxUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          deleteMany: {
            args: Prisma.ZapRunOutboxDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ZapRunOutboxUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ZapRunOutboxUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>;
          };
          aggregate: {
            args: Prisma.ZapRunOutboxAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateZapRunOutbox>;
          };
          groupBy: {
            args: Prisma.ZapRunOutboxGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ZapRunOutboxGroupByOutputType>[];
          };
          count: {
            args: Prisma.ZapRunOutboxCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ZapRunOutboxCountAggregateOutputType>
              | number;
          };
        };
      };
      ZapChangeHistory: {
        payload: Prisma.$ZapChangeHistoryPayload<ExtArgs>;
        fields: Prisma.ZapChangeHistoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ZapChangeHistoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ZapChangeHistoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          findFirst: {
            args: Prisma.ZapChangeHistoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ZapChangeHistoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          findMany: {
            args: Prisma.ZapChangeHistoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>[];
          };
          create: {
            args: Prisma.ZapChangeHistoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          createMany: {
            args: Prisma.ZapChangeHistoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ZapChangeHistoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>[];
          };
          delete: {
            args: Prisma.ZapChangeHistoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          update: {
            args: Prisma.ZapChangeHistoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          deleteMany: {
            args: Prisma.ZapChangeHistoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ZapChangeHistoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ZapChangeHistoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapChangeHistoryPayload>;
          };
          aggregate: {
            args: Prisma.ZapChangeHistoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateZapChangeHistory>;
          };
          groupBy: {
            args: Prisma.ZapChangeHistoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ZapChangeHistoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.ZapChangeHistoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ZapChangeHistoryCountAggregateOutputType>
              | number;
          };
        };
      };
      ZapNote: {
        payload: Prisma.$ZapNotePayload<ExtArgs>;
        fields: Prisma.ZapNoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ZapNoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ZapNoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          findFirst: {
            args: Prisma.ZapNoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ZapNoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          findMany: {
            args: Prisma.ZapNoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>[];
          };
          create: {
            args: Prisma.ZapNoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          createMany: {
            args: Prisma.ZapNoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ZapNoteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>[];
          };
          delete: {
            args: Prisma.ZapNoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          update: {
            args: Prisma.ZapNoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          deleteMany: {
            args: Prisma.ZapNoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ZapNoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ZapNoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ZapNotePayload>;
          };
          aggregate: {
            args: Prisma.ZapNoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateZapNote>;
          };
          groupBy: {
            args: Prisma.ZapNoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ZapNoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.ZapNoteCountArgs<ExtArgs>;
            result: $Utils.Optional<ZapNoteCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    zap?: ZapOmit;
    folder?: FolderOmit;
    record?: RecordOmit;
    trigger?: TriggerOmit;
    userConnection?: UserConnectionOmit;
    availableTriggers?: AvailableTriggersOmit;
    action?: ActionOmit;
    availableActions?: AvailableActionsOmit;
    zapRun?: ZapRunOmit;
    zapRunOutbox?: ZapRunOutboxOmit;
    zapChangeHistory?: ZapChangeHistoryOmit;
    zapNote?: ZapNoteOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    zap: number;
    connections: number;
    changeHistory: number;
    notes: number;
    Folder: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | UserCountOutputTypeCountZapArgs;
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs;
    changeHistory?: boolean | UserCountOutputTypeCountChangeHistoryArgs;
    notes?: boolean | UserCountOutputTypeCountNotesArgs;
    Folder?: boolean | UserCountOutputTypeCountFolderArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZapArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserConnectionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChangeHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapChangeHistoryWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapNoteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFolderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FolderWhereInput;
  };

  /**
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    actions: number;
    zapRuns: number;
    records: number;
    changeHistory: number;
    notes: number;
  };

  export type ZapCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    actions?: boolean | ZapCountOutputTypeCountActionsArgs;
    zapRuns?: boolean | ZapCountOutputTypeCountZapRunsArgs;
    records?: boolean | ZapCountOutputTypeCountRecordsArgs;
    changeHistory?: boolean | ZapCountOutputTypeCountChangeHistoryArgs;
    notes?: boolean | ZapCountOutputTypeCountNotesArgs;
  };

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionWhereInput;
  };

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZapRunsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapRunWhereInput;
  };

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountRecordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecordWhereInput;
  };

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountChangeHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapChangeHistoryWhereInput;
  };

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapNoteWhereInput;
  };

  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    children: number;
    zaps: number;
  };

  export type FolderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    children?: boolean | FolderCountOutputTypeCountChildrenArgs;
    zaps?: boolean | FolderCountOutputTypeCountZapsArgs;
  };

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountChildrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FolderWhereInput;
  };

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountZapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapWhereInput;
  };

  /**
   * Count Type UserConnectionCountOutputType
   */

  export type UserConnectionCountOutputType = {
    trigger: number;
    action: number;
  };

  export type UserConnectionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    trigger?: boolean | UserConnectionCountOutputTypeCountTriggerArgs;
    action?: boolean | UserConnectionCountOutputTypeCountActionArgs;
  };

  // Custom InputTypes
  /**
   * UserConnectionCountOutputType without action
   */
  export type UserConnectionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnectionCountOutputType
     */
    select?: UserConnectionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserConnectionCountOutputType without action
   */
  export type UserConnectionCountOutputTypeCountTriggerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TriggerWhereInput;
  };

  /**
   * UserConnectionCountOutputType without action
   */
  export type UserConnectionCountOutputTypeCountActionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionWhereInput;
  };

  /**
   * Count Type AvailableTriggersCountOutputType
   */

  export type AvailableTriggersCountOutputType = {
    triggers: number;
  };

  export type AvailableTriggersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    triggers?: boolean | AvailableTriggersCountOutputTypeCountTriggersArgs;
  };

  // Custom InputTypes
  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggersCountOutputType
     */
    select?: AvailableTriggersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeCountTriggersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TriggerWhereInput;
  };

  /**
   * Count Type ActionCountOutputType
   */

  export type ActionCountOutputType = {
    zapRunFailures: number;
  };

  export type ActionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zapRunFailures?: boolean | ActionCountOutputTypeCountZapRunFailuresArgs;
  };

  // Custom InputTypes
  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionCountOutputType
     */
    select?: ActionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeCountZapRunFailuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapRunWhereInput;
  };

  /**
   * Count Type AvailableActionsCountOutputType
   */

  export type AvailableActionsCountOutputType = {
    actions: number;
  };

  export type AvailableActionsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    actions?: boolean | AvailableActionsCountOutputTypeCountActionsArgs;
  };

  // Custom InputTypes
  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActionsCountOutputType
     */
    select?: AvailableActionsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeCountActionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    zapmail: string | null;
    type: string | null;
    verified: boolean | null;
    password: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    zapmail: string | null;
    type: string | null;
    verified: boolean | null;
    password: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    firstname: number;
    lastname: number;
    email: number;
    zapmail: number;
    type: number;
    verified: number;
    password: number;
    imageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    email?: true;
    zapmail?: true;
    type?: true;
    verified?: true;
    password?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    email?: true;
    zapmail?: true;
    type?: true;
    verified?: true;
    password?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    email?: true;
    zapmail?: true;
    type?: true;
    verified?: true;
    password?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    firstname: string | null;
    lastname: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified: boolean;
    password: string | null;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstname?: boolean;
      lastname?: boolean;
      email?: boolean;
      zapmail?: boolean;
      type?: boolean;
      verified?: boolean;
      password?: boolean;
      imageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      zap?: boolean | User$zapArgs<ExtArgs>;
      connections?: boolean | User$connectionsArgs<ExtArgs>;
      changeHistory?: boolean | User$changeHistoryArgs<ExtArgs>;
      notes?: boolean | User$notesArgs<ExtArgs>;
      Folder?: boolean | User$FolderArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstname?: boolean;
      lastname?: boolean;
      email?: boolean;
      zapmail?: boolean;
      type?: boolean;
      verified?: boolean;
      password?: boolean;
      imageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    email?: boolean;
    zapmail?: boolean;
    type?: boolean;
    verified?: boolean;
    password?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "firstname"
    | "lastname"
    | "email"
    | "zapmail"
    | "type"
    | "verified"
    | "password"
    | "imageUrl"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | User$zapArgs<ExtArgs>;
    connections?: boolean | User$connectionsArgs<ExtArgs>;
    changeHistory?: boolean | User$changeHistoryArgs<ExtArgs>;
    notes?: boolean | User$notesArgs<ExtArgs>;
    Folder?: boolean | User$FolderArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>[];
      connections: Prisma.$UserConnectionPayload<ExtArgs>[];
      changeHistory: Prisma.$ZapChangeHistoryPayload<ExtArgs>[];
      notes: Prisma.$ZapNotePayload<ExtArgs>[];
      Folder: Prisma.$FolderPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        firstname: string | null;
        lastname: string | null;
        email: string;
        zapmail: string;
        type: string;
        verified: boolean;
        password: string | null;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends User$zapArgs<ExtArgs> = {}>(
      args?: Subset<T, User$zapArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$connectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserConnectionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    changeHistory<T extends User$changeHistoryArgs<ExtArgs> = {}>(
      args?: Subset<T, User$changeHistoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapChangeHistoryPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notes<T extends User$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$notesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapNotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Folder<T extends User$FolderArgs<ExtArgs> = {}>(
      args?: Subset<T, User$FolderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FolderPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly firstname: FieldRef<"User", "String">;
    readonly lastname: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly zapmail: FieldRef<"User", "String">;
    readonly type: FieldRef<"User", "String">;
    readonly verified: FieldRef<"User", "Boolean">;
    readonly password: FieldRef<"User", "String">;
    readonly imageUrl: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.zap
   */
  export type User$zapArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    where?: ZapWhereInput;
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    cursor?: ZapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[];
  };

  /**
   * User.connections
   */
  export type User$connectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    where?: UserConnectionWhereInput;
    orderBy?:
      | UserConnectionOrderByWithRelationInput
      | UserConnectionOrderByWithRelationInput[];
    cursor?: UserConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserConnectionScalarFieldEnum | UserConnectionScalarFieldEnum[];
  };

  /**
   * User.changeHistory
   */
  export type User$changeHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    where?: ZapChangeHistoryWhereInput;
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    cursor?: ZapChangeHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ZapChangeHistoryScalarFieldEnum
      | ZapChangeHistoryScalarFieldEnum[];
  };

  /**
   * User.notes
   */
  export type User$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    where?: ZapNoteWhereInput;
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    cursor?: ZapNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapNoteScalarFieldEnum | ZapNoteScalarFieldEnum[];
  };

  /**
   * User.Folder
   */
  export type User$FolderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    where?: FolderWhereInput;
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    cursor?: FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null;
    _avg: ZapAvgAggregateOutputType | null;
    _sum: ZapSumAggregateOutputType | null;
    _min: ZapMinAggregateOutputType | null;
    _max: ZapMaxAggregateOutputType | null;
  };

  export type ZapAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    folderId: number | null;
  };

  export type ZapSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    folderId: number | null;
  };

  export type ZapMinAggregateOutputType = {
    id: number | null;
    triggerId: string | null;
    name: string | null;
    lastEdited: Date | null;
    createdAt: Date | null;
    published: boolean | null;
    RecordId: string | null;
    userId: number | null;
    folderId: number | null;
  };

  export type ZapMaxAggregateOutputType = {
    id: number | null;
    triggerId: string | null;
    name: string | null;
    lastEdited: Date | null;
    createdAt: Date | null;
    published: boolean | null;
    RecordId: string | null;
    userId: number | null;
    folderId: number | null;
  };

  export type ZapCountAggregateOutputType = {
    id: number;
    triggerId: number;
    name: number;
    lastEdited: number;
    createdAt: number;
    published: number;
    RecordId: number;
    userId: number;
    folderId: number;
    _all: number;
  };

  export type ZapAvgAggregateInputType = {
    id?: true;
    userId?: true;
    folderId?: true;
  };

  export type ZapSumAggregateInputType = {
    id?: true;
    userId?: true;
    folderId?: true;
  };

  export type ZapMinAggregateInputType = {
    id?: true;
    triggerId?: true;
    name?: true;
    lastEdited?: true;
    createdAt?: true;
    published?: true;
    RecordId?: true;
    userId?: true;
    folderId?: true;
  };

  export type ZapMaxAggregateInputType = {
    id?: true;
    triggerId?: true;
    name?: true;
    lastEdited?: true;
    createdAt?: true;
    published?: true;
    RecordId?: true;
    userId?: true;
    folderId?: true;
  };

  export type ZapCountAggregateInputType = {
    id?: true;
    triggerId?: true;
    name?: true;
    lastEdited?: true;
    createdAt?: true;
    published?: true;
    RecordId?: true;
    userId?: true;
    folderId?: true;
    _all?: true;
  };

  export type ZapAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Zaps
     **/
    _count?: true | ZapCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ZapAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ZapSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ZapMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ZapMaxAggregateInputType;
  };

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
    [P in keyof T & keyof AggregateZap]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>;
  };

  export type ZapGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapWhereInput;
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[];
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum;
    having?: ZapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapCountAggregateInputType | true;
    _avg?: ZapAvgAggregateInputType;
    _sum?: ZapSumAggregateInputType;
    _min?: ZapMinAggregateInputType;
    _max?: ZapMaxAggregateInputType;
  };

  export type ZapGroupByOutputType = {
    id: number;
    triggerId: string | null;
    name: string;
    lastEdited: Date;
    createdAt: Date;
    published: boolean;
    RecordId: string | null;
    userId: number;
    folderId: number;
    _count: ZapCountAggregateOutputType | null;
    _avg: ZapAvgAggregateOutputType | null;
    _sum: ZapSumAggregateOutputType | null;
    _min: ZapMinAggregateOutputType | null;
    _max: ZapMaxAggregateOutputType | null;
  };

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof ZapGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
          : GetScalarType<T[P], ZapGroupByOutputType[P]>;
      }
    >
  >;

  export type ZapSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      triggerId?: boolean;
      name?: boolean;
      lastEdited?: boolean;
      createdAt?: boolean;
      published?: boolean;
      RecordId?: boolean;
      userId?: boolean;
      folderId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      trigger?: boolean | Zap$triggerArgs<ExtArgs>;
      actions?: boolean | Zap$actionsArgs<ExtArgs>;
      zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>;
      records?: boolean | Zap$recordsArgs<ExtArgs>;
      record?: boolean | Zap$recordArgs<ExtArgs>;
      changeHistory?: boolean | Zap$changeHistoryArgs<ExtArgs>;
      notes?: boolean | Zap$notesArgs<ExtArgs>;
      folder?: boolean | FolderDefaultArgs<ExtArgs>;
      _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zap"]
  >;

  export type ZapSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      triggerId?: boolean;
      name?: boolean;
      lastEdited?: boolean;
      createdAt?: boolean;
      published?: boolean;
      RecordId?: boolean;
      userId?: boolean;
      folderId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      record?: boolean | Zap$recordArgs<ExtArgs>;
      folder?: boolean | FolderDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zap"]
  >;

  export type ZapSelectScalar = {
    id?: boolean;
    triggerId?: boolean;
    name?: boolean;
    lastEdited?: boolean;
    createdAt?: boolean;
    published?: boolean;
    RecordId?: boolean;
    userId?: boolean;
    folderId?: boolean;
  };

  export type ZapOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "triggerId"
    | "name"
    | "lastEdited"
    | "createdAt"
    | "published"
    | "RecordId"
    | "userId"
    | "folderId",
    ExtArgs["result"]["zap"]
  >;
  export type ZapInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    trigger?: boolean | Zap$triggerArgs<ExtArgs>;
    actions?: boolean | Zap$actionsArgs<ExtArgs>;
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>;
    records?: boolean | Zap$recordsArgs<ExtArgs>;
    record?: boolean | Zap$recordArgs<ExtArgs>;
    changeHistory?: boolean | Zap$changeHistoryArgs<ExtArgs>;
    notes?: boolean | Zap$notesArgs<ExtArgs>;
    folder?: boolean | FolderDefaultArgs<ExtArgs>;
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ZapIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    record?: boolean | Zap$recordArgs<ExtArgs>;
    folder?: boolean | FolderDefaultArgs<ExtArgs>;
  };

  export type $ZapPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Zap";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      trigger: Prisma.$TriggerPayload<ExtArgs> | null;
      actions: Prisma.$ActionPayload<ExtArgs>[];
      zapRuns: Prisma.$ZapRunPayload<ExtArgs>[];
      records: Prisma.$RecordPayload<ExtArgs>[];
      record: Prisma.$RecordPayload<ExtArgs> | null;
      changeHistory: Prisma.$ZapChangeHistoryPayload<ExtArgs>[];
      notes: Prisma.$ZapNotePayload<ExtArgs>[];
      folder: Prisma.$FolderPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        triggerId: string | null;
        name: string;
        lastEdited: Date;
        createdAt: Date;
        published: boolean;
        RecordId: string | null;
        userId: number;
        folderId: number;
      },
      ExtArgs["result"]["zap"]
    >;
    composites: {};
  };

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> =
    $Result.GetResult<Prisma.$ZapPayload, S>;

  type ZapCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ZapFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ZapCountAggregateInputType | true;
  };

  export interface ZapDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Zap"];
      meta: { name: "Zap" };
    };
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(
      args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(
      args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     *
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZapFindManyArgs>(
      args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     *
     */
    create<T extends ZapCreateArgs>(
      args: SelectSubset<T, ZapCreateArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZapCreateManyArgs>(
      args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     *
     */
    delete<T extends ZapDeleteArgs>(
      args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZapUpdateArgs>(
      args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZapDeleteManyArgs>(
      args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZapUpdateManyArgs>(
      args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(
      args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
     **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ZapCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ZapAggregateArgs>(
      args: Subset<T, ZapAggregateArgs>,
    ): Prisma.PrismaPromise<GetZapAggregateType<T>>;

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs["orderBy"] }
        : { orderBy?: ZapGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetZapGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Zap model
     */
    readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$triggerArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    actions<T extends Zap$actionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$actionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    zapRuns<T extends Zap$zapRunsArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$zapRunsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapRunPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    records<T extends Zap$recordsArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$recordsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecordPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    record<T extends Zap$recordArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$recordArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    changeHistory<T extends Zap$changeHistoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$changeHistoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapChangeHistoryPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notes<T extends Zap$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, Zap$notesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapNotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    folder<T extends FolderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, FolderDefaultArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      | $Result.GetResult<
          Prisma.$FolderPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", "Int">;
    readonly triggerId: FieldRef<"Zap", "String">;
    readonly name: FieldRef<"Zap", "String">;
    readonly lastEdited: FieldRef<"Zap", "DateTime">;
    readonly createdAt: FieldRef<"Zap", "DateTime">;
    readonly published: FieldRef<"Zap", "Boolean">;
    readonly RecordId: FieldRef<"Zap", "String">;
    readonly userId: FieldRef<"Zap", "Int">;
    readonly folderId: FieldRef<"Zap", "Int">;
  }

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput;
  };

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput;
  };

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[];
  };

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[];
  };

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Zaps.
     */
    skip?: number;
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[];
  };

  /**
   * Zap create
   */
  export type ZapCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * The data needed to create a Zap.
     */
    data: XOR<ZapCreateInput, ZapUncheckedCreateInput>;
  };

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Zap update
   */
  export type ZapUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>;
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput;
  };

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>;
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput;
  };

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput;
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>;
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>;
  };

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput;
  };

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput;
  };

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    where?: TriggerWhereInput;
  };

  /**
   * Zap.actions
   */
  export type Zap$actionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    where?: ActionWhereInput;
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    cursor?: ActionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * Zap.zapRuns
   */
  export type Zap$zapRunsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    where?: ZapRunWhereInput;
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    cursor?: ZapRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[];
  };

  /**
   * Zap.records
   */
  export type Zap$recordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    where?: RecordWhereInput;
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[];
    cursor?: RecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[];
  };

  /**
   * Zap.record
   */
  export type Zap$recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    where?: RecordWhereInput;
  };

  /**
   * Zap.changeHistory
   */
  export type Zap$changeHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    where?: ZapChangeHistoryWhereInput;
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    cursor?: ZapChangeHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ZapChangeHistoryScalarFieldEnum
      | ZapChangeHistoryScalarFieldEnum[];
  };

  /**
   * Zap.notes
   */
  export type Zap$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    where?: ZapNoteWhereInput;
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    cursor?: ZapNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapNoteScalarFieldEnum | ZapNoteScalarFieldEnum[];
  };

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
  };

  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null;
    _avg: FolderAvgAggregateOutputType | null;
    _sum: FolderSumAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
  };

  export type FolderAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    parentId: number | null;
  };

  export type FolderSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    parentId: number | null;
  };

  export type FolderMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    userId: number | null;
    type: string | null;
    parentId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FolderMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    userId: number | null;
    type: string | null;
    parentId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FolderCountAggregateOutputType = {
    id: number;
    name: number;
    userId: number;
    type: number;
    parentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type FolderAvgAggregateInputType = {
    id?: true;
    userId?: true;
    parentId?: true;
  };

  export type FolderSumAggregateInputType = {
    id?: true;
    userId?: true;
    parentId?: true;
  };

  export type FolderMinAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    type?: true;
    parentId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FolderMaxAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    type?: true;
    parentId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FolderCountAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    type?: true;
    parentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type FolderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Folders
     **/
    _count?: true | FolderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FolderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FolderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FolderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FolderMaxAggregateInputType;
  };

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
    [P in keyof T & keyof AggregateFolder]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>;
  };

  export type FolderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FolderWhereInput;
    orderBy?:
      | FolderOrderByWithAggregationInput
      | FolderOrderByWithAggregationInput[];
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum;
    having?: FolderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FolderCountAggregateInputType | true;
    _avg?: FolderAvgAggregateInputType;
    _sum?: FolderSumAggregateInputType;
    _min?: FolderMinAggregateInputType;
    _max?: FolderMaxAggregateInputType;
  };

  export type FolderGroupByOutputType = {
    id: number;
    name: string;
    userId: number;
    type: string;
    parentId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FolderCountAggregateOutputType | null;
    _avg: FolderAvgAggregateOutputType | null;
    _sum: FolderSumAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
  };

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FolderGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FolderGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>;
        }
      >
    >;

  export type FolderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      userId?: boolean;
      type?: boolean;
      parentId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      parent?: boolean | Folder$parentArgs<ExtArgs>;
      children?: boolean | Folder$childrenArgs<ExtArgs>;
      zaps?: boolean | Folder$zapsArgs<ExtArgs>;
      _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["folder"]
  >;

  export type FolderSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      userId?: boolean;
      type?: boolean;
      parentId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      parent?: boolean | Folder$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["folder"]
  >;

  export type FolderSelectScalar = {
    id?: boolean;
    name?: boolean;
    userId?: boolean;
    type?: boolean;
    parentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type FolderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "userId" | "type" | "parentId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["folder"]
  >;
  export type FolderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    parent?: boolean | Folder$parentArgs<ExtArgs>;
    children?: boolean | Folder$childrenArgs<ExtArgs>;
    zaps?: boolean | Folder$zapsArgs<ExtArgs>;
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type FolderIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    parent?: boolean | Folder$parentArgs<ExtArgs>;
  };

  export type $FolderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Folder";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      parent: Prisma.$FolderPayload<ExtArgs> | null;
      children: Prisma.$FolderPayload<ExtArgs>[];
      zaps: Prisma.$ZapPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        userId: number;
        type: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["folder"]
    >;
    composites: {};
  };

  type FolderGetPayload<
    S extends boolean | null | undefined | FolderDefaultArgs,
  > = $Result.GetResult<Prisma.$FolderPayload, S>;

  type FolderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FolderFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FolderCountAggregateInputType | true;
  };

  export interface FolderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Folder"];
      meta: { name: "Folder" };
    };
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(
      args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(
      args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     *
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FolderFindManyArgs>(
      args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     *
     */
    create<T extends FolderCreateArgs>(
      args: SelectSubset<T, FolderCreateArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FolderCreateManyArgs>(
      args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     *
     */
    delete<T extends FolderDeleteArgs>(
      args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FolderUpdateArgs>(
      args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FolderDeleteManyArgs>(
      args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FolderUpdateManyArgs>(
      args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(
      args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
     **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FolderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FolderAggregateArgs>(
      args: Subset<T, FolderAggregateArgs>,
    ): Prisma.PrismaPromise<GetFolderAggregateType<T>>;

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs["orderBy"] }
        : { orderBy?: FolderGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetFolderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Folder model
     */
    readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parent<T extends Folder$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Folder$parentArgs<ExtArgs>>,
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    children<T extends Folder$childrenArgs<ExtArgs> = {}>(
      args?: Subset<T, Folder$childrenArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FolderPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    zaps<T extends Folder$zapsArgs<ExtArgs> = {}>(
      args?: Subset<T, Folder$zapsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", "Int">;
    readonly name: FieldRef<"Folder", "String">;
    readonly userId: FieldRef<"Folder", "Int">;
    readonly type: FieldRef<"Folder", "String">;
    readonly parentId: FieldRef<"Folder", "Int">;
    readonly createdAt: FieldRef<"Folder", "DateTime">;
    readonly updatedAt: FieldRef<"Folder", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder create
   */
  export type FolderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>;
  };

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Folder update
   */
  export type FolderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>;
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>;
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput;
  };

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput;
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>;
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>;
  };

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput;
  };

  /**
   * Folder.parent
   */
  export type Folder$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    where?: FolderWhereInput;
  };

  /**
   * Folder.children
   */
  export type Folder$childrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    where?: FolderWhereInput;
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    cursor?: FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder.zaps
   */
  export type Folder$zapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    where?: ZapWhereInput;
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[];
    cursor?: ZapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[];
  };

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
  };

  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null;
    _avg: RecordAvgAggregateOutputType | null;
    _sum: RecordSumAggregateOutputType | null;
    _min: RecordMinAggregateOutputType | null;
    _max: RecordMaxAggregateOutputType | null;
  };

  export type RecordAvgAggregateOutputType = {
    zapId: number | null;
  };

  export type RecordSumAggregateOutputType = {
    zapId: number | null;
  };

  export type RecordMinAggregateOutputType = {
    id: string | null;
    type: string | null;
    zapId: number | null;
    createdAt: Date | null;
    pulledAt: Date | null;
    title: string | null;
    triggerOptionId: string | null;
  };

  export type RecordMaxAggregateOutputType = {
    id: string | null;
    type: string | null;
    zapId: number | null;
    createdAt: Date | null;
    pulledAt: Date | null;
    title: string | null;
    triggerOptionId: string | null;
  };

  export type RecordCountAggregateOutputType = {
    id: number;
    type: number;
    zapId: number;
    createdAt: number;
    pulledAt: number;
    title: number;
    JsonData: number;
    triggerOptionId: number;
    _all: number;
  };

  export type RecordAvgAggregateInputType = {
    zapId?: true;
  };

  export type RecordSumAggregateInputType = {
    zapId?: true;
  };

  export type RecordMinAggregateInputType = {
    id?: true;
    type?: true;
    zapId?: true;
    createdAt?: true;
    pulledAt?: true;
    title?: true;
    triggerOptionId?: true;
  };

  export type RecordMaxAggregateInputType = {
    id?: true;
    type?: true;
    zapId?: true;
    createdAt?: true;
    pulledAt?: true;
    title?: true;
    triggerOptionId?: true;
  };

  export type RecordCountAggregateInputType = {
    id?: true;
    type?: true;
    zapId?: true;
    createdAt?: true;
    pulledAt?: true;
    title?: true;
    JsonData?: true;
    triggerOptionId?: true;
    _all?: true;
  };

  export type RecordAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Records
     **/
    _count?: true | RecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecordMaxAggregateInputType;
  };

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
    [P in keyof T & keyof AggregateRecord]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>;
  };

  export type RecordGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecordWhereInput;
    orderBy?:
      | RecordOrderByWithAggregationInput
      | RecordOrderByWithAggregationInput[];
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum;
    having?: RecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecordCountAggregateInputType | true;
    _avg?: RecordAvgAggregateInputType;
    _sum?: RecordSumAggregateInputType;
    _min?: RecordMinAggregateInputType;
    _max?: RecordMaxAggregateInputType;
  };

  export type RecordGroupByOutputType = {
    id: string;
    type: string;
    zapId: number;
    createdAt: Date;
    pulledAt: Date;
    title: string;
    JsonData: JsonValue;
    triggerOptionId: string;
    _count: RecordCountAggregateOutputType | null;
    _avg: RecordAvgAggregateOutputType | null;
    _sum: RecordSumAggregateOutputType | null;
    _min: RecordMinAggregateOutputType | null;
    _max: RecordMaxAggregateOutputType | null;
  };

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RecordGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RecordGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>;
        }
      >
    >;

  export type RecordSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      zapId?: boolean;
      createdAt?: boolean;
      pulledAt?: boolean;
      title?: boolean;
      JsonData?: boolean;
      triggerOptionId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      zapSingle?: boolean | Record$zapSingleArgs<ExtArgs>;
    },
    ExtArgs["result"]["record"]
  >;

  export type RecordSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      zapId?: boolean;
      createdAt?: boolean;
      pulledAt?: boolean;
      title?: boolean;
      JsonData?: boolean;
      triggerOptionId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["record"]
  >;

  export type RecordSelectScalar = {
    id?: boolean;
    type?: boolean;
    zapId?: boolean;
    createdAt?: boolean;
    pulledAt?: boolean;
    title?: boolean;
    JsonData?: boolean;
    triggerOptionId?: boolean;
  };

  export type RecordOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "type"
    | "zapId"
    | "createdAt"
    | "pulledAt"
    | "title"
    | "JsonData"
    | "triggerOptionId",
    ExtArgs["result"]["record"]
  >;
  export type RecordInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    zapSingle?: boolean | Record$zapSingleArgs<ExtArgs>;
  };
  export type RecordIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
  };

  export type $RecordPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Record";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>;
      zapSingle: Prisma.$ZapPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        type: string;
        zapId: number;
        createdAt: Date;
        pulledAt: Date;
        title: string;
        JsonData: Prisma.JsonValue;
        triggerOptionId: string;
      },
      ExtArgs["result"]["record"]
    >;
    composites: {};
  };

  type RecordGetPayload<
    S extends boolean | null | undefined | RecordDefaultArgs,
  > = $Result.GetResult<Prisma.$RecordPayload, S>;

  type RecordCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<RecordFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: RecordCountAggregateInputType | true;
  };

  export interface RecordDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Record"];
      meta: { name: "Record" };
    };
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(
      args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(
      args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     *
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecordFindManyArgs>(
      args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     *
     */
    create<T extends RecordCreateArgs>(
      args: SelectSubset<T, RecordCreateArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecordCreateManyArgs>(
      args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     *
     */
    delete<T extends RecordDeleteArgs>(
      args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecordUpdateArgs>(
      args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecordDeleteManyArgs>(
      args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecordUpdateManyArgs>(
      args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(
      args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>,
    ): Prisma__RecordClient<
      $Result.GetResult<
        Prisma.$RecordPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
     **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RecordCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RecordAggregateArgs>(
      args: Subset<T, RecordAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecordAggregateType<T>>;

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs["orderBy"] }
        : { orderBy?: RecordGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetRecordGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Record model
     */
    readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    zapSingle<T extends Record$zapSingleArgs<ExtArgs> = {}>(
      args?: Subset<T, Record$zapSingleArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      $Result.GetResult<
        Prisma.$ZapPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", "String">;
    readonly type: FieldRef<"Record", "String">;
    readonly zapId: FieldRef<"Record", "Int">;
    readonly createdAt: FieldRef<"Record", "DateTime">;
    readonly pulledAt: FieldRef<"Record", "DateTime">;
    readonly title: FieldRef<"Record", "String">;
    readonly JsonData: FieldRef<"Record", "Json">;
    readonly triggerOptionId: FieldRef<"Record", "String">;
  }

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput;
  };

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput;
  };

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[];
  };

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[];
  };

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Records.
     */
    skip?: number;
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[];
  };

  /**
   * Record create
   */
  export type RecordCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>;
  };

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Record update
   */
  export type RecordUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>;
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput;
  };

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>;
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput;
  };

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput;
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>;
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>;
  };

  /**
   * Record delete
   */
  export type RecordDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput;
  };

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput;
  };

  /**
   * Record.zapSingle
   */
  export type Record$zapSingleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null;
    where?: ZapWhereInput;
  };

  /**
   * Record without action
   */
  export type RecordDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null;
  };

  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null;
    _avg: TriggerAvgAggregateOutputType | null;
    _sum: TriggerSumAggregateOutputType | null;
    _min: TriggerMinAggregateOutputType | null;
    _max: TriggerMaxAggregateOutputType | null;
  };

  export type TriggerAvgAggregateOutputType = {
    zapId: number | null;
  };

  export type TriggerSumAggregateOutputType = {
    zapId: number | null;
  };

  export type TriggerMinAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    optionId: string | null;
    optionType: string | null;
    published: boolean | null;
    lastPolledAt: Date | null;
    connectionId: string | null;
    triggerId: string | null;
  };

  export type TriggerMaxAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    optionId: string | null;
    optionType: string | null;
    published: boolean | null;
    lastPolledAt: Date | null;
    connectionId: string | null;
    triggerId: string | null;
  };

  export type TriggerCountAggregateOutputType = {
    id: number;
    zapId: number;
    optionId: number;
    optionType: number;
    published: number;
    configuration: number;
    lastPolledAt: number;
    connectionId: number;
    triggerId: number;
    _all: number;
  };

  export type TriggerAvgAggregateInputType = {
    zapId?: true;
  };

  export type TriggerSumAggregateInputType = {
    zapId?: true;
  };

  export type TriggerMinAggregateInputType = {
    id?: true;
    zapId?: true;
    optionId?: true;
    optionType?: true;
    published?: true;
    lastPolledAt?: true;
    connectionId?: true;
    triggerId?: true;
  };

  export type TriggerMaxAggregateInputType = {
    id?: true;
    zapId?: true;
    optionId?: true;
    optionType?: true;
    published?: true;
    lastPolledAt?: true;
    connectionId?: true;
    triggerId?: true;
  };

  export type TriggerCountAggregateInputType = {
    id?: true;
    zapId?: true;
    optionId?: true;
    optionType?: true;
    published?: true;
    configuration?: true;
    lastPolledAt?: true;
    connectionId?: true;
    triggerId?: true;
    _all?: true;
  };

  export type TriggerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Triggers to fetch.
     */
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Triggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Triggers
     **/
    _count?: true | TriggerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TriggerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TriggerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TriggerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TriggerMaxAggregateInputType;
  };

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
    [P in keyof T & keyof AggregateTrigger]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>;
  };

  export type TriggerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TriggerWhereInput;
    orderBy?:
      | TriggerOrderByWithAggregationInput
      | TriggerOrderByWithAggregationInput[];
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum;
    having?: TriggerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TriggerCountAggregateInputType | true;
    _avg?: TriggerAvgAggregateInputType;
    _sum?: TriggerSumAggregateInputType;
    _min?: TriggerMinAggregateInputType;
    _max?: TriggerMaxAggregateInputType;
  };

  export type TriggerGroupByOutputType = {
    id: string;
    zapId: number;
    optionId: string;
    optionType: string;
    published: boolean;
    configuration: JsonValue;
    lastPolledAt: Date | null;
    connectionId: string | null;
    triggerId: string;
    _count: TriggerCountAggregateOutputType | null;
    _avg: TriggerAvgAggregateOutputType | null;
    _sum: TriggerSumAggregateOutputType | null;
    _min: TriggerMinAggregateOutputType | null;
    _max: TriggerMaxAggregateOutputType | null;
  };

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TriggerGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TriggerGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>;
        }
      >
    >;

  export type TriggerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      optionId?: boolean;
      optionType?: boolean;
      published?: boolean;
      configuration?: boolean;
      lastPolledAt?: boolean;
      connectionId?: boolean;
      triggerId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      userConnection?: boolean | Trigger$userConnectionArgs<ExtArgs>;
      type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>;
      note?: boolean | Trigger$noteArgs<ExtArgs>;
    },
    ExtArgs["result"]["trigger"]
  >;

  export type TriggerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      optionId?: boolean;
      optionType?: boolean;
      published?: boolean;
      configuration?: boolean;
      lastPolledAt?: boolean;
      connectionId?: boolean;
      triggerId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      userConnection?: boolean | Trigger$userConnectionArgs<ExtArgs>;
      type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trigger"]
  >;

  export type TriggerSelectScalar = {
    id?: boolean;
    zapId?: boolean;
    optionId?: boolean;
    optionType?: boolean;
    published?: boolean;
    configuration?: boolean;
    lastPolledAt?: boolean;
    connectionId?: boolean;
    triggerId?: boolean;
  };

  export type TriggerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "zapId"
    | "optionId"
    | "optionType"
    | "published"
    | "configuration"
    | "lastPolledAt"
    | "connectionId"
    | "triggerId",
    ExtArgs["result"]["trigger"]
  >;
  export type TriggerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    userConnection?: boolean | Trigger$userConnectionArgs<ExtArgs>;
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>;
    note?: boolean | Trigger$noteArgs<ExtArgs>;
  };
  export type TriggerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    userConnection?: boolean | Trigger$userConnectionArgs<ExtArgs>;
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>;
  };

  export type $TriggerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Trigger";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>;
      userConnection: Prisma.$UserConnectionPayload<ExtArgs> | null;
      type: Prisma.$AvailableTriggersPayload<ExtArgs>;
      note: Prisma.$ZapNotePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapId: number;
        optionId: string;
        optionType: string;
        published: boolean;
        configuration: Prisma.JsonValue;
        lastPolledAt: Date | null;
        connectionId: string | null;
        triggerId: string;
      },
      ExtArgs["result"]["trigger"]
    >;
    composites: {};
  };

  type TriggerGetPayload<
    S extends boolean | null | undefined | TriggerDefaultArgs,
  > = $Result.GetResult<Prisma.$TriggerPayload, S>;

  type TriggerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TriggerFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TriggerCountAggregateInputType | true;
  };

  export interface TriggerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Trigger"];
      meta: { name: "Trigger" };
    };
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(
      args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(
      args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     *
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TriggerFindManyArgs>(
      args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     *
     */
    create<T extends TriggerCreateArgs>(
      args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TriggerCreateManyArgs>(
      args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     *
     */
    delete<T extends TriggerDeleteArgs>(
      args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TriggerUpdateArgs>(
      args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TriggerDeleteManyArgs>(
      args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TriggerUpdateManyArgs>(
      args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(
      args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
     **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TriggerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TriggerAggregateArgs>(
      args: Subset<T, TriggerAggregateArgs>,
    ): Prisma.PrismaPromise<GetTriggerAggregateType<T>>;

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs["orderBy"] }
        : { orderBy?: TriggerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTriggerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Trigger model
     */
    readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    userConnection<T extends Trigger$userConnectionArgs<ExtArgs> = {}>(
      args?: Subset<T, Trigger$userConnectionArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    type<T extends AvailableTriggersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AvailableTriggersDefaultArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      | $Result.GetResult<
          Prisma.$AvailableTriggersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    note<T extends Trigger$noteArgs<ExtArgs> = {}>(
      args?: Subset<T, Trigger$noteArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", "String">;
    readonly zapId: FieldRef<"Trigger", "Int">;
    readonly optionId: FieldRef<"Trigger", "String">;
    readonly optionType: FieldRef<"Trigger", "String">;
    readonly published: FieldRef<"Trigger", "Boolean">;
    readonly configuration: FieldRef<"Trigger", "Json">;
    readonly lastPolledAt: FieldRef<"Trigger", "DateTime">;
    readonly connectionId: FieldRef<"Trigger", "String">;
    readonly triggerId: FieldRef<"Trigger", "String">;
  }

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput;
  };

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput;
  };

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Triggers to fetch.
     */
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Triggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[];
  };

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Triggers to fetch.
     */
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Triggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[];
  };

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Triggers to fetch.
     */
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Triggers.
     */
    skip?: number;
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[];
  };

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>;
  };

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>;
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput;
  };

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>;
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput;
  };

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput;
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>;
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>;
  };

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput;
  };

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput;
  };

  /**
   * Trigger.userConnection
   */
  export type Trigger$userConnectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    where?: UserConnectionWhereInput;
  };

  /**
   * Trigger.note
   */
  export type Trigger$noteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    where?: ZapNoteWhereInput;
  };

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
  };

  /**
   * Model UserConnection
   */

  export type AggregateUserConnection = {
    _count: UserConnectionCountAggregateOutputType | null;
    _avg: UserConnectionAvgAggregateOutputType | null;
    _sum: UserConnectionSumAggregateOutputType | null;
    _min: UserConnectionMinAggregateOutputType | null;
    _max: UserConnectionMaxAggregateOutputType | null;
  };

  export type UserConnectionAvgAggregateOutputType = {
    userId: number | null;
  };

  export type UserConnectionSumAggregateOutputType = {
    userId: number | null;
  };

  export type UserConnectionMinAggregateOutputType = {
    id: string | null;
    userId: number | null;
    appId: string | null;
    identifier: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    createdAt: Date | null;
    expiredAt: Date | null;
  };

  export type UserConnectionMaxAggregateOutputType = {
    id: string | null;
    userId: number | null;
    appId: string | null;
    identifier: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    createdAt: Date | null;
    expiredAt: Date | null;
  };

  export type UserConnectionCountAggregateOutputType = {
    id: number;
    userId: number;
    appId: number;
    identifier: number;
    accessToken: number;
    refreshToken: number;
    createdAt: number;
    expiredAt: number;
    _all: number;
  };

  export type UserConnectionAvgAggregateInputType = {
    userId?: true;
  };

  export type UserConnectionSumAggregateInputType = {
    userId?: true;
  };

  export type UserConnectionMinAggregateInputType = {
    id?: true;
    userId?: true;
    appId?: true;
    identifier?: true;
    accessToken?: true;
    refreshToken?: true;
    createdAt?: true;
    expiredAt?: true;
  };

  export type UserConnectionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    appId?: true;
    identifier?: true;
    accessToken?: true;
    refreshToken?: true;
    createdAt?: true;
    expiredAt?: true;
  };

  export type UserConnectionCountAggregateInputType = {
    id?: true;
    userId?: true;
    appId?: true;
    identifier?: true;
    accessToken?: true;
    refreshToken?: true;
    createdAt?: true;
    expiredAt?: true;
    _all?: true;
  };

  export type UserConnectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserConnection to aggregate.
     */
    where?: UserConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserConnections to fetch.
     */
    orderBy?:
      | UserConnectionOrderByWithRelationInput
      | UserConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserConnections
     **/
    _count?: true | UserConnectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserConnectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserConnectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserConnectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserConnectionMaxAggregateInputType;
  };

  export type GetUserConnectionAggregateType<
    T extends UserConnectionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserConnection]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserConnection[P]>
      : GetScalarType<T[P], AggregateUserConnection[P]>;
  };

  export type UserConnectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserConnectionWhereInput;
    orderBy?:
      | UserConnectionOrderByWithAggregationInput
      | UserConnectionOrderByWithAggregationInput[];
    by: UserConnectionScalarFieldEnum[] | UserConnectionScalarFieldEnum;
    having?: UserConnectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserConnectionCountAggregateInputType | true;
    _avg?: UserConnectionAvgAggregateInputType;
    _sum?: UserConnectionSumAggregateInputType;
    _min?: UserConnectionMinAggregateInputType;
    _max?: UserConnectionMaxAggregateInputType;
  };

  export type UserConnectionGroupByOutputType = {
    id: string;
    userId: number;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken: string | null;
    createdAt: Date;
    expiredAt: Date;
    _count: UserConnectionCountAggregateOutputType | null;
    _avg: UserConnectionAvgAggregateOutputType | null;
    _sum: UserConnectionSumAggregateOutputType | null;
    _min: UserConnectionMinAggregateOutputType | null;
    _max: UserConnectionMaxAggregateOutputType | null;
  };

  type GetUserConnectionGroupByPayload<T extends UserConnectionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserConnectionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof UserConnectionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], UserConnectionGroupByOutputType[P]>;
        }
      >
    >;

  export type UserConnectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      appId?: boolean;
      identifier?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      createdAt?: boolean;
      expiredAt?: boolean;
      User?: boolean | UserDefaultArgs<ExtArgs>;
      trigger?: boolean | UserConnection$triggerArgs<ExtArgs>;
      action?: boolean | UserConnection$actionArgs<ExtArgs>;
      _count?: boolean | UserConnectionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userConnection"]
  >;

  export type UserConnectionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      appId?: boolean;
      identifier?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      createdAt?: boolean;
      expiredAt?: boolean;
      User?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userConnection"]
  >;

  export type UserConnectionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    appId?: boolean;
    identifier?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    expiredAt?: boolean;
  };

  export type UserConnectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "appId"
    | "identifier"
    | "accessToken"
    | "refreshToken"
    | "createdAt"
    | "expiredAt",
    ExtArgs["result"]["userConnection"]
  >;
  export type UserConnectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>;
    trigger?: boolean | UserConnection$triggerArgs<ExtArgs>;
    action?: boolean | UserConnection$actionArgs<ExtArgs>;
    _count?: boolean | UserConnectionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserConnectionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserConnectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserConnection";
    objects: {
      User: Prisma.$UserPayload<ExtArgs>;
      trigger: Prisma.$TriggerPayload<ExtArgs>[];
      action: Prisma.$ActionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: number;
        appId: string;
        identifier: string;
        accessToken: string;
        refreshToken: string | null;
        createdAt: Date;
        expiredAt: Date;
      },
      ExtArgs["result"]["userConnection"]
    >;
    composites: {};
  };

  type UserConnectionGetPayload<
    S extends boolean | null | undefined | UserConnectionDefaultArgs,
  > = $Result.GetResult<Prisma.$UserConnectionPayload, S>;

  type UserConnectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserConnectionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserConnectionCountAggregateInputType | true;
  };

  export interface UserConnectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserConnection"];
      meta: { name: "UserConnection" };
    };
    /**
     * Find zero or one UserConnection that matches the filter.
     * @param {UserConnectionFindUniqueArgs} args - Arguments to find a UserConnection
     * @example
     * // Get one UserConnection
     * const userConnection = await prisma.userConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserConnectionFindUniqueArgs>(
      args: SelectSubset<T, UserConnectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserConnectionFindUniqueOrThrowArgs} args - Arguments to find a UserConnection
     * @example
     * // Get one UserConnection
     * const userConnection = await prisma.userConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserConnectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserConnectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionFindFirstArgs} args - Arguments to find a UserConnection
     * @example
     * // Get one UserConnection
     * const userConnection = await prisma.userConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserConnectionFindFirstArgs>(
      args?: SelectSubset<T, UserConnectionFindFirstArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionFindFirstOrThrowArgs} args - Arguments to find a UserConnection
     * @example
     * // Get one UserConnection
     * const userConnection = await prisma.userConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserConnectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserConnectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserConnections
     * const userConnections = await prisma.userConnection.findMany()
     *
     * // Get first 10 UserConnections
     * const userConnections = await prisma.userConnection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userConnectionWithIdOnly = await prisma.userConnection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserConnectionFindManyArgs>(
      args?: SelectSubset<T, UserConnectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserConnection.
     * @param {UserConnectionCreateArgs} args - Arguments to create a UserConnection.
     * @example
     * // Create one UserConnection
     * const UserConnection = await prisma.userConnection.create({
     *   data: {
     *     // ... data to create a UserConnection
     *   }
     * })
     *
     */
    create<T extends UserConnectionCreateArgs>(
      args: SelectSubset<T, UserConnectionCreateArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserConnections.
     * @param {UserConnectionCreateManyArgs} args - Arguments to create many UserConnections.
     * @example
     * // Create many UserConnections
     * const userConnection = await prisma.userConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserConnectionCreateManyArgs>(
      args?: SelectSubset<T, UserConnectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserConnections and returns the data saved in the database.
     * @param {UserConnectionCreateManyAndReturnArgs} args - Arguments to create many UserConnections.
     * @example
     * // Create many UserConnections
     * const userConnection = await prisma.userConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserConnections and only return the `id`
     * const userConnectionWithIdOnly = await prisma.userConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserConnectionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserConnectionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserConnection.
     * @param {UserConnectionDeleteArgs} args - Arguments to delete one UserConnection.
     * @example
     * // Delete one UserConnection
     * const UserConnection = await prisma.userConnection.delete({
     *   where: {
     *     // ... filter to delete one UserConnection
     *   }
     * })
     *
     */
    delete<T extends UserConnectionDeleteArgs>(
      args: SelectSubset<T, UserConnectionDeleteArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserConnection.
     * @param {UserConnectionUpdateArgs} args - Arguments to update one UserConnection.
     * @example
     * // Update one UserConnection
     * const userConnection = await prisma.userConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserConnectionUpdateArgs>(
      args: SelectSubset<T, UserConnectionUpdateArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserConnections.
     * @param {UserConnectionDeleteManyArgs} args - Arguments to filter UserConnections to delete.
     * @example
     * // Delete a few UserConnections
     * const { count } = await prisma.userConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserConnectionDeleteManyArgs>(
      args?: SelectSubset<T, UserConnectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserConnections
     * const userConnection = await prisma.userConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserConnectionUpdateManyArgs>(
      args: SelectSubset<T, UserConnectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one UserConnection.
     * @param {UserConnectionUpsertArgs} args - Arguments to update or create a UserConnection.
     * @example
     * // Update or create a UserConnection
     * const userConnection = await prisma.userConnection.upsert({
     *   create: {
     *     // ... data to create a UserConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserConnection we want to update
     *   }
     * })
     */
    upsert<T extends UserConnectionUpsertArgs>(
      args: SelectSubset<T, UserConnectionUpsertArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionCountArgs} args - Arguments to filter UserConnections to count.
     * @example
     * // Count the number of UserConnections
     * const count = await prisma.userConnection.count({
     *   where: {
     *     // ... the filter for the UserConnections we want to count
     *   }
     * })
     **/
    count<T extends UserConnectionCountArgs>(
      args?: Subset<T, UserConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserConnectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserConnectionAggregateArgs>(
      args: Subset<T, UserConnectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserConnectionAggregateType<T>>;

    /**
     * Group by UserConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserConnectionGroupByArgs["orderBy"] }
        : { orderBy?: UserConnectionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserConnectionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserConnectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserConnection model
     */
    readonly fields: UserConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserConnectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    trigger<T extends UserConnection$triggerArgs<ExtArgs> = {}>(
      args?: Subset<T, UserConnection$triggerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TriggerPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    action<T extends UserConnection$actionArgs<ExtArgs> = {}>(
      args?: Subset<T, UserConnection$actionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserConnection model
   */
  interface UserConnectionFieldRefs {
    readonly id: FieldRef<"UserConnection", "String">;
    readonly userId: FieldRef<"UserConnection", "Int">;
    readonly appId: FieldRef<"UserConnection", "String">;
    readonly identifier: FieldRef<"UserConnection", "String">;
    readonly accessToken: FieldRef<"UserConnection", "String">;
    readonly refreshToken: FieldRef<"UserConnection", "String">;
    readonly createdAt: FieldRef<"UserConnection", "DateTime">;
    readonly expiredAt: FieldRef<"UserConnection", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserConnection findUnique
   */
  export type UserConnectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which UserConnection to fetch.
     */
    where: UserConnectionWhereUniqueInput;
  };

  /**
   * UserConnection findUniqueOrThrow
   */
  export type UserConnectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which UserConnection to fetch.
     */
    where: UserConnectionWhereUniqueInput;
  };

  /**
   * UserConnection findFirst
   */
  export type UserConnectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which UserConnection to fetch.
     */
    where?: UserConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserConnections to fetch.
     */
    orderBy?:
      | UserConnectionOrderByWithRelationInput
      | UserConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserConnections.
     */
    cursor?: UserConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserConnections.
     */
    distinct?: UserConnectionScalarFieldEnum | UserConnectionScalarFieldEnum[];
  };

  /**
   * UserConnection findFirstOrThrow
   */
  export type UserConnectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which UserConnection to fetch.
     */
    where?: UserConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserConnections to fetch.
     */
    orderBy?:
      | UserConnectionOrderByWithRelationInput
      | UserConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserConnections.
     */
    cursor?: UserConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserConnections.
     */
    distinct?: UserConnectionScalarFieldEnum | UserConnectionScalarFieldEnum[];
  };

  /**
   * UserConnection findMany
   */
  export type UserConnectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which UserConnections to fetch.
     */
    where?: UserConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserConnections to fetch.
     */
    orderBy?:
      | UserConnectionOrderByWithRelationInput
      | UserConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserConnections.
     */
    cursor?: UserConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserConnections.
     */
    skip?: number;
    distinct?: UserConnectionScalarFieldEnum | UserConnectionScalarFieldEnum[];
  };

  /**
   * UserConnection create
   */
  export type UserConnectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserConnection.
     */
    data: XOR<UserConnectionCreateInput, UserConnectionUncheckedCreateInput>;
  };

  /**
   * UserConnection createMany
   */
  export type UserConnectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserConnections.
     */
    data: UserConnectionCreateManyInput | UserConnectionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserConnection createManyAndReturn
   */
  export type UserConnectionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * The data used to create many UserConnections.
     */
    data: UserConnectionCreateManyInput | UserConnectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserConnection update
   */
  export type UserConnectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserConnection.
     */
    data: XOR<UserConnectionUpdateInput, UserConnectionUncheckedUpdateInput>;
    /**
     * Choose, which UserConnection to update.
     */
    where: UserConnectionWhereUniqueInput;
  };

  /**
   * UserConnection updateMany
   */
  export type UserConnectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserConnections.
     */
    data: XOR<
      UserConnectionUpdateManyMutationInput,
      UserConnectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserConnections to update
     */
    where?: UserConnectionWhereInput;
  };

  /**
   * UserConnection upsert
   */
  export type UserConnectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserConnection to update in case it exists.
     */
    where: UserConnectionWhereUniqueInput;
    /**
     * In case the UserConnection found by the `where` argument doesn't exist, create a new UserConnection with this data.
     */
    create: XOR<UserConnectionCreateInput, UserConnectionUncheckedCreateInput>;
    /**
     * In case the UserConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserConnectionUpdateInput, UserConnectionUncheckedUpdateInput>;
  };

  /**
   * UserConnection delete
   */
  export type UserConnectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    /**
     * Filter which UserConnection to delete.
     */
    where: UserConnectionWhereUniqueInput;
  };

  /**
   * UserConnection deleteMany
   */
  export type UserConnectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserConnections to delete
     */
    where?: UserConnectionWhereInput;
  };

  /**
   * UserConnection.trigger
   */
  export type UserConnection$triggerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    where?: TriggerWhereInput;
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    cursor?: TriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[];
  };

  /**
   * UserConnection.action
   */
  export type UserConnection$actionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    where?: ActionWhereInput;
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    cursor?: ActionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * UserConnection without action
   */
  export type UserConnectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
  };

  /**
   * Model AvailableTriggers
   */

  export type AggregateAvailableTriggers = {
    _count: AvailableTriggersCountAggregateOutputType | null;
    _min: AvailableTriggersMinAggregateOutputType | null;
    _max: AvailableTriggersMaxAggregateOutputType | null;
  };

  export type AvailableTriggersMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    serviceType: string | null;
    appId: string | null;
    imagePath: string | null;
  };

  export type AvailableTriggersMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    serviceType: string | null;
    appId: string | null;
    imagePath: string | null;
  };

  export type AvailableTriggersCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    serviceType: number;
    appId: number;
    metadata: number;
    imagePath: number;
    _all: number;
  };

  export type AvailableTriggersMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    imagePath?: true;
  };

  export type AvailableTriggersMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    imagePath?: true;
  };

  export type AvailableTriggersCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    metadata?: true;
    imagePath?: true;
    _all?: true;
  };

  export type AvailableTriggersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AvailableTriggers to aggregate.
     */
    where?: AvailableTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?:
      | AvailableTriggersOrderByWithRelationInput
      | AvailableTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AvailableTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvailableTriggers
     **/
    _count?: true | AvailableTriggersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AvailableTriggersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AvailableTriggersMaxAggregateInputType;
  };

  export type GetAvailableTriggersAggregateType<
    T extends AvailableTriggersAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAvailableTriggers]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTriggers[P]>
      : GetScalarType<T[P], AggregateAvailableTriggers[P]>;
  };

  export type AvailableTriggersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AvailableTriggersWhereInput;
    orderBy?:
      | AvailableTriggersOrderByWithAggregationInput
      | AvailableTriggersOrderByWithAggregationInput[];
    by: AvailableTriggersScalarFieldEnum[] | AvailableTriggersScalarFieldEnum;
    having?: AvailableTriggersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvailableTriggersCountAggregateInputType | true;
    _min?: AvailableTriggersMinAggregateInputType;
    _max?: AvailableTriggersMaxAggregateInputType;
  };

  export type AvailableTriggersGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    serviceType: string;
    appId: string | null;
    metadata: JsonValue;
    imagePath: string;
    _count: AvailableTriggersCountAggregateOutputType | null;
    _min: AvailableTriggersMinAggregateOutputType | null;
    _max: AvailableTriggersMaxAggregateOutputType | null;
  };

  type GetAvailableTriggersGroupByPayload<
    T extends AvailableTriggersGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggersGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof AvailableTriggersGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
          : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>;
      }
    >
  >;

  export type AvailableTriggersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      serviceType?: boolean;
      appId?: boolean;
      metadata?: boolean;
      imagePath?: boolean;
      triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>;
      _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["availableTriggers"]
  >;

  export type AvailableTriggersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      serviceType?: boolean;
      appId?: boolean;
      metadata?: boolean;
      imagePath?: boolean;
    },
    ExtArgs["result"]["availableTriggers"]
  >;

  export type AvailableTriggersSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    serviceType?: boolean;
    appId?: boolean;
    metadata?: boolean;
    imagePath?: boolean;
  };

  export type AvailableTriggersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "type" | "serviceType" | "appId" | "metadata" | "imagePath",
    ExtArgs["result"]["availableTriggers"]
  >;
  export type AvailableTriggersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>;
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AvailableTriggersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AvailableTriggersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AvailableTriggers";
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        serviceType: string;
        appId: string | null;
        metadata: Prisma.JsonValue;
        imagePath: string;
      },
      ExtArgs["result"]["availableTriggers"]
    >;
    composites: {};
  };

  type AvailableTriggersGetPayload<
    S extends boolean | null | undefined | AvailableTriggersDefaultArgs,
  > = $Result.GetResult<Prisma.$AvailableTriggersPayload, S>;

  type AvailableTriggersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AvailableTriggersFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AvailableTriggersCountAggregateInputType | true;
  };

  export interface AvailableTriggersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AvailableTriggers"];
      meta: { name: "AvailableTriggers" };
    };
    /**
     * Find zero or one AvailableTriggers that matches the filter.
     * @param {AvailableTriggersFindUniqueArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggersFindUniqueArgs>(
      args: SelectSubset<T, AvailableTriggersFindUniqueArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AvailableTriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggersFindUniqueOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggersFindFirstArgs>(
      args?: SelectSubset<T, AvailableTriggersFindFirstArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AvailableTriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AvailableTriggersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany()
     *
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvailableTriggersFindManyArgs>(
      args?: SelectSubset<T, AvailableTriggersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AvailableTriggers.
     * @param {AvailableTriggersCreateArgs} args - Arguments to create a AvailableTriggers.
     * @example
     * // Create one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.create({
     *   data: {
     *     // ... data to create a AvailableTriggers
     *   }
     * })
     *
     */
    create<T extends AvailableTriggersCreateArgs>(
      args: SelectSubset<T, AvailableTriggersCreateArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggersCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvailableTriggersCreateManyArgs>(
      args?: SelectSubset<T, AvailableTriggersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggersCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvailableTriggersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AvailableTriggersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AvailableTriggers.
     * @param {AvailableTriggersDeleteArgs} args - Arguments to delete one AvailableTriggers.
     * @example
     * // Delete one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.delete({
     *   where: {
     *     // ... filter to delete one AvailableTriggers
     *   }
     * })
     *
     */
    delete<T extends AvailableTriggersDeleteArgs>(
      args: SelectSubset<T, AvailableTriggersDeleteArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AvailableTriggers.
     * @param {AvailableTriggersUpdateArgs} args - Arguments to update one AvailableTriggers.
     * @example
     * // Update one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvailableTriggersUpdateArgs>(
      args: SelectSubset<T, AvailableTriggersUpdateArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggersDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvailableTriggersDeleteManyArgs>(
      args?: SelectSubset<T, AvailableTriggersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvailableTriggersUpdateManyArgs>(
      args: SelectSubset<T, AvailableTriggersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AvailableTriggers.
     * @param {AvailableTriggersUpsertArgs} args - Arguments to update or create a AvailableTriggers.
     * @example
     * // Update or create a AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.upsert({
     *   create: {
     *     // ... data to create a AvailableTriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggersUpsertArgs>(
      args: SelectSubset<T, AvailableTriggersUpsertArgs<ExtArgs>>,
    ): Prisma__AvailableTriggersClient<
      $Result.GetResult<
        Prisma.$AvailableTriggersPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTriggers.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
     **/
    count<T extends AvailableTriggersCountArgs>(
      args?: Subset<T, AvailableTriggersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              AvailableTriggersCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AvailableTriggersAggregateArgs>(
      args: Subset<T, AvailableTriggersAggregateArgs>,
    ): Prisma.PrismaPromise<GetAvailableTriggersAggregateType<T>>;

    /**
     * Group by AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AvailableTriggersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggersGroupByArgs["orderBy"] }
        : { orderBy?: AvailableTriggersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AvailableTriggersGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAvailableTriggersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvailableTriggers model
     */
    readonly fields: AvailableTriggersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTriggers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    triggers<T extends AvailableTriggers$triggersArgs<ExtArgs> = {}>(
      args?: Subset<T, AvailableTriggers$triggersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TriggerPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AvailableTriggers model
   */
  interface AvailableTriggersFieldRefs {
    readonly id: FieldRef<"AvailableTriggers", "String">;
    readonly name: FieldRef<"AvailableTriggers", "String">;
    readonly type: FieldRef<"AvailableTriggers", "String">;
    readonly serviceType: FieldRef<"AvailableTriggers", "String">;
    readonly appId: FieldRef<"AvailableTriggers", "String">;
    readonly metadata: FieldRef<"AvailableTriggers", "Json">;
    readonly imagePath: FieldRef<"AvailableTriggers", "String">;
  }

  // Custom InputTypes
  /**
   * AvailableTriggers findUnique
   */
  export type AvailableTriggersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput;
  };

  /**
   * AvailableTriggers findUniqueOrThrow
   */
  export type AvailableTriggersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput;
  };

  /**
   * AvailableTriggers findFirst
   */
  export type AvailableTriggersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?:
      | AvailableTriggersOrderByWithRelationInput
      | AvailableTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?:
      | AvailableTriggersScalarFieldEnum
      | AvailableTriggersScalarFieldEnum[];
  };

  /**
   * AvailableTriggers findFirstOrThrow
   */
  export type AvailableTriggersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?:
      | AvailableTriggersOrderByWithRelationInput
      | AvailableTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?:
      | AvailableTriggersScalarFieldEnum
      | AvailableTriggersScalarFieldEnum[];
  };

  /**
   * AvailableTriggers findMany
   */
  export type AvailableTriggersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?:
      | AvailableTriggersOrderByWithRelationInput
      | AvailableTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number;
    distinct?:
      | AvailableTriggersScalarFieldEnum
      | AvailableTriggersScalarFieldEnum[];
  };

  /**
   * AvailableTriggers create
   */
  export type AvailableTriggersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvailableTriggers.
     */
    data: XOR<
      AvailableTriggersCreateInput,
      AvailableTriggersUncheckedCreateInput
    >;
  };

  /**
   * AvailableTriggers createMany
   */
  export type AvailableTriggersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AvailableTriggers createManyAndReturn
   */
  export type AvailableTriggersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AvailableTriggers update
   */
  export type AvailableTriggersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvailableTriggers.
     */
    data: XOR<
      AvailableTriggersUpdateInput,
      AvailableTriggersUncheckedUpdateInput
    >;
    /**
     * Choose, which AvailableTriggers to update.
     */
    where: AvailableTriggersWhereUniqueInput;
  };

  /**
   * AvailableTriggers updateMany
   */
  export type AvailableTriggersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<
      AvailableTriggersUpdateManyMutationInput,
      AvailableTriggersUncheckedUpdateManyInput
    >;
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput;
  };

  /**
   * AvailableTriggers upsert
   */
  export type AvailableTriggersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvailableTriggers to update in case it exists.
     */
    where: AvailableTriggersWhereUniqueInput;
    /**
     * In case the AvailableTriggers found by the `where` argument doesn't exist, create a new AvailableTriggers with this data.
     */
    create: XOR<
      AvailableTriggersCreateInput,
      AvailableTriggersUncheckedCreateInput
    >;
    /**
     * In case the AvailableTriggers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      AvailableTriggersUpdateInput,
      AvailableTriggersUncheckedUpdateInput
    >;
  };

  /**
   * AvailableTriggers delete
   */
  export type AvailableTriggersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
    /**
     * Filter which AvailableTriggers to delete.
     */
    where: AvailableTriggersWhereUniqueInput;
  };

  /**
   * AvailableTriggers deleteMany
   */
  export type AvailableTriggersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggersWhereInput;
  };

  /**
   * AvailableTriggers.triggers
   */
  export type AvailableTriggers$triggersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    where?: TriggerWhereInput;
    orderBy?:
      | TriggerOrderByWithRelationInput
      | TriggerOrderByWithRelationInput[];
    cursor?: TriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[];
  };

  /**
   * AvailableTriggers without action
   */
  export type AvailableTriggersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null;
  };

  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null;
    _avg: ActionAvgAggregateOutputType | null;
    _sum: ActionSumAggregateOutputType | null;
    _min: ActionMinAggregateOutputType | null;
    _max: ActionMaxAggregateOutputType | null;
  };

  export type ActionAvgAggregateOutputType = {
    zapId: number | null;
    sortingOrder: number | null;
  };

  export type ActionSumAggregateOutputType = {
    zapId: number | null;
    sortingOrder: number | null;
  };

  export type ActionMinAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    success: boolean | null;
    optionId: string | null;
    actionId: string | null;
    sortingOrder: number | null;
    connectionId: string | null;
  };

  export type ActionMaxAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    success: boolean | null;
    optionId: string | null;
    actionId: string | null;
    sortingOrder: number | null;
    connectionId: string | null;
  };

  export type ActionCountAggregateOutputType = {
    id: number;
    zapId: number;
    success: number;
    configuration: number;
    optionId: number;
    actionId: number;
    sortingOrder: number;
    connectionId: number;
    _all: number;
  };

  export type ActionAvgAggregateInputType = {
    zapId?: true;
    sortingOrder?: true;
  };

  export type ActionSumAggregateInputType = {
    zapId?: true;
    sortingOrder?: true;
  };

  export type ActionMinAggregateInputType = {
    id?: true;
    zapId?: true;
    success?: true;
    optionId?: true;
    actionId?: true;
    sortingOrder?: true;
    connectionId?: true;
  };

  export type ActionMaxAggregateInputType = {
    id?: true;
    zapId?: true;
    success?: true;
    optionId?: true;
    actionId?: true;
    sortingOrder?: true;
    connectionId?: true;
  };

  export type ActionCountAggregateInputType = {
    id?: true;
    zapId?: true;
    success?: true;
    configuration?: true;
    optionId?: true;
    actionId?: true;
    sortingOrder?: true;
    connectionId?: true;
    _all?: true;
  };

  export type ActionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Actions
     **/
    _count?: true | ActionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ActionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ActionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ActionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ActionMaxAggregateInputType;
  };

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
    [P in keyof T & keyof AggregateAction]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>;
  };

  export type ActionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionWhereInput;
    orderBy?:
      | ActionOrderByWithAggregationInput
      | ActionOrderByWithAggregationInput[];
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum;
    having?: ActionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActionCountAggregateInputType | true;
    _avg?: ActionAvgAggregateInputType;
    _sum?: ActionSumAggregateInputType;
    _min?: ActionMinAggregateInputType;
    _max?: ActionMaxAggregateInputType;
  };

  export type ActionGroupByOutputType = {
    id: string;
    zapId: number;
    success: boolean | null;
    configuration: JsonValue;
    optionId: string;
    actionId: string;
    sortingOrder: number;
    connectionId: string | null;
    _count: ActionCountAggregateOutputType | null;
    _avg: ActionAvgAggregateOutputType | null;
    _sum: ActionSumAggregateOutputType | null;
    _min: ActionMinAggregateOutputType | null;
    _max: ActionMaxAggregateOutputType | null;
  };

  type GetActionGroupByPayload<T extends ActionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ActionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ActionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>;
        }
      >
    >;

  export type ActionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      success?: boolean;
      configuration?: boolean;
      optionId?: boolean;
      actionId?: boolean;
      sortingOrder?: boolean;
      connectionId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      actionDetails?: boolean | AvailableActionsDefaultArgs<ExtArgs>;
      userConnection?: boolean | Action$userConnectionArgs<ExtArgs>;
      zapRunFailures?: boolean | Action$zapRunFailuresArgs<ExtArgs>;
      note?: boolean | Action$noteArgs<ExtArgs>;
      _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["action"]
  >;

  export type ActionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      success?: boolean;
      configuration?: boolean;
      optionId?: boolean;
      actionId?: boolean;
      sortingOrder?: boolean;
      connectionId?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      actionDetails?: boolean | AvailableActionsDefaultArgs<ExtArgs>;
      userConnection?: boolean | Action$userConnectionArgs<ExtArgs>;
    },
    ExtArgs["result"]["action"]
  >;

  export type ActionSelectScalar = {
    id?: boolean;
    zapId?: boolean;
    success?: boolean;
    configuration?: boolean;
    optionId?: boolean;
    actionId?: boolean;
    sortingOrder?: boolean;
    connectionId?: boolean;
  };

  export type ActionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "zapId"
    | "success"
    | "configuration"
    | "optionId"
    | "actionId"
    | "sortingOrder"
    | "connectionId",
    ExtArgs["result"]["action"]
  >;
  export type ActionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    actionDetails?: boolean | AvailableActionsDefaultArgs<ExtArgs>;
    userConnection?: boolean | Action$userConnectionArgs<ExtArgs>;
    zapRunFailures?: boolean | Action$zapRunFailuresArgs<ExtArgs>;
    note?: boolean | Action$noteArgs<ExtArgs>;
    _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ActionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    actionDetails?: boolean | AvailableActionsDefaultArgs<ExtArgs>;
    userConnection?: boolean | Action$userConnectionArgs<ExtArgs>;
  };

  export type $ActionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Action";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>;
      actionDetails: Prisma.$AvailableActionsPayload<ExtArgs>;
      userConnection: Prisma.$UserConnectionPayload<ExtArgs> | null;
      zapRunFailures: Prisma.$ZapRunPayload<ExtArgs>[];
      note: Prisma.$ZapNotePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapId: number;
        success: boolean | null;
        configuration: Prisma.JsonValue;
        optionId: string;
        actionId: string;
        sortingOrder: number;
        connectionId: string | null;
      },
      ExtArgs["result"]["action"]
    >;
    composites: {};
  };

  type ActionGetPayload<
    S extends boolean | null | undefined | ActionDefaultArgs,
  > = $Result.GetResult<Prisma.$ActionPayload, S>;

  type ActionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ActionFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ActionCountAggregateInputType | true;
  };

  export interface ActionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Action"];
      meta: { name: "Action" };
    };
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(
      args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(
      args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     *
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ActionFindManyArgs>(
      args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     *
     */
    create<T extends ActionCreateArgs>(
      args: SelectSubset<T, ActionCreateArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActionCreateManyArgs>(
      args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     *
     */
    delete<T extends ActionDeleteArgs>(
      args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActionUpdateArgs>(
      args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActionDeleteManyArgs>(
      args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActionUpdateManyArgs>(
      args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(
      args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
     **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ActionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ActionAggregateArgs>(
      args: Subset<T, ActionAggregateArgs>,
    ): Prisma.PrismaPromise<GetActionAggregateType<T>>;

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs["orderBy"] }
        : { orderBy?: ActionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetActionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Action model
     */
    readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    actionDetails<T extends AvailableActionsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AvailableActionsDefaultArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      | $Result.GetResult<
          Prisma.$AvailableActionsPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    userConnection<T extends Action$userConnectionArgs<ExtArgs> = {}>(
      args?: Subset<T, Action$userConnectionArgs<ExtArgs>>,
    ): Prisma__UserConnectionClient<
      $Result.GetResult<
        Prisma.$UserConnectionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    zapRunFailures<T extends Action$zapRunFailuresArgs<ExtArgs> = {}>(
      args?: Subset<T, Action$zapRunFailuresArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ZapRunPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    note<T extends Action$noteArgs<ExtArgs> = {}>(
      args?: Subset<T, Action$noteArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", "String">;
    readonly zapId: FieldRef<"Action", "Int">;
    readonly success: FieldRef<"Action", "Boolean">;
    readonly configuration: FieldRef<"Action", "Json">;
    readonly optionId: FieldRef<"Action", "String">;
    readonly actionId: FieldRef<"Action", "String">;
    readonly sortingOrder: FieldRef<"Action", "Int">;
    readonly connectionId: FieldRef<"Action", "String">;
  }

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput;
  };

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput;
  };

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actions.
     */
    skip?: number;
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * Action create
   */
  export type ActionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>;
  };

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Action update
   */
  export type ActionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>;
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput;
  };

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>;
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput;
  };

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput;
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>;
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>;
  };

  /**
   * Action delete
   */
  export type ActionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput;
  };

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput;
  };

  /**
   * Action.userConnection
   */
  export type Action$userConnectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserConnection
     */
    select?: UserConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserConnection
     */
    omit?: UserConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConnectionInclude<ExtArgs> | null;
    where?: UserConnectionWhereInput;
  };

  /**
   * Action.zapRunFailures
   */
  export type Action$zapRunFailuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    where?: ZapRunWhereInput;
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    cursor?: ZapRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[];
  };

  /**
   * Action.note
   */
  export type Action$noteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    where?: ZapNoteWhereInput;
  };

  /**
   * Action without action
   */
  export type ActionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
  };

  /**
   * Model AvailableActions
   */

  export type AggregateAvailableActions = {
    _count: AvailableActionsCountAggregateOutputType | null;
    _min: AvailableActionsMinAggregateOutputType | null;
    _max: AvailableActionsMaxAggregateOutputType | null;
  };

  export type AvailableActionsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    serviceType: string | null;
    appId: string | null;
    imagePath: string | null;
  };

  export type AvailableActionsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    serviceType: string | null;
    appId: string | null;
    imagePath: string | null;
  };

  export type AvailableActionsCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    serviceType: number;
    appId: number;
    imagePath: number;
    metadata: number;
    _all: number;
  };

  export type AvailableActionsMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    imagePath?: true;
  };

  export type AvailableActionsMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    imagePath?: true;
  };

  export type AvailableActionsCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    serviceType?: true;
    appId?: true;
    imagePath?: true;
    metadata?: true;
    _all?: true;
  };

  export type AvailableActionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AvailableActions to aggregate.
     */
    where?: AvailableActionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?:
      | AvailableActionsOrderByWithRelationInput
      | AvailableActionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AvailableActionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvailableActions
     **/
    _count?: true | AvailableActionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AvailableActionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AvailableActionsMaxAggregateInputType;
  };

  export type GetAvailableActionsAggregateType<
    T extends AvailableActionsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAvailableActions]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableActions[P]>
      : GetScalarType<T[P], AggregateAvailableActions[P]>;
  };

  export type AvailableActionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AvailableActionsWhereInput;
    orderBy?:
      | AvailableActionsOrderByWithAggregationInput
      | AvailableActionsOrderByWithAggregationInput[];
    by: AvailableActionsScalarFieldEnum[] | AvailableActionsScalarFieldEnum;
    having?: AvailableActionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvailableActionsCountAggregateInputType | true;
    _min?: AvailableActionsMinAggregateInputType;
    _max?: AvailableActionsMaxAggregateInputType;
  };

  export type AvailableActionsGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    serviceType: string;
    appId: string | null;
    imagePath: string;
    metadata: JsonValue;
    _count: AvailableActionsCountAggregateOutputType | null;
    _min: AvailableActionsMinAggregateOutputType | null;
    _max: AvailableActionsMaxAggregateOutputType | null;
  };

  type GetAvailableActionsGroupByPayload<
    T extends AvailableActionsGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionsGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof AvailableActionsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
          : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>;
      }
    >
  >;

  export type AvailableActionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      serviceType?: boolean;
      appId?: boolean;
      imagePath?: boolean;
      metadata?: boolean;
      actions?: boolean | AvailableActions$actionsArgs<ExtArgs>;
      _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["availableActions"]
  >;

  export type AvailableActionsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      serviceType?: boolean;
      appId?: boolean;
      imagePath?: boolean;
      metadata?: boolean;
    },
    ExtArgs["result"]["availableActions"]
  >;

  export type AvailableActionsSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    serviceType?: boolean;
    appId?: boolean;
    imagePath?: boolean;
    metadata?: boolean;
  };

  export type AvailableActionsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "type" | "serviceType" | "appId" | "imagePath" | "metadata",
    ExtArgs["result"]["availableActions"]
  >;
  export type AvailableActionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    actions?: boolean | AvailableActions$actionsArgs<ExtArgs>;
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AvailableActionsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AvailableActionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AvailableActions";
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        serviceType: string;
        appId: string | null;
        imagePath: string;
        metadata: Prisma.JsonValue;
      },
      ExtArgs["result"]["availableActions"]
    >;
    composites: {};
  };

  type AvailableActionsGetPayload<
    S extends boolean | null | undefined | AvailableActionsDefaultArgs,
  > = $Result.GetResult<Prisma.$AvailableActionsPayload, S>;

  type AvailableActionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AvailableActionsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AvailableActionsCountAggregateInputType | true;
  };

  export interface AvailableActionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AvailableActions"];
      meta: { name: "AvailableActions" };
    };
    /**
     * Find zero or one AvailableActions that matches the filter.
     * @param {AvailableActionsFindUniqueArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionsFindUniqueArgs>(
      args: SelectSubset<T, AvailableActionsFindUniqueArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AvailableActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionsFindUniqueOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AvailableActionsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionsFindFirstArgs>(
      args?: SelectSubset<T, AvailableActionsFindFirstArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AvailableActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AvailableActionsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableActions.findMany()
     *
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableActions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvailableActionsFindManyArgs>(
      args?: SelectSubset<T, AvailableActionsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AvailableActions.
     * @param {AvailableActionsCreateArgs} args - Arguments to create a AvailableActions.
     * @example
     * // Create one AvailableActions
     * const AvailableActions = await prisma.availableActions.create({
     *   data: {
     *     // ... data to create a AvailableActions
     *   }
     * })
     *
     */
    create<T extends AvailableActionsCreateArgs>(
      args: SelectSubset<T, AvailableActionsCreateArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AvailableActions.
     * @param {AvailableActionsCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvailableActionsCreateManyArgs>(
      args?: SelectSubset<T, AvailableActionsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionsCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvailableActionsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AvailableActionsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AvailableActions.
     * @param {AvailableActionsDeleteArgs} args - Arguments to delete one AvailableActions.
     * @example
     * // Delete one AvailableActions
     * const AvailableActions = await prisma.availableActions.delete({
     *   where: {
     *     // ... filter to delete one AvailableActions
     *   }
     * })
     *
     */
    delete<T extends AvailableActionsDeleteArgs>(
      args: SelectSubset<T, AvailableActionsDeleteArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AvailableActions.
     * @param {AvailableActionsUpdateArgs} args - Arguments to update one AvailableActions.
     * @example
     * // Update one AvailableActions
     * const availableActions = await prisma.availableActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvailableActionsUpdateArgs>(
      args: SelectSubset<T, AvailableActionsUpdateArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionsDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvailableActionsDeleteManyArgs>(
      args?: SelectSubset<T, AvailableActionsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvailableActionsUpdateManyArgs>(
      args: SelectSubset<T, AvailableActionsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AvailableActions.
     * @param {AvailableActionsUpsertArgs} args - Arguments to update or create a AvailableActions.
     * @example
     * // Update or create a AvailableActions
     * const availableActions = await prisma.availableActions.upsert({
     *   create: {
     *     // ... data to create a AvailableActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableActions we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionsUpsertArgs>(
      args: SelectSubset<T, AvailableActionsUpsertArgs<ExtArgs>>,
    ): Prisma__AvailableActionsClient<
      $Result.GetResult<
        Prisma.$AvailableActionsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableActions.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
     **/
    count<T extends AvailableActionsCountArgs>(
      args?: Subset<T, AvailableActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AvailableActionsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AvailableActionsAggregateArgs>(
      args: Subset<T, AvailableActionsAggregateArgs>,
    ): Prisma.PrismaPromise<GetAvailableActionsAggregateType<T>>;

    /**
     * Group by AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AvailableActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionsGroupByArgs["orderBy"] }
        : { orderBy?: AvailableActionsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AvailableActionsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAvailableActionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvailableActions model
     */
    readonly fields: AvailableActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actions<T extends AvailableActions$actionsArgs<ExtArgs> = {}>(
      args?: Subset<T, AvailableActions$actionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AvailableActions model
   */
  interface AvailableActionsFieldRefs {
    readonly id: FieldRef<"AvailableActions", "String">;
    readonly name: FieldRef<"AvailableActions", "String">;
    readonly type: FieldRef<"AvailableActions", "String">;
    readonly serviceType: FieldRef<"AvailableActions", "String">;
    readonly appId: FieldRef<"AvailableActions", "String">;
    readonly imagePath: FieldRef<"AvailableActions", "String">;
    readonly metadata: FieldRef<"AvailableActions", "Json">;
  }

  // Custom InputTypes
  /**
   * AvailableActions findUnique
   */
  export type AvailableActionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput;
  };

  /**
   * AvailableActions findUniqueOrThrow
   */
  export type AvailableActionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput;
  };

  /**
   * AvailableActions findFirst
   */
  export type AvailableActionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?:
      | AvailableActionsOrderByWithRelationInput
      | AvailableActionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvailableActions.
     */
    distinct?:
      | AvailableActionsScalarFieldEnum
      | AvailableActionsScalarFieldEnum[];
  };

  /**
   * AvailableActions findFirstOrThrow
   */
  export type AvailableActionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?:
      | AvailableActionsOrderByWithRelationInput
      | AvailableActionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvailableActions.
     */
    distinct?:
      | AvailableActionsScalarFieldEnum
      | AvailableActionsScalarFieldEnum[];
  };

  /**
   * AvailableActions findMany
   */
  export type AvailableActionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?:
      | AvailableActionsOrderByWithRelationInput
      | AvailableActionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvailableActions.
     */
    skip?: number;
    distinct?:
      | AvailableActionsScalarFieldEnum
      | AvailableActionsScalarFieldEnum[];
  };

  /**
   * AvailableActions create
   */
  export type AvailableActionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvailableActions.
     */
    data: XOR<
      AvailableActionsCreateInput,
      AvailableActionsUncheckedCreateInput
    >;
  };

  /**
   * AvailableActions createMany
   */
  export type AvailableActionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AvailableActions createManyAndReturn
   */
  export type AvailableActionsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AvailableActions update
   */
  export type AvailableActionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvailableActions.
     */
    data: XOR<
      AvailableActionsUpdateInput,
      AvailableActionsUncheckedUpdateInput
    >;
    /**
     * Choose, which AvailableActions to update.
     */
    where: AvailableActionsWhereUniqueInput;
  };

  /**
   * AvailableActions updateMany
   */
  export type AvailableActionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<
      AvailableActionsUpdateManyMutationInput,
      AvailableActionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput;
  };

  /**
   * AvailableActions upsert
   */
  export type AvailableActionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvailableActions to update in case it exists.
     */
    where: AvailableActionsWhereUniqueInput;
    /**
     * In case the AvailableActions found by the `where` argument doesn't exist, create a new AvailableActions with this data.
     */
    create: XOR<
      AvailableActionsCreateInput,
      AvailableActionsUncheckedCreateInput
    >;
    /**
     * In case the AvailableActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      AvailableActionsUpdateInput,
      AvailableActionsUncheckedUpdateInput
    >;
  };

  /**
   * AvailableActions delete
   */
  export type AvailableActionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
    /**
     * Filter which AvailableActions to delete.
     */
    where: AvailableActionsWhereUniqueInput;
  };

  /**
   * AvailableActions deleteMany
   */
  export type AvailableActionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionsWhereInput;
  };

  /**
   * AvailableActions.actions
   */
  export type AvailableActions$actionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    where?: ActionWhereInput;
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[];
    cursor?: ActionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[];
  };

  /**
   * AvailableActions without action
   */
  export type AvailableActionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null;
  };

  /**
   * Model ZapRun
   */

  export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null;
    _avg: ZapRunAvgAggregateOutputType | null;
    _sum: ZapRunSumAggregateOutputType | null;
    _min: ZapRunMinAggregateOutputType | null;
    _max: ZapRunMaxAggregateOutputType | null;
  };

  export type ZapRunAvgAggregateOutputType = {
    zapId: number | null;
  };

  export type ZapRunSumAggregateOutputType = {
    zapId: number | null;
  };

  export type ZapRunMinAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    createdAt: Date | null;
    completedAt: Date | null;
    status: $Enums.ZapRunStatus | null;
    failureReason: string | null;
    failedActionId: string | null;
  };

  export type ZapRunMaxAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    createdAt: Date | null;
    completedAt: Date | null;
    status: $Enums.ZapRunStatus | null;
    failureReason: string | null;
    failedActionId: string | null;
  };

  export type ZapRunCountAggregateOutputType = {
    id: number;
    zapId: number;
    createdAt: number;
    completedAt: number;
    status: number;
    failureReason: number;
    failedActionId: number;
    metaData: number;
    _all: number;
  };

  export type ZapRunAvgAggregateInputType = {
    zapId?: true;
  };

  export type ZapRunSumAggregateInputType = {
    zapId?: true;
  };

  export type ZapRunMinAggregateInputType = {
    id?: true;
    zapId?: true;
    createdAt?: true;
    completedAt?: true;
    status?: true;
    failureReason?: true;
    failedActionId?: true;
  };

  export type ZapRunMaxAggregateInputType = {
    id?: true;
    zapId?: true;
    createdAt?: true;
    completedAt?: true;
    status?: true;
    failureReason?: true;
    failedActionId?: true;
  };

  export type ZapRunCountAggregateInputType = {
    id?: true;
    zapId?: true;
    createdAt?: true;
    completedAt?: true;
    status?: true;
    failureReason?: true;
    failedActionId?: true;
    metaData?: true;
    _all?: true;
  };

  export type ZapRunAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapRun to aggregate.
     */
    where?: ZapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ZapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ZapRuns
     **/
    _count?: true | ZapRunCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ZapRunAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ZapRunSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ZapRunMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ZapRunMaxAggregateInputType;
  };

  export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
    [P in keyof T & keyof AggregateZapRun]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRun[P]>
      : GetScalarType<T[P], AggregateZapRun[P]>;
  };

  export type ZapRunGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapRunWhereInput;
    orderBy?:
      | ZapRunOrderByWithAggregationInput
      | ZapRunOrderByWithAggregationInput[];
    by: ZapRunScalarFieldEnum[] | ZapRunScalarFieldEnum;
    having?: ZapRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapRunCountAggregateInputType | true;
    _avg?: ZapRunAvgAggregateInputType;
    _sum?: ZapRunSumAggregateInputType;
    _min?: ZapRunMinAggregateInputType;
    _max?: ZapRunMaxAggregateInputType;
  };

  export type ZapRunGroupByOutputType = {
    id: string;
    zapId: number;
    createdAt: Date;
    completedAt: Date | null;
    status: $Enums.ZapRunStatus;
    failureReason: string | null;
    failedActionId: string | null;
    metaData: JsonValue;
    _count: ZapRunCountAggregateOutputType | null;
    _avg: ZapRunAvgAggregateOutputType | null;
    _sum: ZapRunSumAggregateOutputType | null;
    _min: ZapRunMinAggregateOutputType | null;
    _max: ZapRunMaxAggregateOutputType | null;
  };

  type GetZapRunGroupByPayload<T extends ZapRunGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ZapRunGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ZapRunGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunGroupByOutputType[P]>;
        }
      >
    >;

  export type ZapRunSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      createdAt?: boolean;
      completedAt?: boolean;
      status?: boolean;
      failureReason?: boolean;
      failedActionId?: boolean;
      metaData?: boolean;
      failedAction?: boolean | ZapRun$failedActionArgs<ExtArgs>;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      zapRunOutBox?: boolean | ZapRun$zapRunOutBoxArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapRun"]
  >;

  export type ZapRunSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      createdAt?: boolean;
      completedAt?: boolean;
      status?: boolean;
      failureReason?: boolean;
      failedActionId?: boolean;
      metaData?: boolean;
      failedAction?: boolean | ZapRun$failedActionArgs<ExtArgs>;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapRun"]
  >;

  export type ZapRunSelectScalar = {
    id?: boolean;
    zapId?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    failureReason?: boolean;
    failedActionId?: boolean;
    metaData?: boolean;
  };

  export type ZapRunOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "zapId"
    | "createdAt"
    | "completedAt"
    | "status"
    | "failureReason"
    | "failedActionId"
    | "metaData",
    ExtArgs["result"]["zapRun"]
  >;
  export type ZapRunInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    failedAction?: boolean | ZapRun$failedActionArgs<ExtArgs>;
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    zapRunOutBox?: boolean | ZapRun$zapRunOutBoxArgs<ExtArgs>;
  };
  export type ZapRunIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    failedAction?: boolean | ZapRun$failedActionArgs<ExtArgs>;
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
  };

  export type $ZapRunPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ZapRun";
    objects: {
      failedAction: Prisma.$ActionPayload<ExtArgs> | null;
      zap: Prisma.$ZapPayload<ExtArgs>;
      zapRunOutBox: Prisma.$ZapRunOutboxPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapId: number;
        createdAt: Date;
        completedAt: Date | null;
        status: $Enums.ZapRunStatus;
        failureReason: string | null;
        failedActionId: string | null;
        metaData: Prisma.JsonValue;
      },
      ExtArgs["result"]["zapRun"]
    >;
    composites: {};
  };

  type ZapRunGetPayload<
    S extends boolean | null | undefined | ZapRunDefaultArgs,
  > = $Result.GetResult<Prisma.$ZapRunPayload, S>;

  type ZapRunCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ZapRunFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ZapRunCountAggregateInputType | true;
  };

  export interface ZapRunDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ZapRun"];
      meta: { name: "ZapRun" };
    };
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {ZapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunFindUniqueArgs>(
      args: SelectSubset<T, ZapRunFindUniqueArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ZapRunFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunFindFirstArgs>(
      args?: SelectSubset<T, ZapRunFindFirstArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZapRunFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     *
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZapRunFindManyArgs>(
      args?: SelectSubset<T, ZapRunFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ZapRun.
     * @param {ZapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     *
     */
    create<T extends ZapRunCreateArgs>(
      args: SelectSubset<T, ZapRunCreateArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ZapRuns.
     * @param {ZapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZapRunCreateManyArgs>(
      args?: SelectSubset<T, ZapRunCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {ZapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZapRunCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ZapRunCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ZapRun.
     * @param {ZapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     *
     */
    delete<T extends ZapRunDeleteArgs>(
      args: SelectSubset<T, ZapRunDeleteArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ZapRun.
     * @param {ZapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZapRunUpdateArgs>(
      args: SelectSubset<T, ZapRunUpdateArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ZapRuns.
     * @param {ZapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZapRunDeleteManyArgs>(
      args?: SelectSubset<T, ZapRunDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZapRunUpdateManyArgs>(
      args: SelectSubset<T, ZapRunUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ZapRun.
     * @param {ZapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunUpsertArgs>(
      args: SelectSubset<T, ZapRunUpsertArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      $Result.GetResult<
        Prisma.$ZapRunPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
     **/
    count<T extends ZapRunCountArgs>(
      args?: Subset<T, ZapRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ZapRunCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ZapRunAggregateArgs>(
      args: Subset<T, ZapRunAggregateArgs>,
    ): Prisma.PrismaPromise<GetZapRunAggregateType<T>>;

    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ZapRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunGroupByArgs["orderBy"] }
        : { orderBy?: ZapRunGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ZapRunGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetZapRunGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ZapRun model
     */
    readonly fields: ZapRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    failedAction<T extends ZapRun$failedActionArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapRun$failedActionArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    zapRunOutBox<T extends ZapRun$zapRunOutBoxArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapRun$zapRunOutBoxArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ZapRun model
   */
  interface ZapRunFieldRefs {
    readonly id: FieldRef<"ZapRun", "String">;
    readonly zapId: FieldRef<"ZapRun", "Int">;
    readonly createdAt: FieldRef<"ZapRun", "DateTime">;
    readonly completedAt: FieldRef<"ZapRun", "DateTime">;
    readonly status: FieldRef<"ZapRun", "ZapRunStatus">;
    readonly failureReason: FieldRef<"ZapRun", "String">;
    readonly failedActionId: FieldRef<"ZapRun", "String">;
    readonly metaData: FieldRef<"ZapRun", "Json">;
  }

  // Custom InputTypes
  /**
   * ZapRun findUnique
   */
  export type ZapRunFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput;
  };

  /**
   * ZapRun findUniqueOrThrow
   */
  export type ZapRunFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput;
  };

  /**
   * ZapRun findFirst
   */
  export type ZapRunFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[];
  };

  /**
   * ZapRun findFirstOrThrow
   */
  export type ZapRunFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[];
  };

  /**
   * ZapRun findMany
   */
  export type ZapRunFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRuns.
     */
    skip?: number;
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[];
  };

  /**
   * ZapRun create
   */
  export type ZapRunCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * The data needed to create a ZapRun.
     */
    data: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>;
  };

  /**
   * ZapRun createMany
   */
  export type ZapRunCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ZapRun createManyAndReturn
   */
  export type ZapRunCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ZapRun update
   */
  export type ZapRunUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * The data needed to update a ZapRun.
     */
    data: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>;
    /**
     * Choose, which ZapRun to update.
     */
    where: ZapRunWhereUniqueInput;
  };

  /**
   * ZapRun updateMany
   */
  export type ZapRunUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyInput>;
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunWhereInput;
  };

  /**
   * ZapRun upsert
   */
  export type ZapRunUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * The filter to search for the ZapRun to update in case it exists.
     */
    where: ZapRunWhereUniqueInput;
    /**
     * In case the ZapRun found by the `where` argument doesn't exist, create a new ZapRun with this data.
     */
    create: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>;
    /**
     * In case the ZapRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>;
  };

  /**
   * ZapRun delete
   */
  export type ZapRunDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
    /**
     * Filter which ZapRun to delete.
     */
    where: ZapRunWhereUniqueInput;
  };

  /**
   * ZapRun deleteMany
   */
  export type ZapRunDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapRuns to delete
     */
    where?: ZapRunWhereInput;
  };

  /**
   * ZapRun.failedAction
   */
  export type ZapRun$failedActionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    where?: ActionWhereInput;
  };

  /**
   * ZapRun.zapRunOutBox
   */
  export type ZapRun$zapRunOutBoxArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    where?: ZapRunOutboxWhereInput;
  };

  /**
   * ZapRun without action
   */
  export type ZapRunDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null;
  };

  /**
   * Model ZapRunOutbox
   */

  export type AggregateZapRunOutbox = {
    _count: ZapRunOutboxCountAggregateOutputType | null;
    _min: ZapRunOutboxMinAggregateOutputType | null;
    _max: ZapRunOutboxMaxAggregateOutputType | null;
  };

  export type ZapRunOutboxMinAggregateOutputType = {
    id: string | null;
    zapRunId: string | null;
  };

  export type ZapRunOutboxMaxAggregateOutputType = {
    id: string | null;
    zapRunId: string | null;
  };

  export type ZapRunOutboxCountAggregateOutputType = {
    id: number;
    zapRunId: number;
    _all: number;
  };

  export type ZapRunOutboxMinAggregateInputType = {
    id?: true;
    zapRunId?: true;
  };

  export type ZapRunOutboxMaxAggregateInputType = {
    id?: true;
    zapRunId?: true;
  };

  export type ZapRunOutboxCountAggregateInputType = {
    id?: true;
    zapRunId?: true;
    _all?: true;
  };

  export type ZapRunOutboxAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapRunOutbox to aggregate.
     */
    where?: ZapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?:
      | ZapRunOutboxOrderByWithRelationInput
      | ZapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ZapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ZapRunOutboxes
     **/
    _count?: true | ZapRunOutboxCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ZapRunOutboxMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ZapRunOutboxMaxAggregateInputType;
  };

  export type GetZapRunOutboxAggregateType<
    T extends ZapRunOutboxAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateZapRunOutbox]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunOutbox[P]>
      : GetScalarType<T[P], AggregateZapRunOutbox[P]>;
  };

  export type ZapRunOutboxGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapRunOutboxWhereInput;
    orderBy?:
      | ZapRunOutboxOrderByWithAggregationInput
      | ZapRunOutboxOrderByWithAggregationInput[];
    by: ZapRunOutboxScalarFieldEnum[] | ZapRunOutboxScalarFieldEnum;
    having?: ZapRunOutboxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapRunOutboxCountAggregateInputType | true;
    _min?: ZapRunOutboxMinAggregateInputType;
    _max?: ZapRunOutboxMaxAggregateInputType;
  };

  export type ZapRunOutboxGroupByOutputType = {
    id: string;
    zapRunId: string;
    _count: ZapRunOutboxCountAggregateOutputType | null;
    _min: ZapRunOutboxMinAggregateOutputType | null;
    _max: ZapRunOutboxMaxAggregateOutputType | null;
  };

  type GetZapRunOutboxGroupByPayload<T extends ZapRunOutboxGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ZapRunOutboxGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ZapRunOutboxGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>;
        }
      >
    >;

  export type ZapRunOutboxSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapRunId?: boolean;
      zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapRunOutbox"]
  >;

  export type ZapRunOutboxSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapRunId?: boolean;
      zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapRunOutbox"]
  >;

  export type ZapRunOutboxSelectScalar = {
    id?: boolean;
    zapRunId?: boolean;
  };

  export type ZapRunOutboxOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id" | "zapRunId", ExtArgs["result"]["zapRunOutbox"]>;
  export type ZapRunOutboxInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>;
  };
  export type ZapRunOutboxIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>;
  };

  export type $ZapRunOutboxPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ZapRunOutbox";
    objects: {
      zapRun: Prisma.$ZapRunPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapRunId: string;
      },
      ExtArgs["result"]["zapRunOutbox"]
    >;
    composites: {};
  };

  type ZapRunOutboxGetPayload<
    S extends boolean | null | undefined | ZapRunOutboxDefaultArgs,
  > = $Result.GetResult<Prisma.$ZapRunOutboxPayload, S>;

  type ZapRunOutboxCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ZapRunOutboxFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ZapRunOutboxCountAggregateInputType | true;
  };

  export interface ZapRunOutboxDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ZapRunOutbox"];
      meta: { name: "ZapRunOutbox" };
    };
    /**
     * Find zero or one ZapRunOutbox that matches the filter.
     * @param {ZapRunOutboxFindUniqueArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunOutboxFindUniqueArgs>(
      args: SelectSubset<T, ZapRunOutboxFindUniqueArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ZapRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunOutboxFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunOutboxFindFirstArgs>(
      args?: SelectSubset<T, ZapRunOutboxFindFirstArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunOutboxFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ZapRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
     *
     * // Get first 10 ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZapRunOutboxFindManyArgs>(
      args?: SelectSubset<T, ZapRunOutboxFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ZapRunOutbox.
     * @param {ZapRunOutboxCreateArgs} args - Arguments to create a ZapRunOutbox.
     * @example
     * // Create one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.create({
     *   data: {
     *     // ... data to create a ZapRunOutbox
     *   }
     * })
     *
     */
    create<T extends ZapRunOutboxCreateArgs>(
      args: SelectSubset<T, ZapRunOutboxCreateArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ZapRunOutboxes.
     * @param {ZapRunOutboxCreateManyArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZapRunOutboxCreateManyArgs>(
      args?: SelectSubset<T, ZapRunOutboxCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ZapRunOutboxes and returns the data saved in the database.
     * @param {ZapRunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZapRunOutboxCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ZapRunOutbox.
     * @param {ZapRunOutboxDeleteArgs} args - Arguments to delete one ZapRunOutbox.
     * @example
     * // Delete one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutbox
     *   }
     * })
     *
     */
    delete<T extends ZapRunOutboxDeleteArgs>(
      args: SelectSubset<T, ZapRunOutboxDeleteArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ZapRunOutbox.
     * @param {ZapRunOutboxUpdateArgs} args - Arguments to update one ZapRunOutbox.
     * @example
     * // Update one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZapRunOutboxUpdateArgs>(
      args: SelectSubset<T, ZapRunOutboxUpdateArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ZapRunOutboxes.
     * @param {ZapRunOutboxDeleteManyArgs} args - Arguments to filter ZapRunOutboxes to delete.
     * @example
     * // Delete a few ZapRunOutboxes
     * const { count } = await prisma.zapRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZapRunOutboxDeleteManyArgs>(
      args?: SelectSubset<T, ZapRunOutboxDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZapRunOutboxUpdateManyArgs>(
      args: SelectSubset<T, ZapRunOutboxUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ZapRunOutbox.
     * @param {ZapRunOutboxUpsertArgs} args - Arguments to update or create a ZapRunOutbox.
     * @example
     * // Update or create a ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunOutboxUpsertArgs>(
      args: SelectSubset<T, ZapRunOutboxUpsertArgs<ExtArgs>>,
    ): Prisma__ZapRunOutboxClient<
      $Result.GetResult<
        Prisma.$ZapRunOutboxPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxCountArgs} args - Arguments to filter ZapRunOutboxes to count.
     * @example
     * // Count the number of ZapRunOutboxes
     * const count = await prisma.zapRunOutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutboxes we want to count
     *   }
     * })
     **/
    count<T extends ZapRunOutboxCountArgs>(
      args?: Subset<T, ZapRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ZapRunOutboxCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ZapRunOutboxAggregateArgs>(
      args: Subset<T, ZapRunOutboxAggregateArgs>,
    ): Prisma.PrismaPromise<GetZapRunOutboxAggregateType<T>>;

    /**
     * Group by ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ZapRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunOutboxGroupByArgs["orderBy"] }
        : { orderBy?: ZapRunOutboxGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ZapRunOutboxGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetZapRunOutboxGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ZapRunOutbox model
     */
    readonly fields: ZapRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunOutboxClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zapRun<T extends ZapRunDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapRunDefaultArgs<ExtArgs>>,
    ): Prisma__ZapRunClient<
      | $Result.GetResult<
          Prisma.$ZapRunPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ZapRunOutbox model
   */
  interface ZapRunOutboxFieldRefs {
    readonly id: FieldRef<"ZapRunOutbox", "String">;
    readonly zapRunId: FieldRef<"ZapRunOutbox", "String">;
  }

  // Custom InputTypes
  /**
   * ZapRunOutbox findUnique
   */
  export type ZapRunOutboxFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput;
  };

  /**
   * ZapRunOutbox findUniqueOrThrow
   */
  export type ZapRunOutboxFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput;
  };

  /**
   * ZapRunOutbox findFirst
   */
  export type ZapRunOutboxFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?:
      | ZapRunOutboxOrderByWithRelationInput
      | ZapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[];
  };

  /**
   * ZapRunOutbox findFirstOrThrow
   */
  export type ZapRunOutboxFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?:
      | ZapRunOutboxOrderByWithRelationInput
      | ZapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[];
  };

  /**
   * ZapRunOutbox findMany
   */
  export type ZapRunOutboxFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which ZapRunOutboxes to fetch.
     */
    where?: ZapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?:
      | ZapRunOutboxOrderByWithRelationInput
      | ZapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number;
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[];
  };

  /**
   * ZapRunOutbox create
   */
  export type ZapRunOutboxCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to create a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>;
  };

  /**
   * ZapRunOutbox createMany
   */
  export type ZapRunOutboxCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ZapRunOutbox createManyAndReturn
   */
  export type ZapRunOutboxCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ZapRunOutbox update
   */
  export type ZapRunOutboxUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to update a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>;
    /**
     * Choose, which ZapRunOutbox to update.
     */
    where: ZapRunOutboxWhereUniqueInput;
  };

  /**
   * ZapRunOutbox updateMany
   */
  export type ZapRunOutboxUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ZapRunOutboxes.
     */
    data: XOR<
      ZapRunOutboxUpdateManyMutationInput,
      ZapRunOutboxUncheckedUpdateManyInput
    >;
    /**
     * Filter which ZapRunOutboxes to update
     */
    where?: ZapRunOutboxWhereInput;
  };

  /**
   * ZapRunOutbox upsert
   */
  export type ZapRunOutboxUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * The filter to search for the ZapRunOutbox to update in case it exists.
     */
    where: ZapRunOutboxWhereUniqueInput;
    /**
     * In case the ZapRunOutbox found by the `where` argument doesn't exist, create a new ZapRunOutbox with this data.
     */
    create: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>;
    /**
     * In case the ZapRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>;
  };

  /**
   * ZapRunOutbox delete
   */
  export type ZapRunOutboxDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter which ZapRunOutbox to delete.
     */
    where: ZapRunOutboxWhereUniqueInput;
  };

  /**
   * ZapRunOutbox deleteMany
   */
  export type ZapRunOutboxDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapRunOutboxes to delete
     */
    where?: ZapRunOutboxWhereInput;
  };

  /**
   * ZapRunOutbox without action
   */
  export type ZapRunOutboxDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null;
  };

  /**
   * Model ZapChangeHistory
   */

  export type AggregateZapChangeHistory = {
    _count: ZapChangeHistoryCountAggregateOutputType | null;
    _avg: ZapChangeHistoryAvgAggregateOutputType | null;
    _sum: ZapChangeHistorySumAggregateOutputType | null;
    _min: ZapChangeHistoryMinAggregateOutputType | null;
    _max: ZapChangeHistoryMaxAggregateOutputType | null;
  };

  export type ZapChangeHistoryAvgAggregateOutputType = {
    zapId: number | null;
    createdById: number | null;
  };

  export type ZapChangeHistorySumAggregateOutputType = {
    zapId: number | null;
    createdById: number | null;
  };

  export type ZapChangeHistoryMinAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    type: $Enums.ZapHistoryType | null;
    message: string | null;
    createdById: number | null;
    createdAt: Date | null;
  };

  export type ZapChangeHistoryMaxAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    type: $Enums.ZapHistoryType | null;
    message: string | null;
    createdById: number | null;
    createdAt: Date | null;
  };

  export type ZapChangeHistoryCountAggregateOutputType = {
    id: number;
    zapId: number;
    type: number;
    message: number;
    createdById: number;
    createdAt: number;
    _all: number;
  };

  export type ZapChangeHistoryAvgAggregateInputType = {
    zapId?: true;
    createdById?: true;
  };

  export type ZapChangeHistorySumAggregateInputType = {
    zapId?: true;
    createdById?: true;
  };

  export type ZapChangeHistoryMinAggregateInputType = {
    id?: true;
    zapId?: true;
    type?: true;
    message?: true;
    createdById?: true;
    createdAt?: true;
  };

  export type ZapChangeHistoryMaxAggregateInputType = {
    id?: true;
    zapId?: true;
    type?: true;
    message?: true;
    createdById?: true;
    createdAt?: true;
  };

  export type ZapChangeHistoryCountAggregateInputType = {
    id?: true;
    zapId?: true;
    type?: true;
    message?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ZapChangeHistoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapChangeHistory to aggregate.
     */
    where?: ZapChangeHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapChangeHistories to fetch.
     */
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ZapChangeHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapChangeHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapChangeHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ZapChangeHistories
     **/
    _count?: true | ZapChangeHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ZapChangeHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ZapChangeHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ZapChangeHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ZapChangeHistoryMaxAggregateInputType;
  };

  export type GetZapChangeHistoryAggregateType<
    T extends ZapChangeHistoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateZapChangeHistory]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapChangeHistory[P]>
      : GetScalarType<T[P], AggregateZapChangeHistory[P]>;
  };

  export type ZapChangeHistoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapChangeHistoryWhereInput;
    orderBy?:
      | ZapChangeHistoryOrderByWithAggregationInput
      | ZapChangeHistoryOrderByWithAggregationInput[];
    by: ZapChangeHistoryScalarFieldEnum[] | ZapChangeHistoryScalarFieldEnum;
    having?: ZapChangeHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapChangeHistoryCountAggregateInputType | true;
    _avg?: ZapChangeHistoryAvgAggregateInputType;
    _sum?: ZapChangeHistorySumAggregateInputType;
    _min?: ZapChangeHistoryMinAggregateInputType;
    _max?: ZapChangeHistoryMaxAggregateInputType;
  };

  export type ZapChangeHistoryGroupByOutputType = {
    id: string;
    zapId: number;
    type: $Enums.ZapHistoryType;
    message: string;
    createdById: number;
    createdAt: Date;
    _count: ZapChangeHistoryCountAggregateOutputType | null;
    _avg: ZapChangeHistoryAvgAggregateOutputType | null;
    _sum: ZapChangeHistorySumAggregateOutputType | null;
    _min: ZapChangeHistoryMinAggregateOutputType | null;
    _max: ZapChangeHistoryMaxAggregateOutputType | null;
  };

  type GetZapChangeHistoryGroupByPayload<
    T extends ZapChangeHistoryGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapChangeHistoryGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof ZapChangeHistoryGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ZapChangeHistoryGroupByOutputType[P]>
          : GetScalarType<T[P], ZapChangeHistoryGroupByOutputType[P]>;
      }
    >
  >;

  export type ZapChangeHistorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      type?: boolean;
      message?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapChangeHistory"]
  >;

  export type ZapChangeHistorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      type?: boolean;
      message?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapChangeHistory"]
  >;

  export type ZapChangeHistorySelectScalar = {
    id?: boolean;
    zapId?: boolean;
    type?: boolean;
    message?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
  };

  export type ZapChangeHistoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "zapId" | "type" | "message" | "createdById" | "createdAt",
    ExtArgs["result"]["zapChangeHistory"]
  >;
  export type ZapChangeHistoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ZapChangeHistoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ZapChangeHistoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ZapChangeHistory";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>;
      createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapId: number;
        type: $Enums.ZapHistoryType;
        message: string;
        createdById: number;
        createdAt: Date;
      },
      ExtArgs["result"]["zapChangeHistory"]
    >;
    composites: {};
  };

  type ZapChangeHistoryGetPayload<
    S extends boolean | null | undefined | ZapChangeHistoryDefaultArgs,
  > = $Result.GetResult<Prisma.$ZapChangeHistoryPayload, S>;

  type ZapChangeHistoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ZapChangeHistoryFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ZapChangeHistoryCountAggregateInputType | true;
  };

  export interface ZapChangeHistoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ZapChangeHistory"];
      meta: { name: "ZapChangeHistory" };
    };
    /**
     * Find zero or one ZapChangeHistory that matches the filter.
     * @param {ZapChangeHistoryFindUniqueArgs} args - Arguments to find a ZapChangeHistory
     * @example
     * // Get one ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapChangeHistoryFindUniqueArgs>(
      args: SelectSubset<T, ZapChangeHistoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ZapChangeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapChangeHistoryFindUniqueOrThrowArgs} args - Arguments to find a ZapChangeHistory
     * @example
     * // Get one ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapChangeHistoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ZapChangeHistoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapChangeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryFindFirstArgs} args - Arguments to find a ZapChangeHistory
     * @example
     * // Get one ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapChangeHistoryFindFirstArgs>(
      args?: SelectSubset<T, ZapChangeHistoryFindFirstArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapChangeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryFindFirstOrThrowArgs} args - Arguments to find a ZapChangeHistory
     * @example
     * // Get one ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapChangeHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZapChangeHistoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ZapChangeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapChangeHistories
     * const zapChangeHistories = await prisma.zapChangeHistory.findMany()
     *
     * // Get first 10 ZapChangeHistories
     * const zapChangeHistories = await prisma.zapChangeHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapChangeHistoryWithIdOnly = await prisma.zapChangeHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZapChangeHistoryFindManyArgs>(
      args?: SelectSubset<T, ZapChangeHistoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ZapChangeHistory.
     * @param {ZapChangeHistoryCreateArgs} args - Arguments to create a ZapChangeHistory.
     * @example
     * // Create one ZapChangeHistory
     * const ZapChangeHistory = await prisma.zapChangeHistory.create({
     *   data: {
     *     // ... data to create a ZapChangeHistory
     *   }
     * })
     *
     */
    create<T extends ZapChangeHistoryCreateArgs>(
      args: SelectSubset<T, ZapChangeHistoryCreateArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ZapChangeHistories.
     * @param {ZapChangeHistoryCreateManyArgs} args - Arguments to create many ZapChangeHistories.
     * @example
     * // Create many ZapChangeHistories
     * const zapChangeHistory = await prisma.zapChangeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZapChangeHistoryCreateManyArgs>(
      args?: SelectSubset<T, ZapChangeHistoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ZapChangeHistories and returns the data saved in the database.
     * @param {ZapChangeHistoryCreateManyAndReturnArgs} args - Arguments to create many ZapChangeHistories.
     * @example
     * // Create many ZapChangeHistories
     * const zapChangeHistory = await prisma.zapChangeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapChangeHistories and only return the `id`
     * const zapChangeHistoryWithIdOnly = await prisma.zapChangeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZapChangeHistoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ZapChangeHistoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ZapChangeHistory.
     * @param {ZapChangeHistoryDeleteArgs} args - Arguments to delete one ZapChangeHistory.
     * @example
     * // Delete one ZapChangeHistory
     * const ZapChangeHistory = await prisma.zapChangeHistory.delete({
     *   where: {
     *     // ... filter to delete one ZapChangeHistory
     *   }
     * })
     *
     */
    delete<T extends ZapChangeHistoryDeleteArgs>(
      args: SelectSubset<T, ZapChangeHistoryDeleteArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ZapChangeHistory.
     * @param {ZapChangeHistoryUpdateArgs} args - Arguments to update one ZapChangeHistory.
     * @example
     * // Update one ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZapChangeHistoryUpdateArgs>(
      args: SelectSubset<T, ZapChangeHistoryUpdateArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ZapChangeHistories.
     * @param {ZapChangeHistoryDeleteManyArgs} args - Arguments to filter ZapChangeHistories to delete.
     * @example
     * // Delete a few ZapChangeHistories
     * const { count } = await prisma.zapChangeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZapChangeHistoryDeleteManyArgs>(
      args?: SelectSubset<T, ZapChangeHistoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ZapChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapChangeHistories
     * const zapChangeHistory = await prisma.zapChangeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZapChangeHistoryUpdateManyArgs>(
      args: SelectSubset<T, ZapChangeHistoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ZapChangeHistory.
     * @param {ZapChangeHistoryUpsertArgs} args - Arguments to update or create a ZapChangeHistory.
     * @example
     * // Update or create a ZapChangeHistory
     * const zapChangeHistory = await prisma.zapChangeHistory.upsert({
     *   create: {
     *     // ... data to create a ZapChangeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapChangeHistory we want to update
     *   }
     * })
     */
    upsert<T extends ZapChangeHistoryUpsertArgs>(
      args: SelectSubset<T, ZapChangeHistoryUpsertArgs<ExtArgs>>,
    ): Prisma__ZapChangeHistoryClient<
      $Result.GetResult<
        Prisma.$ZapChangeHistoryPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ZapChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryCountArgs} args - Arguments to filter ZapChangeHistories to count.
     * @example
     * // Count the number of ZapChangeHistories
     * const count = await prisma.zapChangeHistory.count({
     *   where: {
     *     // ... the filter for the ZapChangeHistories we want to count
     *   }
     * })
     **/
    count<T extends ZapChangeHistoryCountArgs>(
      args?: Subset<T, ZapChangeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ZapChangeHistoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ZapChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ZapChangeHistoryAggregateArgs>(
      args: Subset<T, ZapChangeHistoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetZapChangeHistoryAggregateType<T>>;

    /**
     * Group by ZapChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapChangeHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ZapChangeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapChangeHistoryGroupByArgs["orderBy"] }
        : { orderBy?: ZapChangeHistoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ZapChangeHistoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetZapChangeHistoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ZapChangeHistory model
     */
    readonly fields: ZapChangeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapChangeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapChangeHistoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ZapChangeHistory model
   */
  interface ZapChangeHistoryFieldRefs {
    readonly id: FieldRef<"ZapChangeHistory", "String">;
    readonly zapId: FieldRef<"ZapChangeHistory", "Int">;
    readonly type: FieldRef<"ZapChangeHistory", "ZapHistoryType">;
    readonly message: FieldRef<"ZapChangeHistory", "String">;
    readonly createdById: FieldRef<"ZapChangeHistory", "Int">;
    readonly createdAt: FieldRef<"ZapChangeHistory", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ZapChangeHistory findUnique
   */
  export type ZapChangeHistoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ZapChangeHistory to fetch.
     */
    where: ZapChangeHistoryWhereUniqueInput;
  };

  /**
   * ZapChangeHistory findUniqueOrThrow
   */
  export type ZapChangeHistoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ZapChangeHistory to fetch.
     */
    where: ZapChangeHistoryWhereUniqueInput;
  };

  /**
   * ZapChangeHistory findFirst
   */
  export type ZapChangeHistoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ZapChangeHistory to fetch.
     */
    where?: ZapChangeHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapChangeHistories to fetch.
     */
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapChangeHistories.
     */
    cursor?: ZapChangeHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapChangeHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapChangeHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapChangeHistories.
     */
    distinct?:
      | ZapChangeHistoryScalarFieldEnum
      | ZapChangeHistoryScalarFieldEnum[];
  };

  /**
   * ZapChangeHistory findFirstOrThrow
   */
  export type ZapChangeHistoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ZapChangeHistory to fetch.
     */
    where?: ZapChangeHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapChangeHistories to fetch.
     */
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapChangeHistories.
     */
    cursor?: ZapChangeHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapChangeHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapChangeHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapChangeHistories.
     */
    distinct?:
      | ZapChangeHistoryScalarFieldEnum
      | ZapChangeHistoryScalarFieldEnum[];
  };

  /**
   * ZapChangeHistory findMany
   */
  export type ZapChangeHistoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ZapChangeHistories to fetch.
     */
    where?: ZapChangeHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapChangeHistories to fetch.
     */
    orderBy?:
      | ZapChangeHistoryOrderByWithRelationInput
      | ZapChangeHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ZapChangeHistories.
     */
    cursor?: ZapChangeHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapChangeHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapChangeHistories.
     */
    skip?: number;
    distinct?:
      | ZapChangeHistoryScalarFieldEnum
      | ZapChangeHistoryScalarFieldEnum[];
  };

  /**
   * ZapChangeHistory create
   */
  export type ZapChangeHistoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ZapChangeHistory.
     */
    data: XOR<
      ZapChangeHistoryCreateInput,
      ZapChangeHistoryUncheckedCreateInput
    >;
  };

  /**
   * ZapChangeHistory createMany
   */
  export type ZapChangeHistoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ZapChangeHistories.
     */
    data: ZapChangeHistoryCreateManyInput | ZapChangeHistoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ZapChangeHistory createManyAndReturn
   */
  export type ZapChangeHistoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ZapChangeHistories.
     */
    data: ZapChangeHistoryCreateManyInput | ZapChangeHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ZapChangeHistory update
   */
  export type ZapChangeHistoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ZapChangeHistory.
     */
    data: XOR<
      ZapChangeHistoryUpdateInput,
      ZapChangeHistoryUncheckedUpdateInput
    >;
    /**
     * Choose, which ZapChangeHistory to update.
     */
    where: ZapChangeHistoryWhereUniqueInput;
  };

  /**
   * ZapChangeHistory updateMany
   */
  export type ZapChangeHistoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ZapChangeHistories.
     */
    data: XOR<
      ZapChangeHistoryUpdateManyMutationInput,
      ZapChangeHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which ZapChangeHistories to update
     */
    where?: ZapChangeHistoryWhereInput;
  };

  /**
   * ZapChangeHistory upsert
   */
  export type ZapChangeHistoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ZapChangeHistory to update in case it exists.
     */
    where: ZapChangeHistoryWhereUniqueInput;
    /**
     * In case the ZapChangeHistory found by the `where` argument doesn't exist, create a new ZapChangeHistory with this data.
     */
    create: XOR<
      ZapChangeHistoryCreateInput,
      ZapChangeHistoryUncheckedCreateInput
    >;
    /**
     * In case the ZapChangeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ZapChangeHistoryUpdateInput,
      ZapChangeHistoryUncheckedUpdateInput
    >;
  };

  /**
   * ZapChangeHistory delete
   */
  export type ZapChangeHistoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
    /**
     * Filter which ZapChangeHistory to delete.
     */
    where: ZapChangeHistoryWhereUniqueInput;
  };

  /**
   * ZapChangeHistory deleteMany
   */
  export type ZapChangeHistoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapChangeHistories to delete
     */
    where?: ZapChangeHistoryWhereInput;
  };

  /**
   * ZapChangeHistory without action
   */
  export type ZapChangeHistoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapChangeHistory
     */
    select?: ZapChangeHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapChangeHistory
     */
    omit?: ZapChangeHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapChangeHistoryInclude<ExtArgs> | null;
  };

  /**
   * Model ZapNote
   */

  export type AggregateZapNote = {
    _count: ZapNoteCountAggregateOutputType | null;
    _avg: ZapNoteAvgAggregateOutputType | null;
    _sum: ZapNoteSumAggregateOutputType | null;
    _min: ZapNoteMinAggregateOutputType | null;
    _max: ZapNoteMaxAggregateOutputType | null;
  };

  export type ZapNoteAvgAggregateOutputType = {
    zapId: number | null;
    createdById: number | null;
  };

  export type ZapNoteSumAggregateOutputType = {
    zapId: number | null;
    createdById: number | null;
  };

  export type ZapNoteMinAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    triggerId: string | null;
    stepId: string | null;
    type: $Enums.ZapNoteType | null;
    content: string | null;
    createdById: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ZapNoteMaxAggregateOutputType = {
    id: string | null;
    zapId: number | null;
    triggerId: string | null;
    stepId: string | null;
    type: $Enums.ZapNoteType | null;
    content: string | null;
    createdById: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ZapNoteCountAggregateOutputType = {
    id: number;
    zapId: number;
    triggerId: number;
    stepId: number;
    type: number;
    content: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ZapNoteAvgAggregateInputType = {
    zapId?: true;
    createdById?: true;
  };

  export type ZapNoteSumAggregateInputType = {
    zapId?: true;
    createdById?: true;
  };

  export type ZapNoteMinAggregateInputType = {
    id?: true;
    zapId?: true;
    triggerId?: true;
    stepId?: true;
    type?: true;
    content?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ZapNoteMaxAggregateInputType = {
    id?: true;
    zapId?: true;
    triggerId?: true;
    stepId?: true;
    type?: true;
    content?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ZapNoteCountAggregateInputType = {
    id?: true;
    zapId?: true;
    triggerId?: true;
    stepId?: true;
    type?: true;
    content?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ZapNoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapNote to aggregate.
     */
    where?: ZapNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapNotes to fetch.
     */
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ZapNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ZapNotes
     **/
    _count?: true | ZapNoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ZapNoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ZapNoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ZapNoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ZapNoteMaxAggregateInputType;
  };

  export type GetZapNoteAggregateType<T extends ZapNoteAggregateArgs> = {
    [P in keyof T & keyof AggregateZapNote]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapNote[P]>
      : GetScalarType<T[P], AggregateZapNote[P]>;
  };

  export type ZapNoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ZapNoteWhereInput;
    orderBy?:
      | ZapNoteOrderByWithAggregationInput
      | ZapNoteOrderByWithAggregationInput[];
    by: ZapNoteScalarFieldEnum[] | ZapNoteScalarFieldEnum;
    having?: ZapNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapNoteCountAggregateInputType | true;
    _avg?: ZapNoteAvgAggregateInputType;
    _sum?: ZapNoteSumAggregateInputType;
    _min?: ZapNoteMinAggregateInputType;
    _max?: ZapNoteMaxAggregateInputType;
  };

  export type ZapNoteGroupByOutputType = {
    id: string;
    zapId: number;
    triggerId: string | null;
    stepId: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ZapNoteCountAggregateOutputType | null;
    _avg: ZapNoteAvgAggregateOutputType | null;
    _sum: ZapNoteSumAggregateOutputType | null;
    _min: ZapNoteMinAggregateOutputType | null;
    _max: ZapNoteMaxAggregateOutputType | null;
  };

  type GetZapNoteGroupByPayload<T extends ZapNoteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ZapNoteGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ZapNoteGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ZapNoteGroupByOutputType[P]>;
        }
      >
    >;

  export type ZapNoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      triggerId?: boolean;
      stepId?: boolean;
      type?: boolean;
      content?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      trigger?: boolean | ZapNote$triggerArgs<ExtArgs>;
      step?: boolean | ZapNote$stepArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapNote"]
  >;

  export type ZapNoteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      zapId?: boolean;
      triggerId?: boolean;
      stepId?: boolean;
      type?: boolean;
      content?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      zap?: boolean | ZapDefaultArgs<ExtArgs>;
      trigger?: boolean | ZapNote$triggerArgs<ExtArgs>;
      step?: boolean | ZapNote$stepArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["zapNote"]
  >;

  export type ZapNoteSelectScalar = {
    id?: boolean;
    zapId?: boolean;
    triggerId?: boolean;
    stepId?: boolean;
    type?: boolean;
    content?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ZapNoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "zapId"
    | "triggerId"
    | "stepId"
    | "type"
    | "content"
    | "createdById"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["zapNote"]
  >;
  export type ZapNoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    trigger?: boolean | ZapNote$triggerArgs<ExtArgs>;
    step?: boolean | ZapNote$stepArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ZapNoteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>;
    trigger?: boolean | ZapNote$triggerArgs<ExtArgs>;
    step?: boolean | ZapNote$stepArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ZapNotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ZapNote";
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>;
      trigger: Prisma.$TriggerPayload<ExtArgs> | null;
      step: Prisma.$ActionPayload<ExtArgs> | null;
      createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        zapId: number;
        triggerId: string | null;
        stepId: string | null;
        type: $Enums.ZapNoteType;
        content: string;
        createdById: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["zapNote"]
    >;
    composites: {};
  };

  type ZapNoteGetPayload<
    S extends boolean | null | undefined | ZapNoteDefaultArgs,
  > = $Result.GetResult<Prisma.$ZapNotePayload, S>;

  type ZapNoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ZapNoteFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ZapNoteCountAggregateInputType | true;
  };

  export interface ZapNoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ZapNote"];
      meta: { name: "ZapNote" };
    };
    /**
     * Find zero or one ZapNote that matches the filter.
     * @param {ZapNoteFindUniqueArgs} args - Arguments to find a ZapNote
     * @example
     * // Get one ZapNote
     * const zapNote = await prisma.zapNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapNoteFindUniqueArgs>(
      args: SelectSubset<T, ZapNoteFindUniqueArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ZapNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapNoteFindUniqueOrThrowArgs} args - Arguments to find a ZapNote
     * @example
     * // Get one ZapNote
     * const zapNote = await prisma.zapNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapNoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ZapNoteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteFindFirstArgs} args - Arguments to find a ZapNote
     * @example
     * // Get one ZapNote
     * const zapNote = await prisma.zapNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapNoteFindFirstArgs>(
      args?: SelectSubset<T, ZapNoteFindFirstArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ZapNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteFindFirstOrThrowArgs} args - Arguments to find a ZapNote
     * @example
     * // Get one ZapNote
     * const zapNote = await prisma.zapNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapNoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZapNoteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ZapNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapNotes
     * const zapNotes = await prisma.zapNote.findMany()
     *
     * // Get first 10 ZapNotes
     * const zapNotes = await prisma.zapNote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapNoteWithIdOnly = await prisma.zapNote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZapNoteFindManyArgs>(
      args?: SelectSubset<T, ZapNoteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ZapNote.
     * @param {ZapNoteCreateArgs} args - Arguments to create a ZapNote.
     * @example
     * // Create one ZapNote
     * const ZapNote = await prisma.zapNote.create({
     *   data: {
     *     // ... data to create a ZapNote
     *   }
     * })
     *
     */
    create<T extends ZapNoteCreateArgs>(
      args: SelectSubset<T, ZapNoteCreateArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ZapNotes.
     * @param {ZapNoteCreateManyArgs} args - Arguments to create many ZapNotes.
     * @example
     * // Create many ZapNotes
     * const zapNote = await prisma.zapNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZapNoteCreateManyArgs>(
      args?: SelectSubset<T, ZapNoteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ZapNotes and returns the data saved in the database.
     * @param {ZapNoteCreateManyAndReturnArgs} args - Arguments to create many ZapNotes.
     * @example
     * // Create many ZapNotes
     * const zapNote = await prisma.zapNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapNotes and only return the `id`
     * const zapNoteWithIdOnly = await prisma.zapNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZapNoteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ZapNoteCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ZapNote.
     * @param {ZapNoteDeleteArgs} args - Arguments to delete one ZapNote.
     * @example
     * // Delete one ZapNote
     * const ZapNote = await prisma.zapNote.delete({
     *   where: {
     *     // ... filter to delete one ZapNote
     *   }
     * })
     *
     */
    delete<T extends ZapNoteDeleteArgs>(
      args: SelectSubset<T, ZapNoteDeleteArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ZapNote.
     * @param {ZapNoteUpdateArgs} args - Arguments to update one ZapNote.
     * @example
     * // Update one ZapNote
     * const zapNote = await prisma.zapNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZapNoteUpdateArgs>(
      args: SelectSubset<T, ZapNoteUpdateArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ZapNotes.
     * @param {ZapNoteDeleteManyArgs} args - Arguments to filter ZapNotes to delete.
     * @example
     * // Delete a few ZapNotes
     * const { count } = await prisma.zapNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZapNoteDeleteManyArgs>(
      args?: SelectSubset<T, ZapNoteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ZapNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapNotes
     * const zapNote = await prisma.zapNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZapNoteUpdateManyArgs>(
      args: SelectSubset<T, ZapNoteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ZapNote.
     * @param {ZapNoteUpsertArgs} args - Arguments to update or create a ZapNote.
     * @example
     * // Update or create a ZapNote
     * const zapNote = await prisma.zapNote.upsert({
     *   create: {
     *     // ... data to create a ZapNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapNote we want to update
     *   }
     * })
     */
    upsert<T extends ZapNoteUpsertArgs>(
      args: SelectSubset<T, ZapNoteUpsertArgs<ExtArgs>>,
    ): Prisma__ZapNoteClient<
      $Result.GetResult<
        Prisma.$ZapNotePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ZapNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteCountArgs} args - Arguments to filter ZapNotes to count.
     * @example
     * // Count the number of ZapNotes
     * const count = await prisma.zapNote.count({
     *   where: {
     *     // ... the filter for the ZapNotes we want to count
     *   }
     * })
     **/
    count<T extends ZapNoteCountArgs>(
      args?: Subset<T, ZapNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ZapNoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ZapNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ZapNoteAggregateArgs>(
      args: Subset<T, ZapNoteAggregateArgs>,
    ): Prisma.PrismaPromise<GetZapNoteAggregateType<T>>;

    /**
     * Group by ZapNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ZapNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapNoteGroupByArgs["orderBy"] }
        : { orderBy?: ZapNoteGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ZapNoteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetZapNoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ZapNote model
     */
    readonly fields: ZapNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapNoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapDefaultArgs<ExtArgs>>,
    ): Prisma__ZapClient<
      | $Result.GetResult<
          Prisma.$ZapPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    trigger<T extends ZapNote$triggerArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapNote$triggerArgs<ExtArgs>>,
    ): Prisma__TriggerClient<
      $Result.GetResult<
        Prisma.$TriggerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    step<T extends ZapNote$stepArgs<ExtArgs> = {}>(
      args?: Subset<T, ZapNote$stepArgs<ExtArgs>>,
    ): Prisma__ActionClient<
      $Result.GetResult<
        Prisma.$ActionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ZapNote model
   */
  interface ZapNoteFieldRefs {
    readonly id: FieldRef<"ZapNote", "String">;
    readonly zapId: FieldRef<"ZapNote", "Int">;
    readonly triggerId: FieldRef<"ZapNote", "String">;
    readonly stepId: FieldRef<"ZapNote", "String">;
    readonly type: FieldRef<"ZapNote", "ZapNoteType">;
    readonly content: FieldRef<"ZapNote", "String">;
    readonly createdById: FieldRef<"ZapNote", "Int">;
    readonly createdAt: FieldRef<"ZapNote", "DateTime">;
    readonly updatedAt: FieldRef<"ZapNote", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ZapNote findUnique
   */
  export type ZapNoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter, which ZapNote to fetch.
     */
    where: ZapNoteWhereUniqueInput;
  };

  /**
   * ZapNote findUniqueOrThrow
   */
  export type ZapNoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter, which ZapNote to fetch.
     */
    where: ZapNoteWhereUniqueInput;
  };

  /**
   * ZapNote findFirst
   */
  export type ZapNoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter, which ZapNote to fetch.
     */
    where?: ZapNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapNotes to fetch.
     */
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapNotes.
     */
    cursor?: ZapNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapNotes.
     */
    distinct?: ZapNoteScalarFieldEnum | ZapNoteScalarFieldEnum[];
  };

  /**
   * ZapNote findFirstOrThrow
   */
  export type ZapNoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter, which ZapNote to fetch.
     */
    where?: ZapNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapNotes to fetch.
     */
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZapNotes.
     */
    cursor?: ZapNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZapNotes.
     */
    distinct?: ZapNoteScalarFieldEnum | ZapNoteScalarFieldEnum[];
  };

  /**
   * ZapNote findMany
   */
  export type ZapNoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter, which ZapNotes to fetch.
     */
    where?: ZapNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZapNotes to fetch.
     */
    orderBy?:
      | ZapNoteOrderByWithRelationInput
      | ZapNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ZapNotes.
     */
    cursor?: ZapNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZapNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZapNotes.
     */
    skip?: number;
    distinct?: ZapNoteScalarFieldEnum | ZapNoteScalarFieldEnum[];
  };

  /**
   * ZapNote create
   */
  export type ZapNoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a ZapNote.
     */
    data: XOR<ZapNoteCreateInput, ZapNoteUncheckedCreateInput>;
  };

  /**
   * ZapNote createMany
   */
  export type ZapNoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ZapNotes.
     */
    data: ZapNoteCreateManyInput | ZapNoteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ZapNote createManyAndReturn
   */
  export type ZapNoteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * The data used to create many ZapNotes.
     */
    data: ZapNoteCreateManyInput | ZapNoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ZapNote update
   */
  export type ZapNoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a ZapNote.
     */
    data: XOR<ZapNoteUpdateInput, ZapNoteUncheckedUpdateInput>;
    /**
     * Choose, which ZapNote to update.
     */
    where: ZapNoteWhereUniqueInput;
  };

  /**
   * ZapNote updateMany
   */
  export type ZapNoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ZapNotes.
     */
    data: XOR<ZapNoteUpdateManyMutationInput, ZapNoteUncheckedUpdateManyInput>;
    /**
     * Filter which ZapNotes to update
     */
    where?: ZapNoteWhereInput;
  };

  /**
   * ZapNote upsert
   */
  export type ZapNoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the ZapNote to update in case it exists.
     */
    where: ZapNoteWhereUniqueInput;
    /**
     * In case the ZapNote found by the `where` argument doesn't exist, create a new ZapNote with this data.
     */
    create: XOR<ZapNoteCreateInput, ZapNoteUncheckedCreateInput>;
    /**
     * In case the ZapNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapNoteUpdateInput, ZapNoteUncheckedUpdateInput>;
  };

  /**
   * ZapNote delete
   */
  export type ZapNoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
    /**
     * Filter which ZapNote to delete.
     */
    where: ZapNoteWhereUniqueInput;
  };

  /**
   * ZapNote deleteMany
   */
  export type ZapNoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ZapNotes to delete
     */
    where?: ZapNoteWhereInput;
  };

  /**
   * ZapNote.trigger
   */
  export type ZapNote$triggerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null;
    where?: TriggerWhereInput;
  };

  /**
   * ZapNote.step
   */
  export type ZapNote$stepArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null;
    where?: ActionWhereInput;
  };

  /**
   * ZapNote without action
   */
  export type ZapNoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ZapNote
     */
    select?: ZapNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZapNote
     */
    omit?: ZapNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapNoteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    firstname: "firstname";
    lastname: "lastname";
    email: "email";
    zapmail: "zapmail";
    type: "type";
    verified: "verified";
    password: "password";
    imageUrl: "imageUrl";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ZapScalarFieldEnum: {
    id: "id";
    triggerId: "triggerId";
    name: "name";
    lastEdited: "lastEdited";
    createdAt: "createdAt";
    published: "published";
    RecordId: "RecordId";
    userId: "userId";
    folderId: "folderId";
  };

  export type ZapScalarFieldEnum =
    (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum];

  export const FolderScalarFieldEnum: {
    id: "id";
    name: "name";
    userId: "userId";
    type: "type";
    parentId: "parentId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type FolderScalarFieldEnum =
    (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum];

  export const RecordScalarFieldEnum: {
    id: "id";
    type: "type";
    zapId: "zapId";
    createdAt: "createdAt";
    pulledAt: "pulledAt";
    title: "title";
    JsonData: "JsonData";
    triggerOptionId: "triggerOptionId";
  };

  export type RecordScalarFieldEnum =
    (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum];

  export const TriggerScalarFieldEnum: {
    id: "id";
    zapId: "zapId";
    optionId: "optionId";
    optionType: "optionType";
    published: "published";
    configuration: "configuration";
    lastPolledAt: "lastPolledAt";
    connectionId: "connectionId";
    triggerId: "triggerId";
  };

  export type TriggerScalarFieldEnum =
    (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum];

  export const UserConnectionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    appId: "appId";
    identifier: "identifier";
    accessToken: "accessToken";
    refreshToken: "refreshToken";
    createdAt: "createdAt";
    expiredAt: "expiredAt";
  };

  export type UserConnectionScalarFieldEnum =
    (typeof UserConnectionScalarFieldEnum)[keyof typeof UserConnectionScalarFieldEnum];

  export const AvailableTriggersScalarFieldEnum: {
    id: "id";
    name: "name";
    type: "type";
    serviceType: "serviceType";
    appId: "appId";
    metadata: "metadata";
    imagePath: "imagePath";
  };

  export type AvailableTriggersScalarFieldEnum =
    (typeof AvailableTriggersScalarFieldEnum)[keyof typeof AvailableTriggersScalarFieldEnum];

  export const ActionScalarFieldEnum: {
    id: "id";
    zapId: "zapId";
    success: "success";
    configuration: "configuration";
    optionId: "optionId";
    actionId: "actionId";
    sortingOrder: "sortingOrder";
    connectionId: "connectionId";
  };

  export type ActionScalarFieldEnum =
    (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum];

  export const AvailableActionsScalarFieldEnum: {
    id: "id";
    name: "name";
    type: "type";
    serviceType: "serviceType";
    appId: "appId";
    imagePath: "imagePath";
    metadata: "metadata";
  };

  export type AvailableActionsScalarFieldEnum =
    (typeof AvailableActionsScalarFieldEnum)[keyof typeof AvailableActionsScalarFieldEnum];

  export const ZapRunScalarFieldEnum: {
    id: "id";
    zapId: "zapId";
    createdAt: "createdAt";
    completedAt: "completedAt";
    status: "status";
    failureReason: "failureReason";
    failedActionId: "failedActionId";
    metaData: "metaData";
  };

  export type ZapRunScalarFieldEnum =
    (typeof ZapRunScalarFieldEnum)[keyof typeof ZapRunScalarFieldEnum];

  export const ZapRunOutboxScalarFieldEnum: {
    id: "id";
    zapRunId: "zapRunId";
  };

  export type ZapRunOutboxScalarFieldEnum =
    (typeof ZapRunOutboxScalarFieldEnum)[keyof typeof ZapRunOutboxScalarFieldEnum];

  export const ZapChangeHistoryScalarFieldEnum: {
    id: "id";
    zapId: "zapId";
    type: "type";
    message: "message";
    createdById: "createdById";
    createdAt: "createdAt";
  };

  export type ZapChangeHistoryScalarFieldEnum =
    (typeof ZapChangeHistoryScalarFieldEnum)[keyof typeof ZapChangeHistoryScalarFieldEnum];

  export const ZapNoteScalarFieldEnum: {
    id: "id";
    zapId: "zapId";
    triggerId: "triggerId";
    stepId: "stepId";
    type: "type";
    content: "content";
    createdById: "createdById";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ZapNoteScalarFieldEnum =
    (typeof ZapNoteScalarFieldEnum)[keyof typeof ZapNoteScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'ZapRunStatus'
   */
  export type EnumZapRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ZapRunStatus"
  >;

  /**
   * Reference to a field of type 'ZapRunStatus[]'
   */
  export type ListEnumZapRunStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ZapRunStatus[]">;

  /**
   * Reference to a field of type 'ZapHistoryType'
   */
  export type EnumZapHistoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ZapHistoryType"
  >;

  /**
   * Reference to a field of type 'ZapHistoryType[]'
   */
  export type ListEnumZapHistoryTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ZapHistoryType[]">;

  /**
   * Reference to a field of type 'ZapNoteType'
   */
  export type EnumZapNoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ZapNoteType"
  >;

  /**
   * Reference to a field of type 'ZapNoteType[]'
   */
  export type ListEnumZapNoteTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ZapNoteType[]">;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    firstname?: StringNullableFilter<"User"> | string | null;
    lastname?: StringNullableFilter<"User"> | string | null;
    email?: StringFilter<"User"> | string;
    zapmail?: StringFilter<"User"> | string;
    type?: StringFilter<"User"> | string;
    verified?: BoolFilter<"User"> | boolean;
    password?: StringNullableFilter<"User"> | string | null;
    imageUrl?: StringNullableFilter<"User"> | string | null;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    zap?: ZapListRelationFilter;
    connections?: UserConnectionListRelationFilter;
    changeHistory?: ZapChangeHistoryListRelationFilter;
    notes?: ZapNoteListRelationFilter;
    Folder?: FolderListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    firstname?: SortOrderInput | SortOrder;
    lastname?: SortOrderInput | SortOrder;
    email?: SortOrder;
    zapmail?: SortOrder;
    type?: SortOrder;
    verified?: SortOrder;
    password?: SortOrderInput | SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    zap?: ZapOrderByRelationAggregateInput;
    connections?: UserConnectionOrderByRelationAggregateInput;
    changeHistory?: ZapChangeHistoryOrderByRelationAggregateInput;
    notes?: ZapNoteOrderByRelationAggregateInput;
    Folder?: FolderOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      zapmail?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      firstname?: StringNullableFilter<"User"> | string | null;
      lastname?: StringNullableFilter<"User"> | string | null;
      type?: StringFilter<"User"> | string;
      verified?: BoolFilter<"User"> | boolean;
      password?: StringNullableFilter<"User"> | string | null;
      imageUrl?: StringNullableFilter<"User"> | string | null;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      zap?: ZapListRelationFilter;
      connections?: UserConnectionListRelationFilter;
      changeHistory?: ZapChangeHistoryListRelationFilter;
      notes?: ZapNoteListRelationFilter;
      Folder?: FolderListRelationFilter;
    },
    "id" | "email" | "zapmail"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    firstname?: SortOrderInput | SortOrder;
    lastname?: SortOrderInput | SortOrder;
    email?: SortOrder;
    zapmail?: SortOrder;
    type?: SortOrder;
    verified?: SortOrder;
    password?: SortOrderInput | SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null;
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: StringWithAggregatesFilter<"User"> | string;
    zapmail?: StringWithAggregatesFilter<"User"> | string;
    type?: StringWithAggregatesFilter<"User"> | string;
    verified?: BoolWithAggregatesFilter<"User"> | boolean;
    password?: StringNullableWithAggregatesFilter<"User"> | string | null;
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[];
    OR?: ZapWhereInput[];
    NOT?: ZapWhereInput | ZapWhereInput[];
    id?: IntFilter<"Zap"> | number;
    triggerId?: StringNullableFilter<"Zap"> | string | null;
    name?: StringFilter<"Zap"> | string;
    lastEdited?: DateTimeFilter<"Zap"> | Date | string;
    createdAt?: DateTimeFilter<"Zap"> | Date | string;
    published?: BoolFilter<"Zap"> | boolean;
    RecordId?: StringNullableFilter<"Zap"> | string | null;
    userId?: IntFilter<"Zap"> | number;
    folderId?: IntFilter<"Zap"> | number;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null;
    actions?: ActionListRelationFilter;
    zapRuns?: ZapRunListRelationFilter;
    records?: RecordListRelationFilter;
    record?: XOR<RecordNullableRelationFilter, RecordWhereInput> | null;
    changeHistory?: ZapChangeHistoryListRelationFilter;
    notes?: ZapNoteListRelationFilter;
    folder?: XOR<FolderRelationFilter, FolderWhereInput>;
  };

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder;
    triggerId?: SortOrderInput | SortOrder;
    name?: SortOrder;
    lastEdited?: SortOrder;
    createdAt?: SortOrder;
    published?: SortOrder;
    RecordId?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    trigger?: TriggerOrderByWithRelationInput;
    actions?: ActionOrderByRelationAggregateInput;
    zapRuns?: ZapRunOrderByRelationAggregateInput;
    records?: RecordOrderByRelationAggregateInput;
    record?: RecordOrderByWithRelationInput;
    changeHistory?: ZapChangeHistoryOrderByRelationAggregateInput;
    notes?: ZapNoteOrderByRelationAggregateInput;
    folder?: FolderOrderByWithRelationInput;
  };

  export type ZapWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      RecordId?: string;
      AND?: ZapWhereInput | ZapWhereInput[];
      OR?: ZapWhereInput[];
      NOT?: ZapWhereInput | ZapWhereInput[];
      triggerId?: StringNullableFilter<"Zap"> | string | null;
      name?: StringFilter<"Zap"> | string;
      lastEdited?: DateTimeFilter<"Zap"> | Date | string;
      createdAt?: DateTimeFilter<"Zap"> | Date | string;
      published?: BoolFilter<"Zap"> | boolean;
      userId?: IntFilter<"Zap"> | number;
      folderId?: IntFilter<"Zap"> | number;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null;
      actions?: ActionListRelationFilter;
      zapRuns?: ZapRunListRelationFilter;
      records?: RecordListRelationFilter;
      record?: XOR<RecordNullableRelationFilter, RecordWhereInput> | null;
      changeHistory?: ZapChangeHistoryListRelationFilter;
      notes?: ZapNoteListRelationFilter;
      folder?: XOR<FolderRelationFilter, FolderWhereInput>;
    },
    "id" | "RecordId"
  >;

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder;
    triggerId?: SortOrderInput | SortOrder;
    name?: SortOrder;
    lastEdited?: SortOrder;
    createdAt?: SortOrder;
    published?: SortOrder;
    RecordId?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
    _count?: ZapCountOrderByAggregateInput;
    _avg?: ZapAvgOrderByAggregateInput;
    _max?: ZapMaxOrderByAggregateInput;
    _min?: ZapMinOrderByAggregateInput;
    _sum?: ZapSumOrderByAggregateInput;
  };

  export type ZapScalarWhereWithAggregatesInput = {
    AND?:
      | ZapScalarWhereWithAggregatesInput
      | ZapScalarWhereWithAggregatesInput[];
    OR?: ZapScalarWhereWithAggregatesInput[];
    NOT?:
      | ZapScalarWhereWithAggregatesInput
      | ZapScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Zap"> | number;
    triggerId?: StringNullableWithAggregatesFilter<"Zap"> | string | null;
    name?: StringWithAggregatesFilter<"Zap"> | string;
    lastEdited?: DateTimeWithAggregatesFilter<"Zap"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"Zap"> | Date | string;
    published?: BoolWithAggregatesFilter<"Zap"> | boolean;
    RecordId?: StringNullableWithAggregatesFilter<"Zap"> | string | null;
    userId?: IntWithAggregatesFilter<"Zap"> | number;
    folderId?: IntWithAggregatesFilter<"Zap"> | number;
  };

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[];
    OR?: FolderWhereInput[];
    NOT?: FolderWhereInput | FolderWhereInput[];
    id?: IntFilter<"Folder"> | number;
    name?: StringFilter<"Folder"> | string;
    userId?: IntFilter<"Folder"> | number;
    type?: StringFilter<"Folder"> | string;
    parentId?: IntNullableFilter<"Folder"> | number | null;
    createdAt?: DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeFilter<"Folder"> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    parent?: XOR<FolderNullableRelationFilter, FolderWhereInput> | null;
    children?: FolderListRelationFilter;
    zaps?: ZapListRelationFilter;
  };

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    parent?: FolderOrderByWithRelationInput;
    children?: FolderOrderByRelationAggregateInput;
    zaps?: ZapOrderByRelationAggregateInput;
  };

  export type FolderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId?: number;
      AND?: FolderWhereInput | FolderWhereInput[];
      OR?: FolderWhereInput[];
      NOT?: FolderWhereInput | FolderWhereInput[];
      name?: StringFilter<"Folder"> | string;
      type?: StringFilter<"Folder"> | string;
      parentId?: IntNullableFilter<"Folder"> | number | null;
      createdAt?: DateTimeFilter<"Folder"> | Date | string;
      updatedAt?: DateTimeFilter<"Folder"> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      parent?: XOR<FolderNullableRelationFilter, FolderWhereInput> | null;
      children?: FolderListRelationFilter;
      zaps?: ZapListRelationFilter;
    },
    "id" | "userId"
  >;

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: FolderCountOrderByAggregateInput;
    _avg?: FolderAvgOrderByAggregateInput;
    _max?: FolderMaxOrderByAggregateInput;
    _min?: FolderMinOrderByAggregateInput;
    _sum?: FolderSumOrderByAggregateInput;
  };

  export type FolderScalarWhereWithAggregatesInput = {
    AND?:
      | FolderScalarWhereWithAggregatesInput
      | FolderScalarWhereWithAggregatesInput[];
    OR?: FolderScalarWhereWithAggregatesInput[];
    NOT?:
      | FolderScalarWhereWithAggregatesInput
      | FolderScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Folder"> | number;
    name?: StringWithAggregatesFilter<"Folder"> | string;
    userId?: IntWithAggregatesFilter<"Folder"> | number;
    type?: StringWithAggregatesFilter<"Folder"> | string;
    parentId?: IntNullableWithAggregatesFilter<"Folder"> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string;
  };

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[];
    OR?: RecordWhereInput[];
    NOT?: RecordWhereInput | RecordWhereInput[];
    id?: StringFilter<"Record"> | string;
    type?: StringFilter<"Record"> | string;
    zapId?: IntFilter<"Record"> | number;
    createdAt?: DateTimeFilter<"Record"> | Date | string;
    pulledAt?: DateTimeFilter<"Record"> | Date | string;
    title?: StringFilter<"Record"> | string;
    JsonData?: JsonFilter<"Record">;
    triggerOptionId?: StringFilter<"Record"> | string;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    zapSingle?: XOR<ZapNullableRelationFilter, ZapWhereInput> | null;
  };

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder;
    type?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    pulledAt?: SortOrder;
    title?: SortOrder;
    JsonData?: SortOrder;
    triggerOptionId?: SortOrder;
    zap?: ZapOrderByWithRelationInput;
    zapSingle?: ZapOrderByWithRelationInput;
  };

  export type RecordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: RecordWhereInput | RecordWhereInput[];
      OR?: RecordWhereInput[];
      NOT?: RecordWhereInput | RecordWhereInput[];
      type?: StringFilter<"Record"> | string;
      zapId?: IntFilter<"Record"> | number;
      createdAt?: DateTimeFilter<"Record"> | Date | string;
      pulledAt?: DateTimeFilter<"Record"> | Date | string;
      title?: StringFilter<"Record"> | string;
      JsonData?: JsonFilter<"Record">;
      triggerOptionId?: StringFilter<"Record"> | string;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      zapSingle?: XOR<ZapNullableRelationFilter, ZapWhereInput> | null;
    },
    "id"
  >;

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder;
    type?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    pulledAt?: SortOrder;
    title?: SortOrder;
    JsonData?: SortOrder;
    triggerOptionId?: SortOrder;
    _count?: RecordCountOrderByAggregateInput;
    _avg?: RecordAvgOrderByAggregateInput;
    _max?: RecordMaxOrderByAggregateInput;
    _min?: RecordMinOrderByAggregateInput;
    _sum?: RecordSumOrderByAggregateInput;
  };

  export type RecordScalarWhereWithAggregatesInput = {
    AND?:
      | RecordScalarWhereWithAggregatesInput
      | RecordScalarWhereWithAggregatesInput[];
    OR?: RecordScalarWhereWithAggregatesInput[];
    NOT?:
      | RecordScalarWhereWithAggregatesInput
      | RecordScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Record"> | string;
    type?: StringWithAggregatesFilter<"Record"> | string;
    zapId?: IntWithAggregatesFilter<"Record"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string;
    pulledAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string;
    title?: StringWithAggregatesFilter<"Record"> | string;
    JsonData?: JsonWithAggregatesFilter<"Record">;
    triggerOptionId?: StringWithAggregatesFilter<"Record"> | string;
  };

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[];
    OR?: TriggerWhereInput[];
    NOT?: TriggerWhereInput | TriggerWhereInput[];
    id?: StringFilter<"Trigger"> | string;
    zapId?: IntFilter<"Trigger"> | number;
    optionId?: StringFilter<"Trigger"> | string;
    optionType?: StringFilter<"Trigger"> | string;
    published?: BoolFilter<"Trigger"> | boolean;
    configuration?: JsonFilter<"Trigger">;
    lastPolledAt?: DateTimeNullableFilter<"Trigger"> | Date | string | null;
    connectionId?: StringNullableFilter<"Trigger"> | string | null;
    triggerId?: StringFilter<"Trigger"> | string;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    userConnection?: XOR<
      UserConnectionNullableRelationFilter,
      UserConnectionWhereInput
    > | null;
    type?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>;
    note?: XOR<ZapNoteNullableRelationFilter, ZapNoteWhereInput> | null;
  };

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    optionId?: SortOrder;
    optionType?: SortOrder;
    published?: SortOrder;
    configuration?: SortOrder;
    lastPolledAt?: SortOrderInput | SortOrder;
    connectionId?: SortOrderInput | SortOrder;
    triggerId?: SortOrder;
    zap?: ZapOrderByWithRelationInput;
    userConnection?: UserConnectionOrderByWithRelationInput;
    type?: AvailableTriggersOrderByWithRelationInput;
    note?: ZapNoteOrderByWithRelationInput;
  };

  export type TriggerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      zapId?: number;
      AND?: TriggerWhereInput | TriggerWhereInput[];
      OR?: TriggerWhereInput[];
      NOT?: TriggerWhereInput | TriggerWhereInput[];
      optionId?: StringFilter<"Trigger"> | string;
      optionType?: StringFilter<"Trigger"> | string;
      published?: BoolFilter<"Trigger"> | boolean;
      configuration?: JsonFilter<"Trigger">;
      lastPolledAt?: DateTimeNullableFilter<"Trigger"> | Date | string | null;
      connectionId?: StringNullableFilter<"Trigger"> | string | null;
      triggerId?: StringFilter<"Trigger"> | string;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      userConnection?: XOR<
        UserConnectionNullableRelationFilter,
        UserConnectionWhereInput
      > | null;
      type?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>;
      note?: XOR<ZapNoteNullableRelationFilter, ZapNoteWhereInput> | null;
    },
    "id" | "zapId"
  >;

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    optionId?: SortOrder;
    optionType?: SortOrder;
    published?: SortOrder;
    configuration?: SortOrder;
    lastPolledAt?: SortOrderInput | SortOrder;
    connectionId?: SortOrderInput | SortOrder;
    triggerId?: SortOrder;
    _count?: TriggerCountOrderByAggregateInput;
    _avg?: TriggerAvgOrderByAggregateInput;
    _max?: TriggerMaxOrderByAggregateInput;
    _min?: TriggerMinOrderByAggregateInput;
    _sum?: TriggerSumOrderByAggregateInput;
  };

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?:
      | TriggerScalarWhereWithAggregatesInput
      | TriggerScalarWhereWithAggregatesInput[];
    OR?: TriggerScalarWhereWithAggregatesInput[];
    NOT?:
      | TriggerScalarWhereWithAggregatesInput
      | TriggerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Trigger"> | string;
    zapId?: IntWithAggregatesFilter<"Trigger"> | number;
    optionId?: StringWithAggregatesFilter<"Trigger"> | string;
    optionType?: StringWithAggregatesFilter<"Trigger"> | string;
    published?: BoolWithAggregatesFilter<"Trigger"> | boolean;
    configuration?: JsonWithAggregatesFilter<"Trigger">;
    lastPolledAt?:
      | DateTimeNullableWithAggregatesFilter<"Trigger">
      | Date
      | string
      | null;
    connectionId?:
      | StringNullableWithAggregatesFilter<"Trigger">
      | string
      | null;
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string;
  };

  export type UserConnectionWhereInput = {
    AND?: UserConnectionWhereInput | UserConnectionWhereInput[];
    OR?: UserConnectionWhereInput[];
    NOT?: UserConnectionWhereInput | UserConnectionWhereInput[];
    id?: StringFilter<"UserConnection"> | string;
    userId?: IntFilter<"UserConnection"> | number;
    appId?: StringFilter<"UserConnection"> | string;
    identifier?: StringFilter<"UserConnection"> | string;
    accessToken?: StringFilter<"UserConnection"> | string;
    refreshToken?: StringNullableFilter<"UserConnection"> | string | null;
    createdAt?: DateTimeFilter<"UserConnection"> | Date | string;
    expiredAt?: DateTimeFilter<"UserConnection"> | Date | string;
    User?: XOR<UserRelationFilter, UserWhereInput>;
    trigger?: TriggerListRelationFilter;
    action?: ActionListRelationFilter;
  };

  export type UserConnectionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    appId?: SortOrder;
    identifier?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    User?: UserOrderByWithRelationInput;
    trigger?: TriggerOrderByRelationAggregateInput;
    action?: ActionOrderByRelationAggregateInput;
  };

  export type UserConnectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: UserConnectionWhereInput | UserConnectionWhereInput[];
      OR?: UserConnectionWhereInput[];
      NOT?: UserConnectionWhereInput | UserConnectionWhereInput[];
      userId?: IntFilter<"UserConnection"> | number;
      appId?: StringFilter<"UserConnection"> | string;
      identifier?: StringFilter<"UserConnection"> | string;
      accessToken?: StringFilter<"UserConnection"> | string;
      refreshToken?: StringNullableFilter<"UserConnection"> | string | null;
      createdAt?: DateTimeFilter<"UserConnection"> | Date | string;
      expiredAt?: DateTimeFilter<"UserConnection"> | Date | string;
      User?: XOR<UserRelationFilter, UserWhereInput>;
      trigger?: TriggerListRelationFilter;
      action?: ActionListRelationFilter;
    },
    "id"
  >;

  export type UserConnectionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    appId?: SortOrder;
    identifier?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    _count?: UserConnectionCountOrderByAggregateInput;
    _avg?: UserConnectionAvgOrderByAggregateInput;
    _max?: UserConnectionMaxOrderByAggregateInput;
    _min?: UserConnectionMinOrderByAggregateInput;
    _sum?: UserConnectionSumOrderByAggregateInput;
  };

  export type UserConnectionScalarWhereWithAggregatesInput = {
    AND?:
      | UserConnectionScalarWhereWithAggregatesInput
      | UserConnectionScalarWhereWithAggregatesInput[];
    OR?: UserConnectionScalarWhereWithAggregatesInput[];
    NOT?:
      | UserConnectionScalarWhereWithAggregatesInput
      | UserConnectionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserConnection"> | string;
    userId?: IntWithAggregatesFilter<"UserConnection"> | number;
    appId?: StringWithAggregatesFilter<"UserConnection"> | string;
    identifier?: StringWithAggregatesFilter<"UserConnection"> | string;
    accessToken?: StringWithAggregatesFilter<"UserConnection"> | string;
    refreshToken?:
      | StringNullableWithAggregatesFilter<"UserConnection">
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"UserConnection"> | Date | string;
    expiredAt?: DateTimeWithAggregatesFilter<"UserConnection"> | Date | string;
  };

  export type AvailableTriggersWhereInput = {
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[];
    OR?: AvailableTriggersWhereInput[];
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[];
    id?: StringFilter<"AvailableTriggers"> | string;
    name?: StringFilter<"AvailableTriggers"> | string;
    type?: StringFilter<"AvailableTriggers"> | string;
    serviceType?: StringFilter<"AvailableTriggers"> | string;
    appId?: StringNullableFilter<"AvailableTriggers"> | string | null;
    metadata?: JsonFilter<"AvailableTriggers">;
    imagePath?: StringFilter<"AvailableTriggers"> | string;
    triggers?: TriggerListRelationFilter;
  };

  export type AvailableTriggersOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    imagePath?: SortOrder;
    triggers?: TriggerOrderByRelationAggregateInput;
  };

  export type AvailableTriggersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[];
      OR?: AvailableTriggersWhereInput[];
      NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[];
      name?: StringFilter<"AvailableTriggers"> | string;
      type?: StringFilter<"AvailableTriggers"> | string;
      serviceType?: StringFilter<"AvailableTriggers"> | string;
      appId?: StringNullableFilter<"AvailableTriggers"> | string | null;
      metadata?: JsonFilter<"AvailableTriggers">;
      imagePath?: StringFilter<"AvailableTriggers"> | string;
      triggers?: TriggerListRelationFilter;
    },
    "id"
  >;

  export type AvailableTriggersOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrderInput | SortOrder;
    metadata?: SortOrder;
    imagePath?: SortOrder;
    _count?: AvailableTriggersCountOrderByAggregateInput;
    _max?: AvailableTriggersMaxOrderByAggregateInput;
    _min?: AvailableTriggersMinOrderByAggregateInput;
  };

  export type AvailableTriggersScalarWhereWithAggregatesInput = {
    AND?:
      | AvailableTriggersScalarWhereWithAggregatesInput
      | AvailableTriggersScalarWhereWithAggregatesInput[];
    OR?: AvailableTriggersScalarWhereWithAggregatesInput[];
    NOT?:
      | AvailableTriggersScalarWhereWithAggregatesInput
      | AvailableTriggersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"AvailableTriggers"> | string;
    name?: StringWithAggregatesFilter<"AvailableTriggers"> | string;
    type?: StringWithAggregatesFilter<"AvailableTriggers"> | string;
    serviceType?: StringWithAggregatesFilter<"AvailableTriggers"> | string;
    appId?:
      | StringNullableWithAggregatesFilter<"AvailableTriggers">
      | string
      | null;
    metadata?: JsonWithAggregatesFilter<"AvailableTriggers">;
    imagePath?: StringWithAggregatesFilter<"AvailableTriggers"> | string;
  };

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[];
    OR?: ActionWhereInput[];
    NOT?: ActionWhereInput | ActionWhereInput[];
    id?: StringFilter<"Action"> | string;
    zapId?: IntFilter<"Action"> | number;
    success?: BoolNullableFilter<"Action"> | boolean | null;
    configuration?: JsonFilter<"Action">;
    optionId?: StringFilter<"Action"> | string;
    actionId?: StringFilter<"Action"> | string;
    sortingOrder?: IntFilter<"Action"> | number;
    connectionId?: StringNullableFilter<"Action"> | string | null;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    actionDetails?: XOR<
      AvailableActionsRelationFilter,
      AvailableActionsWhereInput
    >;
    userConnection?: XOR<
      UserConnectionNullableRelationFilter,
      UserConnectionWhereInput
    > | null;
    zapRunFailures?: ZapRunListRelationFilter;
    note?: XOR<ZapNoteNullableRelationFilter, ZapNoteWhereInput> | null;
  };

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    success?: SortOrderInput | SortOrder;
    configuration?: SortOrder;
    optionId?: SortOrder;
    actionId?: SortOrder;
    sortingOrder?: SortOrder;
    connectionId?: SortOrderInput | SortOrder;
    zap?: ZapOrderByWithRelationInput;
    actionDetails?: AvailableActionsOrderByWithRelationInput;
    userConnection?: UserConnectionOrderByWithRelationInput;
    zapRunFailures?: ZapRunOrderByRelationAggregateInput;
    note?: ZapNoteOrderByWithRelationInput;
  };

  export type ActionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      connectionId?: string;
      zapId_sortingOrder?: ActionZapIdSortingOrderCompoundUniqueInput;
      AND?: ActionWhereInput | ActionWhereInput[];
      OR?: ActionWhereInput[];
      NOT?: ActionWhereInput | ActionWhereInput[];
      zapId?: IntFilter<"Action"> | number;
      success?: BoolNullableFilter<"Action"> | boolean | null;
      configuration?: JsonFilter<"Action">;
      optionId?: StringFilter<"Action"> | string;
      actionId?: StringFilter<"Action"> | string;
      sortingOrder?: IntFilter<"Action"> | number;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      actionDetails?: XOR<
        AvailableActionsRelationFilter,
        AvailableActionsWhereInput
      >;
      userConnection?: XOR<
        UserConnectionNullableRelationFilter,
        UserConnectionWhereInput
      > | null;
      zapRunFailures?: ZapRunListRelationFilter;
      note?: XOR<ZapNoteNullableRelationFilter, ZapNoteWhereInput> | null;
    },
    "id" | "connectionId" | "zapId_sortingOrder"
  >;

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    success?: SortOrderInput | SortOrder;
    configuration?: SortOrder;
    optionId?: SortOrder;
    actionId?: SortOrder;
    sortingOrder?: SortOrder;
    connectionId?: SortOrderInput | SortOrder;
    _count?: ActionCountOrderByAggregateInput;
    _avg?: ActionAvgOrderByAggregateInput;
    _max?: ActionMaxOrderByAggregateInput;
    _min?: ActionMinOrderByAggregateInput;
    _sum?: ActionSumOrderByAggregateInput;
  };

  export type ActionScalarWhereWithAggregatesInput = {
    AND?:
      | ActionScalarWhereWithAggregatesInput
      | ActionScalarWhereWithAggregatesInput[];
    OR?: ActionScalarWhereWithAggregatesInput[];
    NOT?:
      | ActionScalarWhereWithAggregatesInput
      | ActionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Action"> | string;
    zapId?: IntWithAggregatesFilter<"Action"> | number;
    success?: BoolNullableWithAggregatesFilter<"Action"> | boolean | null;
    configuration?: JsonWithAggregatesFilter<"Action">;
    optionId?: StringWithAggregatesFilter<"Action"> | string;
    actionId?: StringWithAggregatesFilter<"Action"> | string;
    sortingOrder?: IntWithAggregatesFilter<"Action"> | number;
    connectionId?: StringNullableWithAggregatesFilter<"Action"> | string | null;
  };

  export type AvailableActionsWhereInput = {
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[];
    OR?: AvailableActionsWhereInput[];
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[];
    id?: StringFilter<"AvailableActions"> | string;
    name?: StringFilter<"AvailableActions"> | string;
    type?: StringFilter<"AvailableActions"> | string;
    serviceType?: StringFilter<"AvailableActions"> | string;
    appId?: StringNullableFilter<"AvailableActions"> | string | null;
    imagePath?: StringFilter<"AvailableActions"> | string;
    metadata?: JsonFilter<"AvailableActions">;
    actions?: ActionListRelationFilter;
  };

  export type AvailableActionsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrderInput | SortOrder;
    imagePath?: SortOrder;
    metadata?: SortOrder;
    actions?: ActionOrderByRelationAggregateInput;
  };

  export type AvailableActionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[];
      OR?: AvailableActionsWhereInput[];
      NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[];
      name?: StringFilter<"AvailableActions"> | string;
      type?: StringFilter<"AvailableActions"> | string;
      serviceType?: StringFilter<"AvailableActions"> | string;
      appId?: StringNullableFilter<"AvailableActions"> | string | null;
      imagePath?: StringFilter<"AvailableActions"> | string;
      metadata?: JsonFilter<"AvailableActions">;
      actions?: ActionListRelationFilter;
    },
    "id"
  >;

  export type AvailableActionsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrderInput | SortOrder;
    imagePath?: SortOrder;
    metadata?: SortOrder;
    _count?: AvailableActionsCountOrderByAggregateInput;
    _max?: AvailableActionsMaxOrderByAggregateInput;
    _min?: AvailableActionsMinOrderByAggregateInput;
  };

  export type AvailableActionsScalarWhereWithAggregatesInput = {
    AND?:
      | AvailableActionsScalarWhereWithAggregatesInput
      | AvailableActionsScalarWhereWithAggregatesInput[];
    OR?: AvailableActionsScalarWhereWithAggregatesInput[];
    NOT?:
      | AvailableActionsScalarWhereWithAggregatesInput
      | AvailableActionsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"AvailableActions"> | string;
    name?: StringWithAggregatesFilter<"AvailableActions"> | string;
    type?: StringWithAggregatesFilter<"AvailableActions"> | string;
    serviceType?: StringWithAggregatesFilter<"AvailableActions"> | string;
    appId?:
      | StringNullableWithAggregatesFilter<"AvailableActions">
      | string
      | null;
    imagePath?: StringWithAggregatesFilter<"AvailableActions"> | string;
    metadata?: JsonWithAggregatesFilter<"AvailableActions">;
  };

  export type ZapRunWhereInput = {
    AND?: ZapRunWhereInput | ZapRunWhereInput[];
    OR?: ZapRunWhereInput[];
    NOT?: ZapRunWhereInput | ZapRunWhereInput[];
    id?: StringFilter<"ZapRun"> | string;
    zapId?: IntFilter<"ZapRun"> | number;
    createdAt?: DateTimeFilter<"ZapRun"> | Date | string;
    completedAt?: DateTimeNullableFilter<"ZapRun"> | Date | string | null;
    status?: EnumZapRunStatusFilter<"ZapRun"> | $Enums.ZapRunStatus;
    failureReason?: StringNullableFilter<"ZapRun"> | string | null;
    failedActionId?: StringNullableFilter<"ZapRun"> | string | null;
    metaData?: JsonFilter<"ZapRun">;
    failedAction?: XOR<ActionNullableRelationFilter, ActionWhereInput> | null;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    zapRunOutBox?: XOR<
      ZapRunOutboxNullableRelationFilter,
      ZapRunOutboxWhereInput
    > | null;
  };

  export type ZapRunOrderByWithRelationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    status?: SortOrder;
    failureReason?: SortOrderInput | SortOrder;
    failedActionId?: SortOrderInput | SortOrder;
    metaData?: SortOrder;
    failedAction?: ActionOrderByWithRelationInput;
    zap?: ZapOrderByWithRelationInput;
    zapRunOutBox?: ZapRunOutboxOrderByWithRelationInput;
  };

  export type ZapRunWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ZapRunWhereInput | ZapRunWhereInput[];
      OR?: ZapRunWhereInput[];
      NOT?: ZapRunWhereInput | ZapRunWhereInput[];
      zapId?: IntFilter<"ZapRun"> | number;
      createdAt?: DateTimeFilter<"ZapRun"> | Date | string;
      completedAt?: DateTimeNullableFilter<"ZapRun"> | Date | string | null;
      status?: EnumZapRunStatusFilter<"ZapRun"> | $Enums.ZapRunStatus;
      failureReason?: StringNullableFilter<"ZapRun"> | string | null;
      failedActionId?: StringNullableFilter<"ZapRun"> | string | null;
      metaData?: JsonFilter<"ZapRun">;
      failedAction?: XOR<ActionNullableRelationFilter, ActionWhereInput> | null;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      zapRunOutBox?: XOR<
        ZapRunOutboxNullableRelationFilter,
        ZapRunOutboxWhereInput
      > | null;
    },
    "id"
  >;

  export type ZapRunOrderByWithAggregationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    status?: SortOrder;
    failureReason?: SortOrderInput | SortOrder;
    failedActionId?: SortOrderInput | SortOrder;
    metaData?: SortOrder;
    _count?: ZapRunCountOrderByAggregateInput;
    _avg?: ZapRunAvgOrderByAggregateInput;
    _max?: ZapRunMaxOrderByAggregateInput;
    _min?: ZapRunMinOrderByAggregateInput;
    _sum?: ZapRunSumOrderByAggregateInput;
  };

  export type ZapRunScalarWhereWithAggregatesInput = {
    AND?:
      | ZapRunScalarWhereWithAggregatesInput
      | ZapRunScalarWhereWithAggregatesInput[];
    OR?: ZapRunScalarWhereWithAggregatesInput[];
    NOT?:
      | ZapRunScalarWhereWithAggregatesInput
      | ZapRunScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ZapRun"> | string;
    zapId?: IntWithAggregatesFilter<"ZapRun"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"ZapRun"> | Date | string;
    completedAt?:
      | DateTimeNullableWithAggregatesFilter<"ZapRun">
      | Date
      | string
      | null;
    status?:
      | EnumZapRunStatusWithAggregatesFilter<"ZapRun">
      | $Enums.ZapRunStatus;
    failureReason?:
      | StringNullableWithAggregatesFilter<"ZapRun">
      | string
      | null;
    failedActionId?:
      | StringNullableWithAggregatesFilter<"ZapRun">
      | string
      | null;
    metaData?: JsonWithAggregatesFilter<"ZapRun">;
  };

  export type ZapRunOutboxWhereInput = {
    AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[];
    OR?: ZapRunOutboxWhereInput[];
    NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[];
    id?: StringFilter<"ZapRunOutbox"> | string;
    zapRunId?: StringFilter<"ZapRunOutbox"> | string;
    zapRun?: XOR<ZapRunRelationFilter, ZapRunWhereInput>;
  };

  export type ZapRunOutboxOrderByWithRelationInput = {
    id?: SortOrder;
    zapRunId?: SortOrder;
    zapRun?: ZapRunOrderByWithRelationInput;
  };

  export type ZapRunOutboxWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      zapRunId?: string;
      AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[];
      OR?: ZapRunOutboxWhereInput[];
      NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[];
      zapRun?: XOR<ZapRunRelationFilter, ZapRunWhereInput>;
    },
    "id" | "zapRunId"
  >;

  export type ZapRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder;
    zapRunId?: SortOrder;
    _count?: ZapRunOutboxCountOrderByAggregateInput;
    _max?: ZapRunOutboxMaxOrderByAggregateInput;
    _min?: ZapRunOutboxMinOrderByAggregateInput;
  };

  export type ZapRunOutboxScalarWhereWithAggregatesInput = {
    AND?:
      | ZapRunOutboxScalarWhereWithAggregatesInput
      | ZapRunOutboxScalarWhereWithAggregatesInput[];
    OR?: ZapRunOutboxScalarWhereWithAggregatesInput[];
    NOT?:
      | ZapRunOutboxScalarWhereWithAggregatesInput
      | ZapRunOutboxScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ZapRunOutbox"> | string;
    zapRunId?: StringWithAggregatesFilter<"ZapRunOutbox"> | string;
  };

  export type ZapChangeHistoryWhereInput = {
    AND?: ZapChangeHistoryWhereInput | ZapChangeHistoryWhereInput[];
    OR?: ZapChangeHistoryWhereInput[];
    NOT?: ZapChangeHistoryWhereInput | ZapChangeHistoryWhereInput[];
    id?: StringFilter<"ZapChangeHistory"> | string;
    zapId?: IntFilter<"ZapChangeHistory"> | number;
    type?: EnumZapHistoryTypeFilter<"ZapChangeHistory"> | $Enums.ZapHistoryType;
    message?: StringFilter<"ZapChangeHistory"> | string;
    createdById?: IntFilter<"ZapChangeHistory"> | number;
    createdAt?: DateTimeFilter<"ZapChangeHistory"> | Date | string;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    createdBy?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ZapChangeHistoryOrderByWithRelationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    type?: SortOrder;
    message?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    zap?: ZapOrderByWithRelationInput;
    createdBy?: UserOrderByWithRelationInput;
  };

  export type ZapChangeHistoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ZapChangeHistoryWhereInput | ZapChangeHistoryWhereInput[];
      OR?: ZapChangeHistoryWhereInput[];
      NOT?: ZapChangeHistoryWhereInput | ZapChangeHistoryWhereInput[];
      zapId?: IntFilter<"ZapChangeHistory"> | number;
      type?:
        | EnumZapHistoryTypeFilter<"ZapChangeHistory">
        | $Enums.ZapHistoryType;
      message?: StringFilter<"ZapChangeHistory"> | string;
      createdById?: IntFilter<"ZapChangeHistory"> | number;
      createdAt?: DateTimeFilter<"ZapChangeHistory"> | Date | string;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      createdBy?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type ZapChangeHistoryOrderByWithAggregationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    type?: SortOrder;
    message?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    _count?: ZapChangeHistoryCountOrderByAggregateInput;
    _avg?: ZapChangeHistoryAvgOrderByAggregateInput;
    _max?: ZapChangeHistoryMaxOrderByAggregateInput;
    _min?: ZapChangeHistoryMinOrderByAggregateInput;
    _sum?: ZapChangeHistorySumOrderByAggregateInput;
  };

  export type ZapChangeHistoryScalarWhereWithAggregatesInput = {
    AND?:
      | ZapChangeHistoryScalarWhereWithAggregatesInput
      | ZapChangeHistoryScalarWhereWithAggregatesInput[];
    OR?: ZapChangeHistoryScalarWhereWithAggregatesInput[];
    NOT?:
      | ZapChangeHistoryScalarWhereWithAggregatesInput
      | ZapChangeHistoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ZapChangeHistory"> | string;
    zapId?: IntWithAggregatesFilter<"ZapChangeHistory"> | number;
    type?:
      | EnumZapHistoryTypeWithAggregatesFilter<"ZapChangeHistory">
      | $Enums.ZapHistoryType;
    message?: StringWithAggregatesFilter<"ZapChangeHistory"> | string;
    createdById?: IntWithAggregatesFilter<"ZapChangeHistory"> | number;
    createdAt?:
      | DateTimeWithAggregatesFilter<"ZapChangeHistory">
      | Date
      | string;
  };

  export type ZapNoteWhereInput = {
    AND?: ZapNoteWhereInput | ZapNoteWhereInput[];
    OR?: ZapNoteWhereInput[];
    NOT?: ZapNoteWhereInput | ZapNoteWhereInput[];
    id?: StringFilter<"ZapNote"> | string;
    zapId?: IntFilter<"ZapNote"> | number;
    triggerId?: StringNullableFilter<"ZapNote"> | string | null;
    stepId?: StringNullableFilter<"ZapNote"> | string | null;
    type?: EnumZapNoteTypeFilter<"ZapNote"> | $Enums.ZapNoteType;
    content?: StringFilter<"ZapNote"> | string;
    createdById?: IntFilter<"ZapNote"> | number;
    createdAt?: DateTimeFilter<"ZapNote"> | Date | string;
    updatedAt?: DateTimeFilter<"ZapNote"> | Date | string;
    zap?: XOR<ZapRelationFilter, ZapWhereInput>;
    trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null;
    step?: XOR<ActionNullableRelationFilter, ActionWhereInput> | null;
    createdBy?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ZapNoteOrderByWithRelationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    triggerId?: SortOrderInput | SortOrder;
    stepId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    zap?: ZapOrderByWithRelationInput;
    trigger?: TriggerOrderByWithRelationInput;
    step?: ActionOrderByWithRelationInput;
    createdBy?: UserOrderByWithRelationInput;
  };

  export type ZapNoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      triggerId?: string;
      stepId?: string;
      AND?: ZapNoteWhereInput | ZapNoteWhereInput[];
      OR?: ZapNoteWhereInput[];
      NOT?: ZapNoteWhereInput | ZapNoteWhereInput[];
      zapId?: IntFilter<"ZapNote"> | number;
      type?: EnumZapNoteTypeFilter<"ZapNote"> | $Enums.ZapNoteType;
      content?: StringFilter<"ZapNote"> | string;
      createdById?: IntFilter<"ZapNote"> | number;
      createdAt?: DateTimeFilter<"ZapNote"> | Date | string;
      updatedAt?: DateTimeFilter<"ZapNote"> | Date | string;
      zap?: XOR<ZapRelationFilter, ZapWhereInput>;
      trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null;
      step?: XOR<ActionNullableRelationFilter, ActionWhereInput> | null;
      createdBy?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id" | "triggerId" | "stepId"
  >;

  export type ZapNoteOrderByWithAggregationInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    triggerId?: SortOrderInput | SortOrder;
    stepId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ZapNoteCountOrderByAggregateInput;
    _avg?: ZapNoteAvgOrderByAggregateInput;
    _max?: ZapNoteMaxOrderByAggregateInput;
    _min?: ZapNoteMinOrderByAggregateInput;
    _sum?: ZapNoteSumOrderByAggregateInput;
  };

  export type ZapNoteScalarWhereWithAggregatesInput = {
    AND?:
      | ZapNoteScalarWhereWithAggregatesInput
      | ZapNoteScalarWhereWithAggregatesInput[];
    OR?: ZapNoteScalarWhereWithAggregatesInput[];
    NOT?:
      | ZapNoteScalarWhereWithAggregatesInput
      | ZapNoteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ZapNote"> | string;
    zapId?: IntWithAggregatesFilter<"ZapNote"> | number;
    triggerId?: StringNullableWithAggregatesFilter<"ZapNote"> | string | null;
    stepId?: StringNullableWithAggregatesFilter<"ZapNote"> | string | null;
    type?: EnumZapNoteTypeWithAggregatesFilter<"ZapNote"> | $Enums.ZapNoteType;
    content?: StringWithAggregatesFilter<"ZapNote"> | string;
    createdById?: IntWithAggregatesFilter<"ZapNote"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"ZapNote"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"ZapNote"> | Date | string;
  };

  export type UserCreateInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapCreateNestedManyWithoutUserInput;
    connections?: UserConnectionCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput;
    connections?: UserConnectionUncheckedCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUncheckedUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapCreateInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapUpdateInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapCreateManyInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
  };

  export type ZapUpdateManyMutationInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ZapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
  };

  export type FolderCreateInput = {
    name: string;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFolderInput;
    parent?: FolderCreateNestedOneWithoutChildrenInput;
    children?: FolderCreateNestedManyWithoutParentInput;
    zaps?: ZapCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: FolderUncheckedCreateNestedManyWithoutParentInput;
    zaps?: ZapUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFolderNestedInput;
    parent?: FolderUpdateOneWithoutChildrenNestedInput;
    children?: FolderUpdateManyWithoutParentNestedInput;
    zaps?: ZapUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput;
    zaps?: ZapUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderCreateManyInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecordCreateInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
    zap: ZapCreateNestedOneWithoutRecordsInput;
    zapSingle?: ZapCreateNestedOneWithoutRecordInput;
  };

  export type RecordUncheckedCreateInput = {
    id?: string;
    type: string;
    zapId: number;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
    zapSingle?: ZapUncheckedCreateNestedOneWithoutRecordInput;
  };

  export type RecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
    zap?: ZapUpdateOneRequiredWithoutRecordsNestedInput;
    zapSingle?: ZapUpdateOneWithoutRecordNestedInput;
  };

  export type RecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
    zapSingle?: ZapUncheckedUpdateOneWithoutRecordNestedInput;
  };

  export type RecordCreateManyInput = {
    id?: string;
    type: string;
    zapId: number;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
  };

  export type RecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
  };

  export type RecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
  };

  export type TriggerCreateInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    zap: ZapCreateNestedOneWithoutTriggerInput;
    userConnection?: UserConnectionCreateNestedOneWithoutTriggerInput;
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput;
    note?: ZapNoteCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerUncheckedCreateInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
    triggerId: string;
    note?: ZapNoteUncheckedCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutTriggerNestedInput;
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput;
    note?: ZapNoteUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
    note?: ZapNoteUncheckedUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerCreateManyInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
    triggerId: string;
  };

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserConnectionCreateInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    User: UserCreateNestedOneWithoutConnectionsInput;
    trigger?: TriggerCreateNestedManyWithoutUserConnectionInput;
    action?: ActionCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionUncheckedCreateInput = {
    id?: string;
    userId: number;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    trigger?: TriggerUncheckedCreateNestedManyWithoutUserConnectionInput;
    action?: ActionUncheckedCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    User?: UserUpdateOneRequiredWithoutConnectionsNestedInput;
    trigger?: TriggerUpdateManyWithoutUserConnectionNestedInput;
    action?: ActionUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    trigger?: TriggerUncheckedUpdateManyWithoutUserConnectionNestedInput;
    action?: ActionUncheckedUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionCreateManyInput = {
    id?: string;
    userId: number;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
  };

  export type UserConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AvailableTriggersCreateInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: string;
    triggers?: TriggerCreateNestedManyWithoutTypeInput;
  };

  export type AvailableTriggersUncheckedCreateInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: string;
    triggers?: TriggerUncheckedCreateNestedManyWithoutTypeInput;
  };

  export type AvailableTriggersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
    triggers?: TriggerUpdateManyWithoutTypeNestedInput;
  };

  export type AvailableTriggersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
    triggers?: TriggerUncheckedUpdateManyWithoutTypeNestedInput;
  };

  export type AvailableTriggersCreateManyInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: string;
  };

  export type AvailableTriggersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
  };

  export type AvailableTriggersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
  };

  export type ActionCreateInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    zap: ZapCreateNestedOneWithoutActionsInput;
    actionDetails: AvailableActionsCreateNestedOneWithoutActionsInput;
    userConnection?: UserConnectionCreateNestedOneWithoutActionInput;
    zapRunFailures?: ZapRunCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteCreateNestedOneWithoutStepInput;
  };

  export type ActionUncheckedCreateInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
    zapRunFailures?: ZapRunUncheckedCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteUncheckedCreateNestedOneWithoutStepInput;
  };

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput;
    actionDetails?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutActionNestedInput;
    zapRunFailures?: ZapRunUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    zapRunFailures?: ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUncheckedUpdateOneWithoutStepNestedInput;
  };

  export type ActionCreateManyInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
  };

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
  };

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AvailableActionsCreateInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    imagePath?: string;
    metadata?: JsonNullValueInput | InputJsonValue;
    actions?: ActionCreateNestedManyWithoutActionDetailsInput;
  };

  export type AvailableActionsUncheckedCreateInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    imagePath?: string;
    metadata?: JsonNullValueInput | InputJsonValue;
    actions?: ActionUncheckedCreateNestedManyWithoutActionDetailsInput;
  };

  export type AvailableActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
    actions?: ActionUpdateManyWithoutActionDetailsNestedInput;
  };

  export type AvailableActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
    actions?: ActionUncheckedUpdateManyWithoutActionDetailsNestedInput;
  };

  export type AvailableActionsCreateManyInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    imagePath?: string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type AvailableActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type AvailableActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunCreateInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionCreateNestedOneWithoutZapRunFailuresInput;
    zap: ZapCreateNestedOneWithoutZapRunsInput;
    zapRunOutBox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunUncheckedCreateInput = {
    id?: string;
    zapId: number;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    failedActionId?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionUpdateOneWithoutZapRunFailuresNestedInput;
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput;
    zapRunOutBox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    failedActionId?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunCreateManyInput = {
    id?: string;
    zapId: number;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    failedActionId?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    failedActionId?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunOutboxCreateInput = {
    id?: string;
    zapRun: ZapRunCreateNestedOneWithoutZapRunOutBoxInput;
  };

  export type ZapRunOutboxUncheckedCreateInput = {
    id?: string;
    zapRunId: string;
  };

  export type ZapRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapRun?: ZapRunUpdateOneRequiredWithoutZapRunOutBoxNestedInput;
  };

  export type ZapRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapRunId?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapRunOutboxCreateManyInput = {
    id?: string;
    zapRunId: string;
  };

  export type ZapRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapRunId?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapChangeHistoryCreateInput = {
    id?: string;
    type: $Enums.ZapHistoryType;
    message: string;
    createdAt?: Date | string;
    zap: ZapCreateNestedOneWithoutChangeHistoryInput;
    createdBy: UserCreateNestedOneWithoutChangeHistoryInput;
  };

  export type ZapChangeHistoryUncheckedCreateInput = {
    id?: string;
    zapId: number;
    type: $Enums.ZapHistoryType;
    message: string;
    createdById: number;
    createdAt?: Date | string;
  };

  export type ZapChangeHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutChangeHistoryNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutChangeHistoryNestedInput;
  };

  export type ZapChangeHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapChangeHistoryCreateManyInput = {
    id?: string;
    zapId: number;
    type: $Enums.ZapHistoryType;
    message: string;
    createdById: number;
    createdAt?: Date | string;
  };

  export type ZapChangeHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapChangeHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteCreateInput = {
    id?: string;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap: ZapCreateNestedOneWithoutNotesInput;
    trigger?: TriggerCreateNestedOneWithoutNoteInput;
    step?: ActionCreateNestedOneWithoutNoteInput;
    createdBy: UserCreateNestedOneWithoutNotesInput;
  };

  export type ZapNoteUncheckedCreateInput = {
    id?: string;
    zapId: number;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutNotesNestedInput;
    trigger?: TriggerUpdateOneWithoutNoteNestedInput;
    step?: ActionUpdateOneWithoutNoteNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type ZapNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteCreateManyInput = {
    id?: string;
    zapId: number;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ZapListRelationFilter = {
    every?: ZapWhereInput;
    some?: ZapWhereInput;
    none?: ZapWhereInput;
  };

  export type UserConnectionListRelationFilter = {
    every?: UserConnectionWhereInput;
    some?: UserConnectionWhereInput;
    none?: UserConnectionWhereInput;
  };

  export type ZapChangeHistoryListRelationFilter = {
    every?: ZapChangeHistoryWhereInput;
    some?: ZapChangeHistoryWhereInput;
    none?: ZapChangeHistoryWhereInput;
  };

  export type ZapNoteListRelationFilter = {
    every?: ZapNoteWhereInput;
    some?: ZapNoteWhereInput;
    none?: ZapNoteWhereInput;
  };

  export type FolderListRelationFilter = {
    every?: FolderWhereInput;
    some?: FolderWhereInput;
    none?: FolderWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ZapOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ZapChangeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ZapNoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    firstname?: SortOrder;
    lastname?: SortOrder;
    email?: SortOrder;
    zapmail?: SortOrder;
    type?: SortOrder;
    verified?: SortOrder;
    password?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstname?: SortOrder;
    lastname?: SortOrder;
    email?: SortOrder;
    zapmail?: SortOrder;
    type?: SortOrder;
    verified?: SortOrder;
    password?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    firstname?: SortOrder;
    lastname?: SortOrder;
    email?: SortOrder;
    zapmail?: SortOrder;
    type?: SortOrder;
    verified?: SortOrder;
    password?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type TriggerNullableRelationFilter = {
    is?: TriggerWhereInput | null;
    isNot?: TriggerWhereInput | null;
  };

  export type ActionListRelationFilter = {
    every?: ActionWhereInput;
    some?: ActionWhereInput;
    none?: ActionWhereInput;
  };

  export type ZapRunListRelationFilter = {
    every?: ZapRunWhereInput;
    some?: ZapRunWhereInput;
    none?: ZapRunWhereInput;
  };

  export type RecordListRelationFilter = {
    every?: RecordWhereInput;
    some?: RecordWhereInput;
    none?: RecordWhereInput;
  };

  export type RecordNullableRelationFilter = {
    is?: RecordWhereInput | null;
    isNot?: RecordWhereInput | null;
  };

  export type FolderRelationFilter = {
    is?: FolderWhereInput;
    isNot?: FolderWhereInput;
  };

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ZapRunOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder;
    triggerId?: SortOrder;
    name?: SortOrder;
    lastEdited?: SortOrder;
    createdAt?: SortOrder;
    published?: SortOrder;
    RecordId?: SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
  };

  export type ZapAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
  };

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder;
    triggerId?: SortOrder;
    name?: SortOrder;
    lastEdited?: SortOrder;
    createdAt?: SortOrder;
    published?: SortOrder;
    RecordId?: SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
  };

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder;
    triggerId?: SortOrder;
    name?: SortOrder;
    lastEdited?: SortOrder;
    createdAt?: SortOrder;
    published?: SortOrder;
    RecordId?: SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
  };

  export type ZapSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    folderId?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type FolderNullableRelationFilter = {
    is?: FolderWhereInput | null;
    isNot?: FolderWhereInput | null;
  };

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    parentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrder;
  };

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    parentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    parentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ZapRelationFilter = {
    is?: ZapWhereInput;
    isNot?: ZapWhereInput;
  };

  export type ZapNullableRelationFilter = {
    is?: ZapWhereInput | null;
    isNot?: ZapWhereInput | null;
  };

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    pulledAt?: SortOrder;
    title?: SortOrder;
    JsonData?: SortOrder;
    triggerOptionId?: SortOrder;
  };

  export type RecordAvgOrderByAggregateInput = {
    zapId?: SortOrder;
  };

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    pulledAt?: SortOrder;
    title?: SortOrder;
    triggerOptionId?: SortOrder;
  };

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    pulledAt?: SortOrder;
    title?: SortOrder;
    triggerOptionId?: SortOrder;
  };

  export type RecordSumOrderByAggregateInput = {
    zapId?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserConnectionNullableRelationFilter = {
    is?: UserConnectionWhereInput | null;
    isNot?: UserConnectionWhereInput | null;
  };

  export type AvailableTriggersRelationFilter = {
    is?: AvailableTriggersWhereInput;
    isNot?: AvailableTriggersWhereInput;
  };

  export type ZapNoteNullableRelationFilter = {
    is?: ZapNoteWhereInput | null;
    isNot?: ZapNoteWhereInput | null;
  };

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    optionId?: SortOrder;
    optionType?: SortOrder;
    published?: SortOrder;
    configuration?: SortOrder;
    lastPolledAt?: SortOrder;
    connectionId?: SortOrder;
    triggerId?: SortOrder;
  };

  export type TriggerAvgOrderByAggregateInput = {
    zapId?: SortOrder;
  };

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    optionId?: SortOrder;
    optionType?: SortOrder;
    published?: SortOrder;
    lastPolledAt?: SortOrder;
    connectionId?: SortOrder;
    triggerId?: SortOrder;
  };

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    optionId?: SortOrder;
    optionType?: SortOrder;
    published?: SortOrder;
    lastPolledAt?: SortOrder;
    connectionId?: SortOrder;
    triggerId?: SortOrder;
  };

  export type TriggerSumOrderByAggregateInput = {
    zapId?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput;
    some?: TriggerWhereInput;
    none?: TriggerWhereInput;
  };

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserConnectionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    appId?: SortOrder;
    identifier?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
  };

  export type UserConnectionAvgOrderByAggregateInput = {
    userId?: SortOrder;
  };

  export type UserConnectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    appId?: SortOrder;
    identifier?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
  };

  export type UserConnectionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    appId?: SortOrder;
    identifier?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
  };

  export type UserConnectionSumOrderByAggregateInput = {
    userId?: SortOrder;
  };

  export type AvailableTriggersCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    metadata?: SortOrder;
    imagePath?: SortOrder;
  };

  export type AvailableTriggersMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    imagePath?: SortOrder;
  };

  export type AvailableTriggersMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    imagePath?: SortOrder;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type AvailableActionsRelationFilter = {
    is?: AvailableActionsWhereInput;
    isNot?: AvailableActionsWhereInput;
  };

  export type ActionZapIdSortingOrderCompoundUniqueInput = {
    zapId: number;
    sortingOrder: number;
  };

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    success?: SortOrder;
    configuration?: SortOrder;
    optionId?: SortOrder;
    actionId?: SortOrder;
    sortingOrder?: SortOrder;
    connectionId?: SortOrder;
  };

  export type ActionAvgOrderByAggregateInput = {
    zapId?: SortOrder;
    sortingOrder?: SortOrder;
  };

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    success?: SortOrder;
    optionId?: SortOrder;
    actionId?: SortOrder;
    sortingOrder?: SortOrder;
    connectionId?: SortOrder;
  };

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    success?: SortOrder;
    optionId?: SortOrder;
    actionId?: SortOrder;
    sortingOrder?: SortOrder;
    connectionId?: SortOrder;
  };

  export type ActionSumOrderByAggregateInput = {
    zapId?: SortOrder;
    sortingOrder?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type AvailableActionsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    imagePath?: SortOrder;
    metadata?: SortOrder;
  };

  export type AvailableActionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    imagePath?: SortOrder;
  };

  export type AvailableActionsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    serviceType?: SortOrder;
    appId?: SortOrder;
    imagePath?: SortOrder;
  };

  export type EnumZapRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapRunStatus | EnumZapRunStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapRunStatusFilter<$PrismaModel> | $Enums.ZapRunStatus;
  };

  export type ActionNullableRelationFilter = {
    is?: ActionWhereInput | null;
    isNot?: ActionWhereInput | null;
  };

  export type ZapRunOutboxNullableRelationFilter = {
    is?: ZapRunOutboxWhereInput | null;
    isNot?: ZapRunOutboxWhereInput | null;
  };

  export type ZapRunCountOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    status?: SortOrder;
    failureReason?: SortOrder;
    failedActionId?: SortOrder;
    metaData?: SortOrder;
  };

  export type ZapRunAvgOrderByAggregateInput = {
    zapId?: SortOrder;
  };

  export type ZapRunMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    status?: SortOrder;
    failureReason?: SortOrder;
    failedActionId?: SortOrder;
  };

  export type ZapRunMinOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    status?: SortOrder;
    failureReason?: SortOrder;
    failedActionId?: SortOrder;
  };

  export type ZapRunSumOrderByAggregateInput = {
    zapId?: SortOrder;
  };

  export type EnumZapRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapRunStatus | EnumZapRunStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumZapRunStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ZapRunStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumZapRunStatusFilter<$PrismaModel>;
    _max?: NestedEnumZapRunStatusFilter<$PrismaModel>;
  };

  export type ZapRunRelationFilter = {
    is?: ZapRunWhereInput;
    isNot?: ZapRunWhereInput;
  };

  export type ZapRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder;
    zapRunId?: SortOrder;
  };

  export type ZapRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapRunId?: SortOrder;
  };

  export type ZapRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder;
    zapRunId?: SortOrder;
  };

  export type EnumZapHistoryTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ZapHistoryType
      | EnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapHistoryTypeFilter<$PrismaModel> | $Enums.ZapHistoryType;
  };

  export type ZapChangeHistoryCountOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    type?: SortOrder;
    message?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ZapChangeHistoryAvgOrderByAggregateInput = {
    zapId?: SortOrder;
    createdById?: SortOrder;
  };

  export type ZapChangeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    type?: SortOrder;
    message?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ZapChangeHistoryMinOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    type?: SortOrder;
    message?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ZapChangeHistorySumOrderByAggregateInput = {
    zapId?: SortOrder;
    createdById?: SortOrder;
  };

  export type EnumZapHistoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ZapHistoryType
      | EnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumZapHistoryTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ZapHistoryType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumZapHistoryTypeFilter<$PrismaModel>;
    _max?: NestedEnumZapHistoryTypeFilter<$PrismaModel>;
  };

  export type EnumZapNoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapNoteType | EnumZapNoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ZapNoteType[] | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapNoteType[]
      | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapNoteTypeFilter<$PrismaModel> | $Enums.ZapNoteType;
  };

  export type ZapNoteCountOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    triggerId?: SortOrder;
    stepId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ZapNoteAvgOrderByAggregateInput = {
    zapId?: SortOrder;
    createdById?: SortOrder;
  };

  export type ZapNoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    triggerId?: SortOrder;
    stepId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ZapNoteMinOrderByAggregateInput = {
    id?: SortOrder;
    zapId?: SortOrder;
    triggerId?: SortOrder;
    stepId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ZapNoteSumOrderByAggregateInput = {
    zapId?: SortOrder;
    createdById?: SortOrder;
  };

  export type EnumZapNoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapNoteType | EnumZapNoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ZapNoteType[] | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapNoteType[]
      | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumZapNoteTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ZapNoteType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumZapNoteTypeFilter<$PrismaModel>;
    _max?: NestedEnumZapNoteTypeFilter<$PrismaModel>;
  };

  export type ZapCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
      | ZapCreateWithoutUserInput[]
      | ZapUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutUserInput
      | ZapCreateOrConnectWithoutUserInput[];
    createMany?: ZapCreateManyUserInputEnvelope;
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
  };

  export type UserConnectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserConnectionCreateWithoutUserInput,
          UserConnectionUncheckedCreateWithoutUserInput
        >
      | UserConnectionCreateWithoutUserInput[]
      | UserConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserConnectionCreateOrConnectWithoutUserInput
      | UserConnectionCreateOrConnectWithoutUserInput[];
    createMany?: UserConnectionCreateManyUserInputEnvelope;
    connect?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
  };

  export type ZapChangeHistoryCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutCreatedByInput,
          ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
        >
      | ZapChangeHistoryCreateWithoutCreatedByInput[]
      | ZapChangeHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput[];
    createMany?: ZapChangeHistoryCreateManyCreatedByInputEnvelope;
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
  };

  export type ZapNoteCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ZapNoteCreateWithoutCreatedByInput,
          ZapNoteUncheckedCreateWithoutCreatedByInput
        >
      | ZapNoteCreateWithoutCreatedByInput[]
      | ZapNoteUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutCreatedByInput
      | ZapNoteCreateOrConnectWithoutCreatedByInput[];
    createMany?: ZapNoteCreateManyCreatedByInputEnvelope;
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
  };

  export type FolderCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
      | FolderCreateWithoutUserInput[]
      | FolderUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutUserInput
      | FolderCreateOrConnectWithoutUserInput[];
    createMany?: FolderCreateManyUserInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type ZapUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
      | ZapCreateWithoutUserInput[]
      | ZapUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutUserInput
      | ZapCreateOrConnectWithoutUserInput[];
    createMany?: ZapCreateManyUserInputEnvelope;
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
  };

  export type UserConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserConnectionCreateWithoutUserInput,
          UserConnectionUncheckedCreateWithoutUserInput
        >
      | UserConnectionCreateWithoutUserInput[]
      | UserConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserConnectionCreateOrConnectWithoutUserInput
      | UserConnectionCreateOrConnectWithoutUserInput[];
    createMany?: UserConnectionCreateManyUserInputEnvelope;
    connect?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
  };

  export type ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutCreatedByInput,
          ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
        >
      | ZapChangeHistoryCreateWithoutCreatedByInput[]
      | ZapChangeHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput[];
    createMany?: ZapChangeHistoryCreateManyCreatedByInputEnvelope;
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
  };

  export type ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ZapNoteCreateWithoutCreatedByInput,
          ZapNoteUncheckedCreateWithoutCreatedByInput
        >
      | ZapNoteCreateWithoutCreatedByInput[]
      | ZapNoteUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutCreatedByInput
      | ZapNoteCreateOrConnectWithoutCreatedByInput[];
    createMany?: ZapNoteCreateManyCreatedByInputEnvelope;
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
  };

  export type FolderUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
      | FolderCreateWithoutUserInput[]
      | FolderUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutUserInput
      | FolderCreateOrConnectWithoutUserInput[];
    createMany?: FolderCreateManyUserInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ZapUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
      | ZapCreateWithoutUserInput[]
      | ZapUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutUserInput
      | ZapCreateOrConnectWithoutUserInput[];
    upsert?:
      | ZapUpsertWithWhereUniqueWithoutUserInput
      | ZapUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ZapCreateManyUserInputEnvelope;
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    update?:
      | ZapUpdateWithWhereUniqueWithoutUserInput
      | ZapUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ZapUpdateManyWithWhereWithoutUserInput
      | ZapUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[];
  };

  export type UserConnectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserConnectionCreateWithoutUserInput,
          UserConnectionUncheckedCreateWithoutUserInput
        >
      | UserConnectionCreateWithoutUserInput[]
      | UserConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserConnectionCreateOrConnectWithoutUserInput
      | UserConnectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserConnectionUpsertWithWhereUniqueWithoutUserInput
      | UserConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserConnectionCreateManyUserInputEnvelope;
    set?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    disconnect?:
      | UserConnectionWhereUniqueInput
      | UserConnectionWhereUniqueInput[];
    delete?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    connect?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    update?:
      | UserConnectionUpdateWithWhereUniqueWithoutUserInput
      | UserConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserConnectionUpdateManyWithWhereWithoutUserInput
      | UserConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserConnectionScalarWhereInput
      | UserConnectionScalarWhereInput[];
  };

  export type ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutCreatedByInput,
          ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
        >
      | ZapChangeHistoryCreateWithoutCreatedByInput[]
      | ZapChangeHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutCreatedByInput
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ZapChangeHistoryCreateManyCreatedByInputEnvelope;
    set?: ZapChangeHistoryWhereUniqueInput | ZapChangeHistoryWhereUniqueInput[];
    disconnect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    delete?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    update?:
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutCreatedByInput
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ZapChangeHistoryUpdateManyWithWhereWithoutCreatedByInput
      | ZapChangeHistoryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?:
      | ZapChangeHistoryScalarWhereInput
      | ZapChangeHistoryScalarWhereInput[];
  };

  export type ZapNoteUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ZapNoteCreateWithoutCreatedByInput,
          ZapNoteUncheckedCreateWithoutCreatedByInput
        >
      | ZapNoteCreateWithoutCreatedByInput[]
      | ZapNoteUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutCreatedByInput
      | ZapNoteCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ZapNoteUpsertWithWhereUniqueWithoutCreatedByInput
      | ZapNoteUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ZapNoteCreateManyCreatedByInputEnvelope;
    set?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    disconnect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    delete?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    update?:
      | ZapNoteUpdateWithWhereUniqueWithoutCreatedByInput
      | ZapNoteUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ZapNoteUpdateManyWithWhereWithoutCreatedByInput
      | ZapNoteUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
  };

  export type FolderUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
      | FolderCreateWithoutUserInput[]
      | FolderUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutUserInput
      | FolderCreateOrConnectWithoutUserInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutUserInput
      | FolderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FolderCreateManyUserInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutUserInput
      | FolderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutUserInput
      | FolderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ZapUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
      | ZapCreateWithoutUserInput[]
      | ZapUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutUserInput
      | ZapCreateOrConnectWithoutUserInput[];
    upsert?:
      | ZapUpsertWithWhereUniqueWithoutUserInput
      | ZapUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ZapCreateManyUserInputEnvelope;
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    update?:
      | ZapUpdateWithWhereUniqueWithoutUserInput
      | ZapUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ZapUpdateManyWithWhereWithoutUserInput
      | ZapUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[];
  };

  export type UserConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserConnectionCreateWithoutUserInput,
          UserConnectionUncheckedCreateWithoutUserInput
        >
      | UserConnectionCreateWithoutUserInput[]
      | UserConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserConnectionCreateOrConnectWithoutUserInput
      | UserConnectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserConnectionUpsertWithWhereUniqueWithoutUserInput
      | UserConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserConnectionCreateManyUserInputEnvelope;
    set?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    disconnect?:
      | UserConnectionWhereUniqueInput
      | UserConnectionWhereUniqueInput[];
    delete?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    connect?: UserConnectionWhereUniqueInput | UserConnectionWhereUniqueInput[];
    update?:
      | UserConnectionUpdateWithWhereUniqueWithoutUserInput
      | UserConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserConnectionUpdateManyWithWhereWithoutUserInput
      | UserConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserConnectionScalarWhereInput
      | UserConnectionScalarWhereInput[];
  };

  export type ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutCreatedByInput,
          ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
        >
      | ZapChangeHistoryCreateWithoutCreatedByInput[]
      | ZapChangeHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput
      | ZapChangeHistoryCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutCreatedByInput
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ZapChangeHistoryCreateManyCreatedByInputEnvelope;
    set?: ZapChangeHistoryWhereUniqueInput | ZapChangeHistoryWhereUniqueInput[];
    disconnect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    delete?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    update?:
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutCreatedByInput
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ZapChangeHistoryUpdateManyWithWhereWithoutCreatedByInput
      | ZapChangeHistoryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?:
      | ZapChangeHistoryScalarWhereInput
      | ZapChangeHistoryScalarWhereInput[];
  };

  export type ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ZapNoteCreateWithoutCreatedByInput,
          ZapNoteUncheckedCreateWithoutCreatedByInput
        >
      | ZapNoteCreateWithoutCreatedByInput[]
      | ZapNoteUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutCreatedByInput
      | ZapNoteCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ZapNoteUpsertWithWhereUniqueWithoutCreatedByInput
      | ZapNoteUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ZapNoteCreateManyCreatedByInputEnvelope;
    set?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    disconnect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    delete?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    update?:
      | ZapNoteUpdateWithWhereUniqueWithoutCreatedByInput
      | ZapNoteUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ZapNoteUpdateManyWithWhereWithoutCreatedByInput
      | ZapNoteUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
  };

  export type FolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
      | FolderCreateWithoutUserInput[]
      | FolderUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutUserInput
      | FolderCreateOrConnectWithoutUserInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutUserInput
      | FolderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FolderCreateManyUserInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutUserInput
      | FolderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutUserInput
      | FolderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutZapInput = {
    create?: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>;
    connectOrCreate?: UserCreateOrConnectWithoutZapInput;
    connect?: UserWhereUniqueInput;
  };

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput;
    connect?: TriggerWhereUniqueInput;
  };

  export type ActionCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
      | ActionCreateWithoutZapInput[]
      | ActionUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutZapInput
      | ActionCreateOrConnectWithoutZapInput[];
    createMany?: ActionCreateManyZapInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type ZapRunCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
      | ZapRunCreateWithoutZapInput[]
      | ZapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutZapInput
      | ZapRunCreateOrConnectWithoutZapInput[];
    createMany?: ZapRunCreateManyZapInputEnvelope;
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
  };

  export type RecordCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<RecordCreateWithoutZapInput, RecordUncheckedCreateWithoutZapInput>
      | RecordCreateWithoutZapInput[]
      | RecordUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | RecordCreateOrConnectWithoutZapInput
      | RecordCreateOrConnectWithoutZapInput[];
    createMany?: RecordCreateManyZapInputEnvelope;
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
  };

  export type RecordCreateNestedOneWithoutZapSingleInput = {
    create?: XOR<
      RecordCreateWithoutZapSingleInput,
      RecordUncheckedCreateWithoutZapSingleInput
    >;
    connectOrCreate?: RecordCreateOrConnectWithoutZapSingleInput;
    connect?: RecordWhereUniqueInput;
  };

  export type ZapChangeHistoryCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutZapInput,
          ZapChangeHistoryUncheckedCreateWithoutZapInput
        >
      | ZapChangeHistoryCreateWithoutZapInput[]
      | ZapChangeHistoryUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutZapInput
      | ZapChangeHistoryCreateOrConnectWithoutZapInput[];
    createMany?: ZapChangeHistoryCreateManyZapInputEnvelope;
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
  };

  export type ZapNoteCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ZapNoteCreateWithoutZapInput, ZapNoteUncheckedCreateWithoutZapInput>
      | ZapNoteCreateWithoutZapInput[]
      | ZapNoteUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutZapInput
      | ZapNoteCreateOrConnectWithoutZapInput[];
    createMany?: ZapNoteCreateManyZapInputEnvelope;
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
  };

  export type FolderCreateNestedOneWithoutZapsInput = {
    create?: XOR<
      FolderCreateWithoutZapsInput,
      FolderUncheckedCreateWithoutZapsInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutZapsInput;
    connect?: FolderWhereUniqueInput;
  };

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput;
    connect?: TriggerWhereUniqueInput;
  };

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
      | ActionCreateWithoutZapInput[]
      | ActionUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutZapInput
      | ActionCreateOrConnectWithoutZapInput[];
    createMany?: ActionCreateManyZapInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type ZapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
      | ZapRunCreateWithoutZapInput[]
      | ZapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutZapInput
      | ZapRunCreateOrConnectWithoutZapInput[];
    createMany?: ZapRunCreateManyZapInputEnvelope;
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
  };

  export type RecordUncheckedCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<RecordCreateWithoutZapInput, RecordUncheckedCreateWithoutZapInput>
      | RecordCreateWithoutZapInput[]
      | RecordUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | RecordCreateOrConnectWithoutZapInput
      | RecordCreateOrConnectWithoutZapInput[];
    createMany?: RecordCreateManyZapInputEnvelope;
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
  };

  export type ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutZapInput,
          ZapChangeHistoryUncheckedCreateWithoutZapInput
        >
      | ZapChangeHistoryCreateWithoutZapInput[]
      | ZapChangeHistoryUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutZapInput
      | ZapChangeHistoryCreateOrConnectWithoutZapInput[];
    createMany?: ZapChangeHistoryCreateManyZapInputEnvelope;
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
  };

  export type ZapNoteUncheckedCreateNestedManyWithoutZapInput = {
    create?:
      | XOR<ZapNoteCreateWithoutZapInput, ZapNoteUncheckedCreateWithoutZapInput>
      | ZapNoteCreateWithoutZapInput[]
      | ZapNoteUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutZapInput
      | ZapNoteCreateOrConnectWithoutZapInput[];
    createMany?: ZapNoteCreateManyZapInputEnvelope;
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutZapNestedInput = {
    create?: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>;
    connectOrCreate?: UserCreateOrConnectWithoutZapInput;
    upsert?: UserUpsertWithoutZapInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutZapInput, UserUpdateWithoutZapInput>,
      UserUncheckedUpdateWithoutZapInput
    >;
  };

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput;
    upsert?: TriggerUpsertWithoutZapInput;
    disconnect?: TriggerWhereInput | boolean;
    delete?: TriggerWhereInput | boolean;
    connect?: TriggerWhereUniqueInput;
    update?: XOR<
      XOR<
        TriggerUpdateToOneWithWhereWithoutZapInput,
        TriggerUpdateWithoutZapInput
      >,
      TriggerUncheckedUpdateWithoutZapInput
    >;
  };

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
      | ActionCreateWithoutZapInput[]
      | ActionUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutZapInput
      | ActionCreateOrConnectWithoutZapInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutZapInput
      | ActionUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ActionCreateManyZapInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutZapInput
      | ActionUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutZapInput
      | ActionUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type ZapRunUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
      | ZapRunCreateWithoutZapInput[]
      | ZapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutZapInput
      | ZapRunCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapRunUpsertWithWhereUniqueWithoutZapInput
      | ZapRunUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapRunCreateManyZapInputEnvelope;
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    update?:
      | ZapRunUpdateWithWhereUniqueWithoutZapInput
      | ZapRunUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapRunUpdateManyWithWhereWithoutZapInput
      | ZapRunUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
  };

  export type RecordUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<RecordCreateWithoutZapInput, RecordUncheckedCreateWithoutZapInput>
      | RecordCreateWithoutZapInput[]
      | RecordUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | RecordCreateOrConnectWithoutZapInput
      | RecordCreateOrConnectWithoutZapInput[];
    upsert?:
      | RecordUpsertWithWhereUniqueWithoutZapInput
      | RecordUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: RecordCreateManyZapInputEnvelope;
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    update?:
      | RecordUpdateWithWhereUniqueWithoutZapInput
      | RecordUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | RecordUpdateManyWithWhereWithoutZapInput
      | RecordUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[];
  };

  export type RecordUpdateOneWithoutZapSingleNestedInput = {
    create?: XOR<
      RecordCreateWithoutZapSingleInput,
      RecordUncheckedCreateWithoutZapSingleInput
    >;
    connectOrCreate?: RecordCreateOrConnectWithoutZapSingleInput;
    upsert?: RecordUpsertWithoutZapSingleInput;
    disconnect?: RecordWhereInput | boolean;
    delete?: RecordWhereInput | boolean;
    connect?: RecordWhereUniqueInput;
    update?: XOR<
      XOR<
        RecordUpdateToOneWithWhereWithoutZapSingleInput,
        RecordUpdateWithoutZapSingleInput
      >,
      RecordUncheckedUpdateWithoutZapSingleInput
    >;
  };

  export type ZapChangeHistoryUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutZapInput,
          ZapChangeHistoryUncheckedCreateWithoutZapInput
        >
      | ZapChangeHistoryCreateWithoutZapInput[]
      | ZapChangeHistoryUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutZapInput
      | ZapChangeHistoryCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutZapInput
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapChangeHistoryCreateManyZapInputEnvelope;
    set?: ZapChangeHistoryWhereUniqueInput | ZapChangeHistoryWhereUniqueInput[];
    disconnect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    delete?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    update?:
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutZapInput
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapChangeHistoryUpdateManyWithWhereWithoutZapInput
      | ZapChangeHistoryUpdateManyWithWhereWithoutZapInput[];
    deleteMany?:
      | ZapChangeHistoryScalarWhereInput
      | ZapChangeHistoryScalarWhereInput[];
  };

  export type ZapNoteUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ZapNoteCreateWithoutZapInput, ZapNoteUncheckedCreateWithoutZapInput>
      | ZapNoteCreateWithoutZapInput[]
      | ZapNoteUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutZapInput
      | ZapNoteCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapNoteUpsertWithWhereUniqueWithoutZapInput
      | ZapNoteUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapNoteCreateManyZapInputEnvelope;
    set?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    disconnect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    delete?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    update?:
      | ZapNoteUpdateWithWhereUniqueWithoutZapInput
      | ZapNoteUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapNoteUpdateManyWithWhereWithoutZapInput
      | ZapNoteUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
  };

  export type FolderUpdateOneRequiredWithoutZapsNestedInput = {
    create?: XOR<
      FolderCreateWithoutZapsInput,
      FolderUncheckedCreateWithoutZapsInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutZapsInput;
    upsert?: FolderUpsertWithoutZapsInput;
    connect?: FolderWhereUniqueInput;
    update?: XOR<
      XOR<
        FolderUpdateToOneWithWhereWithoutZapsInput,
        FolderUpdateWithoutZapsInput
      >,
      FolderUncheckedUpdateWithoutZapsInput
    >;
  };

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput;
    upsert?: TriggerUpsertWithoutZapInput;
    disconnect?: TriggerWhereInput | boolean;
    delete?: TriggerWhereInput | boolean;
    connect?: TriggerWhereUniqueInput;
    update?: XOR<
      XOR<
        TriggerUpdateToOneWithWhereWithoutZapInput,
        TriggerUpdateWithoutZapInput
      >,
      TriggerUncheckedUpdateWithoutZapInput
    >;
  };

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
      | ActionCreateWithoutZapInput[]
      | ActionUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutZapInput
      | ActionCreateOrConnectWithoutZapInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutZapInput
      | ActionUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ActionCreateManyZapInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutZapInput
      | ActionUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutZapInput
      | ActionUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type ZapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
      | ZapRunCreateWithoutZapInput[]
      | ZapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutZapInput
      | ZapRunCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapRunUpsertWithWhereUniqueWithoutZapInput
      | ZapRunUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapRunCreateManyZapInputEnvelope;
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    update?:
      | ZapRunUpdateWithWhereUniqueWithoutZapInput
      | ZapRunUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapRunUpdateManyWithWhereWithoutZapInput
      | ZapRunUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
  };

  export type RecordUncheckedUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<RecordCreateWithoutZapInput, RecordUncheckedCreateWithoutZapInput>
      | RecordCreateWithoutZapInput[]
      | RecordUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | RecordCreateOrConnectWithoutZapInput
      | RecordCreateOrConnectWithoutZapInput[];
    upsert?:
      | RecordUpsertWithWhereUniqueWithoutZapInput
      | RecordUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: RecordCreateManyZapInputEnvelope;
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[];
    update?:
      | RecordUpdateWithWhereUniqueWithoutZapInput
      | RecordUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | RecordUpdateManyWithWhereWithoutZapInput
      | RecordUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[];
  };

  export type ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<
          ZapChangeHistoryCreateWithoutZapInput,
          ZapChangeHistoryUncheckedCreateWithoutZapInput
        >
      | ZapChangeHistoryCreateWithoutZapInput[]
      | ZapChangeHistoryUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapChangeHistoryCreateOrConnectWithoutZapInput
      | ZapChangeHistoryCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutZapInput
      | ZapChangeHistoryUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapChangeHistoryCreateManyZapInputEnvelope;
    set?: ZapChangeHistoryWhereUniqueInput | ZapChangeHistoryWhereUniqueInput[];
    disconnect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    delete?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    connect?:
      | ZapChangeHistoryWhereUniqueInput
      | ZapChangeHistoryWhereUniqueInput[];
    update?:
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutZapInput
      | ZapChangeHistoryUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapChangeHistoryUpdateManyWithWhereWithoutZapInput
      | ZapChangeHistoryUpdateManyWithWhereWithoutZapInput[];
    deleteMany?:
      | ZapChangeHistoryScalarWhereInput
      | ZapChangeHistoryScalarWhereInput[];
  };

  export type ZapNoteUncheckedUpdateManyWithoutZapNestedInput = {
    create?:
      | XOR<ZapNoteCreateWithoutZapInput, ZapNoteUncheckedCreateWithoutZapInput>
      | ZapNoteCreateWithoutZapInput[]
      | ZapNoteUncheckedCreateWithoutZapInput[];
    connectOrCreate?:
      | ZapNoteCreateOrConnectWithoutZapInput
      | ZapNoteCreateOrConnectWithoutZapInput[];
    upsert?:
      | ZapNoteUpsertWithWhereUniqueWithoutZapInput
      | ZapNoteUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: ZapNoteCreateManyZapInputEnvelope;
    set?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    disconnect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    delete?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    connect?: ZapNoteWhereUniqueInput | ZapNoteWhereUniqueInput[];
    update?:
      | ZapNoteUpdateWithWhereUniqueWithoutZapInput
      | ZapNoteUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?:
      | ZapNoteUpdateManyWithWhereWithoutZapInput
      | ZapNoteUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutFolderInput = {
    create?: XOR<
      UserCreateWithoutFolderInput,
      UserUncheckedCreateWithoutFolderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFolderInput;
    connect?: UserWhereUniqueInput;
  };

  export type FolderCreateNestedOneWithoutChildrenInput = {
    create?: XOR<
      FolderCreateWithoutChildrenInput,
      FolderUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput;
    connect?: FolderWhereUniqueInput;
  };

  export type FolderCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          FolderCreateWithoutParentInput,
          FolderUncheckedCreateWithoutParentInput
        >
      | FolderCreateWithoutParentInput[]
      | FolderUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutParentInput
      | FolderCreateOrConnectWithoutParentInput[];
    createMany?: FolderCreateManyParentInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type ZapCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<ZapCreateWithoutFolderInput, ZapUncheckedCreateWithoutFolderInput>
      | ZapCreateWithoutFolderInput[]
      | ZapUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutFolderInput
      | ZapCreateOrConnectWithoutFolderInput[];
    createMany?: ZapCreateManyFolderInputEnvelope;
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
  };

  export type FolderUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          FolderCreateWithoutParentInput,
          FolderUncheckedCreateWithoutParentInput
        >
      | FolderCreateWithoutParentInput[]
      | FolderUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutParentInput
      | FolderCreateOrConnectWithoutParentInput[];
    createMany?: FolderCreateManyParentInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type ZapUncheckedCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<ZapCreateWithoutFolderInput, ZapUncheckedCreateWithoutFolderInput>
      | ZapCreateWithoutFolderInput[]
      | ZapUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutFolderInput
      | ZapCreateOrConnectWithoutFolderInput[];
    createMany?: ZapCreateManyFolderInputEnvelope;
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutFolderNestedInput = {
    create?: XOR<
      UserCreateWithoutFolderInput,
      UserUncheckedCreateWithoutFolderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFolderInput;
    upsert?: UserUpsertWithoutFolderInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFolderInput,
        UserUpdateWithoutFolderInput
      >,
      UserUncheckedUpdateWithoutFolderInput
    >;
  };

  export type FolderUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<
      FolderCreateWithoutChildrenInput,
      FolderUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput;
    upsert?: FolderUpsertWithoutChildrenInput;
    disconnect?: FolderWhereInput | boolean;
    delete?: FolderWhereInput | boolean;
    connect?: FolderWhereUniqueInput;
    update?: XOR<
      XOR<
        FolderUpdateToOneWithWhereWithoutChildrenInput,
        FolderUpdateWithoutChildrenInput
      >,
      FolderUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type FolderUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          FolderCreateWithoutParentInput,
          FolderUncheckedCreateWithoutParentInput
        >
      | FolderCreateWithoutParentInput[]
      | FolderUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutParentInput
      | FolderCreateOrConnectWithoutParentInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutParentInput
      | FolderUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: FolderCreateManyParentInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutParentInput
      | FolderUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutParentInput
      | FolderUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type ZapUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<ZapCreateWithoutFolderInput, ZapUncheckedCreateWithoutFolderInput>
      | ZapCreateWithoutFolderInput[]
      | ZapUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutFolderInput
      | ZapCreateOrConnectWithoutFolderInput[];
    upsert?:
      | ZapUpsertWithWhereUniqueWithoutFolderInput
      | ZapUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: ZapCreateManyFolderInputEnvelope;
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    update?:
      | ZapUpdateWithWhereUniqueWithoutFolderInput
      | ZapUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | ZapUpdateManyWithWhereWithoutFolderInput
      | ZapUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FolderUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          FolderCreateWithoutParentInput,
          FolderUncheckedCreateWithoutParentInput
        >
      | FolderCreateWithoutParentInput[]
      | FolderUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutParentInput
      | FolderCreateOrConnectWithoutParentInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutParentInput
      | FolderUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: FolderCreateManyParentInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutParentInput
      | FolderUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutParentInput
      | FolderUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type ZapUncheckedUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<ZapCreateWithoutFolderInput, ZapUncheckedCreateWithoutFolderInput>
      | ZapCreateWithoutFolderInput[]
      | ZapUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | ZapCreateOrConnectWithoutFolderInput
      | ZapCreateOrConnectWithoutFolderInput[];
    upsert?:
      | ZapUpsertWithWhereUniqueWithoutFolderInput
      | ZapUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: ZapCreateManyFolderInputEnvelope;
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[];
    update?:
      | ZapUpdateWithWhereUniqueWithoutFolderInput
      | ZapUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | ZapUpdateManyWithWhereWithoutFolderInput
      | ZapUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[];
  };

  export type ZapCreateNestedOneWithoutRecordsInput = {
    create?: XOR<
      ZapCreateWithoutRecordsInput,
      ZapUncheckedCreateWithoutRecordsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordsInput;
    connect?: ZapWhereUniqueInput;
  };

  export type ZapCreateNestedOneWithoutRecordInput = {
    create?: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordInput;
    connect?: ZapWhereUniqueInput;
  };

  export type ZapUncheckedCreateNestedOneWithoutRecordInput = {
    create?: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordInput;
    connect?: ZapWhereUniqueInput;
  };

  export type ZapUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<
      ZapCreateWithoutRecordsInput,
      ZapUncheckedCreateWithoutRecordsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordsInput;
    upsert?: ZapUpsertWithoutRecordsInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutRecordsInput,
        ZapUpdateWithoutRecordsInput
      >,
      ZapUncheckedUpdateWithoutRecordsInput
    >;
  };

  export type ZapUpdateOneWithoutRecordNestedInput = {
    create?: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordInput;
    upsert?: ZapUpsertWithoutRecordInput;
    disconnect?: ZapWhereInput | boolean;
    delete?: ZapWhereInput | boolean;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutRecordInput,
        ZapUpdateWithoutRecordInput
      >,
      ZapUncheckedUpdateWithoutRecordInput
    >;
  };

  export type ZapUncheckedUpdateOneWithoutRecordNestedInput = {
    create?: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutRecordInput;
    upsert?: ZapUpsertWithoutRecordInput;
    disconnect?: ZapWhereInput | boolean;
    delete?: ZapWhereInput | boolean;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutRecordInput,
        ZapUpdateWithoutRecordInput
      >,
      ZapUncheckedUpdateWithoutRecordInput
    >;
  };

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<
      ZapCreateWithoutTriggerInput,
      ZapUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput;
    connect?: ZapWhereUniqueInput;
  };

  export type UserConnectionCreateNestedOneWithoutTriggerInput = {
    create?: XOR<
      UserConnectionCreateWithoutTriggerInput,
      UserConnectionUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: UserConnectionCreateOrConnectWithoutTriggerInput;
    connect?: UserConnectionWhereUniqueInput;
  };

  export type AvailableTriggersCreateNestedOneWithoutTriggersInput = {
    create?: XOR<
      AvailableTriggersCreateWithoutTriggersInput,
      AvailableTriggersUncheckedCreateWithoutTriggersInput
    >;
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput;
    connect?: AvailableTriggersWhereUniqueInput;
  };

  export type ZapNoteCreateNestedOneWithoutTriggerInput = {
    create?: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutTriggerInput;
    connect?: ZapNoteWhereUniqueInput;
  };

  export type ZapNoteUncheckedCreateNestedOneWithoutTriggerInput = {
    create?: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutTriggerInput;
    connect?: ZapNoteWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<
      ZapCreateWithoutTriggerInput,
      ZapUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput;
    upsert?: ZapUpsertWithoutTriggerInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutTriggerInput,
        ZapUpdateWithoutTriggerInput
      >,
      ZapUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type UserConnectionUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<
      UserConnectionCreateWithoutTriggerInput,
      UserConnectionUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: UserConnectionCreateOrConnectWithoutTriggerInput;
    upsert?: UserConnectionUpsertWithoutTriggerInput;
    disconnect?: UserConnectionWhereInput | boolean;
    delete?: UserConnectionWhereInput | boolean;
    connect?: UserConnectionWhereUniqueInput;
    update?: XOR<
      XOR<
        UserConnectionUpdateToOneWithWhereWithoutTriggerInput,
        UserConnectionUpdateWithoutTriggerInput
      >,
      UserConnectionUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<
      AvailableTriggersCreateWithoutTriggersInput,
      AvailableTriggersUncheckedCreateWithoutTriggersInput
    >;
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput;
    upsert?: AvailableTriggersUpsertWithoutTriggersInput;
    connect?: AvailableTriggersWhereUniqueInput;
    update?: XOR<
      XOR<
        AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput,
        AvailableTriggersUpdateWithoutTriggersInput
      >,
      AvailableTriggersUncheckedUpdateWithoutTriggersInput
    >;
  };

  export type ZapNoteUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutTriggerInput;
    upsert?: ZapNoteUpsertWithoutTriggerInput;
    disconnect?: ZapNoteWhereInput | boolean;
    delete?: ZapNoteWhereInput | boolean;
    connect?: ZapNoteWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapNoteUpdateToOneWithWhereWithoutTriggerInput,
        ZapNoteUpdateWithoutTriggerInput
      >,
      ZapNoteUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type ZapNoteUncheckedUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutTriggerInput;
    upsert?: ZapNoteUpsertWithoutTriggerInput;
    disconnect?: ZapNoteWhereInput | boolean;
    delete?: ZapNoteWhereInput | boolean;
    connect?: ZapNoteWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapNoteUpdateToOneWithWhereWithoutTriggerInput,
        ZapNoteUpdateWithoutTriggerInput
      >,
      ZapNoteUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type TriggerCreateNestedManyWithoutUserConnectionInput = {
    create?:
      | XOR<
          TriggerCreateWithoutUserConnectionInput,
          TriggerUncheckedCreateWithoutUserConnectionInput
        >
      | TriggerCreateWithoutUserConnectionInput[]
      | TriggerUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutUserConnectionInput
      | TriggerCreateOrConnectWithoutUserConnectionInput[];
    createMany?: TriggerCreateManyUserConnectionInputEnvelope;
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
  };

  export type ActionCreateNestedManyWithoutUserConnectionInput = {
    create?:
      | XOR<
          ActionCreateWithoutUserConnectionInput,
          ActionUncheckedCreateWithoutUserConnectionInput
        >
      | ActionCreateWithoutUserConnectionInput[]
      | ActionUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutUserConnectionInput
      | ActionCreateOrConnectWithoutUserConnectionInput[];
    createMany?: ActionCreateManyUserConnectionInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type TriggerUncheckedCreateNestedManyWithoutUserConnectionInput = {
    create?:
      | XOR<
          TriggerCreateWithoutUserConnectionInput,
          TriggerUncheckedCreateWithoutUserConnectionInput
        >
      | TriggerCreateWithoutUserConnectionInput[]
      | TriggerUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutUserConnectionInput
      | TriggerCreateOrConnectWithoutUserConnectionInput[];
    createMany?: TriggerCreateManyUserConnectionInputEnvelope;
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
  };

  export type ActionUncheckedCreateNestedManyWithoutUserConnectionInput = {
    create?:
      | XOR<
          ActionCreateWithoutUserConnectionInput,
          ActionUncheckedCreateWithoutUserConnectionInput
        >
      | ActionCreateWithoutUserConnectionInput[]
      | ActionUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutUserConnectionInput
      | ActionCreateOrConnectWithoutUserConnectionInput[];
    createMany?: ActionCreateManyUserConnectionInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput;
    upsert?: UserUpsertWithoutConnectionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutConnectionsInput,
        UserUpdateWithoutConnectionsInput
      >,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
  };

  export type TriggerUpdateManyWithoutUserConnectionNestedInput = {
    create?:
      | XOR<
          TriggerCreateWithoutUserConnectionInput,
          TriggerUncheckedCreateWithoutUserConnectionInput
        >
      | TriggerCreateWithoutUserConnectionInput[]
      | TriggerUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutUserConnectionInput
      | TriggerCreateOrConnectWithoutUserConnectionInput[];
    upsert?:
      | TriggerUpsertWithWhereUniqueWithoutUserConnectionInput
      | TriggerUpsertWithWhereUniqueWithoutUserConnectionInput[];
    createMany?: TriggerCreateManyUserConnectionInputEnvelope;
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    update?:
      | TriggerUpdateWithWhereUniqueWithoutUserConnectionInput
      | TriggerUpdateWithWhereUniqueWithoutUserConnectionInput[];
    updateMany?:
      | TriggerUpdateManyWithWhereWithoutUserConnectionInput
      | TriggerUpdateManyWithWhereWithoutUserConnectionInput[];
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
  };

  export type ActionUpdateManyWithoutUserConnectionNestedInput = {
    create?:
      | XOR<
          ActionCreateWithoutUserConnectionInput,
          ActionUncheckedCreateWithoutUserConnectionInput
        >
      | ActionCreateWithoutUserConnectionInput[]
      | ActionUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutUserConnectionInput
      | ActionCreateOrConnectWithoutUserConnectionInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutUserConnectionInput
      | ActionUpsertWithWhereUniqueWithoutUserConnectionInput[];
    createMany?: ActionCreateManyUserConnectionInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutUserConnectionInput
      | ActionUpdateWithWhereUniqueWithoutUserConnectionInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutUserConnectionInput
      | ActionUpdateManyWithWhereWithoutUserConnectionInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type TriggerUncheckedUpdateManyWithoutUserConnectionNestedInput = {
    create?:
      | XOR<
          TriggerCreateWithoutUserConnectionInput,
          TriggerUncheckedCreateWithoutUserConnectionInput
        >
      | TriggerCreateWithoutUserConnectionInput[]
      | TriggerUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutUserConnectionInput
      | TriggerCreateOrConnectWithoutUserConnectionInput[];
    upsert?:
      | TriggerUpsertWithWhereUniqueWithoutUserConnectionInput
      | TriggerUpsertWithWhereUniqueWithoutUserConnectionInput[];
    createMany?: TriggerCreateManyUserConnectionInputEnvelope;
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    update?:
      | TriggerUpdateWithWhereUniqueWithoutUserConnectionInput
      | TriggerUpdateWithWhereUniqueWithoutUserConnectionInput[];
    updateMany?:
      | TriggerUpdateManyWithWhereWithoutUserConnectionInput
      | TriggerUpdateManyWithWhereWithoutUserConnectionInput[];
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
  };

  export type ActionUncheckedUpdateManyWithoutUserConnectionNestedInput = {
    create?:
      | XOR<
          ActionCreateWithoutUserConnectionInput,
          ActionUncheckedCreateWithoutUserConnectionInput
        >
      | ActionCreateWithoutUserConnectionInput[]
      | ActionUncheckedCreateWithoutUserConnectionInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutUserConnectionInput
      | ActionCreateOrConnectWithoutUserConnectionInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutUserConnectionInput
      | ActionUpsertWithWhereUniqueWithoutUserConnectionInput[];
    createMany?: ActionCreateManyUserConnectionInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutUserConnectionInput
      | ActionUpdateWithWhereUniqueWithoutUserConnectionInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutUserConnectionInput
      | ActionUpdateManyWithWhereWithoutUserConnectionInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?:
      | XOR<
          TriggerCreateWithoutTypeInput,
          TriggerUncheckedCreateWithoutTypeInput
        >
      | TriggerCreateWithoutTypeInput[]
      | TriggerUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutTypeInput
      | TriggerCreateOrConnectWithoutTypeInput[];
    createMany?: TriggerCreateManyTypeInputEnvelope;
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
  };

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?:
      | XOR<
          TriggerCreateWithoutTypeInput,
          TriggerUncheckedCreateWithoutTypeInput
        >
      | TriggerCreateWithoutTypeInput[]
      | TriggerUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutTypeInput
      | TriggerCreateOrConnectWithoutTypeInput[];
    createMany?: TriggerCreateManyTypeInputEnvelope;
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
  };

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?:
      | XOR<
          TriggerCreateWithoutTypeInput,
          TriggerUncheckedCreateWithoutTypeInput
        >
      | TriggerCreateWithoutTypeInput[]
      | TriggerUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutTypeInput
      | TriggerCreateOrConnectWithoutTypeInput[];
    upsert?:
      | TriggerUpsertWithWhereUniqueWithoutTypeInput
      | TriggerUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: TriggerCreateManyTypeInputEnvelope;
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    update?:
      | TriggerUpdateWithWhereUniqueWithoutTypeInput
      | TriggerUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?:
      | TriggerUpdateManyWithWhereWithoutTypeInput
      | TriggerUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
  };

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?:
      | XOR<
          TriggerCreateWithoutTypeInput,
          TriggerUncheckedCreateWithoutTypeInput
        >
      | TriggerCreateWithoutTypeInput[]
      | TriggerUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | TriggerCreateOrConnectWithoutTypeInput
      | TriggerCreateOrConnectWithoutTypeInput[];
    upsert?:
      | TriggerUpsertWithWhereUniqueWithoutTypeInput
      | TriggerUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: TriggerCreateManyTypeInputEnvelope;
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[];
    update?:
      | TriggerUpdateWithWhereUniqueWithoutTypeInput
      | TriggerUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?:
      | TriggerUpdateManyWithWhereWithoutTypeInput
      | TriggerUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
  };

  export type ZapCreateNestedOneWithoutActionsInput = {
    create?: XOR<
      ZapCreateWithoutActionsInput,
      ZapUncheckedCreateWithoutActionsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput;
    connect?: ZapWhereUniqueInput;
  };

  export type AvailableActionsCreateNestedOneWithoutActionsInput = {
    create?: XOR<
      AvailableActionsCreateWithoutActionsInput,
      AvailableActionsUncheckedCreateWithoutActionsInput
    >;
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput;
    connect?: AvailableActionsWhereUniqueInput;
  };

  export type UserConnectionCreateNestedOneWithoutActionInput = {
    create?: XOR<
      UserConnectionCreateWithoutActionInput,
      UserConnectionUncheckedCreateWithoutActionInput
    >;
    connectOrCreate?: UserConnectionCreateOrConnectWithoutActionInput;
    connect?: UserConnectionWhereUniqueInput;
  };

  export type ZapRunCreateNestedManyWithoutFailedActionInput = {
    create?:
      | XOR<
          ZapRunCreateWithoutFailedActionInput,
          ZapRunUncheckedCreateWithoutFailedActionInput
        >
      | ZapRunCreateWithoutFailedActionInput[]
      | ZapRunUncheckedCreateWithoutFailedActionInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutFailedActionInput
      | ZapRunCreateOrConnectWithoutFailedActionInput[];
    createMany?: ZapRunCreateManyFailedActionInputEnvelope;
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
  };

  export type ZapNoteCreateNestedOneWithoutStepInput = {
    create?: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutStepInput;
    connect?: ZapNoteWhereUniqueInput;
  };

  export type ZapRunUncheckedCreateNestedManyWithoutFailedActionInput = {
    create?:
      | XOR<
          ZapRunCreateWithoutFailedActionInput,
          ZapRunUncheckedCreateWithoutFailedActionInput
        >
      | ZapRunCreateWithoutFailedActionInput[]
      | ZapRunUncheckedCreateWithoutFailedActionInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutFailedActionInput
      | ZapRunCreateOrConnectWithoutFailedActionInput[];
    createMany?: ZapRunCreateManyFailedActionInputEnvelope;
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
  };

  export type ZapNoteUncheckedCreateNestedOneWithoutStepInput = {
    create?: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutStepInput;
    connect?: ZapNoteWhereUniqueInput;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type ZapUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<
      ZapCreateWithoutActionsInput,
      ZapUncheckedCreateWithoutActionsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput;
    upsert?: ZapUpsertWithoutActionsInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutActionsInput,
        ZapUpdateWithoutActionsInput
      >,
      ZapUncheckedUpdateWithoutActionsInput
    >;
  };

  export type AvailableActionsUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<
      AvailableActionsCreateWithoutActionsInput,
      AvailableActionsUncheckedCreateWithoutActionsInput
    >;
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput;
    upsert?: AvailableActionsUpsertWithoutActionsInput;
    connect?: AvailableActionsWhereUniqueInput;
    update?: XOR<
      XOR<
        AvailableActionsUpdateToOneWithWhereWithoutActionsInput,
        AvailableActionsUpdateWithoutActionsInput
      >,
      AvailableActionsUncheckedUpdateWithoutActionsInput
    >;
  };

  export type UserConnectionUpdateOneWithoutActionNestedInput = {
    create?: XOR<
      UserConnectionCreateWithoutActionInput,
      UserConnectionUncheckedCreateWithoutActionInput
    >;
    connectOrCreate?: UserConnectionCreateOrConnectWithoutActionInput;
    upsert?: UserConnectionUpsertWithoutActionInput;
    disconnect?: UserConnectionWhereInput | boolean;
    delete?: UserConnectionWhereInput | boolean;
    connect?: UserConnectionWhereUniqueInput;
    update?: XOR<
      XOR<
        UserConnectionUpdateToOneWithWhereWithoutActionInput,
        UserConnectionUpdateWithoutActionInput
      >,
      UserConnectionUncheckedUpdateWithoutActionInput
    >;
  };

  export type ZapRunUpdateManyWithoutFailedActionNestedInput = {
    create?:
      | XOR<
          ZapRunCreateWithoutFailedActionInput,
          ZapRunUncheckedCreateWithoutFailedActionInput
        >
      | ZapRunCreateWithoutFailedActionInput[]
      | ZapRunUncheckedCreateWithoutFailedActionInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutFailedActionInput
      | ZapRunCreateOrConnectWithoutFailedActionInput[];
    upsert?:
      | ZapRunUpsertWithWhereUniqueWithoutFailedActionInput
      | ZapRunUpsertWithWhereUniqueWithoutFailedActionInput[];
    createMany?: ZapRunCreateManyFailedActionInputEnvelope;
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    update?:
      | ZapRunUpdateWithWhereUniqueWithoutFailedActionInput
      | ZapRunUpdateWithWhereUniqueWithoutFailedActionInput[];
    updateMany?:
      | ZapRunUpdateManyWithWhereWithoutFailedActionInput
      | ZapRunUpdateManyWithWhereWithoutFailedActionInput[];
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
  };

  export type ZapNoteUpdateOneWithoutStepNestedInput = {
    create?: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutStepInput;
    upsert?: ZapNoteUpsertWithoutStepInput;
    disconnect?: ZapNoteWhereInput | boolean;
    delete?: ZapNoteWhereInput | boolean;
    connect?: ZapNoteWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapNoteUpdateToOneWithWhereWithoutStepInput,
        ZapNoteUpdateWithoutStepInput
      >,
      ZapNoteUncheckedUpdateWithoutStepInput
    >;
  };

  export type ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput = {
    create?:
      | XOR<
          ZapRunCreateWithoutFailedActionInput,
          ZapRunUncheckedCreateWithoutFailedActionInput
        >
      | ZapRunCreateWithoutFailedActionInput[]
      | ZapRunUncheckedCreateWithoutFailedActionInput[];
    connectOrCreate?:
      | ZapRunCreateOrConnectWithoutFailedActionInput
      | ZapRunCreateOrConnectWithoutFailedActionInput[];
    upsert?:
      | ZapRunUpsertWithWhereUniqueWithoutFailedActionInput
      | ZapRunUpsertWithWhereUniqueWithoutFailedActionInput[];
    createMany?: ZapRunCreateManyFailedActionInputEnvelope;
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[];
    update?:
      | ZapRunUpdateWithWhereUniqueWithoutFailedActionInput
      | ZapRunUpdateWithWhereUniqueWithoutFailedActionInput[];
    updateMany?:
      | ZapRunUpdateManyWithWhereWithoutFailedActionInput
      | ZapRunUpdateManyWithWhereWithoutFailedActionInput[];
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
  };

  export type ZapNoteUncheckedUpdateOneWithoutStepNestedInput = {
    create?: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
    connectOrCreate?: ZapNoteCreateOrConnectWithoutStepInput;
    upsert?: ZapNoteUpsertWithoutStepInput;
    disconnect?: ZapNoteWhereInput | boolean;
    delete?: ZapNoteWhereInput | boolean;
    connect?: ZapNoteWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapNoteUpdateToOneWithWhereWithoutStepInput,
        ZapNoteUpdateWithoutStepInput
      >,
      ZapNoteUncheckedUpdateWithoutStepInput
    >;
  };

  export type ActionCreateNestedManyWithoutActionDetailsInput = {
    create?:
      | XOR<
          ActionCreateWithoutActionDetailsInput,
          ActionUncheckedCreateWithoutActionDetailsInput
        >
      | ActionCreateWithoutActionDetailsInput[]
      | ActionUncheckedCreateWithoutActionDetailsInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutActionDetailsInput
      | ActionCreateOrConnectWithoutActionDetailsInput[];
    createMany?: ActionCreateManyActionDetailsInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type ActionUncheckedCreateNestedManyWithoutActionDetailsInput = {
    create?:
      | XOR<
          ActionCreateWithoutActionDetailsInput,
          ActionUncheckedCreateWithoutActionDetailsInput
        >
      | ActionCreateWithoutActionDetailsInput[]
      | ActionUncheckedCreateWithoutActionDetailsInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutActionDetailsInput
      | ActionCreateOrConnectWithoutActionDetailsInput[];
    createMany?: ActionCreateManyActionDetailsInputEnvelope;
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
  };

  export type ActionUpdateManyWithoutActionDetailsNestedInput = {
    create?:
      | XOR<
          ActionCreateWithoutActionDetailsInput,
          ActionUncheckedCreateWithoutActionDetailsInput
        >
      | ActionCreateWithoutActionDetailsInput[]
      | ActionUncheckedCreateWithoutActionDetailsInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutActionDetailsInput
      | ActionCreateOrConnectWithoutActionDetailsInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutActionDetailsInput
      | ActionUpsertWithWhereUniqueWithoutActionDetailsInput[];
    createMany?: ActionCreateManyActionDetailsInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutActionDetailsInput
      | ActionUpdateWithWhereUniqueWithoutActionDetailsInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutActionDetailsInput
      | ActionUpdateManyWithWhereWithoutActionDetailsInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type ActionUncheckedUpdateManyWithoutActionDetailsNestedInput = {
    create?:
      | XOR<
          ActionCreateWithoutActionDetailsInput,
          ActionUncheckedCreateWithoutActionDetailsInput
        >
      | ActionCreateWithoutActionDetailsInput[]
      | ActionUncheckedCreateWithoutActionDetailsInput[];
    connectOrCreate?:
      | ActionCreateOrConnectWithoutActionDetailsInput
      | ActionCreateOrConnectWithoutActionDetailsInput[];
    upsert?:
      | ActionUpsertWithWhereUniqueWithoutActionDetailsInput
      | ActionUpsertWithWhereUniqueWithoutActionDetailsInput[];
    createMany?: ActionCreateManyActionDetailsInputEnvelope;
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[];
    update?:
      | ActionUpdateWithWhereUniqueWithoutActionDetailsInput
      | ActionUpdateWithWhereUniqueWithoutActionDetailsInput[];
    updateMany?:
      | ActionUpdateManyWithWhereWithoutActionDetailsInput
      | ActionUpdateManyWithWhereWithoutActionDetailsInput[];
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[];
  };

  export type ActionCreateNestedOneWithoutZapRunFailuresInput = {
    create?: XOR<
      ActionCreateWithoutZapRunFailuresInput,
      ActionUncheckedCreateWithoutZapRunFailuresInput
    >;
    connectOrCreate?: ActionCreateOrConnectWithoutZapRunFailuresInput;
    connect?: ActionWhereUniqueInput;
  };

  export type ZapCreateNestedOneWithoutZapRunsInput = {
    create?: XOR<
      ZapCreateWithoutZapRunsInput,
      ZapUncheckedCreateWithoutZapRunsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput;
    connect?: ZapWhereUniqueInput;
  };

  export type ZapRunOutboxCreateNestedOneWithoutZapRunInput = {
    create?: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput;
    connect?: ZapRunOutboxWhereUniqueInput;
  };

  export type ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput;
    connect?: ZapRunOutboxWhereUniqueInput;
  };

  export type EnumZapRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.ZapRunStatus;
  };

  export type ActionUpdateOneWithoutZapRunFailuresNestedInput = {
    create?: XOR<
      ActionCreateWithoutZapRunFailuresInput,
      ActionUncheckedCreateWithoutZapRunFailuresInput
    >;
    connectOrCreate?: ActionCreateOrConnectWithoutZapRunFailuresInput;
    upsert?: ActionUpsertWithoutZapRunFailuresInput;
    disconnect?: ActionWhereInput | boolean;
    delete?: ActionWhereInput | boolean;
    connect?: ActionWhereUniqueInput;
    update?: XOR<
      XOR<
        ActionUpdateToOneWithWhereWithoutZapRunFailuresInput,
        ActionUpdateWithoutZapRunFailuresInput
      >,
      ActionUncheckedUpdateWithoutZapRunFailuresInput
    >;
  };

  export type ZapUpdateOneRequiredWithoutZapRunsNestedInput = {
    create?: XOR<
      ZapCreateWithoutZapRunsInput,
      ZapUncheckedCreateWithoutZapRunsInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput;
    upsert?: ZapUpsertWithoutZapRunsInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutZapRunsInput,
        ZapUpdateWithoutZapRunsInput
      >,
      ZapUncheckedUpdateWithoutZapRunsInput
    >;
  };

  export type ZapRunOutboxUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput;
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput;
    disconnect?: ZapRunOutboxWhereInput | boolean;
    delete?: ZapRunOutboxWhereInput | boolean;
    connect?: ZapRunOutboxWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput,
        ZapRunOutboxUpdateWithoutZapRunInput
      >,
      ZapRunOutboxUncheckedUpdateWithoutZapRunInput
    >;
  };

  export type ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput;
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput;
    disconnect?: ZapRunOutboxWhereInput | boolean;
    delete?: ZapRunOutboxWhereInput | boolean;
    connect?: ZapRunOutboxWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput,
        ZapRunOutboxUpdateWithoutZapRunInput
      >,
      ZapRunOutboxUncheckedUpdateWithoutZapRunInput
    >;
  };

  export type ZapRunCreateNestedOneWithoutZapRunOutBoxInput = {
    create?: XOR<
      ZapRunCreateWithoutZapRunOutBoxInput,
      ZapRunUncheckedCreateWithoutZapRunOutBoxInput
    >;
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutBoxInput;
    connect?: ZapRunWhereUniqueInput;
  };

  export type ZapRunUpdateOneRequiredWithoutZapRunOutBoxNestedInput = {
    create?: XOR<
      ZapRunCreateWithoutZapRunOutBoxInput,
      ZapRunUncheckedCreateWithoutZapRunOutBoxInput
    >;
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutBoxInput;
    upsert?: ZapRunUpsertWithoutZapRunOutBoxInput;
    connect?: ZapRunWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapRunUpdateToOneWithWhereWithoutZapRunOutBoxInput,
        ZapRunUpdateWithoutZapRunOutBoxInput
      >,
      ZapRunUncheckedUpdateWithoutZapRunOutBoxInput
    >;
  };

  export type ZapCreateNestedOneWithoutChangeHistoryInput = {
    create?: XOR<
      ZapCreateWithoutChangeHistoryInput,
      ZapUncheckedCreateWithoutChangeHistoryInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutChangeHistoryInput;
    connect?: ZapWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutChangeHistoryInput = {
    create?: XOR<
      UserCreateWithoutChangeHistoryInput,
      UserUncheckedCreateWithoutChangeHistoryInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChangeHistoryInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumZapHistoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.ZapHistoryType;
  };

  export type ZapUpdateOneRequiredWithoutChangeHistoryNestedInput = {
    create?: XOR<
      ZapCreateWithoutChangeHistoryInput,
      ZapUncheckedCreateWithoutChangeHistoryInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutChangeHistoryInput;
    upsert?: ZapUpsertWithoutChangeHistoryInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<
        ZapUpdateToOneWithWhereWithoutChangeHistoryInput,
        ZapUpdateWithoutChangeHistoryInput
      >,
      ZapUncheckedUpdateWithoutChangeHistoryInput
    >;
  };

  export type UserUpdateOneRequiredWithoutChangeHistoryNestedInput = {
    create?: XOR<
      UserCreateWithoutChangeHistoryInput,
      UserUncheckedCreateWithoutChangeHistoryInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChangeHistoryInput;
    upsert?: UserUpsertWithoutChangeHistoryInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutChangeHistoryInput,
        UserUpdateWithoutChangeHistoryInput
      >,
      UserUncheckedUpdateWithoutChangeHistoryInput
    >;
  };

  export type ZapCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      ZapCreateWithoutNotesInput,
      ZapUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutNotesInput;
    connect?: ZapWhereUniqueInput;
  };

  export type TriggerCreateNestedOneWithoutNoteInput = {
    create?: XOR<
      TriggerCreateWithoutNoteInput,
      TriggerUncheckedCreateWithoutNoteInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutNoteInput;
    connect?: TriggerWhereUniqueInput;
  };

  export type ActionCreateNestedOneWithoutNoteInput = {
    create?: XOR<
      ActionCreateWithoutNoteInput,
      ActionUncheckedCreateWithoutNoteInput
    >;
    connectOrCreate?: ActionCreateOrConnectWithoutNoteInput;
    connect?: ActionWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumZapNoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.ZapNoteType;
  };

  export type ZapUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<
      ZapCreateWithoutNotesInput,
      ZapUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: ZapCreateOrConnectWithoutNotesInput;
    upsert?: ZapUpsertWithoutNotesInput;
    connect?: ZapWhereUniqueInput;
    update?: XOR<
      XOR<ZapUpdateToOneWithWhereWithoutNotesInput, ZapUpdateWithoutNotesInput>,
      ZapUncheckedUpdateWithoutNotesInput
    >;
  };

  export type TriggerUpdateOneWithoutNoteNestedInput = {
    create?: XOR<
      TriggerCreateWithoutNoteInput,
      TriggerUncheckedCreateWithoutNoteInput
    >;
    connectOrCreate?: TriggerCreateOrConnectWithoutNoteInput;
    upsert?: TriggerUpsertWithoutNoteInput;
    disconnect?: TriggerWhereInput | boolean;
    delete?: TriggerWhereInput | boolean;
    connect?: TriggerWhereUniqueInput;
    update?: XOR<
      XOR<
        TriggerUpdateToOneWithWhereWithoutNoteInput,
        TriggerUpdateWithoutNoteInput
      >,
      TriggerUncheckedUpdateWithoutNoteInput
    >;
  };

  export type ActionUpdateOneWithoutNoteNestedInput = {
    create?: XOR<
      ActionCreateWithoutNoteInput,
      ActionUncheckedCreateWithoutNoteInput
    >;
    connectOrCreate?: ActionCreateOrConnectWithoutNoteInput;
    upsert?: ActionUpsertWithoutNoteInput;
    disconnect?: ActionWhereInput | boolean;
    delete?: ActionWhereInput | boolean;
    connect?: ActionWhereUniqueInput;
    update?: XOR<
      XOR<
        ActionUpdateToOneWithWhereWithoutNoteInput,
        ActionUpdateWithoutNoteInput
      >,
      ActionUncheckedUpdateWithoutNoteInput
    >;
  };

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput;
    upsert?: UserUpsertWithoutNotesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutNotesInput,
        UserUpdateWithoutNotesInput
      >,
      UserUncheckedUpdateWithoutNotesInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedEnumZapRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapRunStatus | EnumZapRunStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapRunStatus[]
      | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapRunStatusFilter<$PrismaModel> | $Enums.ZapRunStatus;
  };

  export type NestedEnumZapRunStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.ZapRunStatus
        | EnumZapRunStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ZapRunStatus[]
        | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ZapRunStatus[]
        | ListEnumZapRunStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumZapRunStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.ZapRunStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumZapRunStatusFilter<$PrismaModel>;
      _max?: NestedEnumZapRunStatusFilter<$PrismaModel>;
    };

  export type NestedEnumZapHistoryTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ZapHistoryType
      | EnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapHistoryTypeFilter<$PrismaModel> | $Enums.ZapHistoryType;
  };

  export type NestedEnumZapHistoryTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ZapHistoryType
      | EnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapHistoryType[]
      | ListEnumZapHistoryTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumZapHistoryTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ZapHistoryType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumZapHistoryTypeFilter<$PrismaModel>;
    _max?: NestedEnumZapHistoryTypeFilter<$PrismaModel>;
  };

  export type NestedEnumZapNoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZapNoteType | EnumZapNoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ZapNoteType[] | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ZapNoteType[]
      | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumZapNoteTypeFilter<$PrismaModel> | $Enums.ZapNoteType;
  };

  export type NestedEnumZapNoteTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ZapNoteType | EnumZapNoteTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ZapNoteType[]
        | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ZapNoteType[]
        | ListEnumZapNoteTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumZapNoteTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.ZapNoteType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumZapNoteTypeFilter<$PrismaModel>;
      _max?: NestedEnumZapNoteTypeFilter<$PrismaModel>;
    };

  export type ZapCreateWithoutUserInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutUserInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutUserInput = {
    where: ZapWhereUniqueInput;
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>;
  };

  export type ZapCreateManyUserInputEnvelope = {
    data: ZapCreateManyUserInput | ZapCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserConnectionCreateWithoutUserInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    trigger?: TriggerCreateNestedManyWithoutUserConnectionInput;
    action?: ActionCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionUncheckedCreateWithoutUserInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    trigger?: TriggerUncheckedCreateNestedManyWithoutUserConnectionInput;
    action?: ActionUncheckedCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionCreateOrConnectWithoutUserInput = {
    where: UserConnectionWhereUniqueInput;
    create: XOR<
      UserConnectionCreateWithoutUserInput,
      UserConnectionUncheckedCreateWithoutUserInput
    >;
  };

  export type UserConnectionCreateManyUserInputEnvelope = {
    data:
      | UserConnectionCreateManyUserInput
      | UserConnectionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ZapChangeHistoryCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.ZapHistoryType;
    message: string;
    createdAt?: Date | string;
    zap: ZapCreateNestedOneWithoutChangeHistoryInput;
  };

  export type ZapChangeHistoryUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    zapId: number;
    type: $Enums.ZapHistoryType;
    message: string;
    createdAt?: Date | string;
  };

  export type ZapChangeHistoryCreateOrConnectWithoutCreatedByInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    create: XOR<
      ZapChangeHistoryCreateWithoutCreatedByInput,
      ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ZapChangeHistoryCreateManyCreatedByInputEnvelope = {
    data:
      | ZapChangeHistoryCreateManyCreatedByInput
      | ZapChangeHistoryCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type ZapNoteCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap: ZapCreateNestedOneWithoutNotesInput;
    trigger?: TriggerCreateNestedOneWithoutNoteInput;
    step?: ActionCreateNestedOneWithoutNoteInput;
  };

  export type ZapNoteUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    zapId: number;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteCreateOrConnectWithoutCreatedByInput = {
    where: ZapNoteWhereUniqueInput;
    create: XOR<
      ZapNoteCreateWithoutCreatedByInput,
      ZapNoteUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ZapNoteCreateManyCreatedByInputEnvelope = {
    data: ZapNoteCreateManyCreatedByInput | ZapNoteCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type FolderCreateWithoutUserInput = {
    name: string;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: FolderCreateNestedOneWithoutChildrenInput;
    children?: FolderCreateNestedManyWithoutParentInput;
    zaps?: ZapCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: FolderUncheckedCreateNestedManyWithoutParentInput;
    zaps?: ZapUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderCreateOrConnectWithoutUserInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutUserInput,
      FolderUncheckedCreateWithoutUserInput
    >;
  };

  export type FolderCreateManyUserInputEnvelope = {
    data: FolderCreateManyUserInput | FolderCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ZapUpsertWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput;
    update: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>;
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>;
  };

  export type ZapUpdateWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput;
    data: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>;
  };

  export type ZapUpdateManyWithWhereWithoutUserInput = {
    where: ZapScalarWhereInput;
    data: XOR<
      ZapUpdateManyMutationInput,
      ZapUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ZapScalarWhereInput = {
    AND?: ZapScalarWhereInput | ZapScalarWhereInput[];
    OR?: ZapScalarWhereInput[];
    NOT?: ZapScalarWhereInput | ZapScalarWhereInput[];
    id?: IntFilter<"Zap"> | number;
    triggerId?: StringNullableFilter<"Zap"> | string | null;
    name?: StringFilter<"Zap"> | string;
    lastEdited?: DateTimeFilter<"Zap"> | Date | string;
    createdAt?: DateTimeFilter<"Zap"> | Date | string;
    published?: BoolFilter<"Zap"> | boolean;
    RecordId?: StringNullableFilter<"Zap"> | string | null;
    userId?: IntFilter<"Zap"> | number;
    folderId?: IntFilter<"Zap"> | number;
  };

  export type UserConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserConnectionWhereUniqueInput;
    update: XOR<
      UserConnectionUpdateWithoutUserInput,
      UserConnectionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserConnectionCreateWithoutUserInput,
      UserConnectionUncheckedCreateWithoutUserInput
    >;
  };

  export type UserConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserConnectionWhereUniqueInput;
    data: XOR<
      UserConnectionUpdateWithoutUserInput,
      UserConnectionUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserConnectionUpdateManyWithWhereWithoutUserInput = {
    where: UserConnectionScalarWhereInput;
    data: XOR<
      UserConnectionUpdateManyMutationInput,
      UserConnectionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserConnectionScalarWhereInput = {
    AND?: UserConnectionScalarWhereInput | UserConnectionScalarWhereInput[];
    OR?: UserConnectionScalarWhereInput[];
    NOT?: UserConnectionScalarWhereInput | UserConnectionScalarWhereInput[];
    id?: StringFilter<"UserConnection"> | string;
    userId?: IntFilter<"UserConnection"> | number;
    appId?: StringFilter<"UserConnection"> | string;
    identifier?: StringFilter<"UserConnection"> | string;
    accessToken?: StringFilter<"UserConnection"> | string;
    refreshToken?: StringNullableFilter<"UserConnection"> | string | null;
    createdAt?: DateTimeFilter<"UserConnection"> | Date | string;
    expiredAt?: DateTimeFilter<"UserConnection"> | Date | string;
  };

  export type ZapChangeHistoryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    update: XOR<
      ZapChangeHistoryUpdateWithoutCreatedByInput,
      ZapChangeHistoryUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      ZapChangeHistoryCreateWithoutCreatedByInput,
      ZapChangeHistoryUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ZapChangeHistoryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    data: XOR<
      ZapChangeHistoryUpdateWithoutCreatedByInput,
      ZapChangeHistoryUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type ZapChangeHistoryUpdateManyWithWhereWithoutCreatedByInput = {
    where: ZapChangeHistoryScalarWhereInput;
    data: XOR<
      ZapChangeHistoryUpdateManyMutationInput,
      ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type ZapChangeHistoryScalarWhereInput = {
    AND?: ZapChangeHistoryScalarWhereInput | ZapChangeHistoryScalarWhereInput[];
    OR?: ZapChangeHistoryScalarWhereInput[];
    NOT?: ZapChangeHistoryScalarWhereInput | ZapChangeHistoryScalarWhereInput[];
    id?: StringFilter<"ZapChangeHistory"> | string;
    zapId?: IntFilter<"ZapChangeHistory"> | number;
    type?: EnumZapHistoryTypeFilter<"ZapChangeHistory"> | $Enums.ZapHistoryType;
    message?: StringFilter<"ZapChangeHistory"> | string;
    createdById?: IntFilter<"ZapChangeHistory"> | number;
    createdAt?: DateTimeFilter<"ZapChangeHistory"> | Date | string;
  };

  export type ZapNoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ZapNoteWhereUniqueInput;
    update: XOR<
      ZapNoteUpdateWithoutCreatedByInput,
      ZapNoteUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      ZapNoteCreateWithoutCreatedByInput,
      ZapNoteUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ZapNoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ZapNoteWhereUniqueInput;
    data: XOR<
      ZapNoteUpdateWithoutCreatedByInput,
      ZapNoteUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type ZapNoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: ZapNoteScalarWhereInput;
    data: XOR<
      ZapNoteUpdateManyMutationInput,
      ZapNoteUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type ZapNoteScalarWhereInput = {
    AND?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
    OR?: ZapNoteScalarWhereInput[];
    NOT?: ZapNoteScalarWhereInput | ZapNoteScalarWhereInput[];
    id?: StringFilter<"ZapNote"> | string;
    zapId?: IntFilter<"ZapNote"> | number;
    triggerId?: StringNullableFilter<"ZapNote"> | string | null;
    stepId?: StringNullableFilter<"ZapNote"> | string | null;
    type?: EnumZapNoteTypeFilter<"ZapNote"> | $Enums.ZapNoteType;
    content?: StringFilter<"ZapNote"> | string;
    createdById?: IntFilter<"ZapNote"> | number;
    createdAt?: DateTimeFilter<"ZapNote"> | Date | string;
    updatedAt?: DateTimeFilter<"ZapNote"> | Date | string;
  };

  export type FolderUpsertWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput;
    update: XOR<
      FolderUpdateWithoutUserInput,
      FolderUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FolderCreateWithoutUserInput,
      FolderUncheckedCreateWithoutUserInput
    >;
  };

  export type FolderUpdateWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput;
    data: XOR<
      FolderUpdateWithoutUserInput,
      FolderUncheckedUpdateWithoutUserInput
    >;
  };

  export type FolderUpdateManyWithWhereWithoutUserInput = {
    where: FolderScalarWhereInput;
    data: XOR<
      FolderUpdateManyMutationInput,
      FolderUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[];
    OR?: FolderScalarWhereInput[];
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[];
    id?: IntFilter<"Folder"> | number;
    name?: StringFilter<"Folder"> | string;
    userId?: IntFilter<"Folder"> | number;
    type?: StringFilter<"Folder"> | string;
    parentId?: IntNullableFilter<"Folder"> | number | null;
    createdAt?: DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeFilter<"Folder"> | Date | string;
  };

  export type UserCreateWithoutZapInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    connections?: UserConnectionCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutZapInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    connections?: UserConnectionUncheckedCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutZapInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>;
  };

  export type TriggerCreateWithoutZapInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    userConnection?: UserConnectionCreateNestedOneWithoutTriggerInput;
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput;
    note?: ZapNoteCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
    triggerId: string;
    note?: ZapNoteUncheckedCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput;
    create: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
  };

  export type ActionCreateWithoutZapInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    actionDetails: AvailableActionsCreateNestedOneWithoutActionsInput;
    userConnection?: UserConnectionCreateNestedOneWithoutActionInput;
    zapRunFailures?: ZapRunCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteCreateNestedOneWithoutStepInput;
  };

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
    zapRunFailures?: ZapRunUncheckedCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteUncheckedCreateNestedOneWithoutStepInput;
  };

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput;
    create: XOR<
      ActionCreateWithoutZapInput,
      ActionUncheckedCreateWithoutZapInput
    >;
  };

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[];
    skipDuplicates?: boolean;
  };

  export type ZapRunCreateWithoutZapInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionCreateNestedOneWithoutZapRunFailuresInput;
    zapRunOutBox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunUncheckedCreateWithoutZapInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    failedActionId?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunCreateOrConnectWithoutZapInput = {
    where: ZapRunWhereUniqueInput;
    create: XOR<
      ZapRunCreateWithoutZapInput,
      ZapRunUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapRunCreateManyZapInputEnvelope = {
    data: ZapRunCreateManyZapInput | ZapRunCreateManyZapInput[];
    skipDuplicates?: boolean;
  };

  export type RecordCreateWithoutZapInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
    zapSingle?: ZapCreateNestedOneWithoutRecordInput;
  };

  export type RecordUncheckedCreateWithoutZapInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
    zapSingle?: ZapUncheckedCreateNestedOneWithoutRecordInput;
  };

  export type RecordCreateOrConnectWithoutZapInput = {
    where: RecordWhereUniqueInput;
    create: XOR<
      RecordCreateWithoutZapInput,
      RecordUncheckedCreateWithoutZapInput
    >;
  };

  export type RecordCreateManyZapInputEnvelope = {
    data: RecordCreateManyZapInput | RecordCreateManyZapInput[];
    skipDuplicates?: boolean;
  };

  export type RecordCreateWithoutZapSingleInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
    zap: ZapCreateNestedOneWithoutRecordsInput;
  };

  export type RecordUncheckedCreateWithoutZapSingleInput = {
    id?: string;
    type: string;
    zapId: number;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
  };

  export type RecordCreateOrConnectWithoutZapSingleInput = {
    where: RecordWhereUniqueInput;
    create: XOR<
      RecordCreateWithoutZapSingleInput,
      RecordUncheckedCreateWithoutZapSingleInput
    >;
  };

  export type ZapChangeHistoryCreateWithoutZapInput = {
    id?: string;
    type: $Enums.ZapHistoryType;
    message: string;
    createdAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutChangeHistoryInput;
  };

  export type ZapChangeHistoryUncheckedCreateWithoutZapInput = {
    id?: string;
    type: $Enums.ZapHistoryType;
    message: string;
    createdById: number;
    createdAt?: Date | string;
  };

  export type ZapChangeHistoryCreateOrConnectWithoutZapInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    create: XOR<
      ZapChangeHistoryCreateWithoutZapInput,
      ZapChangeHistoryUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapChangeHistoryCreateManyZapInputEnvelope = {
    data:
      | ZapChangeHistoryCreateManyZapInput
      | ZapChangeHistoryCreateManyZapInput[];
    skipDuplicates?: boolean;
  };

  export type ZapNoteCreateWithoutZapInput = {
    id?: string;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trigger?: TriggerCreateNestedOneWithoutNoteInput;
    step?: ActionCreateNestedOneWithoutNoteInput;
    createdBy: UserCreateNestedOneWithoutNotesInput;
  };

  export type ZapNoteUncheckedCreateWithoutZapInput = {
    id?: string;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteCreateOrConnectWithoutZapInput = {
    where: ZapNoteWhereUniqueInput;
    create: XOR<
      ZapNoteCreateWithoutZapInput,
      ZapNoteUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapNoteCreateManyZapInputEnvelope = {
    data: ZapNoteCreateManyZapInput | ZapNoteCreateManyZapInput[];
    skipDuplicates?: boolean;
  };

  export type FolderCreateWithoutZapsInput = {
    name: string;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFolderInput;
    parent?: FolderCreateNestedOneWithoutChildrenInput;
    children?: FolderCreateNestedManyWithoutParentInput;
  };

  export type FolderUncheckedCreateWithoutZapsInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: FolderUncheckedCreateNestedManyWithoutParentInput;
  };

  export type FolderCreateOrConnectWithoutZapsInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutZapsInput,
      FolderUncheckedCreateWithoutZapsInput
    >;
  };

  export type UserUpsertWithoutZapInput = {
    update: XOR<UserUpdateWithoutZapInput, UserUncheckedUpdateWithoutZapInput>;
    create: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutZapInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutZapInput, UserUncheckedUpdateWithoutZapInput>;
  };

  export type UserUpdateWithoutZapInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: UserConnectionUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutZapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: UserConnectionUncheckedUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<
      TriggerUpdateWithoutZapInput,
      TriggerUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      TriggerCreateWithoutZapInput,
      TriggerUncheckedCreateWithoutZapInput
    >;
    where?: TriggerWhereInput;
  };

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput;
    data: XOR<
      TriggerUpdateWithoutZapInput,
      TriggerUncheckedUpdateWithoutZapInput
    >;
  };

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    userConnection?: UserConnectionUpdateOneWithoutTriggerNestedInput;
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput;
    note?: ZapNoteUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
    note?: ZapNoteUncheckedUpdateOneWithoutTriggerNestedInput;
  };

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput;
    update: XOR<
      ActionUpdateWithoutZapInput,
      ActionUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      ActionCreateWithoutZapInput,
      ActionUncheckedCreateWithoutZapInput
    >;
  };

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput;
    data: XOR<
      ActionUpdateWithoutZapInput,
      ActionUncheckedUpdateWithoutZapInput
    >;
  };

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput;
    data: XOR<
      ActionUpdateManyMutationInput,
      ActionUncheckedUpdateManyWithoutZapInput
    >;
  };

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[];
    OR?: ActionScalarWhereInput[];
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[];
    id?: StringFilter<"Action"> | string;
    zapId?: IntFilter<"Action"> | number;
    success?: BoolNullableFilter<"Action"> | boolean | null;
    configuration?: JsonFilter<"Action">;
    optionId?: StringFilter<"Action"> | string;
    actionId?: StringFilter<"Action"> | string;
    sortingOrder?: IntFilter<"Action"> | number;
    connectionId?: StringNullableFilter<"Action"> | string | null;
  };

  export type ZapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput;
    update: XOR<
      ZapRunUpdateWithoutZapInput,
      ZapRunUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      ZapRunCreateWithoutZapInput,
      ZapRunUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput;
    data: XOR<
      ZapRunUpdateWithoutZapInput,
      ZapRunUncheckedUpdateWithoutZapInput
    >;
  };

  export type ZapRunUpdateManyWithWhereWithoutZapInput = {
    where: ZapRunScalarWhereInput;
    data: XOR<
      ZapRunUpdateManyMutationInput,
      ZapRunUncheckedUpdateManyWithoutZapInput
    >;
  };

  export type ZapRunScalarWhereInput = {
    AND?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
    OR?: ZapRunScalarWhereInput[];
    NOT?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[];
    id?: StringFilter<"ZapRun"> | string;
    zapId?: IntFilter<"ZapRun"> | number;
    createdAt?: DateTimeFilter<"ZapRun"> | Date | string;
    completedAt?: DateTimeNullableFilter<"ZapRun"> | Date | string | null;
    status?: EnumZapRunStatusFilter<"ZapRun"> | $Enums.ZapRunStatus;
    failureReason?: StringNullableFilter<"ZapRun"> | string | null;
    failedActionId?: StringNullableFilter<"ZapRun"> | string | null;
    metaData?: JsonFilter<"ZapRun">;
  };

  export type RecordUpsertWithWhereUniqueWithoutZapInput = {
    where: RecordWhereUniqueInput;
    update: XOR<
      RecordUpdateWithoutZapInput,
      RecordUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      RecordCreateWithoutZapInput,
      RecordUncheckedCreateWithoutZapInput
    >;
  };

  export type RecordUpdateWithWhereUniqueWithoutZapInput = {
    where: RecordWhereUniqueInput;
    data: XOR<
      RecordUpdateWithoutZapInput,
      RecordUncheckedUpdateWithoutZapInput
    >;
  };

  export type RecordUpdateManyWithWhereWithoutZapInput = {
    where: RecordScalarWhereInput;
    data: XOR<
      RecordUpdateManyMutationInput,
      RecordUncheckedUpdateManyWithoutZapInput
    >;
  };

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[];
    OR?: RecordScalarWhereInput[];
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[];
    id?: StringFilter<"Record"> | string;
    type?: StringFilter<"Record"> | string;
    zapId?: IntFilter<"Record"> | number;
    createdAt?: DateTimeFilter<"Record"> | Date | string;
    pulledAt?: DateTimeFilter<"Record"> | Date | string;
    title?: StringFilter<"Record"> | string;
    JsonData?: JsonFilter<"Record">;
    triggerOptionId?: StringFilter<"Record"> | string;
  };

  export type RecordUpsertWithoutZapSingleInput = {
    update: XOR<
      RecordUpdateWithoutZapSingleInput,
      RecordUncheckedUpdateWithoutZapSingleInput
    >;
    create: XOR<
      RecordCreateWithoutZapSingleInput,
      RecordUncheckedCreateWithoutZapSingleInput
    >;
    where?: RecordWhereInput;
  };

  export type RecordUpdateToOneWithWhereWithoutZapSingleInput = {
    where?: RecordWhereInput;
    data: XOR<
      RecordUpdateWithoutZapSingleInput,
      RecordUncheckedUpdateWithoutZapSingleInput
    >;
  };

  export type RecordUpdateWithoutZapSingleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
    zap?: ZapUpdateOneRequiredWithoutRecordsNestedInput;
  };

  export type RecordUncheckedUpdateWithoutZapSingleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapChangeHistoryUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    update: XOR<
      ZapChangeHistoryUpdateWithoutZapInput,
      ZapChangeHistoryUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      ZapChangeHistoryCreateWithoutZapInput,
      ZapChangeHistoryUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapChangeHistoryUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapChangeHistoryWhereUniqueInput;
    data: XOR<
      ZapChangeHistoryUpdateWithoutZapInput,
      ZapChangeHistoryUncheckedUpdateWithoutZapInput
    >;
  };

  export type ZapChangeHistoryUpdateManyWithWhereWithoutZapInput = {
    where: ZapChangeHistoryScalarWhereInput;
    data: XOR<
      ZapChangeHistoryUpdateManyMutationInput,
      ZapChangeHistoryUncheckedUpdateManyWithoutZapInput
    >;
  };

  export type ZapNoteUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapNoteWhereUniqueInput;
    update: XOR<
      ZapNoteUpdateWithoutZapInput,
      ZapNoteUncheckedUpdateWithoutZapInput
    >;
    create: XOR<
      ZapNoteCreateWithoutZapInput,
      ZapNoteUncheckedCreateWithoutZapInput
    >;
  };

  export type ZapNoteUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapNoteWhereUniqueInput;
    data: XOR<
      ZapNoteUpdateWithoutZapInput,
      ZapNoteUncheckedUpdateWithoutZapInput
    >;
  };

  export type ZapNoteUpdateManyWithWhereWithoutZapInput = {
    where: ZapNoteScalarWhereInput;
    data: XOR<
      ZapNoteUpdateManyMutationInput,
      ZapNoteUncheckedUpdateManyWithoutZapInput
    >;
  };

  export type FolderUpsertWithoutZapsInput = {
    update: XOR<
      FolderUpdateWithoutZapsInput,
      FolderUncheckedUpdateWithoutZapsInput
    >;
    create: XOR<
      FolderCreateWithoutZapsInput,
      FolderUncheckedCreateWithoutZapsInput
    >;
    where?: FolderWhereInput;
  };

  export type FolderUpdateToOneWithWhereWithoutZapsInput = {
    where?: FolderWhereInput;
    data: XOR<
      FolderUpdateWithoutZapsInput,
      FolderUncheckedUpdateWithoutZapsInput
    >;
  };

  export type FolderUpdateWithoutZapsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFolderNestedInput;
    parent?: FolderUpdateOneWithoutChildrenNestedInput;
    children?: FolderUpdateManyWithoutParentNestedInput;
  };

  export type FolderUncheckedUpdateWithoutZapsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type UserCreateWithoutFolderInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapCreateNestedManyWithoutUserInput;
    connections?: UserConnectionCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutFolderInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput;
    connections?: UserConnectionUncheckedCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutFolderInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFolderInput,
      UserUncheckedCreateWithoutFolderInput
    >;
  };

  export type FolderCreateWithoutChildrenInput = {
    name: string;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFolderInput;
    parent?: FolderCreateNestedOneWithoutChildrenInput;
    zaps?: ZapCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateWithoutChildrenInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zaps?: ZapUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderCreateOrConnectWithoutChildrenInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutChildrenInput,
      FolderUncheckedCreateWithoutChildrenInput
    >;
  };

  export type FolderCreateWithoutParentInput = {
    name: string;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFolderInput;
    children?: FolderCreateNestedManyWithoutParentInput;
    zaps?: ZapCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateWithoutParentInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: FolderUncheckedCreateNestedManyWithoutParentInput;
    zaps?: ZapUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderCreateOrConnectWithoutParentInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutParentInput,
      FolderUncheckedCreateWithoutParentInput
    >;
  };

  export type FolderCreateManyParentInputEnvelope = {
    data: FolderCreateManyParentInput | FolderCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type ZapCreateWithoutFolderInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
  };

  export type ZapUncheckedCreateWithoutFolderInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutFolderInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutFolderInput,
      ZapUncheckedCreateWithoutFolderInput
    >;
  };

  export type ZapCreateManyFolderInputEnvelope = {
    data: ZapCreateManyFolderInput | ZapCreateManyFolderInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutFolderInput = {
    update: XOR<
      UserUpdateWithoutFolderInput,
      UserUncheckedUpdateWithoutFolderInput
    >;
    create: XOR<
      UserCreateWithoutFolderInput,
      UserUncheckedCreateWithoutFolderInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFolderInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFolderInput,
      UserUncheckedUpdateWithoutFolderInput
    >;
  };

  export type UserUpdateWithoutFolderInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUncheckedUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type FolderUpsertWithoutChildrenInput = {
    update: XOR<
      FolderUpdateWithoutChildrenInput,
      FolderUncheckedUpdateWithoutChildrenInput
    >;
    create: XOR<
      FolderCreateWithoutChildrenInput,
      FolderUncheckedCreateWithoutChildrenInput
    >;
    where?: FolderWhereInput;
  };

  export type FolderUpdateToOneWithWhereWithoutChildrenInput = {
    where?: FolderWhereInput;
    data: XOR<
      FolderUpdateWithoutChildrenInput,
      FolderUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type FolderUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFolderNestedInput;
    parent?: FolderUpdateOneWithoutChildrenNestedInput;
    zaps?: ZapUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zaps?: ZapUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUpsertWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput;
    update: XOR<
      FolderUpdateWithoutParentInput,
      FolderUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      FolderCreateWithoutParentInput,
      FolderUncheckedCreateWithoutParentInput
    >;
  };

  export type FolderUpdateWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput;
    data: XOR<
      FolderUpdateWithoutParentInput,
      FolderUncheckedUpdateWithoutParentInput
    >;
  };

  export type FolderUpdateManyWithWhereWithoutParentInput = {
    where: FolderScalarWhereInput;
    data: XOR<
      FolderUpdateManyMutationInput,
      FolderUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type ZapUpsertWithWhereUniqueWithoutFolderInput = {
    where: ZapWhereUniqueInput;
    update: XOR<
      ZapUpdateWithoutFolderInput,
      ZapUncheckedUpdateWithoutFolderInput
    >;
    create: XOR<
      ZapCreateWithoutFolderInput,
      ZapUncheckedCreateWithoutFolderInput
    >;
  };

  export type ZapUpdateWithWhereUniqueWithoutFolderInput = {
    where: ZapWhereUniqueInput;
    data: XOR<
      ZapUpdateWithoutFolderInput,
      ZapUncheckedUpdateWithoutFolderInput
    >;
  };

  export type ZapUpdateManyWithWhereWithoutFolderInput = {
    where: ZapScalarWhereInput;
    data: XOR<
      ZapUpdateManyMutationInput,
      ZapUncheckedUpdateManyWithoutFolderInput
    >;
  };

  export type ZapCreateWithoutRecordsInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutRecordsInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutRecordsInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutRecordsInput,
      ZapUncheckedCreateWithoutRecordsInput
    >;
  };

  export type ZapCreateWithoutRecordInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutRecordInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutRecordInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
  };

  export type ZapUpsertWithoutRecordsInput = {
    update: XOR<
      ZapUpdateWithoutRecordsInput,
      ZapUncheckedUpdateWithoutRecordsInput
    >;
    create: XOR<
      ZapCreateWithoutRecordsInput,
      ZapUncheckedCreateWithoutRecordsInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutRecordsInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutRecordsInput,
      ZapUncheckedUpdateWithoutRecordsInput
    >;
  };

  export type ZapUpdateWithoutRecordsInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapUpsertWithoutRecordInput = {
    update: XOR<
      ZapUpdateWithoutRecordInput,
      ZapUncheckedUpdateWithoutRecordInput
    >;
    create: XOR<
      ZapCreateWithoutRecordInput,
      ZapUncheckedCreateWithoutRecordInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutRecordInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutRecordInput,
      ZapUncheckedUpdateWithoutRecordInput
    >;
  };

  export type ZapUpdateWithoutRecordInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapCreateWithoutTriggerInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutTriggerInput,
      ZapUncheckedCreateWithoutTriggerInput
    >;
  };

  export type UserConnectionCreateWithoutTriggerInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    User: UserCreateNestedOneWithoutConnectionsInput;
    action?: ActionCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionUncheckedCreateWithoutTriggerInput = {
    id?: string;
    userId: number;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    action?: ActionUncheckedCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionCreateOrConnectWithoutTriggerInput = {
    where: UserConnectionWhereUniqueInput;
    create: XOR<
      UserConnectionCreateWithoutTriggerInput,
      UserConnectionUncheckedCreateWithoutTriggerInput
    >;
  };

  export type AvailableTriggersCreateWithoutTriggersInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: string;
  };

  export type AvailableTriggersUncheckedCreateWithoutTriggersInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: string;
  };

  export type AvailableTriggersCreateOrConnectWithoutTriggersInput = {
    where: AvailableTriggersWhereUniqueInput;
    create: XOR<
      AvailableTriggersCreateWithoutTriggersInput,
      AvailableTriggersUncheckedCreateWithoutTriggersInput
    >;
  };

  export type ZapNoteCreateWithoutTriggerInput = {
    id?: string;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap: ZapCreateNestedOneWithoutNotesInput;
    step?: ActionCreateNestedOneWithoutNoteInput;
    createdBy: UserCreateNestedOneWithoutNotesInput;
  };

  export type ZapNoteUncheckedCreateWithoutTriggerInput = {
    id?: string;
    zapId: number;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteCreateOrConnectWithoutTriggerInput = {
    where: ZapNoteWhereUniqueInput;
    create: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
  };

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<
      ZapUpdateWithoutTriggerInput,
      ZapUncheckedUpdateWithoutTriggerInput
    >;
    create: XOR<
      ZapCreateWithoutTriggerInput,
      ZapUncheckedCreateWithoutTriggerInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutTriggerInput,
      ZapUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type ZapUpdateWithoutTriggerInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type UserConnectionUpsertWithoutTriggerInput = {
    update: XOR<
      UserConnectionUpdateWithoutTriggerInput,
      UserConnectionUncheckedUpdateWithoutTriggerInput
    >;
    create: XOR<
      UserConnectionCreateWithoutTriggerInput,
      UserConnectionUncheckedCreateWithoutTriggerInput
    >;
    where?: UserConnectionWhereInput;
  };

  export type UserConnectionUpdateToOneWithWhereWithoutTriggerInput = {
    where?: UserConnectionWhereInput;
    data: XOR<
      UserConnectionUpdateWithoutTriggerInput,
      UserConnectionUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type UserConnectionUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    User?: UserUpdateOneRequiredWithoutConnectionsNestedInput;
    action?: ActionUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    action?: ActionUncheckedUpdateManyWithoutUserConnectionNestedInput;
  };

  export type AvailableTriggersUpsertWithoutTriggersInput = {
    update: XOR<
      AvailableTriggersUpdateWithoutTriggersInput,
      AvailableTriggersUncheckedUpdateWithoutTriggersInput
    >;
    create: XOR<
      AvailableTriggersCreateWithoutTriggersInput,
      AvailableTriggersUncheckedCreateWithoutTriggersInput
    >;
    where?: AvailableTriggersWhereInput;
  };

  export type AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvailableTriggersWhereInput;
    data: XOR<
      AvailableTriggersUpdateWithoutTriggersInput,
      AvailableTriggersUncheckedUpdateWithoutTriggersInput
    >;
  };

  export type AvailableTriggersUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
  };

  export type AvailableTriggersUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: JsonNullValueInput | InputJsonValue;
    imagePath?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapNoteUpsertWithoutTriggerInput = {
    update: XOR<
      ZapNoteUpdateWithoutTriggerInput,
      ZapNoteUncheckedUpdateWithoutTriggerInput
    >;
    create: XOR<
      ZapNoteCreateWithoutTriggerInput,
      ZapNoteUncheckedCreateWithoutTriggerInput
    >;
    where?: ZapNoteWhereInput;
  };

  export type ZapNoteUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapNoteWhereInput;
    data: XOR<
      ZapNoteUpdateWithoutTriggerInput,
      ZapNoteUncheckedUpdateWithoutTriggerInput
    >;
  };

  export type ZapNoteUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutNotesNestedInput;
    step?: ActionUpdateOneWithoutNoteNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type ZapNoteUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutConnectionsInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
  };

  export type TriggerCreateWithoutUserConnectionInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    zap: ZapCreateNestedOneWithoutTriggerInput;
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput;
    note?: ZapNoteCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerUncheckedCreateWithoutUserConnectionInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    triggerId: string;
    note?: ZapNoteUncheckedCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerCreateOrConnectWithoutUserConnectionInput = {
    where: TriggerWhereUniqueInput;
    create: XOR<
      TriggerCreateWithoutUserConnectionInput,
      TriggerUncheckedCreateWithoutUserConnectionInput
    >;
  };

  export type TriggerCreateManyUserConnectionInputEnvelope = {
    data:
      | TriggerCreateManyUserConnectionInput
      | TriggerCreateManyUserConnectionInput[];
    skipDuplicates?: boolean;
  };

  export type ActionCreateWithoutUserConnectionInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    zap: ZapCreateNestedOneWithoutActionsInput;
    actionDetails: AvailableActionsCreateNestedOneWithoutActionsInput;
    zapRunFailures?: ZapRunCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteCreateNestedOneWithoutStepInput;
  };

  export type ActionUncheckedCreateWithoutUserConnectionInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    zapRunFailures?: ZapRunUncheckedCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteUncheckedCreateNestedOneWithoutStepInput;
  };

  export type ActionCreateOrConnectWithoutUserConnectionInput = {
    where: ActionWhereUniqueInput;
    create: XOR<
      ActionCreateWithoutUserConnectionInput,
      ActionUncheckedCreateWithoutUserConnectionInput
    >;
  };

  export type ActionCreateManyUserConnectionInputEnvelope = {
    data:
      | ActionCreateManyUserConnectionInput
      | ActionCreateManyUserConnectionInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<
      UserUpdateWithoutConnectionsInput,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
    create: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutConnectionsInput,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
  };

  export type UserUpdateWithoutConnectionsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TriggerUpsertWithWhereUniqueWithoutUserConnectionInput = {
    where: TriggerWhereUniqueInput;
    update: XOR<
      TriggerUpdateWithoutUserConnectionInput,
      TriggerUncheckedUpdateWithoutUserConnectionInput
    >;
    create: XOR<
      TriggerCreateWithoutUserConnectionInput,
      TriggerUncheckedCreateWithoutUserConnectionInput
    >;
  };

  export type TriggerUpdateWithWhereUniqueWithoutUserConnectionInput = {
    where: TriggerWhereUniqueInput;
    data: XOR<
      TriggerUpdateWithoutUserConnectionInput,
      TriggerUncheckedUpdateWithoutUserConnectionInput
    >;
  };

  export type TriggerUpdateManyWithWhereWithoutUserConnectionInput = {
    where: TriggerScalarWhereInput;
    data: XOR<
      TriggerUpdateManyMutationInput,
      TriggerUncheckedUpdateManyWithoutUserConnectionInput
    >;
  };

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
    OR?: TriggerScalarWhereInput[];
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[];
    id?: StringFilter<"Trigger"> | string;
    zapId?: IntFilter<"Trigger"> | number;
    optionId?: StringFilter<"Trigger"> | string;
    optionType?: StringFilter<"Trigger"> | string;
    published?: BoolFilter<"Trigger"> | boolean;
    configuration?: JsonFilter<"Trigger">;
    lastPolledAt?: DateTimeNullableFilter<"Trigger"> | Date | string | null;
    connectionId?: StringNullableFilter<"Trigger"> | string | null;
    triggerId?: StringFilter<"Trigger"> | string;
  };

  export type ActionUpsertWithWhereUniqueWithoutUserConnectionInput = {
    where: ActionWhereUniqueInput;
    update: XOR<
      ActionUpdateWithoutUserConnectionInput,
      ActionUncheckedUpdateWithoutUserConnectionInput
    >;
    create: XOR<
      ActionCreateWithoutUserConnectionInput,
      ActionUncheckedCreateWithoutUserConnectionInput
    >;
  };

  export type ActionUpdateWithWhereUniqueWithoutUserConnectionInput = {
    where: ActionWhereUniqueInput;
    data: XOR<
      ActionUpdateWithoutUserConnectionInput,
      ActionUncheckedUpdateWithoutUserConnectionInput
    >;
  };

  export type ActionUpdateManyWithWhereWithoutUserConnectionInput = {
    where: ActionScalarWhereInput;
    data: XOR<
      ActionUpdateManyMutationInput,
      ActionUncheckedUpdateManyWithoutUserConnectionInput
    >;
  };

  export type TriggerCreateWithoutTypeInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    zap: ZapCreateNestedOneWithoutTriggerInput;
    userConnection?: UserConnectionCreateNestedOneWithoutTriggerInput;
    note?: ZapNoteCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
    note?: ZapNoteUncheckedCreateNestedOneWithoutTriggerInput;
  };

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput;
    create: XOR<
      TriggerCreateWithoutTypeInput,
      TriggerUncheckedCreateWithoutTypeInput
    >;
  };

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[];
    skipDuplicates?: boolean;
  };

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput;
    update: XOR<
      TriggerUpdateWithoutTypeInput,
      TriggerUncheckedUpdateWithoutTypeInput
    >;
    create: XOR<
      TriggerCreateWithoutTypeInput,
      TriggerUncheckedCreateWithoutTypeInput
    >;
  };

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput;
    data: XOR<
      TriggerUpdateWithoutTypeInput,
      TriggerUncheckedUpdateWithoutTypeInput
    >;
  };

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput;
    data: XOR<
      TriggerUpdateManyMutationInput,
      TriggerUncheckedUpdateManyWithoutTypeInput
    >;
  };

  export type ZapCreateWithoutActionsInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutActionsInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutActionsInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutActionsInput,
      ZapUncheckedCreateWithoutActionsInput
    >;
  };

  export type AvailableActionsCreateWithoutActionsInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    imagePath?: string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type AvailableActionsUncheckedCreateWithoutActionsInput = {
    id?: string;
    name: string;
    type?: string;
    serviceType?: string;
    appId?: string | null;
    imagePath?: string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type AvailableActionsCreateOrConnectWithoutActionsInput = {
    where: AvailableActionsWhereUniqueInput;
    create: XOR<
      AvailableActionsCreateWithoutActionsInput,
      AvailableActionsUncheckedCreateWithoutActionsInput
    >;
  };

  export type UserConnectionCreateWithoutActionInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    User: UserCreateNestedOneWithoutConnectionsInput;
    trigger?: TriggerCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionUncheckedCreateWithoutActionInput = {
    id?: string;
    userId: number;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
    trigger?: TriggerUncheckedCreateNestedManyWithoutUserConnectionInput;
  };

  export type UserConnectionCreateOrConnectWithoutActionInput = {
    where: UserConnectionWhereUniqueInput;
    create: XOR<
      UserConnectionCreateWithoutActionInput,
      UserConnectionUncheckedCreateWithoutActionInput
    >;
  };

  export type ZapRunCreateWithoutFailedActionInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    zap: ZapCreateNestedOneWithoutZapRunsInput;
    zapRunOutBox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunUncheckedCreateWithoutFailedActionInput = {
    id?: string;
    zapId: number;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput;
  };

  export type ZapRunCreateOrConnectWithoutFailedActionInput = {
    where: ZapRunWhereUniqueInput;
    create: XOR<
      ZapRunCreateWithoutFailedActionInput,
      ZapRunUncheckedCreateWithoutFailedActionInput
    >;
  };

  export type ZapRunCreateManyFailedActionInputEnvelope = {
    data:
      | ZapRunCreateManyFailedActionInput
      | ZapRunCreateManyFailedActionInput[];
    skipDuplicates?: boolean;
  };

  export type ZapNoteCreateWithoutStepInput = {
    id?: string;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap: ZapCreateNestedOneWithoutNotesInput;
    trigger?: TriggerCreateNestedOneWithoutNoteInput;
    createdBy: UserCreateNestedOneWithoutNotesInput;
  };

  export type ZapNoteUncheckedCreateWithoutStepInput = {
    id?: string;
    zapId: number;
    triggerId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapNoteCreateOrConnectWithoutStepInput = {
    where: ZapNoteWhereUniqueInput;
    create: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
  };

  export type ZapUpsertWithoutActionsInput = {
    update: XOR<
      ZapUpdateWithoutActionsInput,
      ZapUncheckedUpdateWithoutActionsInput
    >;
    create: XOR<
      ZapCreateWithoutActionsInput,
      ZapUncheckedCreateWithoutActionsInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutActionsInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutActionsInput,
      ZapUncheckedUpdateWithoutActionsInput
    >;
  };

  export type ZapUpdateWithoutActionsInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type AvailableActionsUpsertWithoutActionsInput = {
    update: XOR<
      AvailableActionsUpdateWithoutActionsInput,
      AvailableActionsUncheckedUpdateWithoutActionsInput
    >;
    create: XOR<
      AvailableActionsCreateWithoutActionsInput,
      AvailableActionsUncheckedCreateWithoutActionsInput
    >;
    where?: AvailableActionsWhereInput;
  };

  export type AvailableActionsUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvailableActionsWhereInput;
    data: XOR<
      AvailableActionsUpdateWithoutActionsInput,
      AvailableActionsUncheckedUpdateWithoutActionsInput
    >;
  };

  export type AvailableActionsUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type AvailableActionsUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    serviceType?: StringFieldUpdateOperationsInput | string;
    appId?: NullableStringFieldUpdateOperationsInput | string | null;
    imagePath?: StringFieldUpdateOperationsInput | string;
    metadata?: JsonNullValueInput | InputJsonValue;
  };

  export type UserConnectionUpsertWithoutActionInput = {
    update: XOR<
      UserConnectionUpdateWithoutActionInput,
      UserConnectionUncheckedUpdateWithoutActionInput
    >;
    create: XOR<
      UserConnectionCreateWithoutActionInput,
      UserConnectionUncheckedCreateWithoutActionInput
    >;
    where?: UserConnectionWhereInput;
  };

  export type UserConnectionUpdateToOneWithWhereWithoutActionInput = {
    where?: UserConnectionWhereInput;
    data: XOR<
      UserConnectionUpdateWithoutActionInput,
      UserConnectionUncheckedUpdateWithoutActionInput
    >;
  };

  export type UserConnectionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    User?: UserUpdateOneRequiredWithoutConnectionsNestedInput;
    trigger?: TriggerUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    trigger?: TriggerUncheckedUpdateManyWithoutUserConnectionNestedInput;
  };

  export type ZapRunUpsertWithWhereUniqueWithoutFailedActionInput = {
    where: ZapRunWhereUniqueInput;
    update: XOR<
      ZapRunUpdateWithoutFailedActionInput,
      ZapRunUncheckedUpdateWithoutFailedActionInput
    >;
    create: XOR<
      ZapRunCreateWithoutFailedActionInput,
      ZapRunUncheckedCreateWithoutFailedActionInput
    >;
  };

  export type ZapRunUpdateWithWhereUniqueWithoutFailedActionInput = {
    where: ZapRunWhereUniqueInput;
    data: XOR<
      ZapRunUpdateWithoutFailedActionInput,
      ZapRunUncheckedUpdateWithoutFailedActionInput
    >;
  };

  export type ZapRunUpdateManyWithWhereWithoutFailedActionInput = {
    where: ZapRunScalarWhereInput;
    data: XOR<
      ZapRunUpdateManyMutationInput,
      ZapRunUncheckedUpdateManyWithoutFailedActionInput
    >;
  };

  export type ZapNoteUpsertWithoutStepInput = {
    update: XOR<
      ZapNoteUpdateWithoutStepInput,
      ZapNoteUncheckedUpdateWithoutStepInput
    >;
    create: XOR<
      ZapNoteCreateWithoutStepInput,
      ZapNoteUncheckedCreateWithoutStepInput
    >;
    where?: ZapNoteWhereInput;
  };

  export type ZapNoteUpdateToOneWithWhereWithoutStepInput = {
    where?: ZapNoteWhereInput;
    data: XOR<
      ZapNoteUpdateWithoutStepInput,
      ZapNoteUncheckedUpdateWithoutStepInput
    >;
  };

  export type ZapNoteUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutNotesNestedInput;
    trigger?: TriggerUpdateOneWithoutNoteNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type ZapNoteUncheckedUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActionCreateWithoutActionDetailsInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    zap: ZapCreateNestedOneWithoutActionsInput;
    userConnection?: UserConnectionCreateNestedOneWithoutActionInput;
    zapRunFailures?: ZapRunCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteCreateNestedOneWithoutStepInput;
  };

  export type ActionUncheckedCreateWithoutActionDetailsInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    connectionId?: string | null;
    zapRunFailures?: ZapRunUncheckedCreateNestedManyWithoutFailedActionInput;
    note?: ZapNoteUncheckedCreateNestedOneWithoutStepInput;
  };

  export type ActionCreateOrConnectWithoutActionDetailsInput = {
    where: ActionWhereUniqueInput;
    create: XOR<
      ActionCreateWithoutActionDetailsInput,
      ActionUncheckedCreateWithoutActionDetailsInput
    >;
  };

  export type ActionCreateManyActionDetailsInputEnvelope = {
    data:
      | ActionCreateManyActionDetailsInput
      | ActionCreateManyActionDetailsInput[];
    skipDuplicates?: boolean;
  };

  export type ActionUpsertWithWhereUniqueWithoutActionDetailsInput = {
    where: ActionWhereUniqueInput;
    update: XOR<
      ActionUpdateWithoutActionDetailsInput,
      ActionUncheckedUpdateWithoutActionDetailsInput
    >;
    create: XOR<
      ActionCreateWithoutActionDetailsInput,
      ActionUncheckedCreateWithoutActionDetailsInput
    >;
  };

  export type ActionUpdateWithWhereUniqueWithoutActionDetailsInput = {
    where: ActionWhereUniqueInput;
    data: XOR<
      ActionUpdateWithoutActionDetailsInput,
      ActionUncheckedUpdateWithoutActionDetailsInput
    >;
  };

  export type ActionUpdateManyWithWhereWithoutActionDetailsInput = {
    where: ActionScalarWhereInput;
    data: XOR<
      ActionUpdateManyMutationInput,
      ActionUncheckedUpdateManyWithoutActionDetailsInput
    >;
  };

  export type ActionCreateWithoutZapRunFailuresInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    zap: ZapCreateNestedOneWithoutActionsInput;
    actionDetails: AvailableActionsCreateNestedOneWithoutActionsInput;
    userConnection?: UserConnectionCreateNestedOneWithoutActionInput;
    note?: ZapNoteCreateNestedOneWithoutStepInput;
  };

  export type ActionUncheckedCreateWithoutZapRunFailuresInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
    note?: ZapNoteUncheckedCreateNestedOneWithoutStepInput;
  };

  export type ActionCreateOrConnectWithoutZapRunFailuresInput = {
    where: ActionWhereUniqueInput;
    create: XOR<
      ActionCreateWithoutZapRunFailuresInput,
      ActionUncheckedCreateWithoutZapRunFailuresInput
    >;
  };

  export type ZapCreateWithoutZapRunsInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutZapRunsInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutZapRunsInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutZapRunsInput,
      ZapUncheckedCreateWithoutZapRunsInput
    >;
  };

  export type ZapRunOutboxCreateWithoutZapRunInput = {
    id?: string;
  };

  export type ZapRunOutboxUncheckedCreateWithoutZapRunInput = {
    id?: string;
  };

  export type ZapRunOutboxCreateOrConnectWithoutZapRunInput = {
    where: ZapRunOutboxWhereUniqueInput;
    create: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
  };

  export type ActionUpsertWithoutZapRunFailuresInput = {
    update: XOR<
      ActionUpdateWithoutZapRunFailuresInput,
      ActionUncheckedUpdateWithoutZapRunFailuresInput
    >;
    create: XOR<
      ActionCreateWithoutZapRunFailuresInput,
      ActionUncheckedCreateWithoutZapRunFailuresInput
    >;
    where?: ActionWhereInput;
  };

  export type ActionUpdateToOneWithWhereWithoutZapRunFailuresInput = {
    where?: ActionWhereInput;
    data: XOR<
      ActionUpdateWithoutZapRunFailuresInput,
      ActionUncheckedUpdateWithoutZapRunFailuresInput
    >;
  };

  export type ActionUpdateWithoutZapRunFailuresInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput;
    actionDetails?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutActionNestedInput;
    note?: ZapNoteUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateWithoutZapRunFailuresInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: ZapNoteUncheckedUpdateOneWithoutStepNestedInput;
  };

  export type ZapUpsertWithoutZapRunsInput = {
    update: XOR<
      ZapUpdateWithoutZapRunsInput,
      ZapUncheckedUpdateWithoutZapRunsInput
    >;
    create: XOR<
      ZapCreateWithoutZapRunsInput,
      ZapUncheckedCreateWithoutZapRunsInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutZapRunsInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutZapRunsInput,
      ZapUncheckedUpdateWithoutZapRunsInput
    >;
  };

  export type ZapUpdateWithoutZapRunsInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutZapRunsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapRunOutboxUpsertWithoutZapRunInput = {
    update: XOR<
      ZapRunOutboxUpdateWithoutZapRunInput,
      ZapRunOutboxUncheckedUpdateWithoutZapRunInput
    >;
    create: XOR<
      ZapRunOutboxCreateWithoutZapRunInput,
      ZapRunOutboxUncheckedCreateWithoutZapRunInput
    >;
    where?: ZapRunOutboxWhereInput;
  };

  export type ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: ZapRunOutboxWhereInput;
    data: XOR<
      ZapRunOutboxUpdateWithoutZapRunInput,
      ZapRunOutboxUncheckedUpdateWithoutZapRunInput
    >;
  };

  export type ZapRunOutboxUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapRunOutboxUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapRunCreateWithoutZapRunOutBoxInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionCreateNestedOneWithoutZapRunFailuresInput;
    zap: ZapCreateNestedOneWithoutZapRunsInput;
  };

  export type ZapRunUncheckedCreateWithoutZapRunOutBoxInput = {
    id?: string;
    zapId: number;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    failedActionId?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunCreateOrConnectWithoutZapRunOutBoxInput = {
    where: ZapRunWhereUniqueInput;
    create: XOR<
      ZapRunCreateWithoutZapRunOutBoxInput,
      ZapRunUncheckedCreateWithoutZapRunOutBoxInput
    >;
  };

  export type ZapRunUpsertWithoutZapRunOutBoxInput = {
    update: XOR<
      ZapRunUpdateWithoutZapRunOutBoxInput,
      ZapRunUncheckedUpdateWithoutZapRunOutBoxInput
    >;
    create: XOR<
      ZapRunCreateWithoutZapRunOutBoxInput,
      ZapRunUncheckedCreateWithoutZapRunOutBoxInput
    >;
    where?: ZapRunWhereInput;
  };

  export type ZapRunUpdateToOneWithWhereWithoutZapRunOutBoxInput = {
    where?: ZapRunWhereInput;
    data: XOR<
      ZapRunUpdateWithoutZapRunOutBoxInput,
      ZapRunUncheckedUpdateWithoutZapRunOutBoxInput
    >;
  };

  export type ZapRunUpdateWithoutZapRunOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionUpdateOneWithoutZapRunFailuresNestedInput;
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput;
  };

  export type ZapRunUncheckedUpdateWithoutZapRunOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    failedActionId?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
  };

  export type ZapCreateWithoutChangeHistoryInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    notes?: ZapNoteCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutChangeHistoryInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutChangeHistoryInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutChangeHistoryInput,
      ZapUncheckedCreateWithoutChangeHistoryInput
    >;
  };

  export type UserCreateWithoutChangeHistoryInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapCreateNestedManyWithoutUserInput;
    connections?: UserConnectionCreateNestedManyWithoutUserInput;
    notes?: ZapNoteCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutChangeHistoryInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput;
    connections?: UserConnectionUncheckedCreateNestedManyWithoutUserInput;
    notes?: ZapNoteUncheckedCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutChangeHistoryInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutChangeHistoryInput,
      UserUncheckedCreateWithoutChangeHistoryInput
    >;
  };

  export type ZapUpsertWithoutChangeHistoryInput = {
    update: XOR<
      ZapUpdateWithoutChangeHistoryInput,
      ZapUncheckedUpdateWithoutChangeHistoryInput
    >;
    create: XOR<
      ZapCreateWithoutChangeHistoryInput,
      ZapUncheckedCreateWithoutChangeHistoryInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutChangeHistoryInput = {
    where?: ZapWhereInput;
    data: XOR<
      ZapUpdateWithoutChangeHistoryInput,
      ZapUncheckedUpdateWithoutChangeHistoryInput
    >;
  };

  export type ZapUpdateWithoutChangeHistoryInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutChangeHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type UserUpsertWithoutChangeHistoryInput = {
    update: XOR<
      UserUpdateWithoutChangeHistoryInput,
      UserUncheckedUpdateWithoutChangeHistoryInput
    >;
    create: XOR<
      UserCreateWithoutChangeHistoryInput,
      UserUncheckedCreateWithoutChangeHistoryInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutChangeHistoryInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutChangeHistoryInput,
      UserUncheckedUpdateWithoutChangeHistoryInput
    >;
  };

  export type UserUpdateWithoutChangeHistoryInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUpdateManyWithoutUserNestedInput;
    notes?: ZapNoteUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutChangeHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUncheckedUpdateManyWithoutUserNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ZapCreateWithoutNotesInput = {
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    user: UserCreateNestedOneWithoutZapInput;
    trigger?: TriggerCreateNestedOneWithoutZapInput;
    actions?: ActionCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput;
    records?: RecordCreateNestedManyWithoutZapInput;
    record?: RecordCreateNestedOneWithoutZapSingleInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutZapInput;
    folder: FolderCreateNestedOneWithoutZapsInput;
  };

  export type ZapUncheckedCreateWithoutNotesInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
    folderId: number;
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput;
    records?: RecordUncheckedCreateNestedManyWithoutZapInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutZapInput;
  };

  export type ZapCreateOrConnectWithoutNotesInput = {
    where: ZapWhereUniqueInput;
    create: XOR<
      ZapCreateWithoutNotesInput,
      ZapUncheckedCreateWithoutNotesInput
    >;
  };

  export type TriggerCreateWithoutNoteInput = {
    id?: string;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    zap: ZapCreateNestedOneWithoutTriggerInput;
    userConnection?: UserConnectionCreateNestedOneWithoutTriggerInput;
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput;
  };

  export type TriggerUncheckedCreateWithoutNoteInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
    triggerId: string;
  };

  export type TriggerCreateOrConnectWithoutNoteInput = {
    where: TriggerWhereUniqueInput;
    create: XOR<
      TriggerCreateWithoutNoteInput,
      TriggerUncheckedCreateWithoutNoteInput
    >;
  };

  export type ActionCreateWithoutNoteInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    zap: ZapCreateNestedOneWithoutActionsInput;
    actionDetails: AvailableActionsCreateNestedOneWithoutActionsInput;
    userConnection?: UserConnectionCreateNestedOneWithoutActionInput;
    zapRunFailures?: ZapRunCreateNestedManyWithoutFailedActionInput;
  };

  export type ActionUncheckedCreateWithoutNoteInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
    zapRunFailures?: ZapRunUncheckedCreateNestedManyWithoutFailedActionInput;
  };

  export type ActionCreateOrConnectWithoutNoteInput = {
    where: ActionWhereUniqueInput;
    create: XOR<
      ActionCreateWithoutNoteInput,
      ActionUncheckedCreateWithoutNoteInput
    >;
  };

  export type UserCreateWithoutNotesInput = {
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapCreateNestedManyWithoutUserInput;
    connections?: UserConnectionCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number;
    firstname?: string | null;
    lastname?: string | null;
    email: string;
    zapmail: string;
    type: string;
    verified?: boolean;
    password?: string | null;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput;
    connections?: UserConnectionUncheckedCreateNestedManyWithoutUserInput;
    changeHistory?: ZapChangeHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
    Folder?: FolderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
  };

  export type ZapUpsertWithoutNotesInput = {
    update: XOR<
      ZapUpdateWithoutNotesInput,
      ZapUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      ZapCreateWithoutNotesInput,
      ZapUncheckedCreateWithoutNotesInput
    >;
    where?: ZapWhereInput;
  };

  export type ZapUpdateToOneWithWhereWithoutNotesInput = {
    where?: ZapWhereInput;
    data: XOR<ZapUpdateWithoutNotesInput, ZapUncheckedUpdateWithoutNotesInput>;
  };

  export type ZapUpdateWithoutNotesInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type TriggerUpsertWithoutNoteInput = {
    update: XOR<
      TriggerUpdateWithoutNoteInput,
      TriggerUncheckedUpdateWithoutNoteInput
    >;
    create: XOR<
      TriggerCreateWithoutNoteInput,
      TriggerUncheckedCreateWithoutNoteInput
    >;
    where?: TriggerWhereInput;
  };

  export type TriggerUpdateToOneWithWhereWithoutNoteInput = {
    where?: TriggerWhereInput;
    data: XOR<
      TriggerUpdateWithoutNoteInput,
      TriggerUncheckedUpdateWithoutNoteInput
    >;
  };

  export type TriggerUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutTriggerNestedInput;
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput;
  };

  export type TriggerUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
  };

  export type ActionUpsertWithoutNoteInput = {
    update: XOR<
      ActionUpdateWithoutNoteInput,
      ActionUncheckedUpdateWithoutNoteInput
    >;
    create: XOR<
      ActionCreateWithoutNoteInput,
      ActionUncheckedCreateWithoutNoteInput
    >;
    where?: ActionWhereInput;
  };

  export type ActionUpdateToOneWithWhereWithoutNoteInput = {
    where?: ActionWhereInput;
    data: XOR<
      ActionUpdateWithoutNoteInput,
      ActionUncheckedUpdateWithoutNoteInput
    >;
  };

  export type ActionUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput;
    actionDetails?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutActionNestedInput;
    zapRunFailures?: ZapRunUpdateManyWithoutFailedActionNestedInput;
  };

  export type ActionUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    zapRunFailures?: ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput;
  };

  export type UserUpsertWithoutNotesInput = {
    update: XOR<
      UserUpdateWithoutNotesInput,
      UserUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutNotesInput,
      UserUncheckedUpdateWithoutNotesInput
    >;
  };

  export type UserUpdateWithoutNotesInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstname?: NullableStringFieldUpdateOperationsInput | string | null;
    lastname?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    zapmail?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    verified?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput;
    connections?: UserConnectionUncheckedUpdateManyWithoutUserNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
    Folder?: FolderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ZapCreateManyUserInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    folderId: number;
  };

  export type UserConnectionCreateManyUserInput = {
    id?: string;
    appId: string;
    identifier: string;
    accessToken: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    expiredAt: Date | string;
  };

  export type ZapChangeHistoryCreateManyCreatedByInput = {
    id?: string;
    zapId: number;
    type: $Enums.ZapHistoryType;
    message: string;
    createdAt?: Date | string;
  };

  export type ZapNoteCreateManyCreatedByInput = {
    id?: string;
    zapId: number;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FolderCreateManyUserInput = {
    id?: number;
    name: string;
    type?: string;
    parentId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapUpdateWithoutUserInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
    folder?: FolderUpdateOneRequiredWithoutZapsNestedInput;
  };

  export type ZapUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    folderId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    folderId?: IntFieldUpdateOperationsInput | number;
  };

  export type UserConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    trigger?: TriggerUpdateManyWithoutUserConnectionNestedInput;
    action?: ActionUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    trigger?: TriggerUncheckedUpdateManyWithoutUserConnectionNestedInput;
    action?: ActionUncheckedUpdateManyWithoutUserConnectionNestedInput;
  };

  export type UserConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appId?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    accessToken?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapChangeHistoryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutChangeHistoryNestedInput;
  };

  export type ZapChangeHistoryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapChangeHistoryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    zap?: ZapUpdateOneRequiredWithoutNotesNestedInput;
    trigger?: TriggerUpdateOneWithoutNoteNestedInput;
    step?: ActionUpdateOneWithoutNoteNestedInput;
  };

  export type ZapNoteUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: FolderUpdateOneWithoutChildrenNestedInput;
    children?: FolderUpdateManyWithoutParentNestedInput;
    zaps?: ZapUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput;
    zaps?: ZapUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActionCreateManyZapInput = {
    id?: string;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
    connectionId?: string | null;
  };

  export type ZapRunCreateManyZapInput = {
    id?: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    failedActionId?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
  };

  export type RecordCreateManyZapInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    pulledAt?: Date | string;
    title: string;
    JsonData: JsonNullValueInput | InputJsonValue;
    triggerOptionId: string;
  };

  export type ZapChangeHistoryCreateManyZapInput = {
    id?: string;
    type: $Enums.ZapHistoryType;
    message: string;
    createdById: number;
    createdAt?: Date | string;
  };

  export type ZapNoteCreateManyZapInput = {
    id?: string;
    triggerId?: string | null;
    stepId?: string | null;
    type: $Enums.ZapNoteType;
    content: string;
    createdById: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    actionDetails?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutActionNestedInput;
    zapRunFailures?: ZapRunUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    zapRunFailures?: ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUncheckedUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ZapRunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    failedAction?: ActionUpdateOneWithoutZapRunFailuresNestedInput;
    zapRunOutBox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    failedActionId?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    failedActionId?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
  };

  export type RecordUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
    zapSingle?: ZapUpdateOneWithoutRecordNestedInput;
  };

  export type RecordUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
    zapSingle?: ZapUncheckedUpdateOneWithoutRecordNestedInput;
  };

  export type RecordUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pulledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    title?: StringFieldUpdateOperationsInput | string;
    JsonData?: JsonNullValueInput | InputJsonValue;
    triggerOptionId?: StringFieldUpdateOperationsInput | string;
  };

  export type ZapChangeHistoryUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutChangeHistoryNestedInput;
  };

  export type ZapChangeHistoryUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapChangeHistoryUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapHistoryTypeFieldUpdateOperationsInput | $Enums.ZapHistoryType;
    message?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    trigger?: TriggerUpdateOneWithoutNoteNestedInput;
    step?: ActionUpdateOneWithoutNoteNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type ZapNoteUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapNoteUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    stepId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumZapNoteTypeFieldUpdateOperationsInput | $Enums.ZapNoteType;
    content?: StringFieldUpdateOperationsInput | string;
    createdById?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderCreateManyParentInput = {
    id?: number;
    name: string;
    userId: number;
    type?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ZapCreateManyFolderInput = {
    id?: number;
    triggerId?: string | null;
    name?: string;
    lastEdited?: Date | string;
    createdAt?: Date | string;
    published?: boolean;
    RecordId?: string | null;
    userId: number;
  };

  export type FolderUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFolderNestedInput;
    children?: FolderUpdateManyWithoutParentNestedInput;
    zaps?: ZapUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput;
    zaps?: ZapUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ZapUpdateWithoutFolderInput = {
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutZapNestedInput;
    trigger?: TriggerUpdateOneWithoutZapNestedInput;
    actions?: ActionUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput;
    records?: RecordUpdateManyWithoutZapNestedInput;
    record?: RecordUpdateOneWithoutZapSingleNestedInput;
    changeHistory?: ZapChangeHistoryUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUpdateManyWithoutZapNestedInput;
  };

  export type ZapUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput;
    records?: RecordUncheckedUpdateManyWithoutZapNestedInput;
    changeHistory?: ZapChangeHistoryUncheckedUpdateManyWithoutZapNestedInput;
    notes?: ZapNoteUncheckedUpdateManyWithoutZapNestedInput;
  };

  export type ZapUncheckedUpdateManyWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    lastEdited?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    RecordId?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type TriggerCreateManyUserConnectionInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    triggerId: string;
  };

  export type ActionCreateManyUserConnectionInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    actionId: string;
    sortingOrder?: number;
  };

  export type TriggerUpdateWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput;
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput;
    note?: ZapNoteUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
    note?: ZapNoteUncheckedUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateManyWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    triggerId?: StringFieldUpdateOperationsInput | string;
  };

  export type ActionUpdateWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput;
    actionDetails?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput;
    zapRunFailures?: ZapRunUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zapRunFailures?: ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUncheckedUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateManyWithoutUserConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    actionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
  };

  export type TriggerCreateManyTypeInput = {
    id?: string;
    zapId: number;
    optionId?: string;
    optionType?: string;
    published?: boolean;
    configuration: JsonNullValueInput | InputJsonValue;
    lastPolledAt?: Date | string | null;
    connectionId?: string | null;
  };

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutTriggerNestedInput;
    note?: ZapNoteUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    note?: ZapNoteUncheckedUpdateOneWithoutTriggerNestedInput;
  };

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    optionId?: StringFieldUpdateOperationsInput | string;
    optionType?: StringFieldUpdateOperationsInput | string;
    published?: BoolFieldUpdateOperationsInput | boolean;
    configuration?: JsonNullValueInput | InputJsonValue;
    lastPolledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ZapRunCreateManyFailedActionInput = {
    id?: string;
    zapId: number;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    status?: $Enums.ZapRunStatus;
    failureReason?: string | null;
    metaData: JsonNullValueInput | InputJsonValue;
  };

  export type ZapRunUpdateWithoutFailedActionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput;
    zapRunOutBox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunUncheckedUpdateWithoutFailedActionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
    zapRunOutBox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput;
  };

  export type ZapRunUncheckedUpdateManyWithoutFailedActionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    status?: EnumZapRunStatusFieldUpdateOperationsInput | $Enums.ZapRunStatus;
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null;
    metaData?: JsonNullValueInput | InputJsonValue;
  };

  export type ActionCreateManyActionDetailsInput = {
    id?: string;
    zapId: number;
    success?: boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: string;
    sortingOrder?: number;
    connectionId?: string | null;
  };

  export type ActionUpdateWithoutActionDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput;
    userConnection?: UserConnectionUpdateOneWithoutActionNestedInput;
    zapRunFailures?: ZapRunUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateWithoutActionDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
    zapRunFailures?: ZapRunUncheckedUpdateManyWithoutFailedActionNestedInput;
    note?: ZapNoteUncheckedUpdateOneWithoutStepNestedInput;
  };

  export type ActionUncheckedUpdateManyWithoutActionDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    zapId?: IntFieldUpdateOperationsInput | number;
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuration?: JsonNullValueInput | InputJsonValue;
    optionId?: StringFieldUpdateOperationsInput | string;
    sortingOrder?: IntFieldUpdateOperationsInput | number;
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
