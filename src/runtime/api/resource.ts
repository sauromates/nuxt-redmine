import type { RedmineRequestOptions, RedmineResponseFormat } from "../types"
import type RedmineClient from "./client"

export type Resource = { id?: number|string }

export abstract class ResourceModule {
  protected client: RedmineClient
  protected abstract resourcePath: string

  constructor(httpClient: RedmineClient) {
    this.client = httpClient
  }

  protected format(options?: RedmineRequestOptions): RedmineResponseFormat {
    return options?.format ?? this.client.defaultFormat()
  }

  public abstract get(id: number|string, options?: RedmineRequestOptions): Promise<Resource>

  public abstract getCollection(options?: RedmineRequestOptions): Promise<Resource[]>
}
