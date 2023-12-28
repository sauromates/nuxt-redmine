import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'
import { defu } from 'defu'
import { defineRedmineApiRoutes } from './runtime/routes'
import type { RedmineResource } from './runtime/types/resource'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Administrator API token. Can be obtained at `/my/api_key`
   */
  redmineApiKey: string
  /**
   * URL of Redmine instance without path or trailing slash (e.g. https://redmine.org)
   */
  baseUrl: `http://${string}` | `https://${string}`

  /**
   * Redmine supports both JSON and XML formats with its REST API, you're free to choose on of them.
   * Defaults to JSON.
   */
  responseFormat?: 'json' | 'xml'

  /**
   * List resources you want to use inside your app. Defaults to all available REST API resources.
   */
  resources?: RedmineResource[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-redmine',
    configKey: 'redmine',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    redmineApiKey: '',
    baseUrl: 'http://localhost',
    responseFormat: 'json',
    resources: ['issues', 'users', 'projects']
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addImportsDir(resolver.resolve('./runtime/composables'))

    defineRedmineApiRoutes(resolver, ['issues'])

    nuxt.options.runtimeConfig.redmineApiKey = options.redmineApiKey
    nuxt.options.runtimeConfig.public.redmine = defu(nuxt.options.runtimeConfig.public.redmine || {}, {
      baseUrl: options.baseUrl,
      responseFormat: options.responseFormat,
      resources: options.resources
    })

    nuxt.options.nitro.routeRules = defu(nuxt.options.nitro.routeRules, {
      '/api/redmine/**': {
        cors: true
      }
    })
  }
})
