import type { RedmineResource } from '../api/resource'

export type RedmineProject = RedmineResource & {
  name: string
  identifier: string
  description?: string
  homepage?: string
  created_on: string
  updated_on: string
  is_public: boolean
}
