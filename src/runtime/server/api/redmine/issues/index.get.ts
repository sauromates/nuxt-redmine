import { defineEventHandler, getQuery } from '#imports'
import type { RealRedmineIssue } from '../../../../models/issue'
import { useRedmineClient } from '../../../../composables/useRedmineClient'
import type { FindRedmineIssues } from '../../../../types/requests/issues/findIssues'

export type RedmineIssueCollection = {
  issues: RealRedmineIssue[]
  limit: number
  offset: number
  total_count: number
}

/**
 * `GET /issues` request handler
 */
export default defineEventHandler<FindRedmineIssues, Promise<RedmineIssueCollection>>(async (event) => {
  const redmine = useRedmineClient()

  const endpoint = redmine.createEndpoint({
    path: '/issues',
    query: getQuery(event)
  })
  const withOptions = { method: event.method }

  return await redmine.call(endpoint, withOptions)
})
