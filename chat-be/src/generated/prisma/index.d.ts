
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
 * Model EmailOtp
 * 
 */
export type EmailOtp = $Result.DefaultSelection<Prisma.$EmailOtpPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model ConversationMember
 * 
 */
export type ConversationMember = $Result.DefaultSelection<Prisma.$ConversationMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

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

  /**
   * `prisma.emailOtp`: Exposes CRUD operations for the **EmailOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailOtps
    * const emailOtps = await prisma.emailOtp.findMany()
    * ```
    */
  get emailOtp(): Prisma.EmailOtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationMember`: Exposes CRUD operations for the **ConversationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationMembers
    * const conversationMembers = await prisma.conversationMember.findMany()
    * ```
    */
  get conversationMember(): Prisma.ConversationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
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
    refestoken: 'refestoken',
    EmailOtp: 'EmailOtp',
    Conversation: 'Conversation',
    ConversationMember: 'ConversationMember',
    Message: 'Message'
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
      modelProps: "usetime" | "refestoken" | "emailOtp" | "conversation" | "conversationMember" | "message"
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
      EmailOtp: {
        payload: Prisma.$EmailOtpPayload<ExtArgs>
        fields: Prisma.EmailOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          findFirst: {
            args: Prisma.EmailOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          findMany: {
            args: Prisma.EmailOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>[]
          }
          create: {
            args: Prisma.EmailOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          createMany: {
            args: Prisma.EmailOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmailOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          update: {
            args: Prisma.EmailOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          deleteMany: {
            args: Prisma.EmailOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          aggregate: {
            args: Prisma.EmailOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailOtp>
          }
          groupBy: {
            args: Prisma.EmailOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailOtpCountArgs<ExtArgs>
            result: $Utils.Optional<EmailOtpCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      ConversationMember: {
        payload: Prisma.$ConversationMemberPayload<ExtArgs>
        fields: Prisma.ConversationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          findFirst: {
            args: Prisma.ConversationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          findMany: {
            args: Prisma.ConversationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>[]
          }
          create: {
            args: Prisma.ConversationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          createMany: {
            args: Prisma.ConversationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          update: {
            args: Prisma.ConversationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          deleteMany: {
            args: Prisma.ConversationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          aggregate: {
            args: Prisma.ConversationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationMember>
          }
          groupBy: {
            args: Prisma.ConversationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
    emailOtp?: EmailOtpOmit
    conversation?: ConversationOmit
    conversationMember?: ConversationMemberOmit
    message?: MessageOmit
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
    messages: number
    conversationMembers: number
  }

  export type UsetimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UsetimeCountOutputTypeCountRefreshTokensArgs
    messages?: boolean | UsetimeCountOutputTypeCountMessagesArgs
    conversationMembers?: boolean | UsetimeCountOutputTypeCountConversationMembersArgs
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
   * UsetimeCountOutputType without action
   */
  export type UsetimeCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UsetimeCountOutputType without action
   */
  export type UsetimeCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    members: number
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ConversationCountOutputTypeCountMembersArgs
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    name: string | null
    avatar: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsetimeMaxAggregateOutputType = {
    id: number | null
    email: string | null
    usePassword: string | null
    name: string | null
    avatar: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsetimeCountAggregateOutputType = {
    id: number
    email: number
    usePassword: number
    name: number
    avatar: number
    isVerified: number
    createdAt: number
    updatedAt: number
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
    name?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsetimeMaxAggregateInputType = {
    id?: true
    email?: true
    usePassword?: true
    name?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsetimeCountAggregateInputType = {
    id?: true
    email?: true
    usePassword?: true
    name?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
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
    name: string | null
    avatar: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    avatar?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | usetime$refreshTokensArgs<ExtArgs>
    messages?: boolean | usetime$messagesArgs<ExtArgs>
    conversationMembers?: boolean | usetime$conversationMembersArgs<ExtArgs>
    _count?: boolean | UsetimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usetime"]>



  export type usetimeSelectScalar = {
    id?: boolean
    email?: boolean
    usePassword?: boolean
    name?: boolean
    avatar?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usetimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "usePassword" | "name" | "avatar" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["usetime"]>
  export type usetimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | usetime$refreshTokensArgs<ExtArgs>
    messages?: boolean | usetime$messagesArgs<ExtArgs>
    conversationMembers?: boolean | usetime$conversationMembersArgs<ExtArgs>
    _count?: boolean | UsetimeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usetimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usetime"
    objects: {
      refreshTokens: Prisma.$refestokenPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      conversationMembers: Prisma.$ConversationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      usePassword: string
      name: string | null
      avatar: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
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
    messages<T extends usetime$messagesArgs<ExtArgs> = {}>(args?: Subset<T, usetime$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationMembers<T extends usetime$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, usetime$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"usetime", 'String'>
    readonly avatar: FieldRef<"usetime", 'String'>
    readonly isVerified: FieldRef<"usetime", 'Boolean'>
    readonly createdAt: FieldRef<"usetime", 'DateTime'>
    readonly updatedAt: FieldRef<"usetime", 'DateTime'>
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
   * usetime.messages
   */
  export type usetime$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * usetime.conversationMembers
   */
  export type usetime$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    cursor?: ConversationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
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
   * Model EmailOtp
   */

  export type AggregateEmailOtp = {
    _count: EmailOtpCountAggregateOutputType | null
    _avg: EmailOtpAvgAggregateOutputType | null
    _sum: EmailOtpSumAggregateOutputType | null
    _min: EmailOtpMinAggregateOutputType | null
    _max: EmailOtpMaxAggregateOutputType | null
  }

  export type EmailOtpAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailOtpSumAggregateOutputType = {
    id: number | null
  }

  export type EmailOtpMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailOtpMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailOtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type EmailOtpAvgAggregateInputType = {
    id?: true
  }

  export type EmailOtpSumAggregateInputType = {
    id?: true
  }

  export type EmailOtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailOtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailOtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOtp to aggregate.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailOtps
    **/
    _count?: true | EmailOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailOtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailOtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailOtpMaxAggregateInputType
  }

  export type GetEmailOtpAggregateType<T extends EmailOtpAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailOtp[P]>
      : GetScalarType<T[P], AggregateEmailOtp[P]>
  }




  export type EmailOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailOtpWhereInput
    orderBy?: EmailOtpOrderByWithAggregationInput | EmailOtpOrderByWithAggregationInput[]
    by: EmailOtpScalarFieldEnum[] | EmailOtpScalarFieldEnum
    having?: EmailOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailOtpCountAggregateInputType | true
    _avg?: EmailOtpAvgAggregateInputType
    _sum?: EmailOtpSumAggregateInputType
    _min?: EmailOtpMinAggregateInputType
    _max?: EmailOtpMaxAggregateInputType
  }

  export type EmailOtpGroupByOutputType = {
    id: number
    email: string
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: EmailOtpCountAggregateOutputType | null
    _avg: EmailOtpAvgAggregateOutputType | null
    _sum: EmailOtpSumAggregateOutputType | null
    _min: EmailOtpMinAggregateOutputType | null
    _max: EmailOtpMaxAggregateOutputType | null
  }

  type GetEmailOtpGroupByPayload<T extends EmailOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailOtpGroupByOutputType[P]>
            : GetScalarType<T[P], EmailOtpGroupByOutputType[P]>
        }
      >
    >


  export type EmailOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailOtp"]>



  export type EmailOtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type EmailOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["emailOtp"]>

  export type $EmailOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailOtp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emailOtp"]>
    composites: {}
  }

  type EmailOtpGetPayload<S extends boolean | null | undefined | EmailOtpDefaultArgs> = $Result.GetResult<Prisma.$EmailOtpPayload, S>

  type EmailOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailOtpCountAggregateInputType | true
    }

  export interface EmailOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailOtp'], meta: { name: 'EmailOtp' } }
    /**
     * Find zero or one EmailOtp that matches the filter.
     * @param {EmailOtpFindUniqueArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailOtpFindUniqueArgs>(args: SelectSubset<T, EmailOtpFindUniqueArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailOtpFindUniqueOrThrowArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindFirstArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailOtpFindFirstArgs>(args?: SelectSubset<T, EmailOtpFindFirstArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindFirstOrThrowArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailOtps
     * const emailOtps = await prisma.emailOtp.findMany()
     * 
     * // Get first 10 EmailOtps
     * const emailOtps = await prisma.emailOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailOtpWithIdOnly = await prisma.emailOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailOtpFindManyArgs>(args?: SelectSubset<T, EmailOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailOtp.
     * @param {EmailOtpCreateArgs} args - Arguments to create a EmailOtp.
     * @example
     * // Create one EmailOtp
     * const EmailOtp = await prisma.emailOtp.create({
     *   data: {
     *     // ... data to create a EmailOtp
     *   }
     * })
     * 
     */
    create<T extends EmailOtpCreateArgs>(args: SelectSubset<T, EmailOtpCreateArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailOtps.
     * @param {EmailOtpCreateManyArgs} args - Arguments to create many EmailOtps.
     * @example
     * // Create many EmailOtps
     * const emailOtp = await prisma.emailOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailOtpCreateManyArgs>(args?: SelectSubset<T, EmailOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmailOtp.
     * @param {EmailOtpDeleteArgs} args - Arguments to delete one EmailOtp.
     * @example
     * // Delete one EmailOtp
     * const EmailOtp = await prisma.emailOtp.delete({
     *   where: {
     *     // ... filter to delete one EmailOtp
     *   }
     * })
     * 
     */
    delete<T extends EmailOtpDeleteArgs>(args: SelectSubset<T, EmailOtpDeleteArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailOtp.
     * @param {EmailOtpUpdateArgs} args - Arguments to update one EmailOtp.
     * @example
     * // Update one EmailOtp
     * const emailOtp = await prisma.emailOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailOtpUpdateArgs>(args: SelectSubset<T, EmailOtpUpdateArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailOtps.
     * @param {EmailOtpDeleteManyArgs} args - Arguments to filter EmailOtps to delete.
     * @example
     * // Delete a few EmailOtps
     * const { count } = await prisma.emailOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailOtpDeleteManyArgs>(args?: SelectSubset<T, EmailOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailOtps
     * const emailOtp = await prisma.emailOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailOtpUpdateManyArgs>(args: SelectSubset<T, EmailOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailOtp.
     * @param {EmailOtpUpsertArgs} args - Arguments to update or create a EmailOtp.
     * @example
     * // Update or create a EmailOtp
     * const emailOtp = await prisma.emailOtp.upsert({
     *   create: {
     *     // ... data to create a EmailOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailOtp we want to update
     *   }
     * })
     */
    upsert<T extends EmailOtpUpsertArgs>(args: SelectSubset<T, EmailOtpUpsertArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpCountArgs} args - Arguments to filter EmailOtps to count.
     * @example
     * // Count the number of EmailOtps
     * const count = await prisma.emailOtp.count({
     *   where: {
     *     // ... the filter for the EmailOtps we want to count
     *   }
     * })
    **/
    count<T extends EmailOtpCountArgs>(
      args?: Subset<T, EmailOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailOtpAggregateArgs>(args: Subset<T, EmailOtpAggregateArgs>): Prisma.PrismaPromise<GetEmailOtpAggregateType<T>>

    /**
     * Group by EmailOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpGroupByArgs} args - Group by arguments.
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
      T extends EmailOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailOtpGroupByArgs['orderBy'] }
        : { orderBy?: EmailOtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailOtp model
   */
  readonly fields: EmailOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailOtp model
   */
  interface EmailOtpFieldRefs {
    readonly id: FieldRef<"EmailOtp", 'Int'>
    readonly email: FieldRef<"EmailOtp", 'String'>
    readonly otp: FieldRef<"EmailOtp", 'String'>
    readonly expiresAt: FieldRef<"EmailOtp", 'DateTime'>
    readonly createdAt: FieldRef<"EmailOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailOtp findUnique
   */
  export type EmailOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp findUniqueOrThrow
   */
  export type EmailOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp findFirst
   */
  export type EmailOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOtps.
     */
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp findFirstOrThrow
   */
  export type EmailOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOtps.
     */
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp findMany
   */
  export type EmailOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter, which EmailOtps to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOtps.
     */
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp create
   */
  export type EmailOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailOtp.
     */
    data: XOR<EmailOtpCreateInput, EmailOtpUncheckedCreateInput>
  }

  /**
   * EmailOtp createMany
   */
  export type EmailOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailOtps.
     */
    data: EmailOtpCreateManyInput | EmailOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailOtp update
   */
  export type EmailOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailOtp.
     */
    data: XOR<EmailOtpUpdateInput, EmailOtpUncheckedUpdateInput>
    /**
     * Choose, which EmailOtp to update.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp updateMany
   */
  export type EmailOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailOtps.
     */
    data: XOR<EmailOtpUpdateManyMutationInput, EmailOtpUncheckedUpdateManyInput>
    /**
     * Filter which EmailOtps to update
     */
    where?: EmailOtpWhereInput
    /**
     * Limit how many EmailOtps to update.
     */
    limit?: number
  }

  /**
   * EmailOtp upsert
   */
  export type EmailOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailOtp to update in case it exists.
     */
    where: EmailOtpWhereUniqueInput
    /**
     * In case the EmailOtp found by the `where` argument doesn't exist, create a new EmailOtp with this data.
     */
    create: XOR<EmailOtpCreateInput, EmailOtpUncheckedCreateInput>
    /**
     * In case the EmailOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailOtpUpdateInput, EmailOtpUncheckedUpdateInput>
  }

  /**
   * EmailOtp delete
   */
  export type EmailOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Filter which EmailOtp to delete.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp deleteMany
   */
  export type EmailOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOtps to delete
     */
    where?: EmailOtpWhereInput
    /**
     * Limit how many EmailOtps to delete.
     */
    limit?: number
  }

  /**
   * EmailOtp without action
   */
  export type EmailOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    name: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    name: number
    isGroup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    name: string | null
    isGroup: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Conversation$membersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>



  export type ConversationSelectScalar = {
    id?: boolean
    name?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isGroup" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Conversation$membersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      members: Prisma.$ConversationMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      isGroup: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Conversation$membersArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly name: FieldRef<"Conversation", 'String'>
    readonly isGroup: FieldRef<"Conversation", 'Boolean'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data?: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.members
   */
  export type Conversation$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    cursor?: ConversationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model ConversationMember
   */

  export type AggregateConversationMember = {
    _count: ConversationMemberCountAggregateOutputType | null
    _avg: ConversationMemberAvgAggregateOutputType | null
    _sum: ConversationMemberSumAggregateOutputType | null
    _min: ConversationMemberMinAggregateOutputType | null
    _max: ConversationMemberMaxAggregateOutputType | null
  }

  export type ConversationMemberAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
  }

  export type ConversationMemberSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
  }

  export type ConversationMemberMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ConversationMemberMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ConversationMemberCountAggregateOutputType = {
    id: number
    conversationId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type ConversationMemberAvgAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
  }

  export type ConversationMemberSumAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
  }

  export type ConversationMemberMinAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    joinedAt?: true
  }

  export type ConversationMemberMaxAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    joinedAt?: true
  }

  export type ConversationMemberCountAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type ConversationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMember to aggregate.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationMembers
    **/
    _count?: true | ConversationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMemberMaxAggregateInputType
  }

  export type GetConversationMemberAggregateType<T extends ConversationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationMember[P]>
      : GetScalarType<T[P], AggregateConversationMember[P]>
  }




  export type ConversationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithAggregationInput | ConversationMemberOrderByWithAggregationInput[]
    by: ConversationMemberScalarFieldEnum[] | ConversationMemberScalarFieldEnum
    having?: ConversationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationMemberCountAggregateInputType | true
    _avg?: ConversationMemberAvgAggregateInputType
    _sum?: ConversationMemberSumAggregateInputType
    _min?: ConversationMemberMinAggregateInputType
    _max?: ConversationMemberMaxAggregateInputType
  }

  export type ConversationMemberGroupByOutputType = {
    id: number
    conversationId: number
    userId: number
    joinedAt: Date
    _count: ConversationMemberCountAggregateOutputType | null
    _avg: ConversationMemberAvgAggregateOutputType | null
    _sum: ConversationMemberSumAggregateOutputType | null
    _min: ConversationMemberMinAggregateOutputType | null
    _max: ConversationMemberMaxAggregateOutputType | null
  }

  type GetConversationMemberGroupByPayload<T extends ConversationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationMemberGroupByOutputType[P]>
        }
      >
    >


  export type ConversationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    joinedAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | usetimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMember"]>



  export type ConversationMemberSelectScalar = {
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type ConversationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "userId" | "joinedAt", ExtArgs["result"]["conversationMember"]>
  export type ConversationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | usetimeDefaultArgs<ExtArgs>
  }

  export type $ConversationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationMember"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      user: Prisma.$usetimePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      userId: number
      joinedAt: Date
    }, ExtArgs["result"]["conversationMember"]>
    composites: {}
  }

  type ConversationMemberGetPayload<S extends boolean | null | undefined | ConversationMemberDefaultArgs> = $Result.GetResult<Prisma.$ConversationMemberPayload, S>

  type ConversationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationMemberCountAggregateInputType | true
    }

  export interface ConversationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationMember'], meta: { name: 'ConversationMember' } }
    /**
     * Find zero or one ConversationMember that matches the filter.
     * @param {ConversationMemberFindUniqueArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationMemberFindUniqueArgs>(args: SelectSubset<T, ConversationMemberFindUniqueArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationMemberFindUniqueOrThrowArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindFirstArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationMemberFindFirstArgs>(args?: SelectSubset<T, ConversationMemberFindFirstArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindFirstOrThrowArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMembers
     * const conversationMembers = await prisma.conversationMember.findMany()
     * 
     * // Get first 10 ConversationMembers
     * const conversationMembers = await prisma.conversationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationMemberWithIdOnly = await prisma.conversationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationMemberFindManyArgs>(args?: SelectSubset<T, ConversationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationMember.
     * @param {ConversationMemberCreateArgs} args - Arguments to create a ConversationMember.
     * @example
     * // Create one ConversationMember
     * const ConversationMember = await prisma.conversationMember.create({
     *   data: {
     *     // ... data to create a ConversationMember
     *   }
     * })
     * 
     */
    create<T extends ConversationMemberCreateArgs>(args: SelectSubset<T, ConversationMemberCreateArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationMembers.
     * @param {ConversationMemberCreateManyArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMember = await prisma.conversationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationMemberCreateManyArgs>(args?: SelectSubset<T, ConversationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConversationMember.
     * @param {ConversationMemberDeleteArgs} args - Arguments to delete one ConversationMember.
     * @example
     * // Delete one ConversationMember
     * const ConversationMember = await prisma.conversationMember.delete({
     *   where: {
     *     // ... filter to delete one ConversationMember
     *   }
     * })
     * 
     */
    delete<T extends ConversationMemberDeleteArgs>(args: SelectSubset<T, ConversationMemberDeleteArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationMember.
     * @param {ConversationMemberUpdateArgs} args - Arguments to update one ConversationMember.
     * @example
     * // Update one ConversationMember
     * const conversationMember = await prisma.conversationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationMemberUpdateArgs>(args: SelectSubset<T, ConversationMemberUpdateArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationMembers.
     * @param {ConversationMemberDeleteManyArgs} args - Arguments to filter ConversationMembers to delete.
     * @example
     * // Delete a few ConversationMembers
     * const { count } = await prisma.conversationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationMemberDeleteManyArgs>(args?: SelectSubset<T, ConversationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMembers
     * const conversationMember = await prisma.conversationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationMemberUpdateManyArgs>(args: SelectSubset<T, ConversationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConversationMember.
     * @param {ConversationMemberUpsertArgs} args - Arguments to update or create a ConversationMember.
     * @example
     * // Update or create a ConversationMember
     * const conversationMember = await prisma.conversationMember.upsert({
     *   create: {
     *     // ... data to create a ConversationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMember we want to update
     *   }
     * })
     */
    upsert<T extends ConversationMemberUpsertArgs>(args: SelectSubset<T, ConversationMemberUpsertArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberCountArgs} args - Arguments to filter ConversationMembers to count.
     * @example
     * // Count the number of ConversationMembers
     * const count = await prisma.conversationMember.count({
     *   where: {
     *     // ... the filter for the ConversationMembers we want to count
     *   }
     * })
    **/
    count<T extends ConversationMemberCountArgs>(
      args?: Subset<T, ConversationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationMemberAggregateArgs>(args: Subset<T, ConversationMemberAggregateArgs>): Prisma.PrismaPromise<GetConversationMemberAggregateType<T>>

    /**
     * Group by ConversationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberGroupByArgs} args - Group by arguments.
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
      T extends ConversationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationMemberGroupByArgs['orderBy'] }
        : { orderBy?: ConversationMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationMember model
   */
  readonly fields: ConversationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConversationMember model
   */
  interface ConversationMemberFieldRefs {
    readonly id: FieldRef<"ConversationMember", 'Int'>
    readonly conversationId: FieldRef<"ConversationMember", 'Int'>
    readonly userId: FieldRef<"ConversationMember", 'Int'>
    readonly joinedAt: FieldRef<"ConversationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversationMember findUnique
   */
  export type ConversationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember findUniqueOrThrow
   */
  export type ConversationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember findFirst
   */
  export type ConversationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember findFirstOrThrow
   */
  export type ConversationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember findMany
   */
  export type ConversationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember create
   */
  export type ConversationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationMember.
     */
    data: XOR<ConversationMemberCreateInput, ConversationMemberUncheckedCreateInput>
  }

  /**
   * ConversationMember createMany
   */
  export type ConversationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationMembers.
     */
    data: ConversationMemberCreateManyInput | ConversationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationMember update
   */
  export type ConversationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationMember.
     */
    data: XOR<ConversationMemberUpdateInput, ConversationMemberUncheckedUpdateInput>
    /**
     * Choose, which ConversationMember to update.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember updateMany
   */
  export type ConversationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationMembers.
     */
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMembers to update
     */
    where?: ConversationMemberWhereInput
    /**
     * Limit how many ConversationMembers to update.
     */
    limit?: number
  }

  /**
   * ConversationMember upsert
   */
  export type ConversationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationMember to update in case it exists.
     */
    where: ConversationMemberWhereUniqueInput
    /**
     * In case the ConversationMember found by the `where` argument doesn't exist, create a new ConversationMember with this data.
     */
    create: XOR<ConversationMemberCreateInput, ConversationMemberUncheckedCreateInput>
    /**
     * In case the ConversationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationMemberUpdateInput, ConversationMemberUncheckedUpdateInput>
  }

  /**
   * ConversationMember delete
   */
  export type ConversationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter which ConversationMember to delete.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember deleteMany
   */
  export type ConversationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMembers to delete
     */
    where?: ConversationMemberWhereInput
    /**
     * Limit how many ConversationMembers to delete.
     */
    limit?: number
  }

  /**
   * ConversationMember without action
   */
  export type ConversationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    conversationId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    conversationId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    conversationId: number | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    conversationId: number | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    conversationId: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    conversationId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    conversationId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    conversationId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    senderId: number
    conversationId: number
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    sender?: boolean | usetimeDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    conversationId?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "conversationId" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usetimeDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$usetimePayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      senderId: number
      conversationId: number
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends usetimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usetimeDefaultArgs<ExtArgs>>): Prisma__usetimeClient<$Result.GetResult<Prisma.$usetimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
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
    usePassword: 'usePassword',
    name: 'name',
    avatar: 'avatar',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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


  export const EmailOtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type EmailOtpScalarFieldEnum = (typeof EmailOtpScalarFieldEnum)[keyof typeof EmailOtpScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isGroup: 'isGroup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const ConversationMemberScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type ConversationMemberScalarFieldEnum = (typeof ConversationMemberScalarFieldEnum)[keyof typeof ConversationMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    conversationId: 'conversationId',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usetimeOrderByRelevanceFieldEnum: {
    email: 'email',
    usePassword: 'usePassword',
    name: 'name',
    avatar: 'avatar'
  };

  export type usetimeOrderByRelevanceFieldEnum = (typeof usetimeOrderByRelevanceFieldEnum)[keyof typeof usetimeOrderByRelevanceFieldEnum]


  export const refestokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type refestokenOrderByRelevanceFieldEnum = (typeof refestokenOrderByRelevanceFieldEnum)[keyof typeof refestokenOrderByRelevanceFieldEnum]


  export const EmailOtpOrderByRelevanceFieldEnum: {
    email: 'email',
    otp: 'otp'
  };

  export type EmailOtpOrderByRelevanceFieldEnum = (typeof EmailOtpOrderByRelevanceFieldEnum)[keyof typeof EmailOtpOrderByRelevanceFieldEnum]


  export const ConversationOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ConversationOrderByRelevanceFieldEnum = (typeof ConversationOrderByRelevanceFieldEnum)[keyof typeof ConversationOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    name?: StringNullableFilter<"usetime"> | string | null
    avatar?: StringNullableFilter<"usetime"> | string | null
    isVerified?: BoolFilter<"usetime"> | boolean
    createdAt?: DateTimeFilter<"usetime"> | Date | string
    updatedAt?: DateTimeFilter<"usetime"> | Date | string
    refreshTokens?: RefestokenListRelationFilter
    messages?: MessageListRelationFilter
    conversationMembers?: ConversationMemberListRelationFilter
  }

  export type usetimeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: refestokenOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    conversationMembers?: ConversationMemberOrderByRelationAggregateInput
    _relevance?: usetimeOrderByRelevanceInput
  }

  export type usetimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usetimeWhereInput | usetimeWhereInput[]
    OR?: usetimeWhereInput[]
    NOT?: usetimeWhereInput | usetimeWhereInput[]
    usePassword?: StringFilter<"usetime"> | string
    name?: StringNullableFilter<"usetime"> | string | null
    avatar?: StringNullableFilter<"usetime"> | string | null
    isVerified?: BoolFilter<"usetime"> | boolean
    createdAt?: DateTimeFilter<"usetime"> | Date | string
    updatedAt?: DateTimeFilter<"usetime"> | Date | string
    refreshTokens?: RefestokenListRelationFilter
    messages?: MessageListRelationFilter
    conversationMembers?: ConversationMemberListRelationFilter
  }, "id" | "email">

  export type usetimeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"usetime"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"usetime"> | string | null
    isVerified?: BoolWithAggregatesFilter<"usetime"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"usetime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"usetime"> | Date | string
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

  export type EmailOtpWhereInput = {
    AND?: EmailOtpWhereInput | EmailOtpWhereInput[]
    OR?: EmailOtpWhereInput[]
    NOT?: EmailOtpWhereInput | EmailOtpWhereInput[]
    id?: IntFilter<"EmailOtp"> | number
    email?: StringFilter<"EmailOtp"> | string
    otp?: StringFilter<"EmailOtp"> | string
    expiresAt?: DateTimeFilter<"EmailOtp"> | Date | string
    createdAt?: DateTimeFilter<"EmailOtp"> | Date | string
  }

  export type EmailOtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _relevance?: EmailOtpOrderByRelevanceInput
  }

  export type EmailOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailOtpWhereInput | EmailOtpWhereInput[]
    OR?: EmailOtpWhereInput[]
    NOT?: EmailOtpWhereInput | EmailOtpWhereInput[]
    email?: StringFilter<"EmailOtp"> | string
    otp?: StringFilter<"EmailOtp"> | string
    expiresAt?: DateTimeFilter<"EmailOtp"> | Date | string
    createdAt?: DateTimeFilter<"EmailOtp"> | Date | string
  }, "id">

  export type EmailOtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmailOtpCountOrderByAggregateInput
    _avg?: EmailOtpAvgOrderByAggregateInput
    _max?: EmailOtpMaxOrderByAggregateInput
    _min?: EmailOtpMinOrderByAggregateInput
    _sum?: EmailOtpSumOrderByAggregateInput
  }

  export type EmailOtpScalarWhereWithAggregatesInput = {
    AND?: EmailOtpScalarWhereWithAggregatesInput | EmailOtpScalarWhereWithAggregatesInput[]
    OR?: EmailOtpScalarWhereWithAggregatesInput[]
    NOT?: EmailOtpScalarWhereWithAggregatesInput | EmailOtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailOtp"> | number
    email?: StringWithAggregatesFilter<"EmailOtp"> | string
    otp?: StringWithAggregatesFilter<"EmailOtp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailOtp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailOtp"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    name?: StringNullableFilter<"Conversation"> | string | null
    isGroup?: BoolFilter<"Conversation"> | boolean
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    members?: ConversationMemberListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: ConversationMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    _relevance?: ConversationOrderByRelevanceInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    name?: StringNullableFilter<"Conversation"> | string | null
    isGroup?: BoolFilter<"Conversation"> | boolean
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    members?: ConversationMemberListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    name?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    isGroup?: BoolWithAggregatesFilter<"Conversation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type ConversationMemberWhereInput = {
    AND?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    OR?: ConversationMemberWhereInput[]
    NOT?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    id?: IntFilter<"ConversationMember"> | number
    conversationId?: IntFilter<"ConversationMember"> | number
    userId?: IntFilter<"ConversationMember"> | number
    joinedAt?: DateTimeFilter<"ConversationMember"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
  }

  export type ConversationMemberOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    user?: usetimeOrderByWithRelationInput
  }

  export type ConversationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    conversationId_userId?: ConversationMemberConversationIdUserIdCompoundUniqueInput
    AND?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    OR?: ConversationMemberWhereInput[]
    NOT?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    conversationId?: IntFilter<"ConversationMember"> | number
    userId?: IntFilter<"ConversationMember"> | number
    joinedAt?: DateTimeFilter<"ConversationMember"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
  }, "id" | "conversationId_userId">

  export type ConversationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: ConversationMemberCountOrderByAggregateInput
    _avg?: ConversationMemberAvgOrderByAggregateInput
    _max?: ConversationMemberMaxOrderByAggregateInput
    _min?: ConversationMemberMinOrderByAggregateInput
    _sum?: ConversationMemberSumOrderByAggregateInput
  }

  export type ConversationMemberScalarWhereWithAggregatesInput = {
    AND?: ConversationMemberScalarWhereWithAggregatesInput | ConversationMemberScalarWhereWithAggregatesInput[]
    OR?: ConversationMemberScalarWhereWithAggregatesInput[]
    NOT?: ConversationMemberScalarWhereWithAggregatesInput | ConversationMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConversationMember"> | number
    conversationId?: IntWithAggregatesFilter<"ConversationMember"> | number
    userId?: IntWithAggregatesFilter<"ConversationMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"ConversationMember"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    sender?: usetimeOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UsetimeScalarRelationFilter, usetimeWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type usetimeCreateInput = {
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
  }

  export type usetimeUncheckedCreateInput = {
    id?: number
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type usetimeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
  }

  export type usetimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usetimeCreateManyInput = {
    id?: number
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usetimeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usetimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EmailOtpCreateInput = {
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailOtpUncheckedCreateInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailOtpUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpCreateManyInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailOtpUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMemberCreateNestedManyWithoutConversationInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMemberUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMemberUpdateManyWithoutConversationNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberCreateInput = {
    joinedAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMembersInput
    user: usetimeCreateNestedOneWithoutConversationMembersInput
  }

  export type ConversationMemberUncheckedCreateInput = {
    id?: number
    conversationId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ConversationMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMembersNestedInput
    user?: usetimeUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type ConversationMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberCreateManyInput = {
    id?: number
    conversationId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ConversationMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    sender: usetimeCreateNestedOneWithoutMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    senderId: number
    conversationId: number
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usetimeUpdateOneRequiredWithoutMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    senderId: number
    conversationId: number
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RefestokenListRelationFilter = {
    every?: refestokenWhereInput
    some?: refestokenWhereInput
    none?: refestokenWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ConversationMemberListRelationFilter = {
    every?: ConversationMemberWhereInput
    some?: ConversationMemberWhereInput
    none?: ConversationMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type refestokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationMemberOrderByRelationAggregateInput = {
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
    name?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usetimeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usetimeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usetimeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usePassword?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EmailOtpOrderByRelevanceInput = {
    fields: EmailOtpOrderByRelevanceFieldEnum | EmailOtpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmailOtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailOtpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailOtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailOtpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationOrderByRelevanceInput = {
    fields: ConversationOrderByRelevanceFieldEnum | ConversationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type ConversationMemberConversationIdUserIdCompoundUniqueInput = {
    conversationId: number
    userId: number
  }

  export type ConversationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ConversationMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ConversationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ConversationMemberSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
  }

  export type refestokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type refestokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refestokenCreateWithoutUserInput, refestokenUncheckedCreateWithoutUserInput> | refestokenCreateWithoutUserInput[] | refestokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refestokenCreateOrConnectWithoutUserInput | refestokenCreateOrConnectWithoutUserInput[]
    createMany?: refestokenCreateManyUserInputEnvelope
    connect?: refestokenWhereUniqueInput | refestokenWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutUserInput | ConversationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutUserInput | ConversationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutUserInput | ConversationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
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

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutUserInput | ConversationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutUserInput | ConversationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutUserInput | ConversationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type usetimeCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutRefreshTokensInput
    connect?: usetimeWhereUniqueInput
  }

  export type usetimeUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<usetimeCreateWithoutRefreshTokensInput, usetimeUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutRefreshTokensInput
    upsert?: usetimeUpsertWithoutRefreshTokensInput
    connect?: usetimeWhereUniqueInput
    update?: XOR<XOR<usetimeUpdateToOneWithWhereWithoutRefreshTokensInput, usetimeUpdateWithoutRefreshTokensInput>, usetimeUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type ConversationMemberCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutConversationInput | ConversationMemberUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutConversationInput | ConversationMemberUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutConversationInput | ConversationMemberUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutConversationInput | ConversationMemberUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutConversationInput | ConversationMemberUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutConversationInput | ConversationMemberUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMembersInput = {
    create?: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMembersInput
    connect?: ConversationWhereUniqueInput
  }

  export type usetimeCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<usetimeCreateWithoutConversationMembersInput, usetimeUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutConversationMembersInput
    connect?: usetimeWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMembersInput
    upsert?: ConversationUpsertWithoutMembersInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMembersInput, ConversationUpdateWithoutMembersInput>, ConversationUncheckedUpdateWithoutMembersInput>
  }

  export type usetimeUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<usetimeCreateWithoutConversationMembersInput, usetimeUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutConversationMembersInput
    upsert?: usetimeUpsertWithoutConversationMembersInput
    connect?: usetimeWhereUniqueInput
    update?: XOR<XOR<usetimeUpdateToOneWithWhereWithoutConversationMembersInput, usetimeUpdateWithoutConversationMembersInput>, usetimeUncheckedUpdateWithoutConversationMembersInput>
  }

  export type usetimeCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usetimeCreateWithoutMessagesInput, usetimeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutMessagesInput
    connect?: usetimeWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type usetimeUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usetimeCreateWithoutMessagesInput, usetimeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usetimeCreateOrConnectWithoutMessagesInput
    upsert?: usetimeUpsertWithoutMessagesInput
    connect?: usetimeWhereUniqueInput
    update?: XOR<XOR<usetimeUpdateToOneWithWhereWithoutMessagesInput, usetimeUpdateWithoutMessagesInput>, usetimeUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    conversationId: number
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMemberCreateWithoutUserInput = {
    joinedAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMembersInput
  }

  export type ConversationMemberUncheckedCreateWithoutUserInput = {
    id?: number
    conversationId: number
    joinedAt?: Date | string
  }

  export type ConversationMemberCreateOrConnectWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    create: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput>
  }

  export type ConversationMemberCreateManyUserInputEnvelope = {
    data: ConversationMemberCreateManyUserInput | ConversationMemberCreateManyUserInput[]
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

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    update: XOR<ConversationMemberUpdateWithoutUserInput, ConversationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput>
  }

  export type ConversationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    data: XOR<ConversationMemberUpdateWithoutUserInput, ConversationMemberUncheckedUpdateWithoutUserInput>
  }

  export type ConversationMemberUpdateManyWithWhereWithoutUserInput = {
    where: ConversationMemberScalarWhereInput
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationMemberScalarWhereInput = {
    AND?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
    OR?: ConversationMemberScalarWhereInput[]
    NOT?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
    id?: IntFilter<"ConversationMember"> | number
    conversationId?: IntFilter<"ConversationMember"> | number
    userId?: IntFilter<"ConversationMember"> | number
    joinedAt?: DateTimeFilter<"ConversationMember"> | Date | string
  }

  export type usetimeCreateWithoutRefreshTokensInput = {
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
  }

  export type usetimeUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
  }

  export type usetimeUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationMemberCreateWithoutConversationInput = {
    joinedAt?: Date | string
    user: usetimeCreateNestedOneWithoutConversationMembersInput
  }

  export type ConversationMemberUncheckedCreateWithoutConversationInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type ConversationMemberCreateOrConnectWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    create: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMemberCreateManyConversationInputEnvelope = {
    data: ConversationMemberCreateManyConversationInput | ConversationMemberCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutConversationInput = {
    content: string
    createdAt?: Date | string
    sender: usetimeCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    content: string
    senderId: number
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMemberUpsertWithWhereUniqueWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    update: XOR<ConversationMemberUpdateWithoutConversationInput, ConversationMemberUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMemberUpdateWithWhereUniqueWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    data: XOR<ConversationMemberUpdateWithoutConversationInput, ConversationMemberUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationMemberUpdateManyWithWhereWithoutConversationInput = {
    where: ConversationMemberScalarWhereInput
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMembersInput = {
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMembersInput = {
    id?: number
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMembersInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
  }

  export type usetimeCreateWithoutConversationMembersInput = {
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type usetimeUncheckedCreateWithoutConversationMembersInput = {
    id?: number
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usetimeCreateOrConnectWithoutConversationMembersInput = {
    where: usetimeWhereUniqueInput
    create: XOR<usetimeCreateWithoutConversationMembersInput, usetimeUncheckedCreateWithoutConversationMembersInput>
  }

  export type ConversationUpsertWithoutMembersInput = {
    update: XOR<ConversationUpdateWithoutMembersInput, ConversationUncheckedUpdateWithoutMembersInput>
    create: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMembersInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMembersInput, ConversationUncheckedUpdateWithoutMembersInput>
  }

  export type ConversationUpdateWithoutMembersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type usetimeUpsertWithoutConversationMembersInput = {
    update: XOR<usetimeUpdateWithoutConversationMembersInput, usetimeUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<usetimeCreateWithoutConversationMembersInput, usetimeUncheckedCreateWithoutConversationMembersInput>
    where?: usetimeWhereInput
  }

  export type usetimeUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: usetimeWhereInput
    data: XOR<usetimeUpdateWithoutConversationMembersInput, usetimeUncheckedUpdateWithoutConversationMembersInput>
  }

  export type usetimeUpdateWithoutConversationMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type usetimeUncheckedUpdateWithoutConversationMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type usetimeCreateWithoutMessagesInput = {
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
  }

  export type usetimeUncheckedCreateWithoutMessagesInput = {
    id?: number
    email: string
    usePassword: string
    name?: string | null
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refestokenUncheckedCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type usetimeCreateOrConnectWithoutMessagesInput = {
    where: usetimeWhereUniqueInput
    create: XOR<usetimeCreateWithoutMessagesInput, usetimeUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMemberCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    name?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMemberUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type usetimeUpsertWithoutMessagesInput = {
    update: XOR<usetimeUpdateWithoutMessagesInput, usetimeUncheckedUpdateWithoutMessagesInput>
    create: XOR<usetimeCreateWithoutMessagesInput, usetimeUncheckedCreateWithoutMessagesInput>
    where?: usetimeWhereInput
  }

  export type usetimeUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usetimeWhereInput
    data: XOR<usetimeUpdateWithoutMessagesInput, usetimeUncheckedUpdateWithoutMessagesInput>
  }

  export type usetimeUpdateWithoutMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
  }

  export type usetimeUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usePassword?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refestokenUncheckedUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMemberUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type refestokenCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    content: string
    conversationId: number
    createdAt?: Date | string
  }

  export type ConversationMemberCreateManyUserInput = {
    id?: number
    conversationId: number
    joinedAt?: Date | string
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

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ConversationMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberCreateManyConversationInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    content: string
    senderId: number
    createdAt?: Date | string
  }

  export type ConversationMemberUpdateWithoutConversationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usetimeUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type ConversationMemberUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usetimeUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
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