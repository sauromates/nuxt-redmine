import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  redmineApiKey: string
  baseUrl?: string
  responseFormat?: 'json' | 'xml'
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
    baseUrl: '',
    responseFormat: 'json'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    nuxt.options.runtimeConfig.redmineApiKey = options.redmineApiKey

    nuxt.options.runtimeConfig.public.redmine = defu(nuxt.options.runtimeConfig.public.redmine || {}, {
      baseUrl: options.baseUrl,
      responseFormat: options.responseFormat
    })
  }
})
