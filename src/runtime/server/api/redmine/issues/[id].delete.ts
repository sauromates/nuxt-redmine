import { defineEventHandler } from '#imports'
import { useRedmineClient } from '../../../../composables/useRedmineClient'

export default defineEventHandler<void, Promise<void>>(async (event) => {
  const redmine = useRedmineClient()
  const issueId = getRouterParam(event, 'id')

  if (!issueId) {
    throw createError({ statusCode: 400, statusMessage: 'Undefined issue ID' })
  }

  const endpoint = redmine.createEndpoint({ path: `/issues/${issueId}` })
  const withOptions = { method: event.method }

  await redmine.call(endpoint, withOptions)
})
