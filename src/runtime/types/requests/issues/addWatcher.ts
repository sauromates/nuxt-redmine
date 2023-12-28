import type { RedmineRequest } from '../request'

/**
 * Add watcher request body params.
 *
 * Docs {@link https://www.redmine.org/projects/redmine/wiki/Rest_Issues#Adding-a-watcher}
 */
export type AddWatcherToRedmineIssue = Omit<RedmineRequest, 'query'> & {
  body: {
    user_id: number
  }
}
