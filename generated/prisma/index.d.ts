
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model VenueType
 * 
 */
export type VenueType = $Result.DefaultSelection<Prisma.$VenueTypePayload>
/**
 * Model VenuePhoto
 * 
 */
export type VenuePhoto = $Result.DefaultSelection<Prisma.$VenuePhotoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueType`: Exposes CRUD operations for the **VenueType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueTypes
    * const venueTypes = await prisma.venueType.findMany()
    * ```
    */
  get venueType(): Prisma.VenueTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venuePhoto`: Exposes CRUD operations for the **VenuePhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenuePhotos
    * const venuePhotos = await prisma.venuePhoto.findMany()
    * ```
    */
  get venuePhoto(): Prisma.VenuePhotoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    Venue: 'Venue',
    VenueType: 'VenueType',
    VenuePhoto: 'VenuePhoto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event" | "venue" | "venueType" | "venuePhoto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      VenueType: {
        payload: Prisma.$VenueTypePayload<ExtArgs>
        fields: Prisma.VenueTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          findFirst: {
            args: Prisma.VenueTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          findMany: {
            args: Prisma.VenueTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          create: {
            args: Prisma.VenueTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          createMany: {
            args: Prisma.VenueTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          delete: {
            args: Prisma.VenueTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          update: {
            args: Prisma.VenueTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          deleteMany: {
            args: Prisma.VenueTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          upsert: {
            args: Prisma.VenueTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          aggregate: {
            args: Prisma.VenueTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueType>
          }
          groupBy: {
            args: Prisma.VenueTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VenueTypeCountAggregateOutputType> | number
          }
        }
      }
      VenuePhoto: {
        payload: Prisma.$VenuePhotoPayload<ExtArgs>
        fields: Prisma.VenuePhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenuePhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenuePhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          findFirst: {
            args: Prisma.VenuePhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenuePhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          findMany: {
            args: Prisma.VenuePhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>[]
          }
          create: {
            args: Prisma.VenuePhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          createMany: {
            args: Prisma.VenuePhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenuePhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>[]
          }
          delete: {
            args: Prisma.VenuePhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          update: {
            args: Prisma.VenuePhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          deleteMany: {
            args: Prisma.VenuePhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenuePhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenuePhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>[]
          }
          upsert: {
            args: Prisma.VenuePhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePhotoPayload>
          }
          aggregate: {
            args: Prisma.VenuePhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenuePhoto>
          }
          groupBy: {
            args: Prisma.VenuePhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenuePhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenuePhotoCountArgs<ExtArgs>
            result: $Utils.Optional<VenuePhotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    event?: EventOmit
    venue?: VenueOmit
    venueType?: VenueTypeOmit
    venuePhoto?: VenuePhotoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    types: number
    photos: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    types?: boolean | VenueCountOutputTypeCountTypesArgs
    photos?: boolean | VenueCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueTypeWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenuePhotoWhereInput
  }


  /**
   * Count Type VenueTypeCountOutputType
   */

  export type VenueTypeCountOutputType = {
    venues: number
  }

  export type VenueTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | VenueTypeCountOutputTypeCountVenuesArgs
  }

  // Custom InputTypes
  /**
   * VenueTypeCountOutputType without action
   */
  export type VenueTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueTypeCountOutputType
     */
    select?: VenueTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueTypeCountOutputType without action
   */
  export type VenueTypeCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDateAndTime: Date | null
    endDateAndTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDateAndTime: Date | null
    endDateAndTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDateAndTime: number
    endDateAndTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDateAndTime?: true
    endDateAndTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDateAndTime?: true
    endDateAndTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDateAndTime?: true
    endDateAndTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    startDateAndTime: Date
    endDateAndTime: Date
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDateAndTime?: boolean
    endDateAndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDateAndTime?: boolean
    endDateAndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDateAndTime?: boolean
    endDateAndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDateAndTime?: boolean
    endDateAndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDateAndTime" | "endDateAndTime" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      startDateAndTime: Date
      endDateAndTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDateAndTime: FieldRef<"Event", 'DateTime'>
    readonly endDateAndTime: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    googlePlaceId: string | null
    primaryPhotoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    googlePlaceId: string | null
    primaryPhotoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    zip: number
    googlePlaceId: number
    primaryPhotoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    primaryPhotoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    primaryPhotoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    googlePlaceId?: true
    primaryPhotoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    primaryPhotoId: string | null
    createdAt: Date
    updatedAt: Date
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    primaryPhotoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    types?: boolean | Venue$typesArgs<ExtArgs>
    photos?: boolean | Venue$photosArgs<ExtArgs>
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    primaryPhotoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    primaryPhotoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    googlePlaceId?: boolean
    primaryPhotoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "state" | "zip" | "googlePlaceId" | "primaryPhotoId" | "createdAt" | "updatedAt", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    types?: boolean | Venue$typesArgs<ExtArgs>
    photos?: boolean | Venue$photosArgs<ExtArgs>
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
  }
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryPhoto?: boolean | Venue$primaryPhotoArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      types: Prisma.$VenueTypePayload<ExtArgs>[]
      photos: Prisma.$VenuePhotoPayload<ExtArgs>[]
      primaryPhoto: Prisma.$VenuePhotoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      state: string
      zip: string
      googlePlaceId: string
      primaryPhotoId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    types<T extends Venue$typesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Venue$photosArgs<ExtArgs> = {}>(args?: Subset<T, Venue$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    primaryPhoto<T extends Venue$primaryPhotoArgs<ExtArgs> = {}>(args?: Subset<T, Venue$primaryPhotoArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly city: FieldRef<"Venue", 'String'>
    readonly state: FieldRef<"Venue", 'String'>
    readonly zip: FieldRef<"Venue", 'String'>
    readonly googlePlaceId: FieldRef<"Venue", 'String'>
    readonly primaryPhotoId: FieldRef<"Venue", 'String'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
    readonly updatedAt: FieldRef<"Venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.types
   */
  export type Venue$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    where?: VenueTypeWhereInput
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    cursor?: VenueTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * Venue.photos
   */
  export type Venue$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    where?: VenuePhotoWhereInput
    orderBy?: VenuePhotoOrderByWithRelationInput | VenuePhotoOrderByWithRelationInput[]
    cursor?: VenuePhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenuePhotoScalarFieldEnum | VenuePhotoScalarFieldEnum[]
  }

  /**
   * Venue.primaryPhoto
   */
  export type Venue$primaryPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    where?: VenuePhotoWhereInput
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model VenueType
   */

  export type AggregateVenueType = {
    _count: VenueTypeCountAggregateOutputType | null
    _min: VenueTypeMinAggregateOutputType | null
    _max: VenueTypeMaxAggregateOutputType | null
  }

  export type VenueTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VenueTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VenueTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueType to aggregate.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueTypes
    **/
    _count?: true | VenueTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueTypeMaxAggregateInputType
  }

  export type GetVenueTypeAggregateType<T extends VenueTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueType[P]>
      : GetScalarType<T[P], AggregateVenueType[P]>
  }




  export type VenueTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueTypeWhereInput
    orderBy?: VenueTypeOrderByWithAggregationInput | VenueTypeOrderByWithAggregationInput[]
    by: VenueTypeScalarFieldEnum[] | VenueTypeScalarFieldEnum
    having?: VenueTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueTypeCountAggregateInputType | true
    _min?: VenueTypeMinAggregateInputType
    _max?: VenueTypeMaxAggregateInputType
  }

  export type VenueTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: VenueTypeCountAggregateOutputType | null
    _min: VenueTypeMinAggregateOutputType | null
    _max: VenueTypeMaxAggregateOutputType | null
  }

  type GetVenueTypeGroupByPayload<T extends VenueTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VenueTypeGroupByOutputType[P]>
        }
      >
    >


  export type VenueTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    venues?: boolean | VenueType$venuesArgs<ExtArgs>
    _count?: boolean | VenueTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VenueTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["venueType"]>
  export type VenueTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | VenueType$venuesArgs<ExtArgs>
    _count?: boolean | VenueTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenueTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueType"
    objects: {
      venues: Prisma.$VenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["venueType"]>
    composites: {}
  }

  type VenueTypeGetPayload<S extends boolean | null | undefined | VenueTypeDefaultArgs> = $Result.GetResult<Prisma.$VenueTypePayload, S>

  type VenueTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueTypeCountAggregateInputType | true
    }

  export interface VenueTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueType'], meta: { name: 'VenueType' } }
    /**
     * Find zero or one VenueType that matches the filter.
     * @param {VenueTypeFindUniqueArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueTypeFindUniqueArgs>(args: SelectSubset<T, VenueTypeFindUniqueArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueTypeFindUniqueOrThrowArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindFirstArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueTypeFindFirstArgs>(args?: SelectSubset<T, VenueTypeFindFirstArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindFirstOrThrowArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueTypes
     * const venueTypes = await prisma.venueType.findMany()
     * 
     * // Get first 10 VenueTypes
     * const venueTypes = await prisma.venueType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueTypeFindManyArgs>(args?: SelectSubset<T, VenueTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueType.
     * @param {VenueTypeCreateArgs} args - Arguments to create a VenueType.
     * @example
     * // Create one VenueType
     * const VenueType = await prisma.venueType.create({
     *   data: {
     *     // ... data to create a VenueType
     *   }
     * })
     * 
     */
    create<T extends VenueTypeCreateArgs>(args: SelectSubset<T, VenueTypeCreateArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueTypes.
     * @param {VenueTypeCreateManyArgs} args - Arguments to create many VenueTypes.
     * @example
     * // Create many VenueTypes
     * const venueType = await prisma.venueType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueTypeCreateManyArgs>(args?: SelectSubset<T, VenueTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueTypes and returns the data saved in the database.
     * @param {VenueTypeCreateManyAndReturnArgs} args - Arguments to create many VenueTypes.
     * @example
     * // Create many VenueTypes
     * const venueType = await prisma.venueType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueTypes and only return the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenueType.
     * @param {VenueTypeDeleteArgs} args - Arguments to delete one VenueType.
     * @example
     * // Delete one VenueType
     * const VenueType = await prisma.venueType.delete({
     *   where: {
     *     // ... filter to delete one VenueType
     *   }
     * })
     * 
     */
    delete<T extends VenueTypeDeleteArgs>(args: SelectSubset<T, VenueTypeDeleteArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueType.
     * @param {VenueTypeUpdateArgs} args - Arguments to update one VenueType.
     * @example
     * // Update one VenueType
     * const venueType = await prisma.venueType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueTypeUpdateArgs>(args: SelectSubset<T, VenueTypeUpdateArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueTypes.
     * @param {VenueTypeDeleteManyArgs} args - Arguments to filter VenueTypes to delete.
     * @example
     * // Delete a few VenueTypes
     * const { count } = await prisma.venueType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueTypeDeleteManyArgs>(args?: SelectSubset<T, VenueTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueTypes
     * const venueType = await prisma.venueType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueTypeUpdateManyArgs>(args: SelectSubset<T, VenueTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueTypes and returns the data updated in the database.
     * @param {VenueTypeUpdateManyAndReturnArgs} args - Arguments to update many VenueTypes.
     * @example
     * // Update many VenueTypes
     * const venueType = await prisma.venueType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenueTypes and only return the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenueType.
     * @param {VenueTypeUpsertArgs} args - Arguments to update or create a VenueType.
     * @example
     * // Update or create a VenueType
     * const venueType = await prisma.venueType.upsert({
     *   create: {
     *     // ... data to create a VenueType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueType we want to update
     *   }
     * })
     */
    upsert<T extends VenueTypeUpsertArgs>(args: SelectSubset<T, VenueTypeUpsertArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeCountArgs} args - Arguments to filter VenueTypes to count.
     * @example
     * // Count the number of VenueTypes
     * const count = await prisma.venueType.count({
     *   where: {
     *     // ... the filter for the VenueTypes we want to count
     *   }
     * })
    **/
    count<T extends VenueTypeCountArgs>(
      args?: Subset<T, VenueTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueTypeAggregateArgs>(args: Subset<T, VenueTypeAggregateArgs>): Prisma.PrismaPromise<GetVenueTypeAggregateType<T>>

    /**
     * Group by VenueType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeGroupByArgs} args - Group by arguments.
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
      T extends VenueTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueTypeGroupByArgs['orderBy'] }
        : { orderBy?: VenueTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueType model
   */
  readonly fields: VenueTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venues<T extends VenueType$venuesArgs<ExtArgs> = {}>(args?: Subset<T, VenueType$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VenueType model
   */
  interface VenueTypeFieldRefs {
    readonly id: FieldRef<"VenueType", 'String'>
    readonly name: FieldRef<"VenueType", 'String'>
    readonly createdAt: FieldRef<"VenueType", 'DateTime'>
    readonly updatedAt: FieldRef<"VenueType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VenueType findUnique
   */
  export type VenueTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType findUniqueOrThrow
   */
  export type VenueTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType findFirst
   */
  export type VenueTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueTypes.
     */
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType findFirstOrThrow
   */
  export type VenueTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueTypes.
     */
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType findMany
   */
  export type VenueTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueTypes to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType create
   */
  export type VenueTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueType.
     */
    data: XOR<VenueTypeCreateInput, VenueTypeUncheckedCreateInput>
  }

  /**
   * VenueType createMany
   */
  export type VenueTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueTypes.
     */
    data: VenueTypeCreateManyInput | VenueTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueType createManyAndReturn
   */
  export type VenueTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VenueTypes.
     */
    data: VenueTypeCreateManyInput | VenueTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueType update
   */
  export type VenueTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueType.
     */
    data: XOR<VenueTypeUpdateInput, VenueTypeUncheckedUpdateInput>
    /**
     * Choose, which VenueType to update.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType updateMany
   */
  export type VenueTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueTypes.
     */
    data: XOR<VenueTypeUpdateManyMutationInput, VenueTypeUncheckedUpdateManyInput>
    /**
     * Filter which VenueTypes to update
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to update.
     */
    limit?: number
  }

  /**
   * VenueType updateManyAndReturn
   */
  export type VenueTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * The data used to update VenueTypes.
     */
    data: XOR<VenueTypeUpdateManyMutationInput, VenueTypeUncheckedUpdateManyInput>
    /**
     * Filter which VenueTypes to update
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to update.
     */
    limit?: number
  }

  /**
   * VenueType upsert
   */
  export type VenueTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueType to update in case it exists.
     */
    where: VenueTypeWhereUniqueInput
    /**
     * In case the VenueType found by the `where` argument doesn't exist, create a new VenueType with this data.
     */
    create: XOR<VenueTypeCreateInput, VenueTypeUncheckedCreateInput>
    /**
     * In case the VenueType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueTypeUpdateInput, VenueTypeUncheckedUpdateInput>
  }

  /**
   * VenueType delete
   */
  export type VenueTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter which VenueType to delete.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType deleteMany
   */
  export type VenueTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueTypes to delete
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to delete.
     */
    limit?: number
  }

  /**
   * VenueType.venues
   */
  export type VenueType$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    cursor?: VenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * VenueType without action
   */
  export type VenueTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
  }


  /**
   * Model VenuePhoto
   */

  export type AggregateVenuePhoto = {
    _count: VenuePhotoCountAggregateOutputType | null
    _avg: VenuePhotoAvgAggregateOutputType | null
    _sum: VenuePhotoSumAggregateOutputType | null
    _min: VenuePhotoMinAggregateOutputType | null
    _max: VenuePhotoMaxAggregateOutputType | null
  }

  export type VenuePhotoAvgAggregateOutputType = {
    widthPx: number | null
    heightPx: number | null
  }

  export type VenuePhotoSumAggregateOutputType = {
    widthPx: number | null
    heightPx: number | null
  }

  export type VenuePhotoMinAggregateOutputType = {
    id: string | null
    name: string | null
    widthPx: number | null
    heightPx: number | null
    venueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenuePhotoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    widthPx: number | null
    heightPx: number | null
    venueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenuePhotoCountAggregateOutputType = {
    id: number
    name: number
    widthPx: number
    heightPx: number
    venueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VenuePhotoAvgAggregateInputType = {
    widthPx?: true
    heightPx?: true
  }

  export type VenuePhotoSumAggregateInputType = {
    widthPx?: true
    heightPx?: true
  }

  export type VenuePhotoMinAggregateInputType = {
    id?: true
    name?: true
    widthPx?: true
    heightPx?: true
    venueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenuePhotoMaxAggregateInputType = {
    id?: true
    name?: true
    widthPx?: true
    heightPx?: true
    venueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenuePhotoCountAggregateInputType = {
    id?: true
    name?: true
    widthPx?: true
    heightPx?: true
    venueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VenuePhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenuePhoto to aggregate.
     */
    where?: VenuePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenuePhotos to fetch.
     */
    orderBy?: VenuePhotoOrderByWithRelationInput | VenuePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenuePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenuePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenuePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenuePhotos
    **/
    _count?: true | VenuePhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenuePhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenuePhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenuePhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenuePhotoMaxAggregateInputType
  }

  export type GetVenuePhotoAggregateType<T extends VenuePhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateVenuePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenuePhoto[P]>
      : GetScalarType<T[P], AggregateVenuePhoto[P]>
  }




  export type VenuePhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenuePhotoWhereInput
    orderBy?: VenuePhotoOrderByWithAggregationInput | VenuePhotoOrderByWithAggregationInput[]
    by: VenuePhotoScalarFieldEnum[] | VenuePhotoScalarFieldEnum
    having?: VenuePhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenuePhotoCountAggregateInputType | true
    _avg?: VenuePhotoAvgAggregateInputType
    _sum?: VenuePhotoSumAggregateInputType
    _min?: VenuePhotoMinAggregateInputType
    _max?: VenuePhotoMaxAggregateInputType
  }

  export type VenuePhotoGroupByOutputType = {
    id: string
    name: string
    widthPx: number
    heightPx: number
    venueId: string
    createdAt: Date
    updatedAt: Date
    _count: VenuePhotoCountAggregateOutputType | null
    _avg: VenuePhotoAvgAggregateOutputType | null
    _sum: VenuePhotoSumAggregateOutputType | null
    _min: VenuePhotoMinAggregateOutputType | null
    _max: VenuePhotoMaxAggregateOutputType | null
  }

  type GetVenuePhotoGroupByPayload<T extends VenuePhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenuePhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenuePhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenuePhotoGroupByOutputType[P]>
            : GetScalarType<T[P], VenuePhotoGroupByOutputType[P]>
        }
      >
    >


  export type VenuePhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    widthPx?: boolean
    heightPx?: boolean
    venueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    primaryFor?: boolean | VenuePhoto$primaryForArgs<ExtArgs>
  }, ExtArgs["result"]["venuePhoto"]>

  export type VenuePhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    widthPx?: boolean
    heightPx?: boolean
    venueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venuePhoto"]>

  export type VenuePhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    widthPx?: boolean
    heightPx?: boolean
    venueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venuePhoto"]>

  export type VenuePhotoSelectScalar = {
    id?: boolean
    name?: boolean
    widthPx?: boolean
    heightPx?: boolean
    venueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VenuePhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "widthPx" | "heightPx" | "venueId" | "createdAt" | "updatedAt", ExtArgs["result"]["venuePhoto"]>
  export type VenuePhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    primaryFor?: boolean | VenuePhoto$primaryForArgs<ExtArgs>
  }
  export type VenuePhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VenuePhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $VenuePhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenuePhoto"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      primaryFor: Prisma.$VenuePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      widthPx: number
      heightPx: number
      venueId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["venuePhoto"]>
    composites: {}
  }

  type VenuePhotoGetPayload<S extends boolean | null | undefined | VenuePhotoDefaultArgs> = $Result.GetResult<Prisma.$VenuePhotoPayload, S>

  type VenuePhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenuePhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenuePhotoCountAggregateInputType | true
    }

  export interface VenuePhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenuePhoto'], meta: { name: 'VenuePhoto' } }
    /**
     * Find zero or one VenuePhoto that matches the filter.
     * @param {VenuePhotoFindUniqueArgs} args - Arguments to find a VenuePhoto
     * @example
     * // Get one VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenuePhotoFindUniqueArgs>(args: SelectSubset<T, VenuePhotoFindUniqueArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenuePhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenuePhotoFindUniqueOrThrowArgs} args - Arguments to find a VenuePhoto
     * @example
     * // Get one VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenuePhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, VenuePhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenuePhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoFindFirstArgs} args - Arguments to find a VenuePhoto
     * @example
     * // Get one VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenuePhotoFindFirstArgs>(args?: SelectSubset<T, VenuePhotoFindFirstArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenuePhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoFindFirstOrThrowArgs} args - Arguments to find a VenuePhoto
     * @example
     * // Get one VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenuePhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, VenuePhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenuePhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenuePhotos
     * const venuePhotos = await prisma.venuePhoto.findMany()
     * 
     * // Get first 10 VenuePhotos
     * const venuePhotos = await prisma.venuePhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venuePhotoWithIdOnly = await prisma.venuePhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenuePhotoFindManyArgs>(args?: SelectSubset<T, VenuePhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenuePhoto.
     * @param {VenuePhotoCreateArgs} args - Arguments to create a VenuePhoto.
     * @example
     * // Create one VenuePhoto
     * const VenuePhoto = await prisma.venuePhoto.create({
     *   data: {
     *     // ... data to create a VenuePhoto
     *   }
     * })
     * 
     */
    create<T extends VenuePhotoCreateArgs>(args: SelectSubset<T, VenuePhotoCreateArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenuePhotos.
     * @param {VenuePhotoCreateManyArgs} args - Arguments to create many VenuePhotos.
     * @example
     * // Create many VenuePhotos
     * const venuePhoto = await prisma.venuePhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenuePhotoCreateManyArgs>(args?: SelectSubset<T, VenuePhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenuePhotos and returns the data saved in the database.
     * @param {VenuePhotoCreateManyAndReturnArgs} args - Arguments to create many VenuePhotos.
     * @example
     * // Create many VenuePhotos
     * const venuePhoto = await prisma.venuePhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenuePhotos and only return the `id`
     * const venuePhotoWithIdOnly = await prisma.venuePhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenuePhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, VenuePhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenuePhoto.
     * @param {VenuePhotoDeleteArgs} args - Arguments to delete one VenuePhoto.
     * @example
     * // Delete one VenuePhoto
     * const VenuePhoto = await prisma.venuePhoto.delete({
     *   where: {
     *     // ... filter to delete one VenuePhoto
     *   }
     * })
     * 
     */
    delete<T extends VenuePhotoDeleteArgs>(args: SelectSubset<T, VenuePhotoDeleteArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenuePhoto.
     * @param {VenuePhotoUpdateArgs} args - Arguments to update one VenuePhoto.
     * @example
     * // Update one VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenuePhotoUpdateArgs>(args: SelectSubset<T, VenuePhotoUpdateArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenuePhotos.
     * @param {VenuePhotoDeleteManyArgs} args - Arguments to filter VenuePhotos to delete.
     * @example
     * // Delete a few VenuePhotos
     * const { count } = await prisma.venuePhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenuePhotoDeleteManyArgs>(args?: SelectSubset<T, VenuePhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenuePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenuePhotos
     * const venuePhoto = await prisma.venuePhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenuePhotoUpdateManyArgs>(args: SelectSubset<T, VenuePhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenuePhotos and returns the data updated in the database.
     * @param {VenuePhotoUpdateManyAndReturnArgs} args - Arguments to update many VenuePhotos.
     * @example
     * // Update many VenuePhotos
     * const venuePhoto = await prisma.venuePhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenuePhotos and only return the `id`
     * const venuePhotoWithIdOnly = await prisma.venuePhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenuePhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, VenuePhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenuePhoto.
     * @param {VenuePhotoUpsertArgs} args - Arguments to update or create a VenuePhoto.
     * @example
     * // Update or create a VenuePhoto
     * const venuePhoto = await prisma.venuePhoto.upsert({
     *   create: {
     *     // ... data to create a VenuePhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenuePhoto we want to update
     *   }
     * })
     */
    upsert<T extends VenuePhotoUpsertArgs>(args: SelectSubset<T, VenuePhotoUpsertArgs<ExtArgs>>): Prisma__VenuePhotoClient<$Result.GetResult<Prisma.$VenuePhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenuePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoCountArgs} args - Arguments to filter VenuePhotos to count.
     * @example
     * // Count the number of VenuePhotos
     * const count = await prisma.venuePhoto.count({
     *   where: {
     *     // ... the filter for the VenuePhotos we want to count
     *   }
     * })
    **/
    count<T extends VenuePhotoCountArgs>(
      args?: Subset<T, VenuePhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenuePhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenuePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenuePhotoAggregateArgs>(args: Subset<T, VenuePhotoAggregateArgs>): Prisma.PrismaPromise<GetVenuePhotoAggregateType<T>>

    /**
     * Group by VenuePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuePhotoGroupByArgs} args - Group by arguments.
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
      T extends VenuePhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenuePhotoGroupByArgs['orderBy'] }
        : { orderBy?: VenuePhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenuePhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenuePhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenuePhoto model
   */
  readonly fields: VenuePhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenuePhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenuePhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    primaryFor<T extends VenuePhoto$primaryForArgs<ExtArgs> = {}>(args?: Subset<T, VenuePhoto$primaryForArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VenuePhoto model
   */
  interface VenuePhotoFieldRefs {
    readonly id: FieldRef<"VenuePhoto", 'String'>
    readonly name: FieldRef<"VenuePhoto", 'String'>
    readonly widthPx: FieldRef<"VenuePhoto", 'Int'>
    readonly heightPx: FieldRef<"VenuePhoto", 'Int'>
    readonly venueId: FieldRef<"VenuePhoto", 'String'>
    readonly createdAt: FieldRef<"VenuePhoto", 'DateTime'>
    readonly updatedAt: FieldRef<"VenuePhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VenuePhoto findUnique
   */
  export type VenuePhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter, which VenuePhoto to fetch.
     */
    where: VenuePhotoWhereUniqueInput
  }

  /**
   * VenuePhoto findUniqueOrThrow
   */
  export type VenuePhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter, which VenuePhoto to fetch.
     */
    where: VenuePhotoWhereUniqueInput
  }

  /**
   * VenuePhoto findFirst
   */
  export type VenuePhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter, which VenuePhoto to fetch.
     */
    where?: VenuePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenuePhotos to fetch.
     */
    orderBy?: VenuePhotoOrderByWithRelationInput | VenuePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenuePhotos.
     */
    cursor?: VenuePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenuePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenuePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenuePhotos.
     */
    distinct?: VenuePhotoScalarFieldEnum | VenuePhotoScalarFieldEnum[]
  }

  /**
   * VenuePhoto findFirstOrThrow
   */
  export type VenuePhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter, which VenuePhoto to fetch.
     */
    where?: VenuePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenuePhotos to fetch.
     */
    orderBy?: VenuePhotoOrderByWithRelationInput | VenuePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenuePhotos.
     */
    cursor?: VenuePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenuePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenuePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenuePhotos.
     */
    distinct?: VenuePhotoScalarFieldEnum | VenuePhotoScalarFieldEnum[]
  }

  /**
   * VenuePhoto findMany
   */
  export type VenuePhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter, which VenuePhotos to fetch.
     */
    where?: VenuePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenuePhotos to fetch.
     */
    orderBy?: VenuePhotoOrderByWithRelationInput | VenuePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenuePhotos.
     */
    cursor?: VenuePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenuePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenuePhotos.
     */
    skip?: number
    distinct?: VenuePhotoScalarFieldEnum | VenuePhotoScalarFieldEnum[]
  }

  /**
   * VenuePhoto create
   */
  export type VenuePhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a VenuePhoto.
     */
    data: XOR<VenuePhotoCreateInput, VenuePhotoUncheckedCreateInput>
  }

  /**
   * VenuePhoto createMany
   */
  export type VenuePhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenuePhotos.
     */
    data: VenuePhotoCreateManyInput | VenuePhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenuePhoto createManyAndReturn
   */
  export type VenuePhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * The data used to create many VenuePhotos.
     */
    data: VenuePhotoCreateManyInput | VenuePhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenuePhoto update
   */
  export type VenuePhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a VenuePhoto.
     */
    data: XOR<VenuePhotoUpdateInput, VenuePhotoUncheckedUpdateInput>
    /**
     * Choose, which VenuePhoto to update.
     */
    where: VenuePhotoWhereUniqueInput
  }

  /**
   * VenuePhoto updateMany
   */
  export type VenuePhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenuePhotos.
     */
    data: XOR<VenuePhotoUpdateManyMutationInput, VenuePhotoUncheckedUpdateManyInput>
    /**
     * Filter which VenuePhotos to update
     */
    where?: VenuePhotoWhereInput
    /**
     * Limit how many VenuePhotos to update.
     */
    limit?: number
  }

  /**
   * VenuePhoto updateManyAndReturn
   */
  export type VenuePhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * The data used to update VenuePhotos.
     */
    data: XOR<VenuePhotoUpdateManyMutationInput, VenuePhotoUncheckedUpdateManyInput>
    /**
     * Filter which VenuePhotos to update
     */
    where?: VenuePhotoWhereInput
    /**
     * Limit how many VenuePhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenuePhoto upsert
   */
  export type VenuePhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the VenuePhoto to update in case it exists.
     */
    where: VenuePhotoWhereUniqueInput
    /**
     * In case the VenuePhoto found by the `where` argument doesn't exist, create a new VenuePhoto with this data.
     */
    create: XOR<VenuePhotoCreateInput, VenuePhotoUncheckedCreateInput>
    /**
     * In case the VenuePhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenuePhotoUpdateInput, VenuePhotoUncheckedUpdateInput>
  }

  /**
   * VenuePhoto delete
   */
  export type VenuePhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
    /**
     * Filter which VenuePhoto to delete.
     */
    where: VenuePhotoWhereUniqueInput
  }

  /**
   * VenuePhoto deleteMany
   */
  export type VenuePhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenuePhotos to delete
     */
    where?: VenuePhotoWhereInput
    /**
     * Limit how many VenuePhotos to delete.
     */
    limit?: number
  }

  /**
   * VenuePhoto.primaryFor
   */
  export type VenuePhoto$primaryForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
  }

  /**
   * VenuePhoto without action
   */
  export type VenuePhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuePhoto
     */
    select?: VenuePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenuePhoto
     */
    omit?: VenuePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuePhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDateAndTime: 'startDateAndTime',
    endDateAndTime: 'endDateAndTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    googlePlaceId: 'googlePlaceId',
    primaryPhotoId: 'primaryPhotoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const VenueTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VenueTypeScalarFieldEnum = (typeof VenueTypeScalarFieldEnum)[keyof typeof VenueTypeScalarFieldEnum]


  export const VenuePhotoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    widthPx: 'widthPx',
    heightPx: 'heightPx',
    venueId: 'venueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VenuePhotoScalarFieldEnum = (typeof VenuePhotoScalarFieldEnum)[keyof typeof VenuePhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDateAndTime?: DateTimeFilter<"Event"> | Date | string
    endDateAndTime?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDateAndTime?: SortOrder
    endDateAndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDateAndTime?: DateTimeFilter<"Event"> | Date | string
    endDateAndTime?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDateAndTime?: SortOrder
    endDateAndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    startDateAndTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDateAndTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    googlePlaceId?: StringFilter<"Venue"> | string
    primaryPhotoId?: StringNullableFilter<"Venue"> | string | null
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    types?: VenueTypeListRelationFilter
    photos?: VenuePhotoListRelationFilter
    primaryPhoto?: XOR<VenuePhotoNullableScalarRelationFilter, VenuePhotoWhereInput> | null
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    primaryPhotoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    types?: VenueTypeOrderByRelationAggregateInput
    photos?: VenuePhotoOrderByRelationAggregateInput
    primaryPhoto?: VenuePhotoOrderByWithRelationInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    primaryPhotoId?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    googlePlaceId?: StringFilter<"Venue"> | string
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    types?: VenueTypeListRelationFilter
    photos?: VenuePhotoListRelationFilter
    primaryPhoto?: XOR<VenuePhotoNullableScalarRelationFilter, VenuePhotoWhereInput> | null
  }, "id" | "primaryPhotoId">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    primaryPhotoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    city?: StringWithAggregatesFilter<"Venue"> | string
    state?: StringWithAggregatesFilter<"Venue"> | string
    zip?: StringWithAggregatesFilter<"Venue"> | string
    googlePlaceId?: StringWithAggregatesFilter<"Venue"> | string
    primaryPhotoId?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
  }

  export type VenueTypeWhereInput = {
    AND?: VenueTypeWhereInput | VenueTypeWhereInput[]
    OR?: VenueTypeWhereInput[]
    NOT?: VenueTypeWhereInput | VenueTypeWhereInput[]
    id?: StringFilter<"VenueType"> | string
    name?: StringFilter<"VenueType"> | string
    createdAt?: DateTimeFilter<"VenueType"> | Date | string
    updatedAt?: DateTimeFilter<"VenueType"> | Date | string
    venues?: VenueListRelationFilter
  }

  export type VenueTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    venues?: VenueOrderByRelationAggregateInput
  }

  export type VenueTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VenueTypeWhereInput | VenueTypeWhereInput[]
    OR?: VenueTypeWhereInput[]
    NOT?: VenueTypeWhereInput | VenueTypeWhereInput[]
    createdAt?: DateTimeFilter<"VenueType"> | Date | string
    updatedAt?: DateTimeFilter<"VenueType"> | Date | string
    venues?: VenueListRelationFilter
  }, "id" | "name">

  export type VenueTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VenueTypeCountOrderByAggregateInput
    _max?: VenueTypeMaxOrderByAggregateInput
    _min?: VenueTypeMinOrderByAggregateInput
  }

  export type VenueTypeScalarWhereWithAggregatesInput = {
    AND?: VenueTypeScalarWhereWithAggregatesInput | VenueTypeScalarWhereWithAggregatesInput[]
    OR?: VenueTypeScalarWhereWithAggregatesInput[]
    NOT?: VenueTypeScalarWhereWithAggregatesInput | VenueTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VenueType"> | string
    name?: StringWithAggregatesFilter<"VenueType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VenueType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VenueType"> | Date | string
  }

  export type VenuePhotoWhereInput = {
    AND?: VenuePhotoWhereInput | VenuePhotoWhereInput[]
    OR?: VenuePhotoWhereInput[]
    NOT?: VenuePhotoWhereInput | VenuePhotoWhereInput[]
    id?: StringFilter<"VenuePhoto"> | string
    name?: StringFilter<"VenuePhoto"> | string
    widthPx?: IntFilter<"VenuePhoto"> | number
    heightPx?: IntFilter<"VenuePhoto"> | number
    venueId?: StringFilter<"VenuePhoto"> | string
    createdAt?: DateTimeFilter<"VenuePhoto"> | Date | string
    updatedAt?: DateTimeFilter<"VenuePhoto"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    primaryFor?: XOR<VenueNullableScalarRelationFilter, VenueWhereInput> | null
  }

  export type VenuePhotoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    venueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
    primaryFor?: VenueOrderByWithRelationInput
  }

  export type VenuePhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_venueId?: VenuePhotoNameVenueIdCompoundUniqueInput
    AND?: VenuePhotoWhereInput | VenuePhotoWhereInput[]
    OR?: VenuePhotoWhereInput[]
    NOT?: VenuePhotoWhereInput | VenuePhotoWhereInput[]
    name?: StringFilter<"VenuePhoto"> | string
    widthPx?: IntFilter<"VenuePhoto"> | number
    heightPx?: IntFilter<"VenuePhoto"> | number
    venueId?: StringFilter<"VenuePhoto"> | string
    createdAt?: DateTimeFilter<"VenuePhoto"> | Date | string
    updatedAt?: DateTimeFilter<"VenuePhoto"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    primaryFor?: XOR<VenueNullableScalarRelationFilter, VenueWhereInput> | null
  }, "id" | "name_venueId">

  export type VenuePhotoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    venueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VenuePhotoCountOrderByAggregateInput
    _avg?: VenuePhotoAvgOrderByAggregateInput
    _max?: VenuePhotoMaxOrderByAggregateInput
    _min?: VenuePhotoMinOrderByAggregateInput
    _sum?: VenuePhotoSumOrderByAggregateInput
  }

  export type VenuePhotoScalarWhereWithAggregatesInput = {
    AND?: VenuePhotoScalarWhereWithAggregatesInput | VenuePhotoScalarWhereWithAggregatesInput[]
    OR?: VenuePhotoScalarWhereWithAggregatesInput[]
    NOT?: VenuePhotoScalarWhereWithAggregatesInput | VenuePhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VenuePhoto"> | string
    name?: StringWithAggregatesFilter<"VenuePhoto"> | string
    widthPx?: IntWithAggregatesFilter<"VenuePhoto"> | number
    heightPx?: IntWithAggregatesFilter<"VenuePhoto"> | number
    venueId?: StringWithAggregatesFilter<"VenuePhoto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VenuePhoto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VenuePhoto"> | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    startDateAndTime: Date | string
    endDateAndTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    startDateAndTime: Date | string
    endDateAndTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    startDateAndTime: Date | string
    endDateAndTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateAndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeCreateNestedManyWithoutVenuesInput
    photos?: VenuePhotoCreateNestedManyWithoutVenueInput
    primaryPhoto?: VenuePhotoCreateNestedOneWithoutPrimaryForInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    primaryPhotoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeUncheckedCreateNestedManyWithoutVenuesInput
    photos?: VenuePhotoUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUpdateManyWithoutVenuesNestedInput
    photos?: VenuePhotoUpdateManyWithoutVenueNestedInput
    primaryPhoto?: VenuePhotoUpdateOneWithoutPrimaryForNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    primaryPhotoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUncheckedUpdateManyWithoutVenuesNestedInput
    photos?: VenuePhotoUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    primaryPhotoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    primaryPhotoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    venues?: VenueCreateNestedManyWithoutTypesInput
  }

  export type VenueTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    venues?: VenueUncheckedCreateNestedManyWithoutTypesInput
  }

  export type VenueTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venues?: VenueUpdateManyWithoutTypesNestedInput
  }

  export type VenueTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venues?: VenueUncheckedUpdateManyWithoutTypesNestedInput
  }

  export type VenueTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuePhotoCreateInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venue: VenueCreateNestedOneWithoutPhotosInput
    primaryFor?: VenueCreateNestedOneWithoutPrimaryPhotoInput
  }

  export type VenuePhotoUncheckedCreateInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    venueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryFor?: VenueUncheckedCreateNestedOneWithoutPrimaryPhotoInput
  }

  export type VenuePhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutPhotosNestedInput
    primaryFor?: VenueUpdateOneWithoutPrimaryPhotoNestedInput
  }

  export type VenuePhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    venueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryFor?: VenueUncheckedUpdateOneWithoutPrimaryPhotoNestedInput
  }

  export type VenuePhotoCreateManyInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    venueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenuePhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuePhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    venueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDateAndTime?: SortOrder
    endDateAndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDateAndTime?: SortOrder
    endDateAndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDateAndTime?: SortOrder
    endDateAndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VenueTypeListRelationFilter = {
    every?: VenueTypeWhereInput
    some?: VenueTypeWhereInput
    none?: VenueTypeWhereInput
  }

  export type VenuePhotoListRelationFilter = {
    every?: VenuePhotoWhereInput
    some?: VenuePhotoWhereInput
    none?: VenuePhotoWhereInput
  }

  export type VenuePhotoNullableScalarRelationFilter = {
    is?: VenuePhotoWhereInput | null
    isNot?: VenuePhotoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VenueTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenuePhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    primaryPhotoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    primaryPhotoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    googlePlaceId?: SortOrder
    primaryPhotoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VenueListRelationFilter = {
    every?: VenueWhereInput
    some?: VenueWhereInput
    none?: VenueWhereInput
  }

  export type VenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type VenueNullableScalarRelationFilter = {
    is?: VenueWhereInput | null
    isNot?: VenueWhereInput | null
  }

  export type VenuePhotoNameVenueIdCompoundUniqueInput = {
    name: string
    venueId: string
  }

  export type VenuePhotoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    venueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenuePhotoAvgOrderByAggregateInput = {
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type VenuePhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    venueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenuePhotoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    venueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenuePhotoSumOrderByAggregateInput = {
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VenueTypeCreateNestedManyWithoutVenuesInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput> | VenueTypeCreateWithoutVenuesInput[] | VenueTypeUncheckedCreateWithoutVenuesInput[]
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | VenueTypeCreateOrConnectWithoutVenuesInput[]
    connect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
  }

  export type VenuePhotoCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput> | VenuePhotoCreateWithoutVenueInput[] | VenuePhotoUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutVenueInput | VenuePhotoCreateOrConnectWithoutVenueInput[]
    createMany?: VenuePhotoCreateManyVenueInputEnvelope
    connect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
  }

  export type VenuePhotoCreateNestedOneWithoutPrimaryForInput = {
    create?: XOR<VenuePhotoCreateWithoutPrimaryForInput, VenuePhotoUncheckedCreateWithoutPrimaryForInput>
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutPrimaryForInput
    connect?: VenuePhotoWhereUniqueInput
  }

  export type VenueTypeUncheckedCreateNestedManyWithoutVenuesInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput> | VenueTypeCreateWithoutVenuesInput[] | VenueTypeUncheckedCreateWithoutVenuesInput[]
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | VenueTypeCreateOrConnectWithoutVenuesInput[]
    connect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
  }

  export type VenuePhotoUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput> | VenuePhotoCreateWithoutVenueInput[] | VenuePhotoUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutVenueInput | VenuePhotoCreateOrConnectWithoutVenueInput[]
    createMany?: VenuePhotoCreateManyVenueInputEnvelope
    connect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
  }

  export type VenueTypeUpdateManyWithoutVenuesNestedInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput> | VenueTypeCreateWithoutVenuesInput[] | VenueTypeUncheckedCreateWithoutVenuesInput[]
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | VenueTypeCreateOrConnectWithoutVenuesInput[]
    upsert?: VenueTypeUpsertWithWhereUniqueWithoutVenuesInput | VenueTypeUpsertWithWhereUniqueWithoutVenuesInput[]
    set?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    disconnect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    delete?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    connect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    update?: VenueTypeUpdateWithWhereUniqueWithoutVenuesInput | VenueTypeUpdateWithWhereUniqueWithoutVenuesInput[]
    updateMany?: VenueTypeUpdateManyWithWhereWithoutVenuesInput | VenueTypeUpdateManyWithWhereWithoutVenuesInput[]
    deleteMany?: VenueTypeScalarWhereInput | VenueTypeScalarWhereInput[]
  }

  export type VenuePhotoUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput> | VenuePhotoCreateWithoutVenueInput[] | VenuePhotoUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutVenueInput | VenuePhotoCreateOrConnectWithoutVenueInput[]
    upsert?: VenuePhotoUpsertWithWhereUniqueWithoutVenueInput | VenuePhotoUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenuePhotoCreateManyVenueInputEnvelope
    set?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    disconnect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    delete?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    connect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    update?: VenuePhotoUpdateWithWhereUniqueWithoutVenueInput | VenuePhotoUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenuePhotoUpdateManyWithWhereWithoutVenueInput | VenuePhotoUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenuePhotoScalarWhereInput | VenuePhotoScalarWhereInput[]
  }

  export type VenuePhotoUpdateOneWithoutPrimaryForNestedInput = {
    create?: XOR<VenuePhotoCreateWithoutPrimaryForInput, VenuePhotoUncheckedCreateWithoutPrimaryForInput>
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutPrimaryForInput
    upsert?: VenuePhotoUpsertWithoutPrimaryForInput
    disconnect?: VenuePhotoWhereInput | boolean
    delete?: VenuePhotoWhereInput | boolean
    connect?: VenuePhotoWhereUniqueInput
    update?: XOR<XOR<VenuePhotoUpdateToOneWithWhereWithoutPrimaryForInput, VenuePhotoUpdateWithoutPrimaryForInput>, VenuePhotoUncheckedUpdateWithoutPrimaryForInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VenueTypeUncheckedUpdateManyWithoutVenuesNestedInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput> | VenueTypeCreateWithoutVenuesInput[] | VenueTypeUncheckedCreateWithoutVenuesInput[]
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | VenueTypeCreateOrConnectWithoutVenuesInput[]
    upsert?: VenueTypeUpsertWithWhereUniqueWithoutVenuesInput | VenueTypeUpsertWithWhereUniqueWithoutVenuesInput[]
    set?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    disconnect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    delete?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    connect?: VenueTypeWhereUniqueInput | VenueTypeWhereUniqueInput[]
    update?: VenueTypeUpdateWithWhereUniqueWithoutVenuesInput | VenueTypeUpdateWithWhereUniqueWithoutVenuesInput[]
    updateMany?: VenueTypeUpdateManyWithWhereWithoutVenuesInput | VenueTypeUpdateManyWithWhereWithoutVenuesInput[]
    deleteMany?: VenueTypeScalarWhereInput | VenueTypeScalarWhereInput[]
  }

  export type VenuePhotoUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput> | VenuePhotoCreateWithoutVenueInput[] | VenuePhotoUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenuePhotoCreateOrConnectWithoutVenueInput | VenuePhotoCreateOrConnectWithoutVenueInput[]
    upsert?: VenuePhotoUpsertWithWhereUniqueWithoutVenueInput | VenuePhotoUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenuePhotoCreateManyVenueInputEnvelope
    set?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    disconnect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    delete?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    connect?: VenuePhotoWhereUniqueInput | VenuePhotoWhereUniqueInput[]
    update?: VenuePhotoUpdateWithWhereUniqueWithoutVenueInput | VenuePhotoUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenuePhotoUpdateManyWithWhereWithoutVenueInput | VenuePhotoUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenuePhotoScalarWhereInput | VenuePhotoScalarWhereInput[]
  }

  export type VenueCreateNestedManyWithoutTypesInput = {
    create?: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput> | VenueCreateWithoutTypesInput[] | VenueUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutTypesInput | VenueCreateOrConnectWithoutTypesInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type VenueUncheckedCreateNestedManyWithoutTypesInput = {
    create?: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput> | VenueCreateWithoutTypesInput[] | VenueUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutTypesInput | VenueCreateOrConnectWithoutTypesInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type VenueUpdateManyWithoutTypesNestedInput = {
    create?: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput> | VenueCreateWithoutTypesInput[] | VenueUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutTypesInput | VenueCreateOrConnectWithoutTypesInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutTypesInput | VenueUpsertWithWhereUniqueWithoutTypesInput[]
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutTypesInput | VenueUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutTypesInput | VenueUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type VenueUncheckedUpdateManyWithoutTypesNestedInput = {
    create?: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput> | VenueCreateWithoutTypesInput[] | VenueUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutTypesInput | VenueCreateOrConnectWithoutTypesInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutTypesInput | VenueUpsertWithWhereUniqueWithoutTypesInput[]
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutTypesInput | VenueUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutTypesInput | VenueUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutPhotosInput = {
    create?: XOR<VenueCreateWithoutPhotosInput, VenueUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPhotosInput
    connect?: VenueWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutPrimaryPhotoInput = {
    create?: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPrimaryPhotoInput
    connect?: VenueWhereUniqueInput
  }

  export type VenueUncheckedCreateNestedOneWithoutPrimaryPhotoInput = {
    create?: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPrimaryPhotoInput
    connect?: VenueWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenueUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<VenueCreateWithoutPhotosInput, VenueUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPhotosInput
    upsert?: VenueUpsertWithoutPhotosInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutPhotosInput, VenueUpdateWithoutPhotosInput>, VenueUncheckedUpdateWithoutPhotosInput>
  }

  export type VenueUpdateOneWithoutPrimaryPhotoNestedInput = {
    create?: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPrimaryPhotoInput
    upsert?: VenueUpsertWithoutPrimaryPhotoInput
    disconnect?: VenueWhereInput | boolean
    delete?: VenueWhereInput | boolean
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutPrimaryPhotoInput, VenueUpdateWithoutPrimaryPhotoInput>, VenueUncheckedUpdateWithoutPrimaryPhotoInput>
  }

  export type VenueUncheckedUpdateOneWithoutPrimaryPhotoNestedInput = {
    create?: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
    connectOrCreate?: VenueCreateOrConnectWithoutPrimaryPhotoInput
    upsert?: VenueUpsertWithoutPrimaryPhotoInput
    disconnect?: VenueWhereInput | boolean
    delete?: VenueWhereInput | boolean
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutPrimaryPhotoInput, VenueUpdateWithoutPrimaryPhotoInput>, VenueUncheckedUpdateWithoutPrimaryPhotoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VenueTypeCreateWithoutVenuesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueTypeUncheckedCreateWithoutVenuesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueTypeCreateOrConnectWithoutVenuesInput = {
    where: VenueTypeWhereUniqueInput
    create: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
  }

  export type VenuePhotoCreateWithoutVenueInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryFor?: VenueCreateNestedOneWithoutPrimaryPhotoInput
  }

  export type VenuePhotoUncheckedCreateWithoutVenueInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryFor?: VenueUncheckedCreateNestedOneWithoutPrimaryPhotoInput
  }

  export type VenuePhotoCreateOrConnectWithoutVenueInput = {
    where: VenuePhotoWhereUniqueInput
    create: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput>
  }

  export type VenuePhotoCreateManyVenueInputEnvelope = {
    data: VenuePhotoCreateManyVenueInput | VenuePhotoCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type VenuePhotoCreateWithoutPrimaryForInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venue: VenueCreateNestedOneWithoutPhotosInput
  }

  export type VenuePhotoUncheckedCreateWithoutPrimaryForInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    venueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenuePhotoCreateOrConnectWithoutPrimaryForInput = {
    where: VenuePhotoWhereUniqueInput
    create: XOR<VenuePhotoCreateWithoutPrimaryForInput, VenuePhotoUncheckedCreateWithoutPrimaryForInput>
  }

  export type VenueTypeUpsertWithWhereUniqueWithoutVenuesInput = {
    where: VenueTypeWhereUniqueInput
    update: XOR<VenueTypeUpdateWithoutVenuesInput, VenueTypeUncheckedUpdateWithoutVenuesInput>
    create: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
  }

  export type VenueTypeUpdateWithWhereUniqueWithoutVenuesInput = {
    where: VenueTypeWhereUniqueInput
    data: XOR<VenueTypeUpdateWithoutVenuesInput, VenueTypeUncheckedUpdateWithoutVenuesInput>
  }

  export type VenueTypeUpdateManyWithWhereWithoutVenuesInput = {
    where: VenueTypeScalarWhereInput
    data: XOR<VenueTypeUpdateManyMutationInput, VenueTypeUncheckedUpdateManyWithoutVenuesInput>
  }

  export type VenueTypeScalarWhereInput = {
    AND?: VenueTypeScalarWhereInput | VenueTypeScalarWhereInput[]
    OR?: VenueTypeScalarWhereInput[]
    NOT?: VenueTypeScalarWhereInput | VenueTypeScalarWhereInput[]
    id?: StringFilter<"VenueType"> | string
    name?: StringFilter<"VenueType"> | string
    createdAt?: DateTimeFilter<"VenueType"> | Date | string
    updatedAt?: DateTimeFilter<"VenueType"> | Date | string
  }

  export type VenuePhotoUpsertWithWhereUniqueWithoutVenueInput = {
    where: VenuePhotoWhereUniqueInput
    update: XOR<VenuePhotoUpdateWithoutVenueInput, VenuePhotoUncheckedUpdateWithoutVenueInput>
    create: XOR<VenuePhotoCreateWithoutVenueInput, VenuePhotoUncheckedCreateWithoutVenueInput>
  }

  export type VenuePhotoUpdateWithWhereUniqueWithoutVenueInput = {
    where: VenuePhotoWhereUniqueInput
    data: XOR<VenuePhotoUpdateWithoutVenueInput, VenuePhotoUncheckedUpdateWithoutVenueInput>
  }

  export type VenuePhotoUpdateManyWithWhereWithoutVenueInput = {
    where: VenuePhotoScalarWhereInput
    data: XOR<VenuePhotoUpdateManyMutationInput, VenuePhotoUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenuePhotoScalarWhereInput = {
    AND?: VenuePhotoScalarWhereInput | VenuePhotoScalarWhereInput[]
    OR?: VenuePhotoScalarWhereInput[]
    NOT?: VenuePhotoScalarWhereInput | VenuePhotoScalarWhereInput[]
    id?: StringFilter<"VenuePhoto"> | string
    name?: StringFilter<"VenuePhoto"> | string
    widthPx?: IntFilter<"VenuePhoto"> | number
    heightPx?: IntFilter<"VenuePhoto"> | number
    venueId?: StringFilter<"VenuePhoto"> | string
    createdAt?: DateTimeFilter<"VenuePhoto"> | Date | string
    updatedAt?: DateTimeFilter<"VenuePhoto"> | Date | string
  }

  export type VenuePhotoUpsertWithoutPrimaryForInput = {
    update: XOR<VenuePhotoUpdateWithoutPrimaryForInput, VenuePhotoUncheckedUpdateWithoutPrimaryForInput>
    create: XOR<VenuePhotoCreateWithoutPrimaryForInput, VenuePhotoUncheckedCreateWithoutPrimaryForInput>
    where?: VenuePhotoWhereInput
  }

  export type VenuePhotoUpdateToOneWithWhereWithoutPrimaryForInput = {
    where?: VenuePhotoWhereInput
    data: XOR<VenuePhotoUpdateWithoutPrimaryForInput, VenuePhotoUncheckedUpdateWithoutPrimaryForInput>
  }

  export type VenuePhotoUpdateWithoutPrimaryForInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type VenuePhotoUncheckedUpdateWithoutPrimaryForInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    venueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateWithoutTypesInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: VenuePhotoCreateNestedManyWithoutVenueInput
    primaryPhoto?: VenuePhotoCreateNestedOneWithoutPrimaryForInput
  }

  export type VenueUncheckedCreateWithoutTypesInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    primaryPhotoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: VenuePhotoUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutTypesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput>
  }

  export type VenueUpsertWithWhereUniqueWithoutTypesInput = {
    where: VenueWhereUniqueInput
    update: XOR<VenueUpdateWithoutTypesInput, VenueUncheckedUpdateWithoutTypesInput>
    create: XOR<VenueCreateWithoutTypesInput, VenueUncheckedCreateWithoutTypesInput>
  }

  export type VenueUpdateWithWhereUniqueWithoutTypesInput = {
    where: VenueWhereUniqueInput
    data: XOR<VenueUpdateWithoutTypesInput, VenueUncheckedUpdateWithoutTypesInput>
  }

  export type VenueUpdateManyWithWhereWithoutTypesInput = {
    where: VenueScalarWhereInput
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyWithoutTypesInput>
  }

  export type VenueScalarWhereInput = {
    AND?: VenueScalarWhereInput | VenueScalarWhereInput[]
    OR?: VenueScalarWhereInput[]
    NOT?: VenueScalarWhereInput | VenueScalarWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    googlePlaceId?: StringFilter<"Venue"> | string
    primaryPhotoId?: StringNullableFilter<"Venue"> | string | null
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
  }

  export type VenueCreateWithoutPhotosInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeCreateNestedManyWithoutVenuesInput
    primaryPhoto?: VenuePhotoCreateNestedOneWithoutPrimaryForInput
  }

  export type VenueUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    primaryPhotoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeUncheckedCreateNestedManyWithoutVenuesInput
  }

  export type VenueCreateOrConnectWithoutPhotosInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutPhotosInput, VenueUncheckedCreateWithoutPhotosInput>
  }

  export type VenueCreateWithoutPrimaryPhotoInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeCreateNestedManyWithoutVenuesInput
    photos?: VenuePhotoCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutPrimaryPhotoInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    googlePlaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: VenueTypeUncheckedCreateNestedManyWithoutVenuesInput
    photos?: VenuePhotoUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutPrimaryPhotoInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
  }

  export type VenueUpsertWithoutPhotosInput = {
    update: XOR<VenueUpdateWithoutPhotosInput, VenueUncheckedUpdateWithoutPhotosInput>
    create: XOR<VenueCreateWithoutPhotosInput, VenueUncheckedCreateWithoutPhotosInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutPhotosInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutPhotosInput, VenueUncheckedUpdateWithoutPhotosInput>
  }

  export type VenueUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUpdateManyWithoutVenuesNestedInput
    primaryPhoto?: VenuePhotoUpdateOneWithoutPrimaryForNestedInput
  }

  export type VenueUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    primaryPhotoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUncheckedUpdateManyWithoutVenuesNestedInput
  }

  export type VenueUpsertWithoutPrimaryPhotoInput = {
    update: XOR<VenueUpdateWithoutPrimaryPhotoInput, VenueUncheckedUpdateWithoutPrimaryPhotoInput>
    create: XOR<VenueCreateWithoutPrimaryPhotoInput, VenueUncheckedCreateWithoutPrimaryPhotoInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutPrimaryPhotoInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutPrimaryPhotoInput, VenueUncheckedUpdateWithoutPrimaryPhotoInput>
  }

  export type VenueUpdateWithoutPrimaryPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUpdateManyWithoutVenuesNestedInput
    photos?: VenuePhotoUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutPrimaryPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: VenueTypeUncheckedUpdateManyWithoutVenuesNestedInput
    photos?: VenuePhotoUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenuePhotoCreateManyVenueInput = {
    id?: string
    name: string
    widthPx: number
    heightPx: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueTypeUpdateWithoutVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueTypeUncheckedUpdateWithoutVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueTypeUncheckedUpdateManyWithoutVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuePhotoUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryFor?: VenueUpdateOneWithoutPrimaryPhotoNestedInput
  }

  export type VenuePhotoUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryFor?: VenueUncheckedUpdateOneWithoutPrimaryPhotoNestedInput
  }

  export type VenuePhotoUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: VenuePhotoUpdateManyWithoutVenueNestedInput
    primaryPhoto?: VenuePhotoUpdateOneWithoutPrimaryForNestedInput
  }

  export type VenueUncheckedUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    primaryPhotoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: VenuePhotoUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateManyWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    primaryPhotoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}