import { defineNuxtPlugin } from '#imports'
import RedmineClient from '../runtime/api/client'
import IssueResourceModule from './api/resources/issues'
import ProjectResourceModule from './api/resources/projects'

type RedmineResourceModuleRegistry = {
  issues: IssueResourceModule
  projects: ProjectResourceModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const redmineBaseUrl = nuxtApp.$config.public.redmine.baseUrl
  const redmineApiKey = nuxtApp.$config.redmineApiKey
  const redmineClient = new RedmineClient(redmineBaseUrl, redmineApiKey)

  const modules: RedmineResourceModuleRegistry = {
    issues: new IssueResourceModule(redmineClient),
    projects: new ProjectResourceModule(redmineClient)
  }

  return { provide: { redmine: modules } }
})
