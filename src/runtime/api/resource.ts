import type { RedmineRequestOptions, RedmineResponseFormat } from '../types'
import type RedmineClient from './client'

export type RedmineResource = { id?: number | string }

/**
 * Resource module is an abstraction for REST API resource repository.
 *
 * Concrete implementations must implement real requests to their respectful endpoints,
 * define a resource path (e.g. `/issues`)
 */
export abstract class RedmineResourceModule {
  protected client: RedmineClient
  protected abstract resourcePath: string

  constructor(httpClient: RedmineClient) {
    this.client = httpClient
  }

  protected format(options?: RedmineRequestOptions): RedmineResponseFormat {
    return options?.format ?? this.client.defaultFormat()
  }

  public abstract get(id: number | string, options?: RedmineRequestOptions): Promise<RedmineResource>

  public abstract getCollection(options?: RedmineRequestOptions): Promise<RedmineResource[]>
}
