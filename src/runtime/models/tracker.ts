import type { RedmineIssue } from './issue'
import type { RedmineIssueStatus } from './status'

export type RedmineTracker = {
  id?: number
  name: string
  default_status: Pick<RedmineIssueStatus, 'id' | 'name'>
  description?: string
  enabled_standard_fields?: (keyof RedmineIssue)[]
}
