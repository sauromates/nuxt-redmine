import type { RedmineIssue } from '../../../models/issue'
import type { RedmineRequest } from '../request'
import type { RedmineQueryParams } from '../params'

/**
 * Get issues collection request query params.
 *
 * Docs {@link https://www.redmine.org/projects/redmine/wiki/Rest_RedmineIssues#Listing-RedmineIssues}
 *
 * @todo Dates filtering
 */
export type FindRedmineIssues = Omit<RedmineRequest, 'body'> & {
  query?: RedmineQueryParams<RedmineIssue> & {
    include?: 'attachments' | 'relations' | ('attachments' | 'relations')[]
    issue_id?: number
    project_id?: number
    subproject_id?: number
    tracker_id?: number
    status_id?: 'open' | 'closed' | '*' | number
    assigned_to_id?: 'me' | number
    parent_id?: number
  }
}
