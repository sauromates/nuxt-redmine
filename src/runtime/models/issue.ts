import type { RedmineIssueCategory } from './category'
import type { RedmineIssueStatus } from './status'
import type { RedmineIssuePriority } from './priority'
import type { RedmineProject } from './project'
import type { RedmineTracker } from './tracker'
import type { RedmineVersion } from './version'
import type { RedmineAttachment } from './attachment'
import type { RedmineJournal } from './journal'
import type { RedmineIssueRelation } from './relation'

export type RedmineIssue = {
  id?: number
  subject: string
  description?: string
  project: Partial<Pick<RedmineProject, 'id' | 'name'>>
  tracker: Partial<Pick<RedmineTracker, 'id' | 'name'>>
  status: RedmineIssueStatus
  priority?: Partial<Pick<RedmineIssuePriority, 'id' | 'name'>>
  parent?: Pick<RedmineIssue, 'id'>
  author: { id: number; name: string }
  assigned_to?: { id: number; name: string }
  category?: Partial<Pick<RedmineIssueCategory, 'id' | 'name'>>
  fixed_version?: Partial<Pick<RedmineVersion, 'id' | 'name'>>
  done_ratio: number
  is_private: boolean
  estimated_hours: number | null
  total_estimated_hours: number | null
  spent_hours: number
  total_spent_hours: number
  start_date: Date
  due_date: Date
  created_on: Date
  updated_on: Date
  closed_on: Date | null
  watchers: { id: number; name: string }[]
  attachments?: RedmineAttachment[]
  allowed_statuses?: RedmineIssueStatus[]
  children?: Pick<RedmineIssue, 'id' | 'tracker' | 'subject'>[]
  journals?: RedmineJournal[]
  relations?: RedmineIssueRelation[]
}

export type RealRedmineIssue = RedmineIssue & {
  id: number
}

export type NewRedmineIssue = Partial<RedmineIssue> & {
  subject: string
  project: Required<Pick<RedmineProject, 'id'>>
  priority: Required<Pick<RedmineIssuePriority, 'id'>>
  tracker: Required<Pick<RedmineTracker, 'id'>>
}

export type UpdatedRedmineIssue = Partial<RedmineIssue> & {
  id: number
  subject: string
  project: Required<Pick<RedmineProject, 'id'>>
  priority: Required<Pick<RedmineIssuePriority, 'id'>>
  tracker: Required<Pick<RedmineTracker, 'id'>>
}
