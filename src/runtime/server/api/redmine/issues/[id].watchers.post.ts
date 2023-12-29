import { defineEventHandler } from '#imports'
import { AddWatcherToRedmineIssue } from '../../../../types/requests/issues/addWatcher'
import type { RealRedmineIssue } from '../../../../models/issue'
import { useRedmineClient } from '../../../../composables/useRedmineClient'

export default defineEventHandler<AddWatcherToRedmineIssue>(async (event): Promise<RealRedmineIssue> => {
  const redmine = useRedmineClient()
  const body = await readBody(event)
  const issueId = getRouterParam(event, 'id')

  const endpoint = redmine.createEndpoint({ path: `/issues/${issueId}/watchers` })
  const withBody = { method: 'post', body: body }

  return await redmine.call(endpoint, withBody)
})
