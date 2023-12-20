import type { Resource } from '../api/resource'

export type Project = Resource & {
  name: string
  identifier: string
  description?: string
  homepage?: string
  created_on: string
  updated_on: string
  is_public: boolean
}
