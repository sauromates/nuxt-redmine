import { type H3Event } from 'h3'
import { type $Fetch, $fetch } from 'ofetch'
import type { RedmineResource } from '../types/resource'

export type RedmineEndpointOptions = {
  path: `/${RedmineResource}` | `/${RedmineResource}/${string}`
  query?: Record<string, any>
}

export const useRedmineClient = (event?: H3Event) => {
  const config = useRuntimeConfig(event)
  const { baseUrl, responseFormat: format } = config.public.redmine
  const apiKey = config.redmineApiKey

  const call: $Fetch = $fetch.create({
    baseURL: baseUrl,
    headers: {
      Accept: `application/${format}`,
      'Content-Type': `application/${format}`,
      'X-Redmine-Api-Key': apiKey
    }
  })

  const createEndpoint = (options: RedmineEndpointOptions) => {
    const endpoint: string = `${options.path}.${format}`
    const queryParams: string = options.query ? `?${new URLSearchParams(options.query).toString()}` : ''

    return endpoint + queryParams
  }

  return { call, createEndpoint }
}
