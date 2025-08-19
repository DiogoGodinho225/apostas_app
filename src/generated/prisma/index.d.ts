
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
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>
/**
 * Model TransactionType
 * 
 */
export type TransactionType = $Result.DefaultSelection<Prisma.$TransactionTypePayload>
/**
 * Model League
 * 
 */
export type League = $Result.DefaultSelection<Prisma.$LeaguePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model BetLine
 * 
 */
export type BetLine = $Result.DefaultSelection<Prisma.$BetLinePayload>
/**
 * Model TeamLeague
 * 
 */
export type TeamLeague = $Result.DefaultSelection<Prisma.$TeamLeaguePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bets
 * const bets = await prisma.bet.findMany()
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
   * // Fetch zero or more Bets
   * const bets = await prisma.bet.findMany()
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
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionType`: Exposes CRUD operations for the **TransactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTypes
    * const transactionTypes = await prisma.transactionType.findMany()
    * ```
    */
  get transactionType(): Prisma.TransactionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.league`: Exposes CRUD operations for the **League** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leagues
    * const leagues = await prisma.league.findMany()
    * ```
    */
  get league(): Prisma.LeagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.betLine`: Exposes CRUD operations for the **BetLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetLines
    * const betLines = await prisma.betLine.findMany()
    * ```
    */
  get betLine(): Prisma.BetLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamLeague`: Exposes CRUD operations for the **TeamLeague** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamLeagues
    * const teamLeagues = await prisma.teamLeague.findMany()
    * ```
    */
  get teamLeague(): Prisma.TeamLeagueDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Bet: 'Bet',
    Image: 'Image',
    User: 'User',
    Wallet: 'Wallet',
    WalletTransaction: 'WalletTransaction',
    TransactionType: 'TransactionType',
    League: 'League',
    Team: 'Team',
    BetLine: 'BetLine',
    TeamLeague: 'TeamLeague'
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
      modelProps: "bet" | "image" | "user" | "wallet" | "walletTransaction" | "transactionType" | "league" | "team" | "betLine" | "teamLeague"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionType: {
        payload: Prisma.$TransactionTypePayload<ExtArgs>
        fields: Prisma.TransactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findFirst: {
            args: Prisma.TransactionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findMany: {
            args: Prisma.TransactionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          create: {
            args: Prisma.TransactionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          createMany: {
            args: Prisma.TransactionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          update: {
            args: Prisma.TransactionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          aggregate: {
            args: Prisma.TransactionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionType>
          }
          groupBy: {
            args: Prisma.TransactionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeCountAggregateOutputType> | number
          }
        }
      }
      League: {
        payload: Prisma.$LeaguePayload<ExtArgs>
        fields: Prisma.LeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findFirst: {
            args: Prisma.LeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findMany: {
            args: Prisma.LeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          create: {
            args: Prisma.LeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          createMany: {
            args: Prisma.LeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          update: {
            args: Prisma.LeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          deleteMany: {
            args: Prisma.LeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          aggregate: {
            args: Prisma.LeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeague>
          }
          groupBy: {
            args: Prisma.LeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeagueCountArgs<ExtArgs>
            result: $Utils.Optional<LeagueCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      BetLine: {
        payload: Prisma.$BetLinePayload<ExtArgs>
        fields: Prisma.BetLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          findFirst: {
            args: Prisma.BetLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          findMany: {
            args: Prisma.BetLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>[]
          }
          create: {
            args: Prisma.BetLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          createMany: {
            args: Prisma.BetLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BetLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          update: {
            args: Prisma.BetLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          deleteMany: {
            args: Prisma.BetLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetLinePayload>
          }
          aggregate: {
            args: Prisma.BetLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetLine>
          }
          groupBy: {
            args: Prisma.BetLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetLineCountArgs<ExtArgs>
            result: $Utils.Optional<BetLineCountAggregateOutputType> | number
          }
        }
      }
      TeamLeague: {
        payload: Prisma.$TeamLeaguePayload<ExtArgs>
        fields: Prisma.TeamLeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamLeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamLeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          findFirst: {
            args: Prisma.TeamLeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamLeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          findMany: {
            args: Prisma.TeamLeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>[]
          }
          create: {
            args: Prisma.TeamLeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          createMany: {
            args: Prisma.TeamLeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamLeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          update: {
            args: Prisma.TeamLeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          deleteMany: {
            args: Prisma.TeamLeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamLeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamLeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaguePayload>
          }
          aggregate: {
            args: Prisma.TeamLeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamLeague>
          }
          groupBy: {
            args: Prisma.TeamLeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamLeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamLeagueCountArgs<ExtArgs>
            result: $Utils.Optional<TeamLeagueCountAggregateOutputType> | number
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
    bet?: BetOmit
    image?: ImageOmit
    user?: UserOmit
    wallet?: WalletOmit
    walletTransaction?: WalletTransactionOmit
    transactionType?: TransactionTypeOmit
    league?: LeagueOmit
    team?: TeamOmit
    betLine?: BetLineOmit
    teamLeague?: TeamLeagueOmit
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
   * Count Type BetCountOutputType
   */

  export type BetCountOutputType = {
    bet_lines: number
  }

  export type BetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet_lines?: boolean | BetCountOutputTypeCountBet_linesArgs
  }

  // Custom InputTypes
  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetCountOutputType
     */
    select?: BetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountBet_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetLineWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    users: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ImageCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bets: number
    walletTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | UserCountOutputTypeCountBetsArgs
    walletTransactions?: boolean | UserCountOutputTypeCountWalletTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }


  /**
   * Count Type TransactionTypeCountOutputType
   */

  export type TransactionTypeCountOutputType = {
    wallet_transactions: number
  }

  export type TransactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet_transactions?: boolean | TransactionTypeCountOutputTypeCountWallet_transactionsArgs
  }

  // Custom InputTypes
  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTypeCountOutputType
     */
    select?: TransactionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountWallet_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }


  /**
   * Count Type LeagueCountOutputType
   */

  export type LeagueCountOutputType = {
    bet_lines: number
    teams_leagues: number
  }

  export type LeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet_lines?: boolean | LeagueCountOutputTypeCountBet_linesArgs
    teams_leagues?: boolean | LeagueCountOutputTypeCountTeams_leaguesArgs
  }

  // Custom InputTypes
  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueCountOutputType
     */
    select?: LeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountBet_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetLineWhereInput
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountTeams_leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamLeagueWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    teams_leagues: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams_leagues?: boolean | TeamCountOutputTypeCountTeams_leaguesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeams_leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamLeagueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    bet_type: number | null
    stake: number | null
    odds: number | null
    profit: number | null
  }

  export type BetSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    bet_type: number | null
    stake: number | null
    odds: number | null
    profit: number | null
  }

  export type BetMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bet_type: number | null
    stake: number | null
    odds: number | null
    result: string | null
    profit: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BetMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bet_type: number | null
    stake: number | null
    odds: number | null
    result: string | null
    profit: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    user_id: number
    bet_type: number
    stake: number
    odds: number
    result: number
    profit: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    id?: true
    user_id?: true
    bet_type?: true
    stake?: true
    odds?: true
    profit?: true
  }

  export type BetSumAggregateInputType = {
    id?: true
    user_id?: true
    bet_type?: true
    stake?: true
    odds?: true
    profit?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    user_id?: true
    bet_type?: true
    stake?: true
    odds?: true
    result?: true
    profit?: true
    created_at?: true
    updated_at?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    user_id?: true
    bet_type?: true
    stake?: true
    odds?: true
    result?: true
    profit?: true
    created_at?: true
    updated_at?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    user_id?: true
    bet_type?: true
    stake?: true
    odds?: true
    result?: true
    profit?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: number
    user_id: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at: Date
    updated_at: Date
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bet_type?: boolean
    stake?: boolean
    odds?: boolean
    result?: boolean
    profit?: boolean
    created_at?: boolean
    updated_at?: boolean
    bet_lines?: boolean | Bet$bet_linesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>



  export type BetSelectScalar = {
    id?: boolean
    user_id?: boolean
    bet_type?: boolean
    stake?: boolean
    odds?: boolean
    result?: boolean
    profit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bet_type" | "stake" | "odds" | "result" | "profit" | "created_at" | "updated_at", ExtArgs["result"]["bet"]>
  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet_lines?: boolean | Bet$bet_linesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      bet_lines: Prisma.$BetLinePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bet_type: number
      stake: number
      odds: number
      result: string
      profit: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
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
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bet_lines<T extends Bet$bet_linesArgs<ExtArgs> = {}>(args?: Subset<T, Bet$bet_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'Int'>
    readonly user_id: FieldRef<"Bet", 'Int'>
    readonly bet_type: FieldRef<"Bet", 'Int'>
    readonly stake: FieldRef<"Bet", 'Int'>
    readonly odds: FieldRef<"Bet", 'Float'>
    readonly result: FieldRef<"Bet", 'String'>
    readonly profit: FieldRef<"Bet", 'Float'>
    readonly created_at: FieldRef<"Bet", 'DateTime'>
    readonly updated_at: FieldRef<"Bet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet.bet_lines
   */
  export type Bet$bet_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    where?: BetLineWhereInput
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    cursor?: BetLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetLineScalarFieldEnum | BetLineScalarFieldEnum[]
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    created_at: Date
    updated_at: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    leagues?: boolean | Image$leaguesArgs<ExtArgs>
    teams?: boolean | Image$teamsArgs<ExtArgs>
    users?: boolean | Image$usersArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "created_at" | "updated_at", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | Image$leaguesArgs<ExtArgs>
    teams?: boolean | Image$teamsArgs<ExtArgs>
    users?: boolean | Image$usersArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      leagues: Prisma.$LeaguePayload<ExtArgs> | null
      teams: Prisma.$TeamPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leagues<T extends Image$leaguesArgs<ExtArgs> = {}>(args?: Subset<T, Image$leaguesArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teams<T extends Image$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Image$teamsArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Image$usersArgs<ExtArgs> = {}>(args?: Subset<T, Image$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly created_at: FieldRef<"Image", 'DateTime'>
    readonly updated_at: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.leagues
   */
  export type Image$leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    where?: LeagueWhereInput
  }

  /**
   * Image.teams
   */
  export type Image$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Image.users
   */
  export type Image$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    profile_pic_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    profile_pic_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    profile_pic_id: number | null
    last_login: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    profile_pic_id: number | null
    last_login: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    profile_pic_id: number
    last_login: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    profile_pic_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    profile_pic_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    profile_pic_id?: true
    last_login?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    profile_pic_id?: true
    last_login?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    profile_pic_id?: true
    last_login?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password_hash: string
    profile_pic_id: number
    last_login: Date
    status: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    profile_pic_id?: boolean
    last_login?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    bets?: boolean | User$betsArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    walletTransactions?: boolean | User$walletTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    profile_pic_id?: boolean
    last_login?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "profile_pic_id" | "last_login" | "status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | User$betsArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    walletTransactions?: boolean | User$walletTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bets: Prisma.$BetPayload<ExtArgs>[]
      image: Prisma.$ImagePayload<ExtArgs>
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      walletTransactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password_hash: string
      profile_pic_id: number
      last_login: Date
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bets<T extends User$betsArgs<ExtArgs> = {}>(args?: Subset<T, User$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    walletTransactions<T extends User$walletTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$walletTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly profile_pic_id: FieldRef<"User", 'Int'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bets
   */
  export type User$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.walletTransactions
   */
  export type User$walletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: number | null
    stake: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: number | null
    stake: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: number | null
    stake: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: number | null
    stake: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    user_id: number
    balance: number
    stake: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
    stake?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
    stake?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
    stake?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
    stake?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
    stake?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    user_id: number
    balance: number
    stake: number
    created_at: Date
    updated_at: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    balance?: boolean
    stake?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>



  export type WalletSelectScalar = {
    id?: boolean
    user_id?: boolean
    balance?: boolean
    stake?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "balance" | "stake" | "created_at" | "updated_at", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      balance: number
      stake: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'Int'>
    readonly user_id: FieldRef<"Wallet", 'Int'>
    readonly balance: FieldRef<"Wallet", 'Float'>
    readonly stake: FieldRef<"Wallet", 'Float'>
    readonly created_at: FieldRef<"Wallet", 'DateTime'>
    readonly updated_at: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    type_id: number | null
    amount: number | null
    balance: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    type_id: number | null
    amount: number | null
    balance: number | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    type_id: number | null
    amount: number | null
    balance: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    type_id: number | null
    amount: number | null
    balance: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    user_id: number
    type_id: number
    amount: number
    balance: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    type_id?: true
    amount?: true
    balance?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    type_id?: true
    amount?: true
    balance?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    type_id?: true
    amount?: true
    balance?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    type_id?: true
    amount?: true
    balance?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    type_id?: true
    amount?: true
    balance?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: number
    user_id: number
    type_id: number
    amount: number
    balance: number
    created_at: Date
    updated_at: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type_id?: boolean
    amount?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>



  export type WalletTransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    type_id?: boolean
    amount?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type_id" | "amount" | "balance" | "created_at" | "updated_at", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      transaction_type: Prisma.$TransactionTypePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      type_id: number
      amount: number
      balance: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
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
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction_type<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WalletTransaction model
   */
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'Int'>
    readonly user_id: FieldRef<"WalletTransaction", 'Int'>
    readonly type_id: FieldRef<"WalletTransaction", 'Int'>
    readonly amount: FieldRef<"WalletTransaction", 'Float'>
    readonly balance: FieldRef<"WalletTransaction", 'Float'>
    readonly created_at: FieldRef<"WalletTransaction", 'DateTime'>
    readonly updated_at: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to delete.
     */
    limit?: number
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
  }


  /**
   * Model TransactionType
   */

  export type AggregateTransactionType = {
    _count: TransactionTypeCountAggregateOutputType | null
    _avg: TransactionTypeAvgAggregateOutputType | null
    _sum: TransactionTypeSumAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  export type TransactionTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TransactionTypeSumAggregateOutputType = {
    id: number | null
  }

  export type TransactionTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionTypeCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionTypeAvgAggregateInputType = {
    id?: true
  }

  export type TransactionTypeSumAggregateInputType = {
    id?: true
  }

  export type TransactionTypeMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionTypeMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionTypeCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionType to aggregate.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTypes
    **/
    _count?: true | TransactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type GetTransactionTypeAggregateType<T extends TransactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionType[P]>
      : GetScalarType<T[P], AggregateTransactionType[P]>
  }




  export type TransactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTypeWhereInput
    orderBy?: TransactionTypeOrderByWithAggregationInput | TransactionTypeOrderByWithAggregationInput[]
    by: TransactionTypeScalarFieldEnum[] | TransactionTypeScalarFieldEnum
    having?: TransactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTypeCountAggregateInputType | true
    _avg?: TransactionTypeAvgAggregateInputType
    _sum?: TransactionTypeSumAggregateInputType
    _min?: TransactionTypeMinAggregateInputType
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type TransactionTypeGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: TransactionTypeCountAggregateOutputType | null
    _avg: TransactionTypeAvgAggregateOutputType | null
    _sum: TransactionTypeSumAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  type GetTransactionTypeGroupByPayload<T extends TransactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    wallet_transactions?: boolean | TransactionType$wallet_transactionsArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionType"]>



  export type TransactionTypeSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TransactionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["transactionType"]>
  export type TransactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet_transactions?: boolean | TransactionType$wallet_transactionsArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionType"
    objects: {
      wallet_transactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["transactionType"]>
    composites: {}
  }

  type TransactionTypeGetPayload<S extends boolean | null | undefined | TransactionTypeDefaultArgs> = $Result.GetResult<Prisma.$TransactionTypePayload, S>

  type TransactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTypeCountAggregateInputType | true
    }

  export interface TransactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionType'], meta: { name: 'TransactionType' } }
    /**
     * Find zero or one TransactionType that matches the filter.
     * @param {TransactionTypeFindUniqueArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTypeFindUniqueArgs>(args: SelectSubset<T, TransactionTypeFindUniqueArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTypeFindUniqueOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTypeFindFirstArgs>(args?: SelectSubset<T, TransactionTypeFindFirstArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany()
     * 
     * // Get first 10 TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionTypeFindManyArgs>(args?: SelectSubset<T, TransactionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionType.
     * @param {TransactionTypeCreateArgs} args - Arguments to create a TransactionType.
     * @example
     * // Create one TransactionType
     * const TransactionType = await prisma.transactionType.create({
     *   data: {
     *     // ... data to create a TransactionType
     *   }
     * })
     * 
     */
    create<T extends TransactionTypeCreateArgs>(args: SelectSubset<T, TransactionTypeCreateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTypes.
     * @param {TransactionTypeCreateManyArgs} args - Arguments to create many TransactionTypes.
     * @example
     * // Create many TransactionTypes
     * const transactionType = await prisma.transactionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTypeCreateManyArgs>(args?: SelectSubset<T, TransactionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionType.
     * @param {TransactionTypeDeleteArgs} args - Arguments to delete one TransactionType.
     * @example
     * // Delete one TransactionType
     * const TransactionType = await prisma.transactionType.delete({
     *   where: {
     *     // ... filter to delete one TransactionType
     *   }
     * })
     * 
     */
    delete<T extends TransactionTypeDeleteArgs>(args: SelectSubset<T, TransactionTypeDeleteArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionType.
     * @param {TransactionTypeUpdateArgs} args - Arguments to update one TransactionType.
     * @example
     * // Update one TransactionType
     * const transactionType = await prisma.transactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTypeUpdateArgs>(args: SelectSubset<T, TransactionTypeUpdateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTypes.
     * @param {TransactionTypeDeleteManyArgs} args - Arguments to filter TransactionTypes to delete.
     * @example
     * // Delete a few TransactionTypes
     * const { count } = await prisma.transactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTypeDeleteManyArgs>(args?: SelectSubset<T, TransactionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTypeUpdateManyArgs>(args: SelectSubset<T, TransactionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionType.
     * @param {TransactionTypeUpsertArgs} args - Arguments to update or create a TransactionType.
     * @example
     * // Update or create a TransactionType
     * const transactionType = await prisma.transactionType.upsert({
     *   create: {
     *     // ... data to create a TransactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionType we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTypeUpsertArgs>(args: SelectSubset<T, TransactionTypeUpsertArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeCountArgs} args - Arguments to filter TransactionTypes to count.
     * @example
     * // Count the number of TransactionTypes
     * const count = await prisma.transactionType.count({
     *   where: {
     *     // ... the filter for the TransactionTypes we want to count
     *   }
     * })
    **/
    count<T extends TransactionTypeCountArgs>(
      args?: Subset<T, TransactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionTypeAggregateArgs>(args: Subset<T, TransactionTypeAggregateArgs>): Prisma.PrismaPromise<GetTransactionTypeAggregateType<T>>

    /**
     * Group by TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeGroupByArgs} args - Group by arguments.
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
      T extends TransactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionType model
   */
  readonly fields: TransactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet_transactions<T extends TransactionType$wallet_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, TransactionType$wallet_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TransactionType model
   */
  interface TransactionTypeFieldRefs {
    readonly id: FieldRef<"TransactionType", 'Int'>
    readonly name: FieldRef<"TransactionType", 'String'>
    readonly created_at: FieldRef<"TransactionType", 'DateTime'>
    readonly updated_at: FieldRef<"TransactionType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionType findUnique
   */
  export type TransactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findUniqueOrThrow
   */
  export type TransactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findFirst
   */
  export type TransactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findFirstOrThrow
   */
  export type TransactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findMany
   */
  export type TransactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTypes to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType create
   */
  export type TransactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionType.
     */
    data: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
  }

  /**
   * TransactionType createMany
   */
  export type TransactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionType update
   */
  export type TransactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionType.
     */
    data: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
    /**
     * Choose, which TransactionType to update.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType updateMany
   */
  export type TransactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to update.
     */
    limit?: number
  }

  /**
   * TransactionType upsert
   */
  export type TransactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionType to update in case it exists.
     */
    where: TransactionTypeWhereUniqueInput
    /**
     * In case the TransactionType found by the `where` argument doesn't exist, create a new TransactionType with this data.
     */
    create: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
    /**
     * In case the TransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
  }

  /**
   * TransactionType delete
   */
  export type TransactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter which TransactionType to delete.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType deleteMany
   */
  export type TransactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTypes to delete
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to delete.
     */
    limit?: number
  }

  /**
   * TransactionType.wallet_transactions
   */
  export type TransactionType$wallet_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * TransactionType without action
   */
  export type TransactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
  }


  /**
   * Model League
   */

  export type AggregateLeague = {
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  export type LeagueAvgAggregateOutputType = {
    id: number | null
    img_id: number | null
    type: number | null
    tier: number | null
  }

  export type LeagueSumAggregateOutputType = {
    id: number | null
    img_id: number | null
    type: number | null
    tier: number | null
  }

  export type LeagueMinAggregateOutputType = {
    id: number | null
    name: string | null
    img_id: number | null
    country: string | null
    type: number | null
    tier: number | null
    season: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeagueMaxAggregateOutputType = {
    id: number | null
    name: string | null
    img_id: number | null
    country: string | null
    type: number | null
    tier: number | null
    season: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeagueCountAggregateOutputType = {
    id: number
    name: number
    img_id: number
    country: number
    type: number
    tier: number
    season: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LeagueAvgAggregateInputType = {
    id?: true
    img_id?: true
    type?: true
    tier?: true
  }

  export type LeagueSumAggregateInputType = {
    id?: true
    img_id?: true
    type?: true
    tier?: true
  }

  export type LeagueMinAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    country?: true
    type?: true
    tier?: true
    season?: true
    created_at?: true
    updated_at?: true
  }

  export type LeagueMaxAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    country?: true
    type?: true
    tier?: true
    season?: true
    created_at?: true
    updated_at?: true
  }

  export type LeagueCountAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    country?: true
    type?: true
    tier?: true
    season?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which League to aggregate.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leagues
    **/
    _count?: true | LeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeagueMaxAggregateInputType
  }

  export type GetLeagueAggregateType<T extends LeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeague[P]>
      : GetScalarType<T[P], AggregateLeague[P]>
  }




  export type LeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithAggregationInput | LeagueOrderByWithAggregationInput[]
    by: LeagueScalarFieldEnum[] | LeagueScalarFieldEnum
    having?: LeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeagueCountAggregateInputType | true
    _avg?: LeagueAvgAggregateInputType
    _sum?: LeagueSumAggregateInputType
    _min?: LeagueMinAggregateInputType
    _max?: LeagueMaxAggregateInputType
  }

  export type LeagueGroupByOutputType = {
    id: number
    name: string
    img_id: number
    country: string
    type: number
    tier: number
    season: string
    created_at: Date
    updated_at: Date
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  type GetLeagueGroupByPayload<T extends LeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeagueGroupByOutputType[P]>
            : GetScalarType<T[P], LeagueGroupByOutputType[P]>
        }
      >
    >


  export type LeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img_id?: boolean
    country?: boolean
    type?: boolean
    tier?: boolean
    season?: boolean
    created_at?: boolean
    updated_at?: boolean
    bet_lines?: boolean | League$bet_linesArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
    teams_leagues?: boolean | League$teams_leaguesArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>



  export type LeagueSelectScalar = {
    id?: boolean
    name?: boolean
    img_id?: boolean
    country?: boolean
    type?: boolean
    tier?: boolean
    season?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img_id" | "country" | "type" | "tier" | "season" | "created_at" | "updated_at", ExtArgs["result"]["league"]>
  export type LeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet_lines?: boolean | League$bet_linesArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
    teams_leagues?: boolean | League$teams_leaguesArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "League"
    objects: {
      bet_lines: Prisma.$BetLinePayload<ExtArgs>[]
      image: Prisma.$ImagePayload<ExtArgs>
      teams_leagues: Prisma.$TeamLeaguePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      img_id: number
      country: string
      type: number
      tier: number
      season: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["league"]>
    composites: {}
  }

  type LeagueGetPayload<S extends boolean | null | undefined | LeagueDefaultArgs> = $Result.GetResult<Prisma.$LeaguePayload, S>

  type LeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeagueCountAggregateInputType | true
    }

  export interface LeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['League'], meta: { name: 'League' } }
    /**
     * Find zero or one League that matches the filter.
     * @param {LeagueFindUniqueArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueFindUniqueArgs>(args: SelectSubset<T, LeagueFindUniqueArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one League that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeagueFindUniqueOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, LeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueFindFirstArgs>(args?: SelectSubset<T, LeagueFindFirstArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, LeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.league.findMany()
     * 
     * // Get first 10 Leagues
     * const leagues = await prisma.league.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leagueWithIdOnly = await prisma.league.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeagueFindManyArgs>(args?: SelectSubset<T, LeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a League.
     * @param {LeagueCreateArgs} args - Arguments to create a League.
     * @example
     * // Create one League
     * const League = await prisma.league.create({
     *   data: {
     *     // ... data to create a League
     *   }
     * })
     * 
     */
    create<T extends LeagueCreateArgs>(args: SelectSubset<T, LeagueCreateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leagues.
     * @param {LeagueCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeagueCreateManyArgs>(args?: SelectSubset<T, LeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a League.
     * @param {LeagueDeleteArgs} args - Arguments to delete one League.
     * @example
     * // Delete one League
     * const League = await prisma.league.delete({
     *   where: {
     *     // ... filter to delete one League
     *   }
     * })
     * 
     */
    delete<T extends LeagueDeleteArgs>(args: SelectSubset<T, LeagueDeleteArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one League.
     * @param {LeagueUpdateArgs} args - Arguments to update one League.
     * @example
     * // Update one League
     * const league = await prisma.league.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeagueUpdateArgs>(args: SelectSubset<T, LeagueUpdateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leagues.
     * @param {LeagueDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.league.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeagueDeleteManyArgs>(args?: SelectSubset<T, LeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeagueUpdateManyArgs>(args: SelectSubset<T, LeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one League.
     * @param {LeagueUpsertArgs} args - Arguments to update or create a League.
     * @example
     * // Update or create a League
     * const league = await prisma.league.upsert({
     *   create: {
     *     // ... data to create a League
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the League we want to update
     *   }
     * })
     */
    upsert<T extends LeagueUpsertArgs>(args: SelectSubset<T, LeagueUpsertArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.league.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
    **/
    count<T extends LeagueCountArgs>(
      args?: Subset<T, LeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeagueAggregateArgs>(args: Subset<T, LeagueAggregateArgs>): Prisma.PrismaPromise<GetLeagueAggregateType<T>>

    /**
     * Group by League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueGroupByArgs} args - Group by arguments.
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
      T extends LeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueGroupByArgs['orderBy'] }
        : { orderBy?: LeagueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the League model
   */
  readonly fields: LeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for League.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bet_lines<T extends League$bet_linesArgs<ExtArgs> = {}>(args?: Subset<T, League$bet_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams_leagues<T extends League$teams_leaguesArgs<ExtArgs> = {}>(args?: Subset<T, League$teams_leaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the League model
   */
  interface LeagueFieldRefs {
    readonly id: FieldRef<"League", 'Int'>
    readonly name: FieldRef<"League", 'String'>
    readonly img_id: FieldRef<"League", 'Int'>
    readonly country: FieldRef<"League", 'String'>
    readonly type: FieldRef<"League", 'Int'>
    readonly tier: FieldRef<"League", 'Int'>
    readonly season: FieldRef<"League", 'String'>
    readonly created_at: FieldRef<"League", 'DateTime'>
    readonly updated_at: FieldRef<"League", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * League findUnique
   */
  export type LeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findUniqueOrThrow
   */
  export type LeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findFirst
   */
  export type LeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findFirstOrThrow
   */
  export type LeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findMany
   */
  export type LeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League create
   */
  export type LeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a League.
     */
    data: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
  }

  /**
   * League createMany
   */
  export type LeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * League update
   */
  export type LeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a League.
     */
    data: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
    /**
     * Choose, which League to update.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League updateMany
   */
  export type LeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput
    /**
     * Limit how many Leagues to update.
     */
    limit?: number
  }

  /**
   * League upsert
   */
  export type LeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the League to update in case it exists.
     */
    where: LeagueWhereUniqueInput
    /**
     * In case the League found by the `where` argument doesn't exist, create a new League with this data.
     */
    create: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
    /**
     * In case the League was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
  }

  /**
   * League delete
   */
  export type LeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter which League to delete.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League deleteMany
   */
  export type LeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leagues to delete
     */
    where?: LeagueWhereInput
    /**
     * Limit how many Leagues to delete.
     */
    limit?: number
  }

  /**
   * League.bet_lines
   */
  export type League$bet_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    where?: BetLineWhereInput
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    cursor?: BetLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetLineScalarFieldEnum | BetLineScalarFieldEnum[]
  }

  /**
   * League.teams_leagues
   */
  export type League$teams_leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    where?: TeamLeagueWhereInput
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    cursor?: TeamLeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamLeagueScalarFieldEnum | TeamLeagueScalarFieldEnum[]
  }

  /**
   * League without action
   */
  export type LeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    img_id: number | null
    founded_year: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    img_id: number | null
    founded_year: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    img_id: number | null
    short_name: string | null
    country: string | null
    founded_year: number | null
    stadium: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    img_id: number | null
    short_name: string | null
    country: string | null
    founded_year: number | null
    stadium: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    img_id: number
    short_name: number
    country: number
    founded_year: number
    stadium: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    img_id?: true
    founded_year?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    img_id?: true
    founded_year?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    short_name?: true
    country?: true
    founded_year?: true
    stadium?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    short_name?: true
    country?: true
    founded_year?: true
    stadium?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    img_id?: true
    short_name?: true
    country?: true
    founded_year?: true
    stadium?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    img_id: number
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at: Date
    updated_at: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img_id?: boolean
    short_name?: boolean
    country?: boolean
    founded_year?: boolean
    stadium?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | ImageDefaultArgs<ExtArgs>
    teams_leagues?: boolean | Team$teams_leaguesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    img_id?: boolean
    short_name?: boolean
    country?: boolean
    founded_year?: boolean
    stadium?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img_id" | "short_name" | "country" | "founded_year" | "stadium" | "created_at" | "updated_at", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ImageDefaultArgs<ExtArgs>
    teams_leagues?: boolean | Team$teams_leaguesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>
      teams_leagues: Prisma.$TeamLeaguePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      img_id: number
      short_name: string
      country: string
      founded_year: number
      stadium: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams_leagues<T extends Team$teams_leaguesArgs<ExtArgs> = {}>(args?: Subset<T, Team$teams_leaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly img_id: FieldRef<"Team", 'Int'>
    readonly short_name: FieldRef<"Team", 'String'>
    readonly country: FieldRef<"Team", 'String'>
    readonly founded_year: FieldRef<"Team", 'Int'>
    readonly stadium: FieldRef<"Team", 'String'>
    readonly created_at: FieldRef<"Team", 'DateTime'>
    readonly updated_at: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.teams_leagues
   */
  export type Team$teams_leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    where?: TeamLeagueWhereInput
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    cursor?: TeamLeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamLeagueScalarFieldEnum | TeamLeagueScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model BetLine
   */

  export type AggregateBetLine = {
    _count: BetLineCountAggregateOutputType | null
    _avg: BetLineAvgAggregateOutputType | null
    _sum: BetLineSumAggregateOutputType | null
    _min: BetLineMinAggregateOutputType | null
    _max: BetLineMaxAggregateOutputType | null
  }

  export type BetLineAvgAggregateOutputType = {
    id: number | null
    bet_id: number | null
    league_id: number | null
    odd: number | null
    status: number | null
  }

  export type BetLineSumAggregateOutputType = {
    id: number | null
    bet_id: number | null
    league_id: number | null
    odd: number | null
    status: number | null
  }

  export type BetLineMinAggregateOutputType = {
    id: number | null
    bet_id: number | null
    league_id: number | null
    match: string | null
    prediction: string | null
    odd: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BetLineMaxAggregateOutputType = {
    id: number | null
    bet_id: number | null
    league_id: number | null
    match: string | null
    prediction: string | null
    odd: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BetLineCountAggregateOutputType = {
    id: number
    bet_id: number
    league_id: number
    match: number
    prediction: number
    odd: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BetLineAvgAggregateInputType = {
    id?: true
    bet_id?: true
    league_id?: true
    odd?: true
    status?: true
  }

  export type BetLineSumAggregateInputType = {
    id?: true
    bet_id?: true
    league_id?: true
    odd?: true
    status?: true
  }

  export type BetLineMinAggregateInputType = {
    id?: true
    bet_id?: true
    league_id?: true
    match?: true
    prediction?: true
    odd?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BetLineMaxAggregateInputType = {
    id?: true
    bet_id?: true
    league_id?: true
    match?: true
    prediction?: true
    odd?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BetLineCountAggregateInputType = {
    id?: true
    bet_id?: true
    league_id?: true
    match?: true
    prediction?: true
    odd?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BetLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetLine to aggregate.
     */
    where?: BetLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetLines to fetch.
     */
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetLines
    **/
    _count?: true | BetLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetLineMaxAggregateInputType
  }

  export type GetBetLineAggregateType<T extends BetLineAggregateArgs> = {
        [P in keyof T & keyof AggregateBetLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetLine[P]>
      : GetScalarType<T[P], AggregateBetLine[P]>
  }




  export type BetLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetLineWhereInput
    orderBy?: BetLineOrderByWithAggregationInput | BetLineOrderByWithAggregationInput[]
    by: BetLineScalarFieldEnum[] | BetLineScalarFieldEnum
    having?: BetLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetLineCountAggregateInputType | true
    _avg?: BetLineAvgAggregateInputType
    _sum?: BetLineSumAggregateInputType
    _min?: BetLineMinAggregateInputType
    _max?: BetLineMaxAggregateInputType
  }

  export type BetLineGroupByOutputType = {
    id: number
    bet_id: number
    league_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at: Date
    updated_at: Date
    _count: BetLineCountAggregateOutputType | null
    _avg: BetLineAvgAggregateOutputType | null
    _sum: BetLineSumAggregateOutputType | null
    _min: BetLineMinAggregateOutputType | null
    _max: BetLineMaxAggregateOutputType | null
  }

  type GetBetLineGroupByPayload<T extends BetLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetLineGroupByOutputType[P]>
            : GetScalarType<T[P], BetLineGroupByOutputType[P]>
        }
      >
    >


  export type BetLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bet_id?: boolean
    league_id?: boolean
    match?: boolean
    prediction?: boolean
    odd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    bets?: boolean | BetDefaultArgs<ExtArgs>
    leagues?: boolean | LeagueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betLine"]>



  export type BetLineSelectScalar = {
    id?: boolean
    bet_id?: boolean
    league_id?: boolean
    match?: boolean
    prediction?: boolean
    odd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BetLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bet_id" | "league_id" | "match" | "prediction" | "odd" | "status" | "created_at" | "updated_at", ExtArgs["result"]["betLine"]>
  export type BetLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | BetDefaultArgs<ExtArgs>
    leagues?: boolean | LeagueDefaultArgs<ExtArgs>
  }

  export type $BetLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetLine"
    objects: {
      bets: Prisma.$BetPayload<ExtArgs>
      leagues: Prisma.$LeaguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bet_id: number
      league_id: number
      match: string
      prediction: string
      odd: number
      status: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["betLine"]>
    composites: {}
  }

  type BetLineGetPayload<S extends boolean | null | undefined | BetLineDefaultArgs> = $Result.GetResult<Prisma.$BetLinePayload, S>

  type BetLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetLineCountAggregateInputType | true
    }

  export interface BetLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetLine'], meta: { name: 'BetLine' } }
    /**
     * Find zero or one BetLine that matches the filter.
     * @param {BetLineFindUniqueArgs} args - Arguments to find a BetLine
     * @example
     * // Get one BetLine
     * const betLine = await prisma.betLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetLineFindUniqueArgs>(args: SelectSubset<T, BetLineFindUniqueArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BetLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetLineFindUniqueOrThrowArgs} args - Arguments to find a BetLine
     * @example
     * // Get one BetLine
     * const betLine = await prisma.betLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetLineFindUniqueOrThrowArgs>(args: SelectSubset<T, BetLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineFindFirstArgs} args - Arguments to find a BetLine
     * @example
     * // Get one BetLine
     * const betLine = await prisma.betLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetLineFindFirstArgs>(args?: SelectSubset<T, BetLineFindFirstArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineFindFirstOrThrowArgs} args - Arguments to find a BetLine
     * @example
     * // Get one BetLine
     * const betLine = await prisma.betLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetLineFindFirstOrThrowArgs>(args?: SelectSubset<T, BetLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BetLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetLines
     * const betLines = await prisma.betLine.findMany()
     * 
     * // Get first 10 BetLines
     * const betLines = await prisma.betLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betLineWithIdOnly = await prisma.betLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetLineFindManyArgs>(args?: SelectSubset<T, BetLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BetLine.
     * @param {BetLineCreateArgs} args - Arguments to create a BetLine.
     * @example
     * // Create one BetLine
     * const BetLine = await prisma.betLine.create({
     *   data: {
     *     // ... data to create a BetLine
     *   }
     * })
     * 
     */
    create<T extends BetLineCreateArgs>(args: SelectSubset<T, BetLineCreateArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BetLines.
     * @param {BetLineCreateManyArgs} args - Arguments to create many BetLines.
     * @example
     * // Create many BetLines
     * const betLine = await prisma.betLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetLineCreateManyArgs>(args?: SelectSubset<T, BetLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BetLine.
     * @param {BetLineDeleteArgs} args - Arguments to delete one BetLine.
     * @example
     * // Delete one BetLine
     * const BetLine = await prisma.betLine.delete({
     *   where: {
     *     // ... filter to delete one BetLine
     *   }
     * })
     * 
     */
    delete<T extends BetLineDeleteArgs>(args: SelectSubset<T, BetLineDeleteArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BetLine.
     * @param {BetLineUpdateArgs} args - Arguments to update one BetLine.
     * @example
     * // Update one BetLine
     * const betLine = await prisma.betLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetLineUpdateArgs>(args: SelectSubset<T, BetLineUpdateArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BetLines.
     * @param {BetLineDeleteManyArgs} args - Arguments to filter BetLines to delete.
     * @example
     * // Delete a few BetLines
     * const { count } = await prisma.betLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetLineDeleteManyArgs>(args?: SelectSubset<T, BetLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetLines
     * const betLine = await prisma.betLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetLineUpdateManyArgs>(args: SelectSubset<T, BetLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetLine.
     * @param {BetLineUpsertArgs} args - Arguments to update or create a BetLine.
     * @example
     * // Update or create a BetLine
     * const betLine = await prisma.betLine.upsert({
     *   create: {
     *     // ... data to create a BetLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetLine we want to update
     *   }
     * })
     */
    upsert<T extends BetLineUpsertArgs>(args: SelectSubset<T, BetLineUpsertArgs<ExtArgs>>): Prisma__BetLineClient<$Result.GetResult<Prisma.$BetLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BetLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineCountArgs} args - Arguments to filter BetLines to count.
     * @example
     * // Count the number of BetLines
     * const count = await prisma.betLine.count({
     *   where: {
     *     // ... the filter for the BetLines we want to count
     *   }
     * })
    **/
    count<T extends BetLineCountArgs>(
      args?: Subset<T, BetLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetLineAggregateArgs>(args: Subset<T, BetLineAggregateArgs>): Prisma.PrismaPromise<GetBetLineAggregateType<T>>

    /**
     * Group by BetLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetLineGroupByArgs} args - Group by arguments.
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
      T extends BetLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetLineGroupByArgs['orderBy'] }
        : { orderBy?: BetLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetLine model
   */
  readonly fields: BetLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bets<T extends BetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BetDefaultArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leagues<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BetLine model
   */
  interface BetLineFieldRefs {
    readonly id: FieldRef<"BetLine", 'Int'>
    readonly bet_id: FieldRef<"BetLine", 'Int'>
    readonly league_id: FieldRef<"BetLine", 'Int'>
    readonly match: FieldRef<"BetLine", 'String'>
    readonly prediction: FieldRef<"BetLine", 'String'>
    readonly odd: FieldRef<"BetLine", 'Float'>
    readonly status: FieldRef<"BetLine", 'Int'>
    readonly created_at: FieldRef<"BetLine", 'DateTime'>
    readonly updated_at: FieldRef<"BetLine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetLine findUnique
   */
  export type BetLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter, which BetLine to fetch.
     */
    where: BetLineWhereUniqueInput
  }

  /**
   * BetLine findUniqueOrThrow
   */
  export type BetLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter, which BetLine to fetch.
     */
    where: BetLineWhereUniqueInput
  }

  /**
   * BetLine findFirst
   */
  export type BetLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter, which BetLine to fetch.
     */
    where?: BetLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetLines to fetch.
     */
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetLines.
     */
    cursor?: BetLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetLines.
     */
    distinct?: BetLineScalarFieldEnum | BetLineScalarFieldEnum[]
  }

  /**
   * BetLine findFirstOrThrow
   */
  export type BetLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter, which BetLine to fetch.
     */
    where?: BetLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetLines to fetch.
     */
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetLines.
     */
    cursor?: BetLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetLines.
     */
    distinct?: BetLineScalarFieldEnum | BetLineScalarFieldEnum[]
  }

  /**
   * BetLine findMany
   */
  export type BetLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter, which BetLines to fetch.
     */
    where?: BetLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetLines to fetch.
     */
    orderBy?: BetLineOrderByWithRelationInput | BetLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetLines.
     */
    cursor?: BetLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetLines.
     */
    skip?: number
    distinct?: BetLineScalarFieldEnum | BetLineScalarFieldEnum[]
  }

  /**
   * BetLine create
   */
  export type BetLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * The data needed to create a BetLine.
     */
    data: XOR<BetLineCreateInput, BetLineUncheckedCreateInput>
  }

  /**
   * BetLine createMany
   */
  export type BetLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetLines.
     */
    data: BetLineCreateManyInput | BetLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetLine update
   */
  export type BetLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * The data needed to update a BetLine.
     */
    data: XOR<BetLineUpdateInput, BetLineUncheckedUpdateInput>
    /**
     * Choose, which BetLine to update.
     */
    where: BetLineWhereUniqueInput
  }

  /**
   * BetLine updateMany
   */
  export type BetLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetLines.
     */
    data: XOR<BetLineUpdateManyMutationInput, BetLineUncheckedUpdateManyInput>
    /**
     * Filter which BetLines to update
     */
    where?: BetLineWhereInput
    /**
     * Limit how many BetLines to update.
     */
    limit?: number
  }

  /**
   * BetLine upsert
   */
  export type BetLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * The filter to search for the BetLine to update in case it exists.
     */
    where: BetLineWhereUniqueInput
    /**
     * In case the BetLine found by the `where` argument doesn't exist, create a new BetLine with this data.
     */
    create: XOR<BetLineCreateInput, BetLineUncheckedCreateInput>
    /**
     * In case the BetLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetLineUpdateInput, BetLineUncheckedUpdateInput>
  }

  /**
   * BetLine delete
   */
  export type BetLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
    /**
     * Filter which BetLine to delete.
     */
    where: BetLineWhereUniqueInput
  }

  /**
   * BetLine deleteMany
   */
  export type BetLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetLines to delete
     */
    where?: BetLineWhereInput
    /**
     * Limit how many BetLines to delete.
     */
    limit?: number
  }

  /**
   * BetLine without action
   */
  export type BetLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetLine
     */
    select?: BetLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetLine
     */
    omit?: BetLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetLineInclude<ExtArgs> | null
  }


  /**
   * Model TeamLeague
   */

  export type AggregateTeamLeague = {
    _count: TeamLeagueCountAggregateOutputType | null
    _avg: TeamLeagueAvgAggregateOutputType | null
    _sum: TeamLeagueSumAggregateOutputType | null
    _min: TeamLeagueMinAggregateOutputType | null
    _max: TeamLeagueMaxAggregateOutputType | null
  }

  export type TeamLeagueAvgAggregateOutputType = {
    team_id: number | null
    league_id: number | null
  }

  export type TeamLeagueSumAggregateOutputType = {
    team_id: number | null
    league_id: number | null
  }

  export type TeamLeagueMinAggregateOutputType = {
    team_id: number | null
    league_id: number | null
  }

  export type TeamLeagueMaxAggregateOutputType = {
    team_id: number | null
    league_id: number | null
  }

  export type TeamLeagueCountAggregateOutputType = {
    team_id: number
    league_id: number
    _all: number
  }


  export type TeamLeagueAvgAggregateInputType = {
    team_id?: true
    league_id?: true
  }

  export type TeamLeagueSumAggregateInputType = {
    team_id?: true
    league_id?: true
  }

  export type TeamLeagueMinAggregateInputType = {
    team_id?: true
    league_id?: true
  }

  export type TeamLeagueMaxAggregateInputType = {
    team_id?: true
    league_id?: true
  }

  export type TeamLeagueCountAggregateInputType = {
    team_id?: true
    league_id?: true
    _all?: true
  }

  export type TeamLeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamLeague to aggregate.
     */
    where?: TeamLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeagues to fetch.
     */
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamLeagues
    **/
    _count?: true | TeamLeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamLeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamLeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamLeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamLeagueMaxAggregateInputType
  }

  export type GetTeamLeagueAggregateType<T extends TeamLeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamLeague[P]>
      : GetScalarType<T[P], AggregateTeamLeague[P]>
  }




  export type TeamLeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamLeagueWhereInput
    orderBy?: TeamLeagueOrderByWithAggregationInput | TeamLeagueOrderByWithAggregationInput[]
    by: TeamLeagueScalarFieldEnum[] | TeamLeagueScalarFieldEnum
    having?: TeamLeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamLeagueCountAggregateInputType | true
    _avg?: TeamLeagueAvgAggregateInputType
    _sum?: TeamLeagueSumAggregateInputType
    _min?: TeamLeagueMinAggregateInputType
    _max?: TeamLeagueMaxAggregateInputType
  }

  export type TeamLeagueGroupByOutputType = {
    team_id: number
    league_id: number
    _count: TeamLeagueCountAggregateOutputType | null
    _avg: TeamLeagueAvgAggregateOutputType | null
    _sum: TeamLeagueSumAggregateOutputType | null
    _min: TeamLeagueMinAggregateOutputType | null
    _max: TeamLeagueMaxAggregateOutputType | null
  }

  type GetTeamLeagueGroupByPayload<T extends TeamLeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamLeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamLeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamLeagueGroupByOutputType[P]>
            : GetScalarType<T[P], TeamLeagueGroupByOutputType[P]>
        }
      >
    >


  export type TeamLeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    league_id?: boolean
    leagues?: boolean | LeagueDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamLeague"]>



  export type TeamLeagueSelectScalar = {
    team_id?: boolean
    league_id?: boolean
  }

  export type TeamLeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "league_id", ExtArgs["result"]["teamLeague"]>
  export type TeamLeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | LeagueDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamLeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamLeague"
    objects: {
      leagues: Prisma.$LeaguePayload<ExtArgs>
      teams: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      league_id: number
    }, ExtArgs["result"]["teamLeague"]>
    composites: {}
  }

  type TeamLeagueGetPayload<S extends boolean | null | undefined | TeamLeagueDefaultArgs> = $Result.GetResult<Prisma.$TeamLeaguePayload, S>

  type TeamLeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamLeagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamLeagueCountAggregateInputType | true
    }

  export interface TeamLeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamLeague'], meta: { name: 'TeamLeague' } }
    /**
     * Find zero or one TeamLeague that matches the filter.
     * @param {TeamLeagueFindUniqueArgs} args - Arguments to find a TeamLeague
     * @example
     * // Get one TeamLeague
     * const teamLeague = await prisma.teamLeague.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamLeagueFindUniqueArgs>(args: SelectSubset<T, TeamLeagueFindUniqueArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamLeague that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamLeagueFindUniqueOrThrowArgs} args - Arguments to find a TeamLeague
     * @example
     * // Get one TeamLeague
     * const teamLeague = await prisma.teamLeague.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamLeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamLeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamLeague that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueFindFirstArgs} args - Arguments to find a TeamLeague
     * @example
     * // Get one TeamLeague
     * const teamLeague = await prisma.teamLeague.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamLeagueFindFirstArgs>(args?: SelectSubset<T, TeamLeagueFindFirstArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamLeague that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueFindFirstOrThrowArgs} args - Arguments to find a TeamLeague
     * @example
     * // Get one TeamLeague
     * const teamLeague = await prisma.teamLeague.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamLeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamLeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamLeagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamLeagues
     * const teamLeagues = await prisma.teamLeague.findMany()
     * 
     * // Get first 10 TeamLeagues
     * const teamLeagues = await prisma.teamLeague.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const teamLeagueWithTeam_idOnly = await prisma.teamLeague.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends TeamLeagueFindManyArgs>(args?: SelectSubset<T, TeamLeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamLeague.
     * @param {TeamLeagueCreateArgs} args - Arguments to create a TeamLeague.
     * @example
     * // Create one TeamLeague
     * const TeamLeague = await prisma.teamLeague.create({
     *   data: {
     *     // ... data to create a TeamLeague
     *   }
     * })
     * 
     */
    create<T extends TeamLeagueCreateArgs>(args: SelectSubset<T, TeamLeagueCreateArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamLeagues.
     * @param {TeamLeagueCreateManyArgs} args - Arguments to create many TeamLeagues.
     * @example
     * // Create many TeamLeagues
     * const teamLeague = await prisma.teamLeague.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamLeagueCreateManyArgs>(args?: SelectSubset<T, TeamLeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamLeague.
     * @param {TeamLeagueDeleteArgs} args - Arguments to delete one TeamLeague.
     * @example
     * // Delete one TeamLeague
     * const TeamLeague = await prisma.teamLeague.delete({
     *   where: {
     *     // ... filter to delete one TeamLeague
     *   }
     * })
     * 
     */
    delete<T extends TeamLeagueDeleteArgs>(args: SelectSubset<T, TeamLeagueDeleteArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamLeague.
     * @param {TeamLeagueUpdateArgs} args - Arguments to update one TeamLeague.
     * @example
     * // Update one TeamLeague
     * const teamLeague = await prisma.teamLeague.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamLeagueUpdateArgs>(args: SelectSubset<T, TeamLeagueUpdateArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamLeagues.
     * @param {TeamLeagueDeleteManyArgs} args - Arguments to filter TeamLeagues to delete.
     * @example
     * // Delete a few TeamLeagues
     * const { count } = await prisma.teamLeague.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamLeagueDeleteManyArgs>(args?: SelectSubset<T, TeamLeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamLeagues
     * const teamLeague = await prisma.teamLeague.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamLeagueUpdateManyArgs>(args: SelectSubset<T, TeamLeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamLeague.
     * @param {TeamLeagueUpsertArgs} args - Arguments to update or create a TeamLeague.
     * @example
     * // Update or create a TeamLeague
     * const teamLeague = await prisma.teamLeague.upsert({
     *   create: {
     *     // ... data to create a TeamLeague
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamLeague we want to update
     *   }
     * })
     */
    upsert<T extends TeamLeagueUpsertArgs>(args: SelectSubset<T, TeamLeagueUpsertArgs<ExtArgs>>): Prisma__TeamLeagueClient<$Result.GetResult<Prisma.$TeamLeaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueCountArgs} args - Arguments to filter TeamLeagues to count.
     * @example
     * // Count the number of TeamLeagues
     * const count = await prisma.teamLeague.count({
     *   where: {
     *     // ... the filter for the TeamLeagues we want to count
     *   }
     * })
    **/
    count<T extends TeamLeagueCountArgs>(
      args?: Subset<T, TeamLeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamLeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamLeagueAggregateArgs>(args: Subset<T, TeamLeagueAggregateArgs>): Prisma.PrismaPromise<GetTeamLeagueAggregateType<T>>

    /**
     * Group by TeamLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeagueGroupByArgs} args - Group by arguments.
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
      T extends TeamLeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamLeagueGroupByArgs['orderBy'] }
        : { orderBy?: TeamLeagueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamLeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamLeague model
   */
  readonly fields: TeamLeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamLeague.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamLeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leagues<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamLeague model
   */
  interface TeamLeagueFieldRefs {
    readonly team_id: FieldRef<"TeamLeague", 'Int'>
    readonly league_id: FieldRef<"TeamLeague", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamLeague findUnique
   */
  export type TeamLeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeague to fetch.
     */
    where: TeamLeagueWhereUniqueInput
  }

  /**
   * TeamLeague findUniqueOrThrow
   */
  export type TeamLeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeague to fetch.
     */
    where: TeamLeagueWhereUniqueInput
  }

  /**
   * TeamLeague findFirst
   */
  export type TeamLeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeague to fetch.
     */
    where?: TeamLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeagues to fetch.
     */
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamLeagues.
     */
    cursor?: TeamLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamLeagues.
     */
    distinct?: TeamLeagueScalarFieldEnum | TeamLeagueScalarFieldEnum[]
  }

  /**
   * TeamLeague findFirstOrThrow
   */
  export type TeamLeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeague to fetch.
     */
    where?: TeamLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeagues to fetch.
     */
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamLeagues.
     */
    cursor?: TeamLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamLeagues.
     */
    distinct?: TeamLeagueScalarFieldEnum | TeamLeagueScalarFieldEnum[]
  }

  /**
   * TeamLeague findMany
   */
  export type TeamLeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeagues to fetch.
     */
    where?: TeamLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeagues to fetch.
     */
    orderBy?: TeamLeagueOrderByWithRelationInput | TeamLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamLeagues.
     */
    cursor?: TeamLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeagues.
     */
    skip?: number
    distinct?: TeamLeagueScalarFieldEnum | TeamLeagueScalarFieldEnum[]
  }

  /**
   * TeamLeague create
   */
  export type TeamLeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamLeague.
     */
    data: XOR<TeamLeagueCreateInput, TeamLeagueUncheckedCreateInput>
  }

  /**
   * TeamLeague createMany
   */
  export type TeamLeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamLeagues.
     */
    data: TeamLeagueCreateManyInput | TeamLeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamLeague update
   */
  export type TeamLeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamLeague.
     */
    data: XOR<TeamLeagueUpdateInput, TeamLeagueUncheckedUpdateInput>
    /**
     * Choose, which TeamLeague to update.
     */
    where: TeamLeagueWhereUniqueInput
  }

  /**
   * TeamLeague updateMany
   */
  export type TeamLeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamLeagues.
     */
    data: XOR<TeamLeagueUpdateManyMutationInput, TeamLeagueUncheckedUpdateManyInput>
    /**
     * Filter which TeamLeagues to update
     */
    where?: TeamLeagueWhereInput
    /**
     * Limit how many TeamLeagues to update.
     */
    limit?: number
  }

  /**
   * TeamLeague upsert
   */
  export type TeamLeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamLeague to update in case it exists.
     */
    where: TeamLeagueWhereUniqueInput
    /**
     * In case the TeamLeague found by the `where` argument doesn't exist, create a new TeamLeague with this data.
     */
    create: XOR<TeamLeagueCreateInput, TeamLeagueUncheckedCreateInput>
    /**
     * In case the TeamLeague was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamLeagueUpdateInput, TeamLeagueUncheckedUpdateInput>
  }

  /**
   * TeamLeague delete
   */
  export type TeamLeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
    /**
     * Filter which TeamLeague to delete.
     */
    where: TeamLeagueWhereUniqueInput
  }

  /**
   * TeamLeague deleteMany
   */
  export type TeamLeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamLeagues to delete
     */
    where?: TeamLeagueWhereInput
    /**
     * Limit how many TeamLeagues to delete.
     */
    limit?: number
  }

  /**
   * TeamLeague without action
   */
  export type TeamLeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeague
     */
    select?: TeamLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeague
     */
    omit?: TeamLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeagueInclude<ExtArgs> | null
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


  export const BetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bet_type: 'bet_type',
    stake: 'stake',
    odds: 'odds',
    result: 'result',
    profit: 'profit',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    profile_pic_id: 'profile_pic_id',
    last_login: 'last_login',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    balance: 'balance',
    stake: 'stake',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type_id: 'type_id',
    amount: 'amount',
    balance: 'balance',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const TransactionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionTypeScalarFieldEnum = (typeof TransactionTypeScalarFieldEnum)[keyof typeof TransactionTypeScalarFieldEnum]


  export const LeagueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img_id: 'img_id',
    country: 'country',
    type: 'type',
    tier: 'tier',
    season: 'season',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LeagueScalarFieldEnum = (typeof LeagueScalarFieldEnum)[keyof typeof LeagueScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img_id: 'img_id',
    short_name: 'short_name',
    country: 'country',
    founded_year: 'founded_year',
    stadium: 'stadium',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const BetLineScalarFieldEnum: {
    id: 'id',
    bet_id: 'bet_id',
    league_id: 'league_id',
    match: 'match',
    prediction: 'prediction',
    odd: 'odd',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BetLineScalarFieldEnum = (typeof BetLineScalarFieldEnum)[keyof typeof BetLineScalarFieldEnum]


  export const TeamLeagueScalarFieldEnum: {
    team_id: 'team_id',
    league_id: 'league_id'
  };

  export type TeamLeagueScalarFieldEnum = (typeof TeamLeagueScalarFieldEnum)[keyof typeof TeamLeagueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const BetOrderByRelevanceFieldEnum: {
    result: 'result'
  };

  export type BetOrderByRelevanceFieldEnum = (typeof BetOrderByRelevanceFieldEnum)[keyof typeof BetOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    status: 'status'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TransactionTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TransactionTypeOrderByRelevanceFieldEnum = (typeof TransactionTypeOrderByRelevanceFieldEnum)[keyof typeof TransactionTypeOrderByRelevanceFieldEnum]


  export const LeagueOrderByRelevanceFieldEnum: {
    name: 'name',
    country: 'country',
    season: 'season'
  };

  export type LeagueOrderByRelevanceFieldEnum = (typeof LeagueOrderByRelevanceFieldEnum)[keyof typeof LeagueOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    name: 'name',
    short_name: 'short_name',
    country: 'country',
    stadium: 'stadium'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  export const BetLineOrderByRelevanceFieldEnum: {
    match: 'match',
    prediction: 'prediction'
  };

  export type BetLineOrderByRelevanceFieldEnum = (typeof BetLineOrderByRelevanceFieldEnum)[keyof typeof BetLineOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: IntFilter<"Bet"> | number
    user_id?: IntFilter<"Bet"> | number
    bet_type?: IntFilter<"Bet"> | number
    stake?: IntFilter<"Bet"> | number
    odds?: FloatFilter<"Bet"> | number
    result?: StringFilter<"Bet"> | string
    profit?: FloatFilter<"Bet"> | number
    created_at?: DateTimeFilter<"Bet"> | Date | string
    updated_at?: DateTimeFilter<"Bet"> | Date | string
    bet_lines?: BetLineListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    result?: SortOrder
    profit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bet_lines?: BetLineOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: BetOrderByRelevanceInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    user_id?: IntFilter<"Bet"> | number
    bet_type?: IntFilter<"Bet"> | number
    stake?: IntFilter<"Bet"> | number
    odds?: FloatFilter<"Bet"> | number
    result?: StringFilter<"Bet"> | string
    profit?: FloatFilter<"Bet"> | number
    created_at?: DateTimeFilter<"Bet"> | Date | string
    updated_at?: DateTimeFilter<"Bet"> | Date | string
    bet_lines?: BetLineListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    result?: SortOrder
    profit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bet"> | number
    user_id?: IntWithAggregatesFilter<"Bet"> | number
    bet_type?: IntWithAggregatesFilter<"Bet"> | number
    stake?: IntWithAggregatesFilter<"Bet"> | number
    odds?: FloatWithAggregatesFilter<"Bet"> | number
    result?: StringWithAggregatesFilter<"Bet"> | string
    profit?: FloatWithAggregatesFilter<"Bet"> | number
    created_at?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    leagues?: XOR<LeagueNullableScalarRelationFilter, LeagueWhereInput> | null
    teams?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    users?: UserListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leagues?: LeagueOrderByWithRelationInput
    teams?: TeamOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    leagues?: XOR<LeagueNullableScalarRelationFilter, LeagueWhereInput> | null
    teams?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    users?: UserListRelationFilter
  }, "id" | "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    created_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    profile_pic_id?: IntFilter<"User"> | number
    last_login?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    bets?: BetListRelationFilter
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    walletTransactions?: WalletTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    profile_pic_id?: SortOrder
    last_login?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bets?: BetOrderByRelationAggregateInput
    image?: ImageOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
    walletTransactions?: WalletTransactionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    profile_pic_id?: IntFilter<"User"> | number
    last_login?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    bets?: BetListRelationFilter
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    walletTransactions?: WalletTransactionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    profile_pic_id?: SortOrder
    last_login?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    profile_pic_id?: IntWithAggregatesFilter<"User"> | number
    last_login?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    balance?: FloatFilter<"Wallet"> | number
    stake?: FloatFilter<"Wallet"> | number
    created_at?: DateTimeFilter<"Wallet"> | Date | string
    updated_at?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: FloatFilter<"Wallet"> | number
    stake?: FloatFilter<"Wallet"> | number
    created_at?: DateTimeFilter<"Wallet"> | Date | string
    updated_at?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wallet"> | number
    user_id?: IntWithAggregatesFilter<"Wallet"> | number
    balance?: FloatWithAggregatesFilter<"Wallet"> | number
    stake?: FloatWithAggregatesFilter<"Wallet"> | number
    created_at?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: IntFilter<"WalletTransaction"> | number
    user_id?: IntFilter<"WalletTransaction"> | number
    type_id?: IntFilter<"WalletTransaction"> | number
    amount?: FloatFilter<"WalletTransaction"> | number
    balance?: FloatFilter<"WalletTransaction"> | number
    created_at?: DateTimeFilter<"WalletTransaction"> | Date | string
    updated_at?: DateTimeFilter<"WalletTransaction"> | Date | string
    transaction_type?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type?: TransactionTypeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    user_id?: IntFilter<"WalletTransaction"> | number
    type_id?: IntFilter<"WalletTransaction"> | number
    amount?: FloatFilter<"WalletTransaction"> | number
    balance?: FloatFilter<"WalletTransaction"> | number
    created_at?: DateTimeFilter<"WalletTransaction"> | Date | string
    updated_at?: DateTimeFilter<"WalletTransaction"> | Date | string
    transaction_type?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WalletTransaction"> | number
    user_id?: IntWithAggregatesFilter<"WalletTransaction"> | number
    type_id?: IntWithAggregatesFilter<"WalletTransaction"> | number
    amount?: FloatWithAggregatesFilter<"WalletTransaction"> | number
    balance?: FloatWithAggregatesFilter<"WalletTransaction"> | number
    created_at?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type TransactionTypeWhereInput = {
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    id?: IntFilter<"TransactionType"> | number
    name?: StringFilter<"TransactionType"> | string
    created_at?: DateTimeFilter<"TransactionType"> | Date | string
    updated_at?: DateTimeFilter<"TransactionType"> | Date | string
    wallet_transactions?: WalletTransactionListRelationFilter
  }

  export type TransactionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    wallet_transactions?: WalletTransactionOrderByRelationAggregateInput
    _relevance?: TransactionTypeOrderByRelevanceInput
  }

  export type TransactionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    name?: StringFilter<"TransactionType"> | string
    created_at?: DateTimeFilter<"TransactionType"> | Date | string
    updated_at?: DateTimeFilter<"TransactionType"> | Date | string
    wallet_transactions?: WalletTransactionListRelationFilter
  }, "id" | "id">

  export type TransactionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TransactionTypeCountOrderByAggregateInput
    _avg?: TransactionTypeAvgOrderByAggregateInput
    _max?: TransactionTypeMaxOrderByAggregateInput
    _min?: TransactionTypeMinOrderByAggregateInput
    _sum?: TransactionTypeSumOrderByAggregateInput
  }

  export type TransactionTypeScalarWhereWithAggregatesInput = {
    AND?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    OR?: TransactionTypeScalarWhereWithAggregatesInput[]
    NOT?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionType"> | number
    name?: StringWithAggregatesFilter<"TransactionType"> | string
    created_at?: DateTimeWithAggregatesFilter<"TransactionType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TransactionType"> | Date | string
  }

  export type LeagueWhereInput = {
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    id?: IntFilter<"League"> | number
    name?: StringFilter<"League"> | string
    img_id?: IntFilter<"League"> | number
    country?: StringFilter<"League"> | string
    type?: IntFilter<"League"> | number
    tier?: IntFilter<"League"> | number
    season?: StringFilter<"League"> | string
    created_at?: DateTimeFilter<"League"> | Date | string
    updated_at?: DateTimeFilter<"League"> | Date | string
    bet_lines?: BetLineListRelationFilter
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    teams_leagues?: TeamLeagueListRelationFilter
  }

  export type LeagueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    country?: SortOrder
    type?: SortOrder
    tier?: SortOrder
    season?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bet_lines?: BetLineOrderByRelationAggregateInput
    image?: ImageOrderByWithRelationInput
    teams_leagues?: TeamLeagueOrderByRelationAggregateInput
    _relevance?: LeagueOrderByRelevanceInput
  }

  export type LeagueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    img_id?: number
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    name?: StringFilter<"League"> | string
    country?: StringFilter<"League"> | string
    type?: IntFilter<"League"> | number
    tier?: IntFilter<"League"> | number
    season?: StringFilter<"League"> | string
    created_at?: DateTimeFilter<"League"> | Date | string
    updated_at?: DateTimeFilter<"League"> | Date | string
    bet_lines?: BetLineListRelationFilter
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    teams_leagues?: TeamLeagueListRelationFilter
  }, "id" | "id" | "img_id">

  export type LeagueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    country?: SortOrder
    type?: SortOrder
    tier?: SortOrder
    season?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LeagueCountOrderByAggregateInput
    _avg?: LeagueAvgOrderByAggregateInput
    _max?: LeagueMaxOrderByAggregateInput
    _min?: LeagueMinOrderByAggregateInput
    _sum?: LeagueSumOrderByAggregateInput
  }

  export type LeagueScalarWhereWithAggregatesInput = {
    AND?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    OR?: LeagueScalarWhereWithAggregatesInput[]
    NOT?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"League"> | number
    name?: StringWithAggregatesFilter<"League"> | string
    img_id?: IntWithAggregatesFilter<"League"> | number
    country?: StringWithAggregatesFilter<"League"> | string
    type?: IntWithAggregatesFilter<"League"> | number
    tier?: IntWithAggregatesFilter<"League"> | number
    season?: StringWithAggregatesFilter<"League"> | string
    created_at?: DateTimeWithAggregatesFilter<"League"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"League"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    img_id?: IntFilter<"Team"> | number
    short_name?: StringFilter<"Team"> | string
    country?: StringFilter<"Team"> | string
    founded_year?: IntFilter<"Team"> | number
    stadium?: StringFilter<"Team"> | string
    created_at?: DateTimeFilter<"Team"> | Date | string
    updated_at?: DateTimeFilter<"Team"> | Date | string
    images?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    teams_leagues?: TeamLeagueListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    short_name?: SortOrder
    country?: SortOrder
    founded_year?: SortOrder
    stadium?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    images?: ImageOrderByWithRelationInput
    teams_leagues?: TeamLeagueOrderByRelationAggregateInput
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    img_id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    short_name?: StringFilter<"Team"> | string
    country?: StringFilter<"Team"> | string
    founded_year?: IntFilter<"Team"> | number
    stadium?: StringFilter<"Team"> | string
    created_at?: DateTimeFilter<"Team"> | Date | string
    updated_at?: DateTimeFilter<"Team"> | Date | string
    images?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    teams_leagues?: TeamLeagueListRelationFilter
  }, "id" | "id" | "img_id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    short_name?: SortOrder
    country?: SortOrder
    founded_year?: SortOrder
    stadium?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    img_id?: IntWithAggregatesFilter<"Team"> | number
    short_name?: StringWithAggregatesFilter<"Team"> | string
    country?: StringWithAggregatesFilter<"Team"> | string
    founded_year?: IntWithAggregatesFilter<"Team"> | number
    stadium?: StringWithAggregatesFilter<"Team"> | string
    created_at?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type BetLineWhereInput = {
    AND?: BetLineWhereInput | BetLineWhereInput[]
    OR?: BetLineWhereInput[]
    NOT?: BetLineWhereInput | BetLineWhereInput[]
    id?: IntFilter<"BetLine"> | number
    bet_id?: IntFilter<"BetLine"> | number
    league_id?: IntFilter<"BetLine"> | number
    match?: StringFilter<"BetLine"> | string
    prediction?: StringFilter<"BetLine"> | string
    odd?: FloatFilter<"BetLine"> | number
    status?: IntFilter<"BetLine"> | number
    created_at?: DateTimeFilter<"BetLine"> | Date | string
    updated_at?: DateTimeFilter<"BetLine"> | Date | string
    bets?: XOR<BetScalarRelationFilter, BetWhereInput>
    leagues?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
  }

  export type BetLineOrderByWithRelationInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    match?: SortOrder
    prediction?: SortOrder
    odd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bets?: BetOrderByWithRelationInput
    leagues?: LeagueOrderByWithRelationInput
    _relevance?: BetLineOrderByRelevanceInput
  }

  export type BetLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BetLineWhereInput | BetLineWhereInput[]
    OR?: BetLineWhereInput[]
    NOT?: BetLineWhereInput | BetLineWhereInput[]
    bet_id?: IntFilter<"BetLine"> | number
    league_id?: IntFilter<"BetLine"> | number
    match?: StringFilter<"BetLine"> | string
    prediction?: StringFilter<"BetLine"> | string
    odd?: FloatFilter<"BetLine"> | number
    status?: IntFilter<"BetLine"> | number
    created_at?: DateTimeFilter<"BetLine"> | Date | string
    updated_at?: DateTimeFilter<"BetLine"> | Date | string
    bets?: XOR<BetScalarRelationFilter, BetWhereInput>
    leagues?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
  }, "id" | "id">

  export type BetLineOrderByWithAggregationInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    match?: SortOrder
    prediction?: SortOrder
    odd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BetLineCountOrderByAggregateInput
    _avg?: BetLineAvgOrderByAggregateInput
    _max?: BetLineMaxOrderByAggregateInput
    _min?: BetLineMinOrderByAggregateInput
    _sum?: BetLineSumOrderByAggregateInput
  }

  export type BetLineScalarWhereWithAggregatesInput = {
    AND?: BetLineScalarWhereWithAggregatesInput | BetLineScalarWhereWithAggregatesInput[]
    OR?: BetLineScalarWhereWithAggregatesInput[]
    NOT?: BetLineScalarWhereWithAggregatesInput | BetLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BetLine"> | number
    bet_id?: IntWithAggregatesFilter<"BetLine"> | number
    league_id?: IntWithAggregatesFilter<"BetLine"> | number
    match?: StringWithAggregatesFilter<"BetLine"> | string
    prediction?: StringWithAggregatesFilter<"BetLine"> | string
    odd?: FloatWithAggregatesFilter<"BetLine"> | number
    status?: IntWithAggregatesFilter<"BetLine"> | number
    created_at?: DateTimeWithAggregatesFilter<"BetLine"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BetLine"> | Date | string
  }

  export type TeamLeagueWhereInput = {
    AND?: TeamLeagueWhereInput | TeamLeagueWhereInput[]
    OR?: TeamLeagueWhereInput[]
    NOT?: TeamLeagueWhereInput | TeamLeagueWhereInput[]
    team_id?: IntFilter<"TeamLeague"> | number
    league_id?: IntFilter<"TeamLeague"> | number
    leagues?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamLeagueOrderByWithRelationInput = {
    team_id?: SortOrder
    league_id?: SortOrder
    leagues?: LeagueOrderByWithRelationInput
    teams?: TeamOrderByWithRelationInput
  }

  export type TeamLeagueWhereUniqueInput = Prisma.AtLeast<{
    team_id_league_id?: TeamLeagueTeam_idLeague_idCompoundUniqueInput
    AND?: TeamLeagueWhereInput | TeamLeagueWhereInput[]
    OR?: TeamLeagueWhereInput[]
    NOT?: TeamLeagueWhereInput | TeamLeagueWhereInput[]
    team_id?: IntFilter<"TeamLeague"> | number
    league_id?: IntFilter<"TeamLeague"> | number
    leagues?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "team_id_league_id">

  export type TeamLeagueOrderByWithAggregationInput = {
    team_id?: SortOrder
    league_id?: SortOrder
    _count?: TeamLeagueCountOrderByAggregateInput
    _avg?: TeamLeagueAvgOrderByAggregateInput
    _max?: TeamLeagueMaxOrderByAggregateInput
    _min?: TeamLeagueMinOrderByAggregateInput
    _sum?: TeamLeagueSumOrderByAggregateInput
  }

  export type TeamLeagueScalarWhereWithAggregatesInput = {
    AND?: TeamLeagueScalarWhereWithAggregatesInput | TeamLeagueScalarWhereWithAggregatesInput[]
    OR?: TeamLeagueScalarWhereWithAggregatesInput[]
    NOT?: TeamLeagueScalarWhereWithAggregatesInput | TeamLeagueScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"TeamLeague"> | number
    league_id?: IntWithAggregatesFilter<"TeamLeague"> | number
  }

  export type BetCreateInput = {
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineCreateNestedManyWithoutBetsInput
    user: UserCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateInput = {
    id?: number
    user_id: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineUncheckedCreateNestedManyWithoutBetsInput
  }

  export type BetUpdateInput = {
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUpdateManyWithoutBetsNestedInput
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUncheckedUpdateManyWithoutBetsNestedInput
  }

  export type BetCreateManyInput = {
    id?: number
    user_id: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetUpdateManyMutationInput = {
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueCreateNestedOneWithoutImageInput
    teams?: TeamCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueUncheckedCreateNestedOneWithoutImageInput
    teams?: TeamUncheckedCreateNestedOneWithoutImagesInput
    users?: UserUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUpdateOneWithoutImageNestedInput
    teams?: TeamUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUncheckedUpdateOneWithoutImageNestedInput
    teams?: TeamUncheckedUpdateOneWithoutImagesNestedInput
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetCreateNestedManyWithoutUserInput
    image?: ImageCreateNestedOneWithoutUsersInput
    wallet?: WalletCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    profile_pic_id?: number
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutUserNestedInput
    image?: ImageUpdateOneRequiredWithoutUsersNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_pic_id?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    profile_pic_id?: number
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_pic_id?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    balance: number
    stake?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    user_id: number
    balance: number
    stake?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: number
    user_id: number
    balance: number
    stake?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateInput = {
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type: TransactionTypeCreateNestedOneWithoutWallet_transactionsInput
    user: UserCreateNestedOneWithoutWalletTransactionsInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: number
    user_id: number
    type_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: TransactionTypeUpdateOneRequiredWithoutWallet_transactionsNestedInput
    user?: UserUpdateOneRequiredWithoutWalletTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: number
    user_id: number
    type_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTypeCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    wallet_transactions?: WalletTransactionCreateNestedManyWithoutTransaction_typeInput
  }

  export type TransactionTypeUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    wallet_transactions?: WalletTransactionUncheckedCreateNestedManyWithoutTransaction_typeInput
  }

  export type TransactionTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet_transactions?: WalletTransactionUpdateManyWithoutTransaction_typeNestedInput
  }

  export type TransactionTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet_transactions?: WalletTransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput
  }

  export type TransactionTypeCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueCreateInput = {
    name: string
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineCreateNestedManyWithoutLeaguesInput
    image: ImageCreateNestedOneWithoutLeaguesInput
    teams_leagues?: TeamLeagueCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueUncheckedCreateInput = {
    id?: number
    name: string
    img_id: number
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineUncheckedCreateNestedManyWithoutLeaguesInput
    teams_leagues?: TeamLeagueUncheckedCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUpdateManyWithoutLeaguesNestedInput
    image?: ImageUpdateOneRequiredWithoutLeaguesNestedInput
    teams_leagues?: TeamLeagueUpdateManyWithoutLeaguesNestedInput
  }

  export type LeagueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUncheckedUpdateManyWithoutLeaguesNestedInput
    teams_leagues?: TeamLeagueUncheckedUpdateManyWithoutLeaguesNestedInput
  }

  export type LeagueCreateManyInput = {
    id?: number
    name: string
    img_id: number
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeagueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    name: string
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
    images: ImageCreateNestedOneWithoutTeamsInput
    teams_leagues?: TeamLeagueCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    img_id: number
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
    teams_leagues?: TeamLeagueUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateOneRequiredWithoutTeamsNestedInput
    teams_leagues?: TeamLeagueUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_leagues?: TeamLeagueUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    img_id: number
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineCreateInput = {
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    bets: BetCreateNestedOneWithoutBet_linesInput
    leagues: LeagueCreateNestedOneWithoutBet_linesInput
  }

  export type BetLineUncheckedCreateInput = {
    id?: number
    bet_id: number
    league_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetLineUpdateInput = {
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateOneRequiredWithoutBet_linesNestedInput
    leagues?: LeagueUpdateOneRequiredWithoutBet_linesNestedInput
  }

  export type BetLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineCreateManyInput = {
    id?: number
    bet_id: number
    league_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetLineUpdateManyMutationInput = {
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamLeagueCreateInput = {
    leagues: LeagueCreateNestedOneWithoutTeams_leaguesInput
    teams: TeamCreateNestedOneWithoutTeams_leaguesInput
  }

  export type TeamLeagueUncheckedCreateInput = {
    team_id: number
    league_id: number
  }

  export type TeamLeagueUpdateInput = {
    leagues?: LeagueUpdateOneRequiredWithoutTeams_leaguesNestedInput
    teams?: TeamUpdateOneRequiredWithoutTeams_leaguesNestedInput
  }

  export type TeamLeagueUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamLeagueCreateManyInput = {
    team_id: number
    league_id: number
  }

  export type TeamLeagueUpdateManyMutationInput = {

  }

  export type TeamLeagueUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BetLineListRelationFilter = {
    every?: BetLineWhereInput
    some?: BetLineWhereInput
    none?: BetLineWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BetLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetOrderByRelevanceInput = {
    fields: BetOrderByRelevanceFieldEnum | BetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    result?: SortOrder
    profit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    profit?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    result?: SortOrder
    profit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    result?: SortOrder
    profit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bet_type?: SortOrder
    stake?: SortOrder
    odds?: SortOrder
    profit?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type LeagueNullableScalarRelationFilter = {
    is?: LeagueWhereInput | null
    isNot?: LeagueWhereInput | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BetListRelationFilter = {
    every?: BetWhereInput
    some?: BetWhereInput
    none?: BetWhereInput
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type WalletTransactionListRelationFilter = {
    every?: WalletTransactionWhereInput
    some?: WalletTransactionWhereInput
    none?: WalletTransactionWhereInput
  }

  export type BetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    profile_pic_id?: SortOrder
    last_login?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_pic_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    profile_pic_id?: SortOrder
    last_login?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    profile_pic_id?: SortOrder
    last_login?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    profile_pic_id?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
    stake?: SortOrder
  }

  export type TransactionTypeScalarRelationFilter = {
    is?: TransactionTypeWhereInput
    isNot?: TransactionTypeWhereInput
  }

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
  }

  export type TransactionTypeOrderByRelevanceInput = {
    fields: TransactionTypeOrderByRelevanceFieldEnum | TransactionTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransactionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamLeagueListRelationFilter = {
    every?: TeamLeagueWhereInput
    some?: TeamLeagueWhereInput
    none?: TeamLeagueWhereInput
  }

  export type TeamLeagueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeagueOrderByRelevanceInput = {
    fields: LeagueOrderByRelevanceFieldEnum | LeagueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeagueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    country?: SortOrder
    type?: SortOrder
    tier?: SortOrder
    season?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeagueAvgOrderByAggregateInput = {
    id?: SortOrder
    img_id?: SortOrder
    type?: SortOrder
    tier?: SortOrder
  }

  export type LeagueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    country?: SortOrder
    type?: SortOrder
    tier?: SortOrder
    season?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeagueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    country?: SortOrder
    type?: SortOrder
    tier?: SortOrder
    season?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeagueSumOrderByAggregateInput = {
    id?: SortOrder
    img_id?: SortOrder
    type?: SortOrder
    tier?: SortOrder
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    short_name?: SortOrder
    country?: SortOrder
    founded_year?: SortOrder
    stadium?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    img_id?: SortOrder
    founded_year?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    short_name?: SortOrder
    country?: SortOrder
    founded_year?: SortOrder
    stadium?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_id?: SortOrder
    short_name?: SortOrder
    country?: SortOrder
    founded_year?: SortOrder
    stadium?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    img_id?: SortOrder
    founded_year?: SortOrder
  }

  export type BetScalarRelationFilter = {
    is?: BetWhereInput
    isNot?: BetWhereInput
  }

  export type LeagueScalarRelationFilter = {
    is?: LeagueWhereInput
    isNot?: LeagueWhereInput
  }

  export type BetLineOrderByRelevanceInput = {
    fields: BetLineOrderByRelevanceFieldEnum | BetLineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BetLineCountOrderByAggregateInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    match?: SortOrder
    prediction?: SortOrder
    odd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetLineAvgOrderByAggregateInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    odd?: SortOrder
    status?: SortOrder
  }

  export type BetLineMaxOrderByAggregateInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    match?: SortOrder
    prediction?: SortOrder
    odd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetLineMinOrderByAggregateInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    match?: SortOrder
    prediction?: SortOrder
    odd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BetLineSumOrderByAggregateInput = {
    id?: SortOrder
    bet_id?: SortOrder
    league_id?: SortOrder
    odd?: SortOrder
    status?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamLeagueTeam_idLeague_idCompoundUniqueInput = {
    team_id: number
    league_id: number
  }

  export type TeamLeagueCountOrderByAggregateInput = {
    team_id?: SortOrder
    league_id?: SortOrder
  }

  export type TeamLeagueAvgOrderByAggregateInput = {
    team_id?: SortOrder
    league_id?: SortOrder
  }

  export type TeamLeagueMaxOrderByAggregateInput = {
    team_id?: SortOrder
    league_id?: SortOrder
  }

  export type TeamLeagueMinOrderByAggregateInput = {
    team_id?: SortOrder
    league_id?: SortOrder
  }

  export type TeamLeagueSumOrderByAggregateInput = {
    team_id?: SortOrder
    league_id?: SortOrder
  }

  export type BetLineCreateNestedManyWithoutBetsInput = {
    create?: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput> | BetLineCreateWithoutBetsInput[] | BetLineUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutBetsInput | BetLineCreateOrConnectWithoutBetsInput[]
    createMany?: BetLineCreateManyBetsInputEnvelope
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBetsInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    connect?: UserWhereUniqueInput
  }

  export type BetLineUncheckedCreateNestedManyWithoutBetsInput = {
    create?: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput> | BetLineCreateWithoutBetsInput[] | BetLineUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutBetsInput | BetLineCreateOrConnectWithoutBetsInput[]
    createMany?: BetLineCreateManyBetsInputEnvelope
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BetLineUpdateManyWithoutBetsNestedInput = {
    create?: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput> | BetLineCreateWithoutBetsInput[] | BetLineUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutBetsInput | BetLineCreateOrConnectWithoutBetsInput[]
    upsert?: BetLineUpsertWithWhereUniqueWithoutBetsInput | BetLineUpsertWithWhereUniqueWithoutBetsInput[]
    createMany?: BetLineCreateManyBetsInputEnvelope
    set?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    disconnect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    delete?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    update?: BetLineUpdateWithWhereUniqueWithoutBetsInput | BetLineUpdateWithWhereUniqueWithoutBetsInput[]
    updateMany?: BetLineUpdateManyWithWhereWithoutBetsInput | BetLineUpdateManyWithWhereWithoutBetsInput[]
    deleteMany?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    upsert?: UserUpsertWithoutBetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBetsInput, UserUpdateWithoutBetsInput>, UserUncheckedUpdateWithoutBetsInput>
  }

  export type BetLineUncheckedUpdateManyWithoutBetsNestedInput = {
    create?: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput> | BetLineCreateWithoutBetsInput[] | BetLineUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutBetsInput | BetLineCreateOrConnectWithoutBetsInput[]
    upsert?: BetLineUpsertWithWhereUniqueWithoutBetsInput | BetLineUpsertWithWhereUniqueWithoutBetsInput[]
    createMany?: BetLineCreateManyBetsInputEnvelope
    set?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    disconnect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    delete?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    update?: BetLineUpdateWithWhereUniqueWithoutBetsInput | BetLineUpdateWithWhereUniqueWithoutBetsInput[]
    updateMany?: BetLineUpdateManyWithWhereWithoutBetsInput | BetLineUpdateManyWithWhereWithoutBetsInput[]
    deleteMany?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
  }

  export type LeagueCreateNestedOneWithoutImageInput = {
    create?: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutImageInput
    connect?: LeagueWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutImagesInput = {
    create?: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImagesInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutImageInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeagueUncheckedCreateNestedOneWithoutImageInput = {
    create?: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutImageInput
    connect?: LeagueWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedOneWithoutImagesInput = {
    create?: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImagesInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeagueUpdateOneWithoutImageNestedInput = {
    create?: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutImageInput
    upsert?: LeagueUpsertWithoutImageInput
    disconnect?: LeagueWhereInput | boolean
    delete?: LeagueWhereInput | boolean
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutImageInput, LeagueUpdateWithoutImageInput>, LeagueUncheckedUpdateWithoutImageInput>
  }

  export type TeamUpdateOneWithoutImagesNestedInput = {
    create?: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImagesInput
    upsert?: TeamUpsertWithoutImagesInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutImagesInput, TeamUpdateWithoutImagesInput>, TeamUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutImageInput | UserUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutImageInput | UserUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutImageInput | UserUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LeagueUncheckedUpdateOneWithoutImageNestedInput = {
    create?: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutImageInput
    upsert?: LeagueUpsertWithoutImageInput
    disconnect?: LeagueWhereInput | boolean
    delete?: LeagueWhereInput | boolean
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutImageInput, LeagueUpdateWithoutImageInput>, LeagueUncheckedUpdateWithoutImageInput>
  }

  export type TeamUncheckedUpdateOneWithoutImagesNestedInput = {
    create?: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImagesInput
    upsert?: TeamUpsertWithoutImagesInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutImagesInput, TeamUpdateWithoutImagesInput>, TeamUncheckedUpdateWithoutImagesInput>
  }

  export type UserUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutImageInput | UserUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutImageInput | UserUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutImageInput | UserUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BetCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutUsersInput = {
    create?: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutUsersInput
    connect?: ImageWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type BetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type ImageUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutUsersInput
    upsert?: ImageUpsertWithoutUsersInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutUsersInput, ImageUpdateWithoutUsersInput>, ImageUncheckedUpdateWithoutUsersInput>
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutUserInput | WalletTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutUserInput | WalletTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutUserInput | WalletTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutUserInput | WalletTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutUserInput | WalletTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutUserInput | WalletTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionTypeCreateNestedOneWithoutWallet_transactionsInput = {
    create?: XOR<TransactionTypeCreateWithoutWallet_transactionsInput, TransactionTypeUncheckedCreateWithoutWallet_transactionsInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutWallet_transactionsInput
    connect?: TransactionTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWalletTransactionsInput = {
    create?: XOR<UserCreateWithoutWalletTransactionsInput, UserUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionTypeUpdateOneRequiredWithoutWallet_transactionsNestedInput = {
    create?: XOR<TransactionTypeCreateWithoutWallet_transactionsInput, TransactionTypeUncheckedCreateWithoutWallet_transactionsInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutWallet_transactionsInput
    upsert?: TransactionTypeUpsertWithoutWallet_transactionsInput
    connect?: TransactionTypeWhereUniqueInput
    update?: XOR<XOR<TransactionTypeUpdateToOneWithWhereWithoutWallet_transactionsInput, TransactionTypeUpdateWithoutWallet_transactionsInput>, TransactionTypeUncheckedUpdateWithoutWallet_transactionsInput>
  }

  export type UserUpdateOneRequiredWithoutWalletTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutWalletTransactionsInput, UserUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletTransactionsInput
    upsert?: UserUpsertWithoutWalletTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletTransactionsInput, UserUpdateWithoutWalletTransactionsInput>, UserUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type WalletTransactionCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput> | WalletTransactionCreateWithoutTransaction_typeInput[] | WalletTransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutTransaction_typeInput | WalletTransactionCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: WalletTransactionCreateManyTransaction_typeInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput> | WalletTransactionCreateWithoutTransaction_typeInput[] | WalletTransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutTransaction_typeInput | WalletTransactionCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: WalletTransactionCreateManyTransaction_typeInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type WalletTransactionUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput> | WalletTransactionCreateWithoutTransaction_typeInput[] | WalletTransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutTransaction_typeInput | WalletTransactionCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutTransaction_typeInput | WalletTransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: WalletTransactionCreateManyTransaction_typeInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutTransaction_typeInput | WalletTransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutTransaction_typeInput | WalletTransactionUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput> | WalletTransactionCreateWithoutTransaction_typeInput[] | WalletTransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutTransaction_typeInput | WalletTransactionCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutTransaction_typeInput | WalletTransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: WalletTransactionCreateManyTransaction_typeInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutTransaction_typeInput | WalletTransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutTransaction_typeInput | WalletTransactionUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type BetLineCreateNestedManyWithoutLeaguesInput = {
    create?: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput> | BetLineCreateWithoutLeaguesInput[] | BetLineUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutLeaguesInput | BetLineCreateOrConnectWithoutLeaguesInput[]
    createMany?: BetLineCreateManyLeaguesInputEnvelope
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutLeaguesInput = {
    create?: XOR<ImageCreateWithoutLeaguesInput, ImageUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLeaguesInput
    connect?: ImageWhereUniqueInput
  }

  export type TeamLeagueCreateNestedManyWithoutLeaguesInput = {
    create?: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput> | TeamLeagueCreateWithoutLeaguesInput[] | TeamLeagueUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutLeaguesInput | TeamLeagueCreateOrConnectWithoutLeaguesInput[]
    createMany?: TeamLeagueCreateManyLeaguesInputEnvelope
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
  }

  export type BetLineUncheckedCreateNestedManyWithoutLeaguesInput = {
    create?: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput> | BetLineCreateWithoutLeaguesInput[] | BetLineUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutLeaguesInput | BetLineCreateOrConnectWithoutLeaguesInput[]
    createMany?: BetLineCreateManyLeaguesInputEnvelope
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
  }

  export type TeamLeagueUncheckedCreateNestedManyWithoutLeaguesInput = {
    create?: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput> | TeamLeagueCreateWithoutLeaguesInput[] | TeamLeagueUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutLeaguesInput | TeamLeagueCreateOrConnectWithoutLeaguesInput[]
    createMany?: TeamLeagueCreateManyLeaguesInputEnvelope
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
  }

  export type BetLineUpdateManyWithoutLeaguesNestedInput = {
    create?: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput> | BetLineCreateWithoutLeaguesInput[] | BetLineUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutLeaguesInput | BetLineCreateOrConnectWithoutLeaguesInput[]
    upsert?: BetLineUpsertWithWhereUniqueWithoutLeaguesInput | BetLineUpsertWithWhereUniqueWithoutLeaguesInput[]
    createMany?: BetLineCreateManyLeaguesInputEnvelope
    set?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    disconnect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    delete?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    update?: BetLineUpdateWithWhereUniqueWithoutLeaguesInput | BetLineUpdateWithWhereUniqueWithoutLeaguesInput[]
    updateMany?: BetLineUpdateManyWithWhereWithoutLeaguesInput | BetLineUpdateManyWithWhereWithoutLeaguesInput[]
    deleteMany?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
  }

  export type ImageUpdateOneRequiredWithoutLeaguesNestedInput = {
    create?: XOR<ImageCreateWithoutLeaguesInput, ImageUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLeaguesInput
    upsert?: ImageUpsertWithoutLeaguesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutLeaguesInput, ImageUpdateWithoutLeaguesInput>, ImageUncheckedUpdateWithoutLeaguesInput>
  }

  export type TeamLeagueUpdateManyWithoutLeaguesNestedInput = {
    create?: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput> | TeamLeagueCreateWithoutLeaguesInput[] | TeamLeagueUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutLeaguesInput | TeamLeagueCreateOrConnectWithoutLeaguesInput[]
    upsert?: TeamLeagueUpsertWithWhereUniqueWithoutLeaguesInput | TeamLeagueUpsertWithWhereUniqueWithoutLeaguesInput[]
    createMany?: TeamLeagueCreateManyLeaguesInputEnvelope
    set?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    disconnect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    delete?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    update?: TeamLeagueUpdateWithWhereUniqueWithoutLeaguesInput | TeamLeagueUpdateWithWhereUniqueWithoutLeaguesInput[]
    updateMany?: TeamLeagueUpdateManyWithWhereWithoutLeaguesInput | TeamLeagueUpdateManyWithWhereWithoutLeaguesInput[]
    deleteMany?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
  }

  export type BetLineUncheckedUpdateManyWithoutLeaguesNestedInput = {
    create?: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput> | BetLineCreateWithoutLeaguesInput[] | BetLineUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: BetLineCreateOrConnectWithoutLeaguesInput | BetLineCreateOrConnectWithoutLeaguesInput[]
    upsert?: BetLineUpsertWithWhereUniqueWithoutLeaguesInput | BetLineUpsertWithWhereUniqueWithoutLeaguesInput[]
    createMany?: BetLineCreateManyLeaguesInputEnvelope
    set?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    disconnect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    delete?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    connect?: BetLineWhereUniqueInput | BetLineWhereUniqueInput[]
    update?: BetLineUpdateWithWhereUniqueWithoutLeaguesInput | BetLineUpdateWithWhereUniqueWithoutLeaguesInput[]
    updateMany?: BetLineUpdateManyWithWhereWithoutLeaguesInput | BetLineUpdateManyWithWhereWithoutLeaguesInput[]
    deleteMany?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
  }

  export type TeamLeagueUncheckedUpdateManyWithoutLeaguesNestedInput = {
    create?: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput> | TeamLeagueCreateWithoutLeaguesInput[] | TeamLeagueUncheckedCreateWithoutLeaguesInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutLeaguesInput | TeamLeagueCreateOrConnectWithoutLeaguesInput[]
    upsert?: TeamLeagueUpsertWithWhereUniqueWithoutLeaguesInput | TeamLeagueUpsertWithWhereUniqueWithoutLeaguesInput[]
    createMany?: TeamLeagueCreateManyLeaguesInputEnvelope
    set?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    disconnect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    delete?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    update?: TeamLeagueUpdateWithWhereUniqueWithoutLeaguesInput | TeamLeagueUpdateWithWhereUniqueWithoutLeaguesInput[]
    updateMany?: TeamLeagueUpdateManyWithWhereWithoutLeaguesInput | TeamLeagueUpdateManyWithWhereWithoutLeaguesInput[]
    deleteMany?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutTeamsInput = {
    create?: XOR<ImageCreateWithoutTeamsInput, ImageUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutTeamsInput
    connect?: ImageWhereUniqueInput
  }

  export type TeamLeagueCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput> | TeamLeagueCreateWithoutTeamsInput[] | TeamLeagueUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutTeamsInput | TeamLeagueCreateOrConnectWithoutTeamsInput[]
    createMany?: TeamLeagueCreateManyTeamsInputEnvelope
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
  }

  export type TeamLeagueUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput> | TeamLeagueCreateWithoutTeamsInput[] | TeamLeagueUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutTeamsInput | TeamLeagueCreateOrConnectWithoutTeamsInput[]
    createMany?: TeamLeagueCreateManyTeamsInputEnvelope
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
  }

  export type ImageUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<ImageCreateWithoutTeamsInput, ImageUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutTeamsInput
    upsert?: ImageUpsertWithoutTeamsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutTeamsInput, ImageUpdateWithoutTeamsInput>, ImageUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamLeagueUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput> | TeamLeagueCreateWithoutTeamsInput[] | TeamLeagueUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutTeamsInput | TeamLeagueCreateOrConnectWithoutTeamsInput[]
    upsert?: TeamLeagueUpsertWithWhereUniqueWithoutTeamsInput | TeamLeagueUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: TeamLeagueCreateManyTeamsInputEnvelope
    set?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    disconnect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    delete?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    update?: TeamLeagueUpdateWithWhereUniqueWithoutTeamsInput | TeamLeagueUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TeamLeagueUpdateManyWithWhereWithoutTeamsInput | TeamLeagueUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
  }

  export type TeamLeagueUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput> | TeamLeagueCreateWithoutTeamsInput[] | TeamLeagueUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamLeagueCreateOrConnectWithoutTeamsInput | TeamLeagueCreateOrConnectWithoutTeamsInput[]
    upsert?: TeamLeagueUpsertWithWhereUniqueWithoutTeamsInput | TeamLeagueUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: TeamLeagueCreateManyTeamsInputEnvelope
    set?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    disconnect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    delete?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    connect?: TeamLeagueWhereUniqueInput | TeamLeagueWhereUniqueInput[]
    update?: TeamLeagueUpdateWithWhereUniqueWithoutTeamsInput | TeamLeagueUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TeamLeagueUpdateManyWithWhereWithoutTeamsInput | TeamLeagueUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
  }

  export type BetCreateNestedOneWithoutBet_linesInput = {
    create?: XOR<BetCreateWithoutBet_linesInput, BetUncheckedCreateWithoutBet_linesInput>
    connectOrCreate?: BetCreateOrConnectWithoutBet_linesInput
    connect?: BetWhereUniqueInput
  }

  export type LeagueCreateNestedOneWithoutBet_linesInput = {
    create?: XOR<LeagueCreateWithoutBet_linesInput, LeagueUncheckedCreateWithoutBet_linesInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutBet_linesInput
    connect?: LeagueWhereUniqueInput
  }

  export type BetUpdateOneRequiredWithoutBet_linesNestedInput = {
    create?: XOR<BetCreateWithoutBet_linesInput, BetUncheckedCreateWithoutBet_linesInput>
    connectOrCreate?: BetCreateOrConnectWithoutBet_linesInput
    upsert?: BetUpsertWithoutBet_linesInput
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutBet_linesInput, BetUpdateWithoutBet_linesInput>, BetUncheckedUpdateWithoutBet_linesInput>
  }

  export type LeagueUpdateOneRequiredWithoutBet_linesNestedInput = {
    create?: XOR<LeagueCreateWithoutBet_linesInput, LeagueUncheckedCreateWithoutBet_linesInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutBet_linesInput
    upsert?: LeagueUpsertWithoutBet_linesInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutBet_linesInput, LeagueUpdateWithoutBet_linesInput>, LeagueUncheckedUpdateWithoutBet_linesInput>
  }

  export type LeagueCreateNestedOneWithoutTeams_leaguesInput = {
    create?: XOR<LeagueCreateWithoutTeams_leaguesInput, LeagueUncheckedCreateWithoutTeams_leaguesInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutTeams_leaguesInput
    connect?: LeagueWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutTeams_leaguesInput = {
    create?: XOR<TeamCreateWithoutTeams_leaguesInput, TeamUncheckedCreateWithoutTeams_leaguesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeams_leaguesInput
    connect?: TeamWhereUniqueInput
  }

  export type LeagueUpdateOneRequiredWithoutTeams_leaguesNestedInput = {
    create?: XOR<LeagueCreateWithoutTeams_leaguesInput, LeagueUncheckedCreateWithoutTeams_leaguesInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutTeams_leaguesInput
    upsert?: LeagueUpsertWithoutTeams_leaguesInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutTeams_leaguesInput, LeagueUpdateWithoutTeams_leaguesInput>, LeagueUncheckedUpdateWithoutTeams_leaguesInput>
  }

  export type TeamUpdateOneRequiredWithoutTeams_leaguesNestedInput = {
    create?: XOR<TeamCreateWithoutTeams_leaguesInput, TeamUncheckedCreateWithoutTeams_leaguesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeams_leaguesInput
    upsert?: TeamUpsertWithoutTeams_leaguesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeams_leaguesInput, TeamUpdateWithoutTeams_leaguesInput>, TeamUncheckedUpdateWithoutTeams_leaguesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BetLineCreateWithoutBetsInput = {
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    leagues: LeagueCreateNestedOneWithoutBet_linesInput
  }

  export type BetLineUncheckedCreateWithoutBetsInput = {
    id?: number
    league_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetLineCreateOrConnectWithoutBetsInput = {
    where: BetLineWhereUniqueInput
    create: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput>
  }

  export type BetLineCreateManyBetsInputEnvelope = {
    data: BetLineCreateManyBetsInput | BetLineCreateManyBetsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBetsInput = {
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    image?: ImageCreateNestedOneWithoutUsersInput
    wallet?: WalletCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBetsInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    profile_pic_id?: number
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
  }

  export type BetLineUpsertWithWhereUniqueWithoutBetsInput = {
    where: BetLineWhereUniqueInput
    update: XOR<BetLineUpdateWithoutBetsInput, BetLineUncheckedUpdateWithoutBetsInput>
    create: XOR<BetLineCreateWithoutBetsInput, BetLineUncheckedCreateWithoutBetsInput>
  }

  export type BetLineUpdateWithWhereUniqueWithoutBetsInput = {
    where: BetLineWhereUniqueInput
    data: XOR<BetLineUpdateWithoutBetsInput, BetLineUncheckedUpdateWithoutBetsInput>
  }

  export type BetLineUpdateManyWithWhereWithoutBetsInput = {
    where: BetLineScalarWhereInput
    data: XOR<BetLineUpdateManyMutationInput, BetLineUncheckedUpdateManyWithoutBetsInput>
  }

  export type BetLineScalarWhereInput = {
    AND?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
    OR?: BetLineScalarWhereInput[]
    NOT?: BetLineScalarWhereInput | BetLineScalarWhereInput[]
    id?: IntFilter<"BetLine"> | number
    bet_id?: IntFilter<"BetLine"> | number
    league_id?: IntFilter<"BetLine"> | number
    match?: StringFilter<"BetLine"> | string
    prediction?: StringFilter<"BetLine"> | string
    odd?: FloatFilter<"BetLine"> | number
    status?: IntFilter<"BetLine"> | number
    created_at?: DateTimeFilter<"BetLine"> | Date | string
    updated_at?: DateTimeFilter<"BetLine"> | Date | string
  }

  export type UserUpsertWithoutBetsInput = {
    update: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
  }

  export type UserUpdateWithoutBetsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutUsersNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_pic_id?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeagueCreateWithoutImageInput = {
    name: string
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineCreateNestedManyWithoutLeaguesInput
    teams_leagues?: TeamLeagueCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueUncheckedCreateWithoutImageInput = {
    id?: number
    name: string
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineUncheckedCreateNestedManyWithoutLeaguesInput
    teams_leagues?: TeamLeagueUncheckedCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueCreateOrConnectWithoutImageInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
  }

  export type TeamCreateWithoutImagesInput = {
    name: string
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
    teams_leagues?: TeamLeagueCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
    teams_leagues?: TeamLeagueUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamCreateOrConnectWithoutImagesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
  }

  export type UserCreateWithoutImageInput = {
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetCreateNestedManyWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImageInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput>
  }

  export type UserCreateManyImageInputEnvelope = {
    data: UserCreateManyImageInput | UserCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type LeagueUpsertWithoutImageInput = {
    update: XOR<LeagueUpdateWithoutImageInput, LeagueUncheckedUpdateWithoutImageInput>
    create: XOR<LeagueCreateWithoutImageInput, LeagueUncheckedCreateWithoutImageInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutImageInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutImageInput, LeagueUncheckedUpdateWithoutImageInput>
  }

  export type LeagueUpdateWithoutImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUpdateManyWithoutLeaguesNestedInput
    teams_leagues?: TeamLeagueUpdateManyWithoutLeaguesNestedInput
  }

  export type LeagueUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUncheckedUpdateManyWithoutLeaguesNestedInput
    teams_leagues?: TeamLeagueUncheckedUpdateManyWithoutLeaguesNestedInput
  }

  export type TeamUpsertWithoutImagesInput = {
    update: XOR<TeamUpdateWithoutImagesInput, TeamUncheckedUpdateWithoutImagesInput>
    create: XOR<TeamCreateWithoutImagesInput, TeamUncheckedCreateWithoutImagesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutImagesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutImagesInput, TeamUncheckedUpdateWithoutImagesInput>
  }

  export type TeamUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_leagues?: TeamLeagueUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_leagues?: TeamLeagueUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutImageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutImageInput, UserUncheckedUpdateWithoutImageInput>
    create: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutImageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutImageInput, UserUncheckedUpdateWithoutImageInput>
  }

  export type UserUpdateManyWithWhereWithoutImageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutImageInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    profile_pic_id?: IntFilter<"User"> | number
    last_login?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type BetCreateWithoutUserInput = {
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineCreateNestedManyWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutUserInput = {
    id?: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineUncheckedCreateNestedManyWithoutBetsInput
  }

  export type BetCreateOrConnectWithoutUserInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetCreateManyUserInputEnvelope = {
    data: BetCreateManyUserInput | BetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutUsersInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueCreateNestedOneWithoutImageInput
    teams?: TeamCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutUsersInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueUncheckedCreateNestedOneWithoutImageInput
    teams?: TeamUncheckedCreateNestedOneWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutUsersInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
  }

  export type WalletCreateWithoutUserInput = {
    balance: number
    stake?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: number
    balance: number
    stake?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletTransactionCreateWithoutUserInput = {
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type: TransactionTypeCreateNestedOneWithoutWallet_transactionsInput
  }

  export type WalletTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput>
  }

  export type WalletTransactionCreateManyUserInputEnvelope = {
    data: WalletTransactionCreateManyUserInput | WalletTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BetUpsertWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetUpdateWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
  }

  export type BetUpdateManyWithWhereWithoutUserInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutUserInput>
  }

  export type BetScalarWhereInput = {
    AND?: BetScalarWhereInput | BetScalarWhereInput[]
    OR?: BetScalarWhereInput[]
    NOT?: BetScalarWhereInput | BetScalarWhereInput[]
    id?: IntFilter<"Bet"> | number
    user_id?: IntFilter<"Bet"> | number
    bet_type?: IntFilter<"Bet"> | number
    stake?: IntFilter<"Bet"> | number
    odds?: FloatFilter<"Bet"> | number
    result?: StringFilter<"Bet"> | string
    profit?: FloatFilter<"Bet"> | number
    created_at?: DateTimeFilter<"Bet"> | Date | string
    updated_at?: DateTimeFilter<"Bet"> | Date | string
  }

  export type ImageUpsertWithoutUsersInput = {
    update: XOR<ImageUpdateWithoutUsersInput, ImageUncheckedUpdateWithoutUsersInput>
    create: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutUsersInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutUsersInput, ImageUncheckedUpdateWithoutUsersInput>
  }

  export type ImageUpdateWithoutUsersInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUpdateOneWithoutImageNestedInput
    teams?: TeamUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUncheckedUpdateOneWithoutImageNestedInput
    teams?: TeamUncheckedUpdateOneWithoutImagesNestedInput
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    stake?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutUserInput, WalletTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutUserInput, WalletTransactionUncheckedUpdateWithoutUserInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutUserInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletTransactionScalarWhereInput = {
    AND?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    OR?: WalletTransactionScalarWhereInput[]
    NOT?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    id?: IntFilter<"WalletTransaction"> | number
    user_id?: IntFilter<"WalletTransaction"> | number
    type_id?: IntFilter<"WalletTransaction"> | number
    amount?: FloatFilter<"WalletTransaction"> | number
    balance?: FloatFilter<"WalletTransaction"> | number
    created_at?: DateTimeFilter<"WalletTransaction"> | Date | string
    updated_at?: DateTimeFilter<"WalletTransaction"> | Date | string
  }

  export type UserCreateWithoutWalletInput = {
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetCreateNestedManyWithoutUserInput
    image?: ImageCreateNestedOneWithoutUsersInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    profile_pic_id?: number
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutUserNestedInput
    image?: ImageUpdateOneRequiredWithoutUsersNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_pic_id?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionTypeCreateWithoutWallet_transactionsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionTypeUncheckedCreateWithoutWallet_transactionsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionTypeCreateOrConnectWithoutWallet_transactionsInput = {
    where: TransactionTypeWhereUniqueInput
    create: XOR<TransactionTypeCreateWithoutWallet_transactionsInput, TransactionTypeUncheckedCreateWithoutWallet_transactionsInput>
  }

  export type UserCreateWithoutWalletTransactionsInput = {
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetCreateNestedManyWithoutUserInput
    image?: ImageCreateNestedOneWithoutUsersInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletTransactionsInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    profile_pic_id?: number
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletTransactionsInput, UserUncheckedCreateWithoutWalletTransactionsInput>
  }

  export type TransactionTypeUpsertWithoutWallet_transactionsInput = {
    update: XOR<TransactionTypeUpdateWithoutWallet_transactionsInput, TransactionTypeUncheckedUpdateWithoutWallet_transactionsInput>
    create: XOR<TransactionTypeCreateWithoutWallet_transactionsInput, TransactionTypeUncheckedCreateWithoutWallet_transactionsInput>
    where?: TransactionTypeWhereInput
  }

  export type TransactionTypeUpdateToOneWithWhereWithoutWallet_transactionsInput = {
    where?: TransactionTypeWhereInput
    data: XOR<TransactionTypeUpdateWithoutWallet_transactionsInput, TransactionTypeUncheckedUpdateWithoutWallet_transactionsInput>
  }

  export type TransactionTypeUpdateWithoutWallet_transactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTypeUncheckedUpdateWithoutWallet_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutWalletTransactionsInput = {
    update: XOR<UserUpdateWithoutWalletTransactionsInput, UserUncheckedUpdateWithoutWalletTransactionsInput>
    create: XOR<UserCreateWithoutWalletTransactionsInput, UserUncheckedCreateWithoutWalletTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletTransactionsInput, UserUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type UserUpdateWithoutWalletTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutUserNestedInput
    image?: ImageUpdateOneRequiredWithoutUsersNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_pic_id?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WalletTransactionCreateWithoutTransaction_typeInput = {
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWalletTransactionsInput
  }

  export type WalletTransactionUncheckedCreateWithoutTransaction_typeInput = {
    id?: number
    user_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutTransaction_typeInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput>
  }

  export type WalletTransactionCreateManyTransaction_typeInputEnvelope = {
    data: WalletTransactionCreateManyTransaction_typeInput | WalletTransactionCreateManyTransaction_typeInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutTransaction_typeInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutTransaction_typeInput, WalletTransactionUncheckedUpdateWithoutTransaction_typeInput>
    create: XOR<WalletTransactionCreateWithoutTransaction_typeInput, WalletTransactionUncheckedCreateWithoutTransaction_typeInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutTransaction_typeInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutTransaction_typeInput, WalletTransactionUncheckedUpdateWithoutTransaction_typeInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutTransaction_typeInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutTransaction_typeInput>
  }

  export type BetLineCreateWithoutLeaguesInput = {
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    bets: BetCreateNestedOneWithoutBet_linesInput
  }

  export type BetLineUncheckedCreateWithoutLeaguesInput = {
    id?: number
    bet_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetLineCreateOrConnectWithoutLeaguesInput = {
    where: BetLineWhereUniqueInput
    create: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput>
  }

  export type BetLineCreateManyLeaguesInputEnvelope = {
    data: BetLineCreateManyLeaguesInput | BetLineCreateManyLeaguesInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutLeaguesInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    teams?: TeamCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutLeaguesInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    teams?: TeamUncheckedCreateNestedOneWithoutImagesInput
    users?: UserUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutLeaguesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutLeaguesInput, ImageUncheckedCreateWithoutLeaguesInput>
  }

  export type TeamLeagueCreateWithoutLeaguesInput = {
    teams: TeamCreateNestedOneWithoutTeams_leaguesInput
  }

  export type TeamLeagueUncheckedCreateWithoutLeaguesInput = {
    team_id: number
  }

  export type TeamLeagueCreateOrConnectWithoutLeaguesInput = {
    where: TeamLeagueWhereUniqueInput
    create: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput>
  }

  export type TeamLeagueCreateManyLeaguesInputEnvelope = {
    data: TeamLeagueCreateManyLeaguesInput | TeamLeagueCreateManyLeaguesInput[]
    skipDuplicates?: boolean
  }

  export type BetLineUpsertWithWhereUniqueWithoutLeaguesInput = {
    where: BetLineWhereUniqueInput
    update: XOR<BetLineUpdateWithoutLeaguesInput, BetLineUncheckedUpdateWithoutLeaguesInput>
    create: XOR<BetLineCreateWithoutLeaguesInput, BetLineUncheckedCreateWithoutLeaguesInput>
  }

  export type BetLineUpdateWithWhereUniqueWithoutLeaguesInput = {
    where: BetLineWhereUniqueInput
    data: XOR<BetLineUpdateWithoutLeaguesInput, BetLineUncheckedUpdateWithoutLeaguesInput>
  }

  export type BetLineUpdateManyWithWhereWithoutLeaguesInput = {
    where: BetLineScalarWhereInput
    data: XOR<BetLineUpdateManyMutationInput, BetLineUncheckedUpdateManyWithoutLeaguesInput>
  }

  export type ImageUpsertWithoutLeaguesInput = {
    update: XOR<ImageUpdateWithoutLeaguesInput, ImageUncheckedUpdateWithoutLeaguesInput>
    create: XOR<ImageCreateWithoutLeaguesInput, ImageUncheckedCreateWithoutLeaguesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutLeaguesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutLeaguesInput, ImageUncheckedUpdateWithoutLeaguesInput>
  }

  export type ImageUpdateWithoutLeaguesInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutLeaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateOneWithoutImagesNestedInput
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TeamLeagueUpsertWithWhereUniqueWithoutLeaguesInput = {
    where: TeamLeagueWhereUniqueInput
    update: XOR<TeamLeagueUpdateWithoutLeaguesInput, TeamLeagueUncheckedUpdateWithoutLeaguesInput>
    create: XOR<TeamLeagueCreateWithoutLeaguesInput, TeamLeagueUncheckedCreateWithoutLeaguesInput>
  }

  export type TeamLeagueUpdateWithWhereUniqueWithoutLeaguesInput = {
    where: TeamLeagueWhereUniqueInput
    data: XOR<TeamLeagueUpdateWithoutLeaguesInput, TeamLeagueUncheckedUpdateWithoutLeaguesInput>
  }

  export type TeamLeagueUpdateManyWithWhereWithoutLeaguesInput = {
    where: TeamLeagueScalarWhereInput
    data: XOR<TeamLeagueUpdateManyMutationInput, TeamLeagueUncheckedUpdateManyWithoutLeaguesInput>
  }

  export type TeamLeagueScalarWhereInput = {
    AND?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
    OR?: TeamLeagueScalarWhereInput[]
    NOT?: TeamLeagueScalarWhereInput | TeamLeagueScalarWhereInput[]
    team_id?: IntFilter<"TeamLeague"> | number
    league_id?: IntFilter<"TeamLeague"> | number
  }

  export type ImageCreateWithoutTeamsInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueCreateNestedOneWithoutImageInput
    users?: UserCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutTeamsInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    leagues?: LeagueUncheckedCreateNestedOneWithoutImageInput
    users?: UserUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutTeamsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTeamsInput, ImageUncheckedCreateWithoutTeamsInput>
  }

  export type TeamLeagueCreateWithoutTeamsInput = {
    leagues: LeagueCreateNestedOneWithoutTeams_leaguesInput
  }

  export type TeamLeagueUncheckedCreateWithoutTeamsInput = {
    league_id: number
  }

  export type TeamLeagueCreateOrConnectWithoutTeamsInput = {
    where: TeamLeagueWhereUniqueInput
    create: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput>
  }

  export type TeamLeagueCreateManyTeamsInputEnvelope = {
    data: TeamLeagueCreateManyTeamsInput | TeamLeagueCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithoutTeamsInput = {
    update: XOR<ImageUpdateWithoutTeamsInput, ImageUncheckedUpdateWithoutTeamsInput>
    create: XOR<ImageCreateWithoutTeamsInput, ImageUncheckedCreateWithoutTeamsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutTeamsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutTeamsInput, ImageUncheckedUpdateWithoutTeamsInput>
  }

  export type ImageUpdateWithoutTeamsInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUpdateOneWithoutImageNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUncheckedUpdateOneWithoutImageNestedInput
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
  }

  export type TeamLeagueUpsertWithWhereUniqueWithoutTeamsInput = {
    where: TeamLeagueWhereUniqueInput
    update: XOR<TeamLeagueUpdateWithoutTeamsInput, TeamLeagueUncheckedUpdateWithoutTeamsInput>
    create: XOR<TeamLeagueCreateWithoutTeamsInput, TeamLeagueUncheckedCreateWithoutTeamsInput>
  }

  export type TeamLeagueUpdateWithWhereUniqueWithoutTeamsInput = {
    where: TeamLeagueWhereUniqueInput
    data: XOR<TeamLeagueUpdateWithoutTeamsInput, TeamLeagueUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamLeagueUpdateManyWithWhereWithoutTeamsInput = {
    where: TeamLeagueScalarWhereInput
    data: XOR<TeamLeagueUpdateManyMutationInput, TeamLeagueUncheckedUpdateManyWithoutTeamsInput>
  }

  export type BetCreateWithoutBet_linesInput = {
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutBet_linesInput = {
    id?: number
    user_id: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetCreateOrConnectWithoutBet_linesInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutBet_linesInput, BetUncheckedCreateWithoutBet_linesInput>
  }

  export type LeagueCreateWithoutBet_linesInput = {
    name: string
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    image: ImageCreateNestedOneWithoutLeaguesInput
    teams_leagues?: TeamLeagueCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueUncheckedCreateWithoutBet_linesInput = {
    id?: number
    name: string
    img_id: number
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    teams_leagues?: TeamLeagueUncheckedCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueCreateOrConnectWithoutBet_linesInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutBet_linesInput, LeagueUncheckedCreateWithoutBet_linesInput>
  }

  export type BetUpsertWithoutBet_linesInput = {
    update: XOR<BetUpdateWithoutBet_linesInput, BetUncheckedUpdateWithoutBet_linesInput>
    create: XOR<BetCreateWithoutBet_linesInput, BetUncheckedCreateWithoutBet_linesInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutBet_linesInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutBet_linesInput, BetUncheckedUpdateWithoutBet_linesInput>
  }

  export type BetUpdateWithoutBet_linesInput = {
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutBet_linesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueUpsertWithoutBet_linesInput = {
    update: XOR<LeagueUpdateWithoutBet_linesInput, LeagueUncheckedUpdateWithoutBet_linesInput>
    create: XOR<LeagueCreateWithoutBet_linesInput, LeagueUncheckedCreateWithoutBet_linesInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutBet_linesInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutBet_linesInput, LeagueUncheckedUpdateWithoutBet_linesInput>
  }

  export type LeagueUpdateWithoutBet_linesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutLeaguesNestedInput
    teams_leagues?: TeamLeagueUpdateManyWithoutLeaguesNestedInput
  }

  export type LeagueUncheckedUpdateWithoutBet_linesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_leagues?: TeamLeagueUncheckedUpdateManyWithoutLeaguesNestedInput
  }

  export type LeagueCreateWithoutTeams_leaguesInput = {
    name: string
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineCreateNestedManyWithoutLeaguesInput
    image: ImageCreateNestedOneWithoutLeaguesInput
  }

  export type LeagueUncheckedCreateWithoutTeams_leaguesInput = {
    id?: number
    name: string
    img_id: number
    country: string
    type: number
    tier: number
    season: string
    created_at?: Date | string
    updated_at?: Date | string
    bet_lines?: BetLineUncheckedCreateNestedManyWithoutLeaguesInput
  }

  export type LeagueCreateOrConnectWithoutTeams_leaguesInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutTeams_leaguesInput, LeagueUncheckedCreateWithoutTeams_leaguesInput>
  }

  export type TeamCreateWithoutTeams_leaguesInput = {
    name: string
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
    images: ImageCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutTeams_leaguesInput = {
    id?: number
    name: string
    img_id: number
    short_name: string
    country: string
    founded_year: number
    stadium: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamCreateOrConnectWithoutTeams_leaguesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeams_leaguesInput, TeamUncheckedCreateWithoutTeams_leaguesInput>
  }

  export type LeagueUpsertWithoutTeams_leaguesInput = {
    update: XOR<LeagueUpdateWithoutTeams_leaguesInput, LeagueUncheckedUpdateWithoutTeams_leaguesInput>
    create: XOR<LeagueCreateWithoutTeams_leaguesInput, LeagueUncheckedCreateWithoutTeams_leaguesInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutTeams_leaguesInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutTeams_leaguesInput, LeagueUncheckedUpdateWithoutTeams_leaguesInput>
  }

  export type LeagueUpdateWithoutTeams_leaguesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUpdateManyWithoutLeaguesNestedInput
    image?: ImageUpdateOneRequiredWithoutLeaguesNestedInput
  }

  export type LeagueUncheckedUpdateWithoutTeams_leaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUncheckedUpdateManyWithoutLeaguesNestedInput
  }

  export type TeamUpsertWithoutTeams_leaguesInput = {
    update: XOR<TeamUpdateWithoutTeams_leaguesInput, TeamUncheckedUpdateWithoutTeams_leaguesInput>
    create: XOR<TeamCreateWithoutTeams_leaguesInput, TeamUncheckedCreateWithoutTeams_leaguesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeams_leaguesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeams_leaguesInput, TeamUncheckedUpdateWithoutTeams_leaguesInput>
  }

  export type TeamUpdateWithoutTeams_leaguesInput = {
    name?: StringFieldUpdateOperationsInput | string
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeams_leaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_id?: IntFieldUpdateOperationsInput | number
    short_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_year?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineCreateManyBetsInput = {
    id?: number
    league_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetLineUpdateWithoutBetsInput = {
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leagues?: LeagueUpdateOneRequiredWithoutBet_linesNestedInput
  }

  export type BetLineUncheckedUpdateWithoutBetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineUncheckedUpdateManyWithoutBetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    league_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyImageInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    last_login: Date | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutImageInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyUserInput = {
    id?: number
    bet_type: number
    stake: number
    odds: number
    result: string
    profit: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionCreateManyUserInput = {
    id?: number
    type_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BetUpdateWithoutUserInput = {
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUpdateManyWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bet_lines?: BetLineUncheckedUpdateManyWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_type?: IntFieldUpdateOperationsInput | number
    stake?: IntFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    profit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: TransactionTypeUpdateOneRequiredWithoutWallet_transactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyTransaction_typeInput = {
    id?: number
    user_id: number
    amount: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletTransactionUpdateWithoutTransaction_typeInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateWithoutTransaction_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutTransaction_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineCreateManyLeaguesInput = {
    id?: number
    bet_id: number
    match: string
    prediction: string
    odd: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamLeagueCreateManyLeaguesInput = {
    team_id: number
  }

  export type BetLineUpdateWithoutLeaguesInput = {
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateOneRequiredWithoutBet_linesNestedInput
  }

  export type BetLineUncheckedUpdateWithoutLeaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetLineUncheckedUpdateManyWithoutLeaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bet_id?: IntFieldUpdateOperationsInput | number
    match?: StringFieldUpdateOperationsInput | string
    prediction?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamLeagueUpdateWithoutLeaguesInput = {
    teams?: TeamUpdateOneRequiredWithoutTeams_leaguesNestedInput
  }

  export type TeamLeagueUncheckedUpdateWithoutLeaguesInput = {
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamLeagueUncheckedUpdateManyWithoutLeaguesInput = {
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamLeagueCreateManyTeamsInput = {
    league_id: number
  }

  export type TeamLeagueUpdateWithoutTeamsInput = {
    leagues?: LeagueUpdateOneRequiredWithoutTeams_leaguesNestedInput
  }

  export type TeamLeagueUncheckedUpdateWithoutTeamsInput = {
    league_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamLeagueUncheckedUpdateManyWithoutTeamsInput = {
    league_id?: IntFieldUpdateOperationsInput | number
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