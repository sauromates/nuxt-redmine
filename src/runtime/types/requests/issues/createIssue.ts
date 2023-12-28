import type { RedmineRequest } from '../request'

/**
 * Create issue request body params.
 *
 * Docs {@link https://www.redmine.org/projects/redmine/wiki/Rest_RedmineIssues#Creating-an-RedmineIssue}
 *
 * @todo Files attachments
 */
export type CreateRedmineIssue = Omit<RedmineRequest, 'query'> & {
  body: {
    subject: string
    project_id: number
    priority_id: number
    tracker_id: number
    description?: string
    status_id?: number
    category_id?: number
    fixed_version_id?: number
    assigned_to_id?: number
    parent_issue_id?: number
    watcher_user_ids?: number[]
    is_private?: boolean
    estimated_hours?: number | null
  }
}
