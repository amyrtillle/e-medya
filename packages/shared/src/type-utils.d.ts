export type RequireAtLeastOne<T> = {
  [K in keyof T]: Pick<T, K>
}[keyof T]

export type RequireOnlyOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>>
}[keyof T]

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
