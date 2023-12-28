import { defineEventHandler, readBody } from '#imports'
import type { UpdateRedmineIssue } from '../../../../types/requests/issues/updateIssue'
import { useRedmineClient } from '../../../../composables/useRedmineClient'

export default defineEventHandler<UpdateRedmineIssue, Promise<void>>(async (event) => {
  const redmine = useRedmineClient(event)
  const body = await readBody(event)
  const issueId = getRouterParam(event, 'id')

  if (!issueId) {
    throw createError({ statusCode: 400, statusMessage: 'Undefined issue ID' })
  }

  const endpoint = redmine.createEndpoint({ path: `/issues/${issueId}` })
  const withBody = {
    method: event.method,
    body: { issue: body }
  }

  await redmine.call(endpoint, withBody)
})
