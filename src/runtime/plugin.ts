import { defineNuxtPlugin } from '#imports'
import RedmineClient from '../runtime/api/client'
import IssueResourceModule from './api/resources/issues'
import ProjectResourceModule from './api/resources/projects'

type ResourceModuleRegistry = {
  issues: IssueResourceModule
  projects: ProjectResourceModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const redmineBaseUrl = nuxtApp.$config.public.redmine.baseUrl
  const redmineApiKey = nuxtApp.$config.redmineApiKey
  const redmineClient = new RedmineClient(redmineBaseUrl, redmineApiKey)

  const modules: ResourceModuleRegistry = {
    issues: new IssueResourceModule(redmineClient),
    projects: new ProjectResourceModule(redmineClient)
  }

  return { provide: { redmine: modules } }
})
