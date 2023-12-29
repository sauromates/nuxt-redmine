import type { RedmineRequest } from '../request'

export type RedmineIssueIncludedRelation =
  | 'children'
  | 'attachments'
  | 'relations'
  | 'journals'
  | 'watchers'
  | 'allowed_statuses'

/**
 * Get issue request query params.
 *
 * Docs {@link https://www.redmine.org/projects/redmine/wiki/Rest_Issues#Showing-an-issue}
 */
export type ShowRedmineIssue = Omit<RedmineRequest, 'body'> & {
  query?: {
    include?: RedmineIssueIncludedRelation | RedmineIssueIncludedRelation[]
  }
}
