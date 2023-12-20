import type { Resource } from "../api/resource"

export type ShortRelationField = {
  id: number
  name: string
}

export type Issue = Resource & {
  subject: string
  description?: string
  project: ShortRelationField
  tracker: ShortRelationField
  status: ShortRelationField & { isClosed: boolean }
  priority?: ShortRelationField
  author: ShortRelationField
  assignedTo?: ShortRelationField
  category?: ShortRelationField
  fixedVersion?: ShortRelationField
  doneRatio: number
}
