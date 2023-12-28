import { defineEventHandler } from '#imports'
import { useRedmineClient } from '../../../../composables/useRedmineClient'
import type { CreateRedmineIssue } from '../../../../types/requests/issues/createIssue'
import type { RealRedmineIssue } from '../../../../models/issue'

export default defineEventHandler<CreateRedmineIssue>(async (event): Promise<RealRedmineIssue> => {
  const redmine = useRedmineClient(event)
  const body = await readBody(event)

  const endpoint = redmine.createEndpoint({ path: '/issues' })
  const withOptions = {
    method: event.method,
    body: { issue: body }
  }

  return await redmine
    .call(endpoint, withOptions)
    .then((response: { issue: RealRedmineIssue }) => response.issue)
})
