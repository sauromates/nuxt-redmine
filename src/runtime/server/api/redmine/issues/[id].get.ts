import { defineEventHandler } from '#imports'
import type { ShowRedmineIssue } from '../../../../types/requests/issues/showIssue'
import type { RealRedmineIssue } from '../../../../models/issue'
import { useRedmineClient } from '../../../../composables/useRedmineClient'

export default defineEventHandler<ShowRedmineIssue, Promise<RealRedmineIssue>>(async (event) => {
  const redmine = useRedmineClient()
  const issueId = getRouterParam(event, 'id')

  if (!issueId) {
    throw createError({ statusCode: 400, statusMessage: 'Undefined issue ID' })
  }

  const endpoint = redmine.createEndpoint({
    path: `/issues/${issueId}`,
    query: getQuery(event)
  })
  const withOptions = { method: event.method }

  return await redmine
    .call(endpoint, withOptions)
    .then((response: { issue: RealRedmineIssue }) => response.issue)
})
