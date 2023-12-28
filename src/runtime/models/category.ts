import type { RedmineProject } from './project'
import type { RedmineUser } from './user'

export type RedmineIssueCategory = {
  id?: number
  name: string
  project: Pick<RedmineProject, 'id' | 'name'>
  assigned_to?: Pick<RedmineUser, 'id' | ('firstname' & 'lastname')>
}
