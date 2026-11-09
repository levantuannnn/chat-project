
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usetime
 * /yeu cau prisma tao prisma client
 */
export type usetime = $Result.DefaultSelection<Prisma.$usetimePayload>
/**
 * Model refestoken
 * 
 */
export type refestoken = $Result.DefaultSelection<Prisma.$refestokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usetimes
 * const usetimes = await prisma.usetime.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usetimes
   * const usetimes = await prisma.usetime.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usetime`: Exposes CRUD operations for the **usetime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usetimes
    * const usetimes = await prisma.usetime.findMany()
    * ```
    */
  get usetime(): Prisma.usetimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refestoken`: Exposes CRUD operations for the **refestoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refestokens
    * const refestokens = await prisma.refestoken.findMany()
    * ```
    */
  get refestoken(): Prisma.refestokenDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    usetime: 'usetime',
    refestoken: 'refestoken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usetime" | "refestoken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usetime: {
        payload: Prisma.$usetimePayload<ExtArgs>
        fields: Prisma.usetimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usetimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usetimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          findFirst: {
            args: Prisma.usetimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usetimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          findMany: {
            args: Prisma.usetimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>[]
          }
          create: {
            args: Prisma.usetimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          createMany: {
            args: Prisma.usetimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usetimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          update: {
            args: Prisma.usetimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          deleteMany: {
            args: Prisma.usetimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usetimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usetimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usetimePayload>
          }
          aggregate: {
            args: Prisma.UsetimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsetime>
          }
          groupBy: {
            args: Prisma.usetimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsetimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.usetimeCountArgs<ExtArgs>
            result: $Utils.Optional<UsetimeCountAggregateOutputType> | number
          }
        }
      }
      refestoken: {
        payload: Prisma.$refestokenPayload<ExtArgs>
        fields: Prisma.refestokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refestokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refestokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          findFirst: {
            args: Prisma.refestokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refestokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          findMany: {
            args: Prisma.refestokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>[]
          }
          create: {
            args: Prisma.refestokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          createMany: {
            args: Prisma.refestokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refestokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          update: {
            args: Prisma.refestokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          deleteMany: {
            args: Prisma.refestokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refestokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refestokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refestokenPayload>
          }
          aggregate: {
            args: Prisma.RefestokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefestoken>
          }
          groupBy: {
            args: Prisma.refestokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefestokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refestokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefestokenCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usetime?: usetimeOmit
    refestoken?: refestokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsetimeCountOutputType
   */

  export type UsetimeCountOutputType = {
    refreshTokens: number
  }

  export type UsetimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UsetimeCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UsetimeCountOutputType without action
   */
  export type UsetimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsetimeCountOutputType
     */
    select?: UsetimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsetimeCountOutputType without action
   */
  export type UsetimeCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refestokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usetime
   */

  export type AggregateUsetime = {
    _count: UsetimeCountAggregateOutputType | null
    _avg: UsetimeAvgAggregateOutputType | null
    _sum: UsetimeSumAggregateOutputType | null
    _min: UsetimeMinAggregateOutputType | null
    _max: UsetimeMaxAggregateOutputType | null
  }

  export type UsetimeAvgAggregateOutputType = {
    id: number | null
  }

  export type UsetimeSumAggregateOutputType = {
    id: number | null
  }

  export type UsetimeMinAggregateOutputType = {
    id: number | null
    email: string | null
    usePassword: string | null
  }

  export type UsetimeMaxAggregateOutputType = {
    id: number | null
    email: string | null
    usePassword: string | null
  }

  export type UsetimeCountAggregateOutputType = {
    id: number
    email: number
    usePassword: number
    _all: number
  }


  export type UsetimeAvgAggregateInputType = {
    id?: true
  }

  export type UsetimeSumAggregateInputType = {
    id?: true
  }

  export type UsetimeMinAggregateInputType = {
    id?: true
    email?: true
    usePassword?: true
  }

  export type UsetimeMaxAggregateInputType = {
    id?: true
    email?: true
    usePassword?: true
  }

  export type UsetimeCountAggregateInputType = {
    id?: true
    email?: true
    usePassword?: true
    _all?: true
  }

  export type UsetimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usetime to aggregate.
     */
    where?: usetimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usetimes to fetch.
     */
    orderBy?: usetimeOrderByWithRelationInput | usetimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usetimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usetimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usetimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usetimes
    **/
    _count?: true | UsetimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsetimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsetimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsetimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsetimeMaxAggregateInputType
  }

  export type GetUsetimeAggregateType<T extends UsetimeAggregateArgs> = {
        [P in keyof T & keyof AggregateUsetime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsetime[P]>
      : GetScalarType<T[P], AggregateUsetime[P]>
  }




  export type usetimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usetimeWhereInput
    orderBy?: usetimeOrderByWithAggregationInput | usetimeOrderByWithAggregationInput[]
    by: UsetimeScalarFieldEnum[] | UsetimeScalarFieldEnum
    having?: usetimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsetimeCountAggregateInputType | true
    _avg?: UsetimeAvgAggregateInputType
    _sum?: UsetimeSumAggregateInputType
    _min?: UsetimeMinAggregateInputType
    _max?: UsetimeMaxAggregateInputType
  }

  export type UsetimeGroupByOutputType = {
    id: number
    email: string
    usePassword: string
    _count: UsetimeCountAggregateOutputType | null
    _avg: UsetimeAvgAggregateOutputType | null
    _sum: UsetimeSumAggregateOutputType | null
    _min: UsetimeMinAggregateOutputType | null
    _max: UsetimeMaxAggregateOutputType | null
  }

  type GetUsetimeGroupByPayload<T extends usetimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsetimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsetimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsetimeGroupByOutputType[P]>
            : GetScalarType<T[P], UsetimeGroupByOutputType[P]>
        }
      >
    >


  export type usetimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    usePassword?: boolean
    refreshTokens?: boolean | usetime$refreshTokensArgs<ExtArgs>
    _count?: boolean | UsetimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usetime"]>



  export type usetimeSelectScalar = {
    id?: boolean
    email?: boolean
    usePassword?: boolean
  }

  export type usetimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "usePassword", ExtArgs["result"]["usetime"]>
  export type usetimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | usetime$refreshTokensArgs<ExtArgs>
    _count?: boolean | UsetimeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usetimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usetime"
    objects: {
      refreshTokens: Prisma.$refestokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      usePassword: string
    }, ExtArgs["result"]["usetime"]>
    composites: {}
  }

  type usetimeGetPayload<S extends boolean | null | undefined | usetimeDefaultArgs> = $Result.GetResult<Prisma.$usetimePayload, S>

  type usetimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usetimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsetimeCountAggregateInputType | true
    }

  export interface usetimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usetime'], meta: { name: 'usetime' } }
    /**
     * Find zero or one Usetime that matches the filter.
     * @param {usetimeFindUniqueArgs} args - Arguments to find a Usetime
     * @example
     * // Get one Usetime
     * const usetime = await prisma.usetime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usetimeFindUniqueArgs>(args: SelectSubset<T, usetimeFindUniqueArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usetime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usetimeFindUniqueOrThrowArgs} args - Arguments to find a Usetime
     * @example
     * // Get one Usetime
     * const usetime = await prisma.usetime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usetimeFindUniqueOrThrowArgs>(args: SelectSubset<T, usetimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usetime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeFindFirstArgs} args - Arguments to find a Usetime
     * @example
     * // Get one Usetime
     * const usetime = await prisma.usetime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usetimeFindFirstArgs>(args?: SelectSubset<T, usetimeFindFirstArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usetime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeFindFirstOrThrowArgs} args - Arguments to find a Usetime
     * @example
     * // Get one Usetime
     * const usetime = await prisma.usetime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usetimeFindFirstOrThrowArgs>(args?: SelectSubset<T, usetimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usetimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usetimes
     * const usetimes = await prisma.usetime.findMany()
     * 
     * // Get first 10 Usetimes
     * const usetimes = await prisma.usetime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usetimeWithIdOnly = await prisma.usetime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usetimeFindManyArgs>(args?: SelectSubset<T, usetimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usetime.
     * @param {usetimeCreateArgs} args - Arguments to create a Usetime.
     * @example
     * // Create one Usetime
     * const Usetime = await prisma.usetime.create({
     *   data: {
     *     // ... data to create a Usetime
     *   }
     * })
     * 
     */
    create<T extends usetimeCreateArgs>(args: SelectSubset<T, usetimeCreateArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usetimes.
     * @param {usetimeCreateManyArgs} args - Arguments to create many Usetimes.
     * @example
     * // Create many Usetimes
     * const usetime = await prisma.usetime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usetimeCreateManyArgs>(args?: SelectSubset<T, usetimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usetime.
     * @param {usetimeDeleteArgs} args - Arguments to delete one Usetime.
     * @example
     * // Delete one Usetime
     * const Usetime = await prisma.usetime.delete({
     *   where: {
     *     // ... filter to delete one Usetime
     *   }
     * })
     * 
     */
    delete<T extends usetimeDeleteArgs>(args: SelectSubset<T, usetimeDeleteArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usetime.
     * @param {usetimeUpdateArgs} args - Arguments to update one Usetime.
     * @example
     * // Update one Usetime
     * const usetime = await prisma.usetime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usetimeUpdateArgs>(args: SelectSubset<T, usetimeUpdateArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usetimes.
     * @param {usetimeDeleteManyArgs} args - Arguments to filter Usetimes to delete.
     * @example
     * // Delete a few Usetimes
     * const { count } = await prisma.usetime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usetimeDeleteManyArgs>(args?: SelectSubset<T, usetimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usetimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usetimes
     * const usetime = await prisma.usetime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usetimeUpdateManyArgs>(args: SelectSubset<T, usetimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usetime.
     * @param {usetimeUpsertArgs} args - Arguments to update or create a Usetime.
     * @example
     * // Update or create a Usetime
     * const usetime = await prisma.usetime.upsert({
     *   create: {
     *     // ... data to create a Usetime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usetime we want to update
     *   }
     * })
     */
    upsert<T extends usetimeUpsertArgs>(args: SelectSubset<T, usetimeUpsertArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usetimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeCountArgs} args - Arguments to filter Usetimes to count.
     * @example
     * // Count the number of Usetimes
     * const count = await prisma.usetime.count({
     *   where: {
     *     // ... the filter for the Usetimes we want to count
     *   }
     * })
    **/
    count<T extends usetimeCountArgs>(
      args?: Subset<T, usetimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsetimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usetime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsetimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsetimeAggregateArgs>(args: Subset<T, UsetimeAggregateArgs>): Prisma.PrismaPromise<GetUsetimeAggregateType<T>>

    /**
     * Group by Usetime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usetimeGroupByArgs} args - Group by arguments.
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
      T extends usetimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usetimeGroupByArgs['orderBy'] }
        : { orderBy?: usetimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usetimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsetimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usetime model
   */
  readonly fields: usetimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usetime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usetimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends usetime$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, usetime$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usetime model
   */
  interface usetimeFieldRefs {
    readonly id: FieldRef<"usetime", 'Int'>
    readonly email: FieldRef<"usetime", 'String'>
    readonly usePassword: FieldRef<"usetime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usetime findUnique
   */
  export type usetimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter, which usetime to fetch.
     */
    where: usetimeWhereUniqueInput
  }

  /**
   * usetime findUniqueOrThrow
   */
  export type usetimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter, which usetime to fetch.
     */
    where: usetimeWhereUniqueInput
  }

  /**
   * usetime findFirst
   */
  export type usetimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter, which usetime to fetch.
     */
    where?: usetimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usetimes to fetch.
     */
    orderBy?: usetimeOrderByWithRelationInput | usetimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usetimes.
     */
    cursor?: usetimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usetimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usetimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usetimes.
     */
    distinct?: UsetimeScalarFieldEnum | UsetimeScalarFieldEnum[]
  }

  /**
   * usetime findFirstOrThrow
   */
  export type usetimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter, which usetime to fetch.
     */
    where?: usetimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usetimes to fetch.
     */
    orderBy?: usetimeOrderByWithRelationInput | usetimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usetimes.
     */
    cursor?: usetimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usetimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usetimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usetimes.
     */
    distinct?: UsetimeScalarFieldEnum | UsetimeScalarFieldEnum[]
  }

  /**
   * usetime findMany
   */
  export type usetimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter, which usetimes to fetch.
     */
    where?: usetimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usetimes to fetch.
     */
    orderBy?: usetimeOrderByWithRelationInput | usetimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usetimes.
     */
    cursor?: usetimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usetimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usetimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usetimes.
     */
    distinct?: UsetimeScalarFieldEnum | UsetimeScalarFieldEnum[]
  }

  /**
   * usetime create
   */
  export type usetimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * The data needed to create a usetime.
     */
    data: XOR<usetimeCreateInput, usetimeUncheckedCreateInput>
  }

  /**
   * usetime createMany
   */
  export type usetimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usetimes.
     */
    data: usetimeCreateManyInput | usetimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usetime update
   */
  export type usetimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * The data needed to update a usetime.
     */
    data: XOR<usetimeUpdateInput, usetimeUncheckedUpdateInput>
    /**
     * Choose, which usetime to update.
     */
    where: usetimeWhereUniqueInput
  }

  /**
   * usetime updateMany
   */
  export type usetimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usetimes.
     */
    data: XOR<usetimeUpdateManyMutationInput, usetimeUncheckedUpdateManyInput>
    /**
     * Filter which usetimes to update
     */
    where?: usetimeWhereInput
    /**
     * Limit how many usetimes to update.
     */
    limit?: number
  }

  /**
   * usetime upsert
   */
  export type usetimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * The filter to search for the usetime to update in case it exists.
     */
    where: usetimeWhereUniqueInput
    /**
     * In case the usetime found by the `where` argument doesn't exist, create a new usetime with this data.
     */
    create: XOR<usetimeCreateInput, usetimeUncheckedCreateInput>
    /**
     * In case the usetime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usetimeUpdateInput, usetimeUncheckedUpdateInput>
  }

  /**
   * usetime delete
   */
  export type usetimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
    /**
     * Filter which usetime to delete.
     */
    where: usetimeWhereUniqueInput
  }

  /**
   * usetime deleteMany
   */
  export type usetimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usetimes to delete
     */
    where?: usetimeWhereInput
    /**
     * Limit how many usetimes to delete.
     */
    limit?: number
  }

  /**
   * usetime.refreshTokens
   */
  export type usetime$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    where?: refestokenWhereInput
    orderBy?: refestokenOrderByWithRelationInput | refestokenOrderByWithRelationInput[]
    cursor?: refestokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefestokenScalarFieldEnum | RefestokenScalarFieldEnum[]
  }

  /**
   * usetime without action
   */
  export type usetimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usetime
     */
    select?: usetimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usetime
     */
    omit?: usetimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usetimeInclude<ExtArgs> | null
  }


  /**
   * Model refestoken
   */

  export type AggregateRefestoken = {
    _count: RefestokenCountAggregateOutputType | null
    _avg: RefestokenAvgAggregateOutputType | null
    _sum: RefestokenSumAggregateOutputType | null
    _min: RefestokenMinAggregateOutputType | null
    _max: RefestokenMaxAggregateOutputType | null
  }

  export type RefestokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefestokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefestokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefestokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefestokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefestokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefestokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefestokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefestokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefestokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefestokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refestoken to aggregate.
     */
    where?: refestokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refestokens to fetch.
     */
    orderBy?: refestokenOrderByWithRelationInput | refestokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refestokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refestokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refestokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refestokens
    **/
    _count?: true | RefestokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefestokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefestokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefestokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefestokenMaxAggregateInputType
  }

  export type GetRefestokenAggregateType<T extends RefestokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefestoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefestoken[P]>
      : GetScalarType<T[P], AggregateRefestoken[P]>
  }




  export type refestokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refestokenWhereInput
    orderBy?: refestokenOrderByWithAggregationInput | refestokenOrderByWithAggregationInput[]
    by: RefestokenScalarFieldEnum[] | RefestokenScalarFieldEnum
    having?: refestokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefestokenCountAggregateInputType | true
    _avg?: RefestokenAvgAggregateInputType
    _sum?: RefestokenSumAggregateInputType
    _min?: RefestokenMinAggregateInputType
    _max?: RefestokenMaxAggregateInputType
  }

  export type RefestokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    createdAt: Date
    _count: RefestokenCountAggregateOutputType | null
    _avg: RefestokenAvgAggregateOutputType | null
    _sum: RefestokenSumAggregateOutputType | null
    _min: RefestokenMinAggregateOutputType | null
    _max: RefestokenMaxAggregateOutputType | null
  }

  type GetRefestokenGroupByPayload<T extends refestokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefestokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefestokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefestokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefestokenGroupByOutputType[P]>
        }
      >
    >


  export type refestokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usetimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refestoken"]>



  export type refestokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type refestokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["refestoken"]>
  export type refestokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usetimeDefaultArgs<ExtArgs>
  }

  export type $refestokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refestoken"
    objects: {
      user: Prisma.$usetimePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refestoken"]>
    composites: {}
  }

  type refestokenGetPayload<S extends boolean | null | undefined | refestokenDefaultArgs> = $Result.GetResult<Prisma.$refestokenPayload, S>

  type refestokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refestokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefestokenCountAggregateInputType | true
    }

  export interface refestokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refestoken'], meta: { name: 'refestoken' } }
    /**
     * Find zero or one Refestoken that matches the filter.
     * @param {refestokenFindUniqueArgs} args - Arguments to find a Refestoken
     * @example
     * // Get one Refestoken
     * const refestoken = await prisma.refestoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refestokenFindUniqueArgs>(args: SelectSubset<T, refestokenFindUniqueArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refestoken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refestokenFindUniqueOrThrowArgs} args - Arguments to find a Refestoken
     * @example
     * // Get one Refestoken
     * const refestoken = await prisma.refestoken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refestokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refestokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refestoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenFindFirstArgs} args - Arguments to find a Refestoken
     * @example
     * // Get one Refestoken
     * const refestoken = await prisma.refestoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refestokenFindFirstArgs>(args?: SelectSubset<T, refestokenFindFirstArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refestoken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenFindFirstOrThrowArgs} args - Arguments to find a Refestoken
     * @example
     * // Get one Refestoken
     * const refestoken = await prisma.refestoken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refestokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refestokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refestokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refestokens
     * const refestokens = await prisma.refestoken.findMany()
     * 
     * // Get first 10 Refestokens
     * const refestokens = await prisma.refestoken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refestokenWithIdOnly = await prisma.refestoken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refestokenFindManyArgs>(args?: SelectSubset<T, refestokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refestoken.
     * @param {refestokenCreateArgs} args - Arguments to create a Refestoken.
     * @example
     * // Create one Refestoken
     * const Refestoken = await prisma.refestoken.create({
     *   data: {
     *     // ... data to create a Refestoken
     *   }
     * })
     * 
     */
    create<T extends refestokenCreateArgs>(args: SelectSubset<T, refestokenCreateArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refestokens.
     * @param {refestokenCreateManyArgs} args - Arguments to create many Refestokens.
     * @example
     * // Create many Refestokens
     * const refestoken = await prisma.refestoken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refestokenCreateManyArgs>(args?: SelectSubset<T, refestokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refestoken.
     * @param {refestokenDeleteArgs} args - Arguments to delete one Refestoken.
     * @example
     * // Delete one Refestoken
     * const Refestoken = await prisma.refestoken.delete({
     *   where: {
     *     // ... filter to delete one Refestoken
     *   }
     * })
     * 
     */
    delete<T extends refestokenDeleteArgs>(args: SelectSubset<T, refestokenDeleteArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refestoken.
     * @param {refestokenUpdateArgs} args - Arguments to update one Refestoken.
     * @example
     * // Update one Refestoken
     * const refestoken = await prisma.refestoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refestokenUpdateArgs>(args: SelectSubset<T, refestokenUpdateArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refestokens.
     * @param {refestokenDeleteManyArgs} args - Arguments to filter Refestokens to delete.
     * @example
     * // Delete a few Refestokens
     * const { count } = await prisma.refestoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refestokenDeleteManyArgs>(args?: SelectSubset<T, refestokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refestokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refestokens
     * const refestoken = await prisma.refestoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refestokenUpdateManyArgs>(args: SelectSubset<T, refestokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refestoken.
     * @param {refestokenUpsertArgs} args - Arguments to update or create a Refestoken.
     * @example
     * // Update or create a Refestoken
     * const refestoken = await prisma.refestoken.upsert({
     *   create: {
     *     // ... data to create a Refestoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refestoken we want to update
     *   }
     * })
     */
    upsert<T extends refestokenUpsertArgs>(args: SelectSubset<T, refestokenUpsertArgs<ExtArgs>>): Prisma__refestokenClient<$Result.GetResult<Prisma.$refestokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refestokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenCountArgs} args - Arguments to filter Refestokens to count.
     * @example
     * // Count the number of Refestokens
     * const count = await prisma.refestoken.count({
     *   where: {
     *     // ... the filter for the Refestokens we want to count
     *   }
     * })
    **/
    count<T extends refestokenCountArgs>(
      args?: Subset<T, refestokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefestokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refestoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefestokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefestokenAggregateArgs>(args: Subset<T, RefestokenAggregateArgs>): Prisma.PrismaPromise<GetRefestokenAggregateType<T>>

    /**
     * Group by Refestoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refestokenGroupByArgs} args - Group by arguments.
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
      T extends refestokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refestokenGroupByArgs['orderBy'] }
        : { orderBy?: refestokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, refestokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefestokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refestoken model
   */
  readonly fields: refestokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refestoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refestokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usetimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usetimeDefaultArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the refestoken model
   */
  interface refestokenFieldRefs {
    readonly id: FieldRef<"refestoken", 'Int'>
    readonly userId: FieldRef<"refestoken", 'Int'>
    readonly token: FieldRef<"refestoken", 'String'>
    readonly expiresAt: FieldRef<"refestoken", 'DateTime'>
    readonly createdAt: FieldRef<"refestoken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * refestoken findUnique
   */
  export type refestokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter, which refestoken to fetch.
     */
    where: refestokenWhereUniqueInput
  }

  /**
   * refestoken findUniqueOrThrow
   */
  export type refestokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter, which refestoken to fetch.
     */
    where: refestokenWhereUniqueInput
  }

  /**
   * refestoken findFirst
   */
  export type refestokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter, which refestoken to fetch.
     */
    where?: refestokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refestokens to fetch.
     */
    orderBy?: refestokenOrderByWithRelationInput | refestokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refestokens.
     */
    cursor?: refestokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refestokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refestokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refestokens.
     */
    distinct?: RefestokenScalarFieldEnum | RefestokenScalarFieldEnum[]
  }

  /**
   * refestoken findFirstOrThrow
   */
  export type refestokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter, which refestoken to fetch.
     */
    where?: refestokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refestokens to fetch.
     */
    orderBy?: refestokenOrderByWithRelationInput | refestokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refestokens.
     */
    cursor?: refestokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refestokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refestokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refestokens.
     */
    distinct?: RefestokenScalarFieldEnum | RefestokenScalarFieldEnum[]
  }

  /**
   * refestoken findMany
   */
  export type refestokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter, which refestokens to fetch.
     */
    where?: refestokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refestokens to fetch.
     */
    orderBy?: refestokenOrderByWithRelationInput | refestokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refestokens.
     */
    cursor?: refestokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refestokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refestokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refestokens.
     */
    distinct?: RefestokenScalarFieldEnum | RefestokenScalarFieldEnum[]
  }

  /**
   * refestoken create
   */
  export type refestokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refestoken.
     */
    data: XOR<refestokenCreateInput, refestokenUncheckedCreateInput>
  }

  /**
   * refestoken createMany
   */
  export type refestokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refestokens.
     */
    data: refestokenCreateManyInput | refestokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refestoken update
   */
  export type refestokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refestoken.
     */
    data: XOR<refestokenUpdateInput, refestokenUncheckedUpdateInput>
    /**
     * Choose, which refestoken to update.
     */
    where: refestokenWhereUniqueInput
  }

  /**
   * refestoken updateMany
   */
  export type refestokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refestokens.
     */
    data: XOR<refestokenUpdateManyMutationInput, refestokenUncheckedUpdateManyInput>
    /**
     * Filter which refestokens to update
     */
    where?: refestokenWhereInput
    /**
     * Limit how many refestokens to update.
     */
    limit?: number
  }

  /**
   * refestoken upsert
   */
  export type refestokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refestoken to update in case it exists.
     */
    where: refestokenWhereUniqueInput
    /**
     * In case the refestoken found by the `where` argument doesn't exist, create a new refestoken with this data.
     */
    create: XOR<refestokenCreateInput, refestokenUncheckedCreateInput>
    /**
     * In case the refestoken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refestokenUpdateInput, refestokenUncheckedUpdateInput>
  }

  /**
   * refestoken delete
   */
  export type refestokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
    /**
     * Filter which refestoken to delete.
     */
    where: refestokenWhereUniqueInput
  }

  /**
   * refestoken deleteMany
   */
  export type refestokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refestokens to delete
     */
    where?: refestokenWhereInput
    /**
     * Limit how many refestokens to delete.
     */
    limit?: number
  }

  /**
   * refestoken without action
   */
  export type refestokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refestoken
     */
    select?: refestokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refestoken
     */
    omit?: refestokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refestokenInclude<ExtArgs> | null
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


  export const UsetimeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    usePassword: 'usePassword'
  };

  export type UsetimeScalarFieldEnum = (typeof UsetimeScalarFieldEnum)[keyof typeof UsetimeScalarFieldEnum]


  export const RefestokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefestokenScalarFieldEnum = (typeof RefestokenScalarFieldEnum)[keyof typeof RefestokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const usetimeOrderByRelevanceFieldEnum: {
    email: 'email',
    usePassword: 'usePassword'
  };

  export type usetimeOrderByRelevanceFieldEnum = (typeof usetimeOrderByRelevanceFieldEnum)[keyof typeof usetimeOrderByRelevanceFieldEnum]


  export const refestokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type refestokenOrderByRelevanceFieldEnum = (typeof refestokenOrderByRelevanceFieldEnum)[keyof typeof refestokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usetimeWhereInput = {
    AND?: usetimeWhereInput | usetimeWhereInput[]
    OR?: usetimeWhereInput[]
    NOT?: usetimeWhereInput | usetimeWhereInput[]
    id?: IntFilter<"usetime"> | number
    email?: StringFilter<"usetime"> | string
    usePassword?: StringFilter<"usetime"> | string
    refreshTokens?: RefestokenListRelationFilter
  }

  export type usetimeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    refreshTokens?: refestokenOrderByRelationAggregateInput
    _relevance?: usetimeOrderByRelevanceInput
  }

  export type usetimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usetimeWhereInput | usetimeWhereInput[]
    OR?: usetimeWhereInput[]
    NOT?: usetimeWhereInput | usetimeWhereInput[]
    usePassword?: StringFilter<"usetime"> | string
    refreshTokens?: RefestokenListRelationFilter
  }, "id" | "email">

  export type usetimeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    _count?: usetimeCountOrderByAggregateInput
    _avg?: usetimeAvgOrderByAggregateInput
    _max?: usetimeMaxOrderByAggregateInput
    _min?: usetimeMinOrderByAggregateInput
    _sum?: usetimeSumOrderByAggregateInput
  }

  export type usetimeScalarWhereWithAggregatesInput = {
    AND?: usetimeScalarWhereWithAggregatesInput | usetimeScalarWhereWithAggregatesInput[]
    OR?: usetimeScalarWhereWithAggregatesInput[]
    NOT?: usetimeScalarWhereWithAggregatesInput | usetimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usetime"> | number
    email?: StringWithAggregatesFilter<"usetime"> | string
    usePassword?: StringWithAggregatesFilter<"usetime"> | string
  }

  export type refestokenWhereInput = {
    AND?: refestokenWhereInput | refestokenWhereInput[]
    OR?: refestokenWhereInput[]
    NOT?: refestokenWhereInput | refestokenWhereInput[]
    id?: IntFilter<"refestoken"> | number
    userId?: IntFilter<"refestoken"> | number
    token?: StringFilter<"refestoken"> | string
    expiresAt?: DateTimeFilter<"refestoken"> | Date | string
    createdAt?: DateTimeFilter<"refestoken"> | Date | string
    user?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
  }

  export type refestokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: usetimeOrderByWithRelationInput
    _relevance?: refestokenOrderByRelevanceInput
  }

  export type refestokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: refestokenWhereInput | refestokenWhereInput[]
    OR?: refestokenWhereInput[]
    NOT?: refestokenWhereInput | refestokenWhereInput[]
    userId?: IntFilter<"refestoken"> | number
    token?: StringFilter<"refestoken"> | string
    expiresAt?: DateTimeFilter<"refestoken"> | Date | string
    createdAt?: DateTimeFilter<"refestoken"> | Date | string
    user?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
  }, "id">

  export type refestokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: refestokenCountOrderByAggregateInput
    _avg?: refestokenAvgOrderByAggregateInput
    _max?: refestokenMaxOrderByAggregateInput
    _min?: refestokenMinOrderByAggregateInput
    _sum?: refestokenSumOrderByAggregateInput
  }

  export type refestokenScalarWhereWithAggregatesInput = {
    AND?: refestokenScalarWhereWithAggregatesInput | refestokenScalarWhereWithAggregatesInput[]
    OR?: refestokenScalarWhereWithAggregatesInput[]
    NOT?: refestokenScalarWhereWithAggregatesInput | refestokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"refestoken"> | number
    userId?: IntWithAggregatesFilter<"refestoken"> | number
    token?: StringWithAggregatesFilter<"refestoken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"refestoken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"refestoken"> | Date | string
  }

  export type usetimeCreateInput = {
    email: string
    usePassword: string
    refreshTokens?: refestokenCreateNestedManyWithoutUserInput
  }

  export type usetimeUncheckedCreateInput = {
    id?: number
    email: string
    usePassword: string
    refreshTokens?: refestokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usetimeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    refreshTokens?: refestokenUpdateManyWithoutUserNestedInput
  }

  export type usetimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    refreshTokens?: refestokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usetimeCreateManyInput = {
    id?: number
    email: string
    usePassword: string
  }

  export type usetimeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
  }

  export type usetimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
  }

  export type refestokenCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: usetimeCreateNestedOneWithoutRefreshTokensInput
  }

  export type refestokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refestokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usetimeUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type refestokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refestokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refestokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refestokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RefestokenListRelationFilter = {
    every?: refestokenWhereInput
    some?: refestokenWhereInput
    none?: refestokenWhereInput
  }

  export type refestokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usetimeOrderByRelevanceInput = {
    fields: usetimeOrderByRelevanceFieldEnum | usetimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usetimeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
  }

  export type usetimeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usetimeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
  }

  export type usetimeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
  }

  export type usetimeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsetimeScalarRelationFilter = {
    is?: usetimeWhereInput
    isNot?: usetimeWhereInput
  }

  export type refestokenOrderByRelevanceInput = {
    fields: refestokenOrderByRelevanceFieldEnum | refestokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refestokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type refestokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type refestokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type refestokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type refestokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type refestokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
  }

  export type refestokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type refestokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    upsert?: refestokenUpsertWithWhereUniqueWithoutUserInput | refestokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    set?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    disconnect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    delete?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    update?: refestokenUpdateWithWhereUniqueWithoutUserInput | refestokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refestokenUpdateManyWithWhereWithoutUserInput | refestokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refestokenScalarWhereInput | refestokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type refestokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    upsert?: refestokenUpsertWithWhereUniqueWithoutUserInput | refestokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    set?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    disconnect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    delete?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
    update?: refestokenUpdateWithWhereUniqueWithoutUserInput | refestokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refestokenUpdateManyWithWhereWithoutUserInput | refestokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refestokenScalarWhereInput | refestokenScalarWhereInput[]
  }

  export type usetimeCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutRefreshTokensInput
    connect?: usetimeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usetimeUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutRefreshTokensInput
    upsert?: usetimeUpsertWithoutRefreshTokensInput
    connect?: usetimeWhereUniqueInput
    update?: XOR<XOR<usetimeUpdateToOneWithWhereWithoutRefreshTokensInput, usetimeUpdateWithoutRefreshTokensInput>, usetimeUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type refestokenCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refestokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refestokenCreateOrConnectWithoutUserInput = {
    where: refestokenWhereUniqueInput
    create: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput>
  }

  export type refestokenCreateManyUserInputEnvelope = {
    data: refestokenCreateManyUserInput | refestokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type refestokenUpsertWithWhereUniqueWithoutUserInput = {
    where: refestokenWhereUniqueInput
    update: XOR<refestokenUpdateWithoutUserInput, refestokenUncheckedUpdateWithoutUserInput>
    create: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput>
  }

  export type refestokenUpdateWithWhereUniqueWithoutUserInput = {
    where: refestokenWhereUniqueInput
    data: XOR<refestokenUpdateWithoutUserInput, refestokenUncheckedUpdateWithoutUserInput>
  }

  export type refestokenUpdateManyWithWhereWithoutUserInput = {
    where: refestokenScalarWhereInput
    data: XOR<refestokenUpdateManyMutationInput, refestokenUncheckedUpdateManyWithoutUserInput>
  }

  export type refestokenScalarWhereInput = {
    AND?: refestokenScalarWhereInput | refestokenScalarWhereInput[]
    OR?: refestokenScalarWhereInput[]
    NOT?: refestokenScalarWhereInput | refestokenScalarWhereInput[]
    id?: IntFilter<"refestoken"> | number
    userId?: IntFilter<"refestoken"> | number
    token?: StringFilter<"refestoken"> | string
    expiresAt?: DateTimeFilter<"refestoken"> | Date | string
    createdAt?: DateTimeFilter<"refestoken"> | Date | string
  }

  export type usetimeCreateWithoutRefreshTokensInput = {
    email: string
    usePassword: string
  }

  export type usetimeUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    email: string
    usePassword: string
  }

  export type usetimeCreateOrConnectWithoutRefreshTokensInput = {
    where: usetimeWhereUniqueInput
    create: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
  }

  export type usetimeUpsertWithoutRefreshTokensInput = {
    update: XOR<usetimeUpdateWithoutRefreshTokensInput, usetimeUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
    where?: usetimeWhereInput
  }

  export type usetimeUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: usetimeWhereInput
    data: XOR<usetimeUpdateWithoutRefreshTokensInput, usetimeUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type usetimeUpdateWithoutRefreshTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
  }

  export type usetimeUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
  }

  export type refestokenCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refestokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refestokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refestokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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