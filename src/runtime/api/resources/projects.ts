import { ResourceModule } from '../resource'
import type { RedmineRequestOptions } from '../../types'
import type { Project } from '../../models/project'
import { type FetchOptions } from 'ofetch'

export default class ProjectResourceModule extends ResourceModule {
  protected resourcePath: string = '/projects'

  async get(id: number | string, options?: RedmineRequestOptions): Promise<Project> {
    const endpoint: string = `${this.resourcePath}/${id}.${this.format(options)}`
    const withOptions: FetchOptions = { method: 'get' }

    return await this.client.call(endpoint, withOptions).then((response) => response[0])
  }

  async getCollection(options?: RedmineRequestOptions): Promise<Project[]> {
    return await this.client
      .call(`${this.resourcePath}.${this.format(options)}`, { method: 'get' })
      .then((response) => response.projects)
  }
}
