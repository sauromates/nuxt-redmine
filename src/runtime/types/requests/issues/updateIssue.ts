import type { RedmineRequest } from '../request'

/**
 * Update issue request body params. Note that Redmine updates resources only with PUT requests.
 *
 * Docs {@link https://www.redmine.org/projects/redmine/wiki/Rest_Issues#Updating-an-issue}
 */
export type UpdateRedmineIssue = Omit<RedmineRequest, 'query'> & {
  body: Partial<{
    subject: string
    project_id: number
    priority_id: number
    tracker_id: number
    description: string
    status_id: number
    category_id: number
    fixed_version_id: number
    assigned_to_id: number
    parent_issue_id: number
    watcher_user_ids: number[]
    is_private: boolean
    estimated_hours: number
    notes: string
    private_notes: string
  }>
}
