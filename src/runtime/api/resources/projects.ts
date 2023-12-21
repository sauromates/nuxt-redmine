import { RedmineResourceModule } from '../resource'
import type { RedmineRequestOptions } from '../../types'
import type { RedmineProject } from '../../models/project'
import { type FetchOptions } from 'ofetch'

export default class RedmineProjectResourceModule extends RedmineResourceModule {
  protected resourcePath: string = '/projects'

  async get(id: number | string, options?: RedmineRequestOptions): Promise<RedmineProject> {
    const endpoint: string = `${this.resourcePath}/${id}.${this.format(options)}`
    const withOptions: FetchOptions = { method: 'get' }

    return await this.client.call(endpoint, withOptions).then((response) => response[0])
  }

  async getCollection(options?: RedmineRequestOptions): Promise<RedmineProject[]> {
    return await this.client
      .call(`${this.resourcePath}.${this.format(options)}`, { method: 'get' })
      .then((response) => response.projects)
  }
}
