# Nuxt Redmine

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Redmine REST API integration for Nuxt

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-redmine?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- Redmine REST API resources
- Globally available `$redmine` plugin

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
    redmineApiKey: '',
    baseUrl: 'https://redmine.mydomain.com',
    // Optional
    responseFormat: 'json'
  }
})
```

**Security warning**: DO NOT save your API key in `nuxt.config.ts` file. Use `.env` instead.

```sh
NUXT_REDMINE_API_KEY=myverysecretkey
```

That's it! You can now use Nuxt Redmine in your Nuxt app ✨

## Usage

To use a module simply import a plugin definition from `useNuxtApp()` composable.

```ts
<script setup lang="ts">
const { $redmine } = useNuxtApp()
const { data: issues } = useAsyncData('issues', () => $redmine.issues.getCollection())
</script>

<template>
  <div v-for="issue in issues" :key="issue.id">
    {{ issue.subject }}
  </div>
</template>
```

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
