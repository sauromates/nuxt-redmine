/**
 * Defines allowed query params for basic pagination and sorting of resource collections.
 *
 * Usage of generic allows to list model fields available for sorting in a type-safe manner.
 */
export type RedmineQueryParams<T> = {
  offset?: number
  limit?: number
  sort?: Record<keyof T, 'desc' | undefined>
  includes?: string
}
