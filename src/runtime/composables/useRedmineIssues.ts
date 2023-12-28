import type { FindRedmineIssues } from '../types/requests/issues/findIssues'
import type { NewRedmineIssue, RealRedmineIssue, UpdatedRedmineIssue } from '../models/issue'
import type { ShowRedmineIssue } from '../types/requests/issues/showIssue'
import { flattenRelations } from '../utils/relations'
import type { RedmineIssueCollection } from '../server/api/redmine/issues/index.get'
import type { AddWatcherToRedmineIssue } from '../types/requests/issues/addWatcher'

export interface RedmineIssuesModule {
  search: (request?: FindRedmineIssues) => Promise<RedmineIssueCollection>
  create: (issue: NewRedmineIssue) => Promise<RealRedmineIssue>
  show: (id: number, query?: ShowRedmineIssue) => Promise<RealRedmineIssue>
  update: (issue: UpdatedRedmineIssue) => Promise<void>
  remove: (issue: RealRedmineIssue) => Promise<void>
  addWatcher: (id: number, request: AddWatcherToRedmineIssue) => Promise<any>
  removeWatcher: (id: number, watcherId: number) => Promise<void>
}

export const useRedmineIssues = (): RedmineIssuesModule => {
  const search = async (request?: FindRedmineIssues) => {
    return await $fetch<RedmineIssueCollection>('/api/redmine/issues', {
      method: 'get',
      query: request?.query
    })
  }

  const create = async (issue: NewRedmineIssue): Promise<RealRedmineIssue> => {
    return await $fetch<RealRedmineIssue>('/api/redmine/issues', {
      method: 'post',
      body: flattenRelations(issue)
    })
  }

  const show = async (id: number, query?: ShowRedmineIssue): Promise<RealRedmineIssue> => {
    return await $fetch<RealRedmineIssue>(`/api/redmine/issues/${id}`, { method: 'get', query: query?.query })
  }

  const update = async (issue: UpdatedRedmineIssue): Promise<void> => {
    await $fetch(`/api/redmine/issues/${issue.id}`, {
      method: 'put',
      body: flattenRelations(issue)
    })
  }

  const remove = async (issue: RealRedmineIssue): Promise<void> => {
    await $fetch(`/api/redmine/issues/${issue.id}`, { method: 'delete' })
  }

  const addWatcher = async (id: number, request: AddWatcherToRedmineIssue): Promise<any> => {
    return await $fetch(`/api/redmine/issues/${id}/watchers`, {
      method: 'post',
      body: request.body
    })
  }

  const removeWatcher = async (id: number, watcherId: number): Promise<void> => {
    await $fetch(`/api/redmine/issues/${id}/watchers/${watcherId}`, { method: 'delete' })
  }

  return {
    search,
    create,
    show,
    update,
    remove,
    addWatcher,
    removeWatcher
  }
}
