import type { RedmineProject } from './project'
import type { RedmineVersionStatus } from './status'

export type RedmineVersion = {
  id?: number
  name: string
  project: Pick<RedmineProject, 'id' | 'name'>
  description?: string
  status: RedmineVersionStatus
  due_date: Date
  sharing: 'none' | 'descendants' | 'hierarchy' | 'tree' | 'system'
  wiki_page_title?: string
  estimated_hours: number | null
  spent_hours: number | null
  created_on: Date
  updated_on: Date
}
