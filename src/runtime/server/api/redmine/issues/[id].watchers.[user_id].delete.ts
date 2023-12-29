import { defineEventHandler } from '#imports'
import { useRedmineClient } from '../../../../composables/useRedmineClient'

export default defineEventHandler<never>(async (event): Promise<void> => {
  const redmine = useRedmineClient()
  const { id: issueId, user_id: watcherId } = getRouterParams(event)

  console.log(issueId, watcherId)

  if (!issueId || !watcherId) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid route params' })
  }

  const endpoint = redmine.createEndpoint({ path: `/issues/${issueId}/watchers/${watcherId}` })
  const withOptions = { method: 'delete' }

  await redmine.call(endpoint, withOptions)
})
