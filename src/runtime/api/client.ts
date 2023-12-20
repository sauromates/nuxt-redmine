import { type $Fetch, $fetch } from 'ofetch'
import type { RedmineRequestOptions, RedmineResponseFormat } from '../types'

/**
 * Preconfigured $Fetch HTTP client
 */
export default class RedmineClient {
  public defaultRequestOptions: RedmineRequestOptions = { format: 'json' }
  private readonly $client: $Fetch

  constructor(baseUrl: string, apiKey: string) {
    this.$client = $fetch.create({
      baseURL: baseUrl,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': apiKey
      }
    })
  }

  public defaultFormat(): RedmineResponseFormat {
    return this.defaultRequestOptions?.format ?? 'json'
  }

  public get call(): $Fetch {
    return this.$client
  }
}
