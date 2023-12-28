import { addServerHandler, type Resolver } from '@nuxt/kit'
import type { RedmineResource } from './types/resource'

export function defineRedmineApiRoutes(resolver: Resolver, resources: RedmineResource[]) {
  addServerHandler({
    route: '/api/redmine/issues/:id/watchers',
    method: 'post',
    handler: resolver.resolve('./runtime/server/api/redmine/issues/[id].watchers.post.ts')
  })

  addServerHandler({
    route: '/api/redmine/issues/:id/watchers/:user_id',
    method: 'delete',
    handler: resolver.resolve('./runtime/server/api/redmine/issues/[id].watchers.[user_id].delete.ts')
  })

  for (const resource of resources) {
    addServerHandler({
      route: `/api/redmine/${resource}`,
      method: 'get',
      handler: resolver.resolve(`./runtime/server/api/redmine/${resource}/index.get.ts`)
    })

    addServerHandler({
      route: `/api/redmine/${resource}`,
      method: 'post',
      handler: resolver.resolve(`./runtime/server/api/redmine/${resource}/index.post.ts`)
    })

    addServerHandler({
      route: `/api/redmine/${resource}/:id`,
      method: 'get',
      handler: resolver.resolve(`./runtime/server/api/redmine/${resource}/[id].get.ts`)
    })

    addServerHandler({
      route: `/api/redmine/${resource}/:id`,
      method: 'put',
      handler: resolver.resolve(`./runtime/server/api/redmine/${resource}/[id].put.ts`)
    })

    addServerHandler({
      route: `/api/redmine/${resource}/:id`,
      method: 'delete',
      handler: resolver.resolve(`./runtime/server/api/redmine/${resource}/[id].delete.ts`)
    })
  }
}
