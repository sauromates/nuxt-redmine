import { defineNuxtPlugin } from '#imports'
import RedmineClient from '../runtime/api/client'
import RedmineIssueResourceModule from './api/resources/issues'
import RedmineProjectResourceModule from './api/resources/projects'

type RedmineResourceModuleRegistry = {
  issues: RedmineIssueResourceModule
  projects: RedmineProjectResourceModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const redmineBaseUrl = nuxtApp.$config.public.redmine.baseUrl
  const redmineApiKey = nuxtApp.$config.redmineApiKey
  const redmineClient = new RedmineClient(redmineBaseUrl, redmineApiKey)

  const modules: RedmineResourceModuleRegistry = {
    issues: new RedmineIssueResourceModule(redmineClient),
    projects: new RedmineProjectResourceModule(redmineClient)
  }

  return { provide: { redmine: modules } }
})
