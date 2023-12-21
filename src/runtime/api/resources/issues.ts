import { type FetchOptions } from 'ofetch'
import { RedmineResourceModule } from '../resource'
import { type RedmineIssue } from '../../models/issue'
import type { RedmineRequestOptions } from '../../types'

export default class IssueResourceModule extends RedmineResourceModule {
  protected resourcePath: string = '/issues'

  async get(id: number | string, options?: RedmineRequestOptions): Promise<RedmineIssue> {
    const endpoint: string = `${this.resourcePath}/${id}.${this.format(options)}`
    const withOptions: FetchOptions = { method: 'get' }

    return await this.client.call(endpoint, withOptions).then((response) => response.issue)
  }

  async getCollection(options?: RedmineRequestOptions): Promise<RedmineIssue[]> {
    const endpoint: string = `${this.resourcePath}.${this.format(options)}`
    const withOptions: FetchOptions = { method: 'get' }

    return await this.client.call(endpoint, withOptions).then((response) => response.issues)
  }
}
