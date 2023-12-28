# Nuxt Redmine

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Redmine REST API integration for Nuxt

**DISCLAIMER: Package is at a very early stage of development and not suited for production. Any suggestions, bug reports and contributions are most welcome.**

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
    <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-redmine?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](/docs) -->

## Features

<!-- Highlight some of the features your module provide here -->

- Redmine REST API resources provided via Nuxt API routes
- Fully typed composables for resource operations

## Quick Setup

### Redmine

1. You should have access to a running Redmine instace (e.g. https://redmine.mydomain.com)
2. Configure your Redmine instance to allow API tokens authentication (see [Redmine documentation](https://www.redmine.org/projects/redmine/wiki/Rest_api#Authentication))

### Nuxt

1. Add `nuxt-redmine` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-redmine

# Using yarn
yarn add --dev nuxt-redmine

# Using npm
npm install --save-dev nuxt-redmine
```

2. Add `nuxt-redmine` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-redmine']
})
```

3. Add your Redmine URL and API token to runtime configuration

```js
export default defineNuxtConfig({
  modules: ['nuxt-redmine'],
  redmine: {
    redmineApiKey: '', // Admin API key is required!
    baseUrl: 'https://redmine.mydomain.com',
    // Optional
    responseFormat: 'json', // Currently the only supported format
    resources: ['issues', 'users'] // Defaults to all available resources
  }
})
```

**Security warning**: DO NOT save your API key in `nuxt.config.ts` file. Use `.env` instead.

```sh
NUXT_REDMINE_API_KEY=myverysecretkey
```

That's it! Nuxt Redmine will automatically configure Nuxt API routes for Redmine queries, which you can use from composables or direct calls ✨

## Usage

Module provides composables for each Redmine REST resource (i.e. `/issues`). Being just wrappers for built-in `$fetch` call, they provide typed request and response objects and allow to use internal model types instead of direct usage of request body.

Although composables are recommended for usage, it's also possible to use `useFetch` or `useAsyncData` directly, since module generates Nuxt API routes.

```ts
<script setup lang="ts">
// Using a registry
const { search } = useRedmineIssues()

// Using composable to perform data fetching
// This way query object will have IDE type completion
const { data } = useAsyncData('issues', () => search({ query: { limit: 5, tracker_id: 2 } }))

// Using direct API call to perform data fetching
const { data } = useFetch('/api/redmine/issues', { query: { limit: 5, tracker_id: 2 } })
</script>

<template>
  <div v-for="issue in data.issues" :key="issue.id">
    {{ issue.subject }}
  </div>
</template>
```

## Testing

Due to the purpose of the module, most of the testing is possible only against a real Redmine instance. Repository provides a Docker image of Redmine with preconfigured web server settings.

## License

Published under [MIT license](LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-redmine/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-redmine
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-redmine.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-redmine
[license-src]: https://img.shields.io/npm/l/nuxt-redmine.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-redmine
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
