export type FlattenedRelations<Model> = {
  [Key in `${keyof Model & string}_id`]: Key extends `${infer Relation}_id`
    ? Relation extends keyof Model
      ? Model[Relation] extends { id: infer IdType }
        ? IdType
        : never
      : never
    : Key extends keyof Model
      ? Model[Key] // Keep the original key as is
      : never
}

/**
 * Transforms given model to an object with `relation_id` keys instead of `relation: {id: number, ...}`
 */
export function flattenRelations<T extends Record<string, any>>(source: T): FlattenedRelations<T> {
  const relations = {} as FlattenedRelations<T>

  const transformedKeys: (keyof T)[] = []
  for (const key in source) {
    const modelKey = key as keyof T
    const requestKey = `${key}_id` as keyof FlattenedRelations<T>

    if (typeof source[modelKey] === 'object' && 'id' in source[modelKey]) {
      relations[requestKey] = source[modelKey].id
      transformedKeys.push(key)
    }
  }

  const model = Object.entries(source)

  const filteredFields = model.filter(([key]) => !transformedKeys.includes(key))
  const originalFields = Object.fromEntries(filteredFields)

  return {
    ...originalFields,
    ...relations
  }
}
