# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the Together TypeScript SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Migration CLI

Most programs will only need minimal changes, but to assist there is a migration tool that will automatically update your code for the new version.
To use it, upgrade the `together-ai` package, then run `./node_modules/.bin/together-ai migrate ./your/src/folders` to update your code.
To preview the changes without writing them to disk, run the tool with `--dry`.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 20 LTS (Most recent non-EOL Node version)
- TypeScript 4.9
- Jest 28

## Breaking changes

### Web types for `withResponse`, `asResponse`, and `APIError.headers`

Because we now use the builtin Web fetch API on all platforms, if you wrote code that used `withResponse` or `asResponse` and then accessed `node-fetch`-specific properties on the result, you will need to switch to standardized alternatives.
For example, `body` is now a [Web `ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) rather than a [node `Readable`](https://nodejs.org/api/stream.html#readable-streams).

```ts
// Before:
const res = await client.example.retrieve('string/with/slash').asResponse();
res.body.pipe(process.stdout);

// After:
import { Readable } from 'node:stream';
const res = await client.example.retrieve('string/with/slash').asResponse();
Readable.fromWeb(res.body).pipe(process.stdout);
```

Additionally, the `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously defined as `Record<string, string | null | undefined>`.

### Named path parameters

Methods that take multiple path parameters typically now use named instead of positional arguments for better clarity and to prevent a footgun where it was easy to accidentally pass arguments in the incorrect order.

For example, for a method that would call an endpoint at `/v1/parents/{parent_id}/children/{child_id}`, only the _last_ path parameter is positional and the rest must be passed as named arguments.

```ts
// Before
client.parents.children.retrieve('p_123', 'c_456');

// After
client.parents.children.retrieve('c_456', { parent_id: 'p_123' });
```

<details>

<summary>This affects the following methods</summary>

- `client.beta.jig.retrieveRevision()`
- `client.clusters.remediations.create()`
- `client.clusters.remediations.retrieve()`
- `client.clusters.remediations.list()`
- `client.clusters.remediations.approve()`
- `client.clusters.remediations.cancel()`
- `client.clusters.remediations.reject()`
- `client.models.retrieve()`
- `client.models.update()`
- `client.models.delete()`
- `client.models.listFiles()`
- `client.models.listRevisions()`
- `client.models.remoteUploads.retrieve()`
- `client.models.remoteUploads.events()`
- `client.models.configs.retrieve()`
- `client.endpoints.retrieve()`
- `client.endpoints.update()`
- `client.endpoints.delete()`
- `client.endpoints.analytics()`
- `client.endpoints.listEvents()`
- `client.endpoints.placementProfiles.retrieve()`
- `client.endpoints.abExperiments.create()`
- `client.endpoints.abExperiments.retrieve()`
- `client.endpoints.abExperiments.update()`
- `client.endpoints.abExperiments.list()`
- `client.endpoints.abExperiments.delete()`
- `client.endpoints.shadowExperiments.create()`
- `client.endpoints.shadowExperiments.retrieve()`
- `client.endpoints.shadowExperiments.update()`
- `client.endpoints.shadowExperiments.list()`
- `client.endpoints.shadowExperiments.delete()`
- `client.endpoints.shadowExperiments.targets.create()`
- `client.endpoints.shadowExperiments.targets.retrieve()`
- `client.endpoints.shadowExperiments.targets.update()`
- `client.endpoints.shadowExperiments.targets.list()`
- `client.endpoints.shadowExperiments.targets.delete()`
- `client.endpoints.rollouts.create()`
- `client.endpoints.rollouts.retrieve()`
- `client.endpoints.rollouts.list()`
- `client.endpoints.rollouts.delete()`
- `client.endpoints.rollouts.cancel()`
- `client.endpoints.rollouts.pause()`
- `client.endpoints.rollouts.previewDefaults()`
- `client.endpoints.rollouts.promote()`
- `client.endpoints.rollouts.resume()`
- `client.endpoints.rollouts.start()`
- `client.endpoints.adapters.create()`
- `client.endpoints.adapters.retrieve()`
- `client.endpoints.adapters.update()`
- `client.endpoints.adapters.list()`
- `client.endpoints.adapters.delete()`
- `client.endpoints.deployments.create()`
- `client.endpoints.deployments.retrieve()`
- `client.endpoints.deployments.update()`
- `client.endpoints.deployments.list()`
- `client.endpoints.deployments.delete()`

</details>

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // retrieves /example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

<details>

<summary>This affects the following methods</summary>

- `client.beta.jig.listRevisions()`
- `client.beta.jig.retrieveLogs()`
- `client.beta.jig.volumes.retrieve()`
- `client.organization.usage.costs.list()`
- `client.clusters.list()`
- `client.clusters.storage.list()`
- `client.fineTuning.listMetrics()`
- `client.models.retrieve()`
- `client.models.list()`
- `client.models.delete()`
- `client.models.listFiles()`
- `client.models.listOrgScoped()`
- `client.models.listRevisions()`
- `client.models.listSupported()`
- `client.models.remoteUploads.retrieve()`
- `client.models.remoteUploads.list()`
- `client.models.remoteUploads.events()`
- `client.models.configs.retrieve()`
- `client.models.configs.list()`
- `client.endpoints.retrieve()`
- `client.endpoints.list()`
- `client.endpoints.delete()`
- `client.endpoints.analytics()`
- `client.endpoints.listEvents()`
- `client.endpoints.listOrgScoped()`
- `client.endpoints.placementProfiles.retrieve()`
- `client.endpoints.placementProfiles.list()`
- `client.endpoints.abExperiments.list()`
- `client.endpoints.shadowExperiments.list()`
- `client.endpoints.shadowExperiments.targets.list()`
- `client.endpoints.rollouts.list()`
- `client.endpoints.adapters.list()`
- `client.endpoints.deployments.list()`
- `client.projects.list()`
- `client.evals.list()`

</details>

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/togethercomputer/together-typescript#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/togethercomputer/together-typescript#configuring-proxies).

Before:

```ts
import Together from 'together-ai';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Together({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});
```

After:

```ts
import Together from 'together-ai';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new Together({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Changed exports

#### Refactor of `together-ai/core`, `error`, `pagination`, `resource`, `streaming` and `uploads`

Much of the `together-ai/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import 'together-ai/error';
import 'together-ai/pagination';
import 'together-ai/resource';
import 'together-ai/streaming';
import 'together-ai/uploads';

// After
import 'together-ai/core/error';
import 'together-ai/core/pagination';
import 'together-ai/core/resource';
import 'together-ai/core/streaming';
import 'together-ai/core/uploads';
```

If you were relying on anything that was only exported from `together-ai/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Resource classes

Previously under certain circumstances it was possible to import resource classes like `Beta` directly from the root of the package. This was never valid at the type level and only worked in CommonJS files.
Now you must always either reference them as static class properties or import them directly from the files in which they are defined.

```typescript
// Before
const { Beta } = require('together-ai');

// After
const { Together } = require('together-ai');
Together.Beta; // or import directly from together-ai/resources/beta/beta
```

#### Cleaned up `uploads` exports

As part of the `core` refactor, `together-ai/uploads` was moved to `together-ai/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from 'together-ai/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been replaced with a new `BaseTogether` class:

```typescript
// Before
import { APIClient } from 'together-ai/core';

// After
import { BaseTogether } from 'together-ai/client';
```

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
Together.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import 'together-ai/shims/web';
import Together from 'together-ai';
```

The `together-ai/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### Pagination changes

The `for await` syntax **is not affected**. This still works as-is:

```ts
// Automatically fetches more pages as needed.
for await (const billingUsageWindow of client.organization.usage.costs.list()) {
  console.log(billingUsageWindow);
}
```

The interface for manually paginating through list results has been simplified:

```ts
// Before
page.nextPageParams();
page.nextPageInfo();
// Required manually handling { url } | { params } type

// After
page.nextPageRequestOptions();
```

#### Removed unnecessary classes

Page classes for individual methods are now type aliases:

```ts
// Before
export class BillingUsageWindowsCursorPagination extends CursorPagination<BillingUsageWindow> {}

// After
export type BillingUsageWindowsCursorPagination = CursorPagination<BillingUsageWindow>;
```

If you were importing these classes at runtime, you'll need to switch to importing the base class or only import them at the type-level.

### `together-ai/src` directory removed

Previously IDEs may have auto-completed imports from the `together-ai/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `together-ai/src/*` imports, you will need to replace them with `together-ai/*`.

```ts
// Before
import Together from 'together-ai/src';

// After
import Together from 'together-ai';
```

## TypeScript troubleshooting

When referencing the library after updating, you may encounter new type errors related to JS features like private properties or fetch classes like Request, Response, and Headers.
To resolve these issues, configure your tsconfig.json and install the appropriate `@types` packages for your runtime environment using the guidelines below:

### Browsers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 20"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```
