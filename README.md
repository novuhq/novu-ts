<div align="center">
  <img src="https://github.com/speakeasy-sdks/novu-ts/assets/68016351/dabaa829-32c8-451b-b912-0fa1d10300bd" width="500">
  <p>Novu is an open-source notification infrastructure.</p>
  <a href="https://docs.novu.co/api-reference/overview"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


<!-- Start Summary [summary] -->
## Summary

Novu API: Novu REST API. Please see https://docs.novu.co/api-reference for more details.

For more information about the API: [Novu Documentation](https://docs.novu.co)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @novu/api
```

### PNPM

```bash
pnpm add @novu/api
```

### Bun

```bash
bun add @novu/api
```

### Yarn

```bash
yarn add @novu/api zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Cancel Triggered Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>");

  // Handle the result
  console.log(result);
}

run();

```

### Trigger Notification Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.trigger({
    name: "workflow_identifier",
    overrides: {},
    payload: {},
    to: [
      {
        topicKey: "<value>",
        type: "Topic",
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```

### Broadcast Event to All

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.triggerBroadcast({
    name: "<value>",
    overrides: {},
    payload: {},
  });

  // Handle the result
  console.log(result);
}

run();

```

### Trigger Notification Events in Bulk

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.triggerBulk({
    events: [],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [changes](docs/sdks/changes/README.md)

* [apply](docs/sdks/changes/README.md#apply) - Apply change
* [applyBulk](docs/sdks/changes/README.md#applybulk) - Apply changes
* [count](docs/sdks/changes/README.md#count) - Get changes count
* [retrieve](docs/sdks/changes/README.md#retrieve) - Get changes

### [environments](docs/sdks/environments/README.md)

* [list](docs/sdks/environments/README.md#list) - Get environments
* [retrieve](docs/sdks/environments/README.md#retrieve) - Get current environment

#### [environments.apiKeys](docs/sdks/apikeys/README.md)

* [list](docs/sdks/apikeys/README.md#list) - Get api keys

### [executionDetails](docs/sdks/executiondetails/README.md)

* [retrieve](docs/sdks/executiondetails/README.md#retrieve) - Get execution details

### [feeds](docs/sdks/feeds/README.md)

* [create](docs/sdks/feeds/README.md#create) - Create feed
* [delete](docs/sdks/feeds/README.md#delete) - Delete feed
* [retrieve](docs/sdks/feeds/README.md#retrieve) - Get feeds

### [integrations](docs/sdks/integrations/README.md)

* [create](docs/sdks/integrations/README.md#create) - Create integration
* [delete](docs/sdks/integrations/README.md#delete) - Delete integration
* [list](docs/sdks/integrations/README.md#list) - Get integrations
* [listActive](docs/sdks/integrations/README.md#listactive) - Get active integrations
* [setAsPrimary](docs/sdks/integrations/README.md#setasprimary) - Set integration as primary
* [update](docs/sdks/integrations/README.md#update) - Update integration

#### [integrations.webhooks](docs/sdks/webhooks/README.md)

* [retrieve](docs/sdks/webhooks/README.md#retrieve) - Get webhook support status for provider

### [layouts](docs/sdks/layouts/README.md)

* [create](docs/sdks/layouts/README.md#create) - Layout creation
* [delete](docs/sdks/layouts/README.md#delete) - Delete layout
* [list](docs/sdks/layouts/README.md#list) - Filter layouts
* [retrieve](docs/sdks/layouts/README.md#retrieve) - Get layout
* [setAsDefault](docs/sdks/layouts/README.md#setasdefault) - Set default layout
* [update](docs/sdks/layouts/README.md#update) - Update a layout

### [messages](docs/sdks/messages/README.md)

* [delete](docs/sdks/messages/README.md#delete) - Delete message
* [deleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId
* [retrieve](docs/sdks/messages/README.md#retrieve) - Get messages

### [notifications](docs/sdks/notifications/README.md)

* [list](docs/sdks/notifications/README.md#list) - Get notifications
* [retrieve](docs/sdks/notifications/README.md#retrieve) - Get notification

#### [notifications.stats](docs/sdks/stats/README.md)

* [graph](docs/sdks/stats/README.md#graph) - Get notification graph statistics
* [retrieve](docs/sdks/stats/README.md#retrieve) - Get notification statistics

### [Novu SDK](docs/sdks/novu/README.md)

* [cancel](docs/sdks/novu/README.md#cancel) - Cancel triggered event
* [trigger](docs/sdks/novu/README.md#trigger) - Trigger event
* [triggerBroadcast](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
* [triggerBulk](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event

### [organizations](docs/sdks/organizations/README.md)

* [eeOrganizationControllerRenameOrganization](docs/sdks/organizations/README.md#eeorganizationcontrollerrenameorganization) - Rename organization name
* [retrieve](docs/sdks/organizations/README.md#retrieve) - Fetch current organization details
* [update](docs/sdks/organizations/README.md#update) - Update organization branding details

### [subscribers](docs/sdks/subscribers/README.md)

* [create](docs/sdks/subscribers/README.md#create) - Create subscriber
* [createBulk](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers
* [delete](docs/sdks/subscribers/README.md#delete) - Delete subscriber
* [list](docs/sdks/subscribers/README.md#list) - Get subscribers
* [retrieve](docs/sdks/subscribers/README.md#retrieve) - Get subscriber
* [update](docs/sdks/subscribers/README.md#update) - Update subscriber

#### [subscribers.authentication](docs/sdks/authentication/README.md)

* [chatAccessOauth](docs/sdks/authentication/README.md#chataccessoauth) - Handle chat oauth
* [chatAccessOauthCallBack](docs/sdks/authentication/README.md#chataccessoauthcallback) - Handle providers oauth redirect

#### [subscribers.credentials](docs/sdks/credentials/README.md)

* [append](docs/sdks/credentials/README.md#append) - Modify subscriber credentials
* [delete](docs/sdks/credentials/README.md#delete) - Delete subscriber credentials by providerId
* [update](docs/sdks/credentials/README.md#update) - Update subscriber credentials

#### [subscribers.messages](docs/sdks/novumessages/README.md)

* [markAll](docs/sdks/novumessages/README.md#markall) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
* [markAllAs](docs/sdks/novumessages/README.md#markallas) - Mark a subscriber messages as seen, read, unseen or unread
* [updateAsSeen](docs/sdks/novumessages/README.md#updateasseen) - Mark message action as seen

#### [subscribers.notifications](docs/sdks/novunotifications/README.md)

* [retrieve](docs/sdks/novunotifications/README.md#retrieve) - Get in-app notification feed for a particular subscriber
* [unseenCount](docs/sdks/novunotifications/README.md#unseencount) - Get the unseen in-app notifications count for subscribers feed

#### [subscribers.preferences](docs/sdks/preferences/README.md)

* [list](docs/sdks/preferences/README.md#list) - Get subscriber preferences
* [retrieveByLevel](docs/sdks/preferences/README.md#retrievebylevel) - Get subscriber preferences by level
* [update](docs/sdks/preferences/README.md#update) - Update subscriber preference
* [updateGlobal](docs/sdks/preferences/README.md#updateglobal) - Update subscriber global preferences

#### [subscribers.properties](docs/sdks/properties/README.md)

* [updateOnlineFlag](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status

### [tenants](docs/sdks/tenants/README.md)

* [create](docs/sdks/tenants/README.md#create) - Create tenant
* [delete](docs/sdks/tenants/README.md#delete) - Delete tenant
* [list](docs/sdks/tenants/README.md#list) - Get tenants
* [retrieve](docs/sdks/tenants/README.md#retrieve) - Get tenant
* [update](docs/sdks/tenants/README.md#update) - Update tenant

### [topics](docs/sdks/topics/README.md)

* [create](docs/sdks/topics/README.md#create) - Topic creation
* [delete](docs/sdks/topics/README.md#delete) - Delete topic
* [list](docs/sdks/topics/README.md#list) - Filter topics
* [rename](docs/sdks/topics/README.md#rename) - Rename a topic
* [retrieve](docs/sdks/topics/README.md#retrieve) - Get topic

#### [topics.subscribers](docs/sdks/novusubscribers/README.md)

* [assign](docs/sdks/novusubscribers/README.md#assign) - Subscribers addition
* [delete](docs/sdks/novusubscribers/README.md#delete) - Subscribers removal
* [retrieve](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber

### [workflowGroups](docs/sdks/workflowgroups/README.md)

* [create](docs/sdks/workflowgroups/README.md#create) - Create workflow group
* [delete](docs/sdks/workflowgroups/README.md#delete) - Delete workflow group
* [list](docs/sdks/workflowgroups/README.md#list) - Get workflow groups
* [retrieve](docs/sdks/workflowgroups/README.md#retrieve) - Get workflow group
* [update](docs/sdks/workflowgroups/README.md#update) - Update workflow group

### [workflows](docs/sdks/workflows/README.md)

* [create](docs/sdks/workflows/README.md#create) - Create workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete workflow
* [list](docs/sdks/workflows/README.md#list) - Get workflows
* [retrieve](docs/sdks/workflows/README.md#retrieve) - Get workflow
* [update](docs/sdks/workflows/README.md#update) - Update workflow

#### [workflows.status](docs/sdks/status/README.md)

* [update](docs/sdks/status/README.md#update) - Update workflow status

#### [workflows.variables](docs/sdks/variables/README.md)

* [retrieve](docs/sdks/variables/README.md#retrieve) - Get available variables

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [cancel](docs/sdks/novu/README.md#cancel)
- [changesApplyBulk](docs/sdks/changes/README.md#applybulk)
- [changesApply](docs/sdks/changes/README.md#apply)
- [changesCount](docs/sdks/changes/README.md#count)
- [changesRetrieve](docs/sdks/changes/README.md#retrieve)
- [environmentsApiKeysList](docs/sdks/apikeys/README.md#list)
- [environmentsList](docs/sdks/environments/README.md#list)
- [environmentsRetrieve](docs/sdks/environments/README.md#retrieve)
- [executionDetailsRetrieve](docs/sdks/executiondetails/README.md#retrieve)
- [feedsCreate](docs/sdks/feeds/README.md#create)
- [feedsDelete](docs/sdks/feeds/README.md#delete)
- [feedsRetrieve](docs/sdks/feeds/README.md#retrieve)
- [integrationsCreate](docs/sdks/integrations/README.md#create)
- [integrationsDelete](docs/sdks/integrations/README.md#delete)
- [integrationsListActive](docs/sdks/integrations/README.md#listactive)
- [integrationsList](docs/sdks/integrations/README.md#list)
- [integrationsSetAsPrimary](docs/sdks/integrations/README.md#setasprimary)
- [integrationsUpdate](docs/sdks/integrations/README.md#update)
- [integrationsWebhooksRetrieve](docs/sdks/webhooks/README.md#retrieve)
- [layoutsCreate](docs/sdks/layouts/README.md#create)
- [layoutsDelete](docs/sdks/layouts/README.md#delete)
- [layoutsList](docs/sdks/layouts/README.md#list)
- [layoutsRetrieve](docs/sdks/layouts/README.md#retrieve)
- [layoutsSetAsDefault](docs/sdks/layouts/README.md#setasdefault)
- [layoutsUpdate](docs/sdks/layouts/README.md#update)
- [messagesDeleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid)
- [messagesDelete](docs/sdks/messages/README.md#delete)
- [messagesRetrieve](docs/sdks/messages/README.md#retrieve)
- [notificationsList](docs/sdks/notifications/README.md#list)
- [notificationsRetrieve](docs/sdks/notifications/README.md#retrieve)
- [notificationsStatsGraph](docs/sdks/stats/README.md#graph)
- [notificationsStatsRetrieve](docs/sdks/stats/README.md#retrieve)
- [organizationsEEOrganizationControllerRenameOrganization](docs/sdks/organizations/README.md#eeorganizationcontrollerrenameorganization)
- [organizationsRetrieve](docs/sdks/organizations/README.md#retrieve)
- [organizationsUpdate](docs/sdks/organizations/README.md#update)
- [subscribersAuthenticationChatAccessOauthCallBack](docs/sdks/authentication/README.md#chataccessoauthcallback)
- [subscribersAuthenticationChatAccessOauth](docs/sdks/authentication/README.md#chataccessoauth)
- [subscribersCreateBulk](docs/sdks/subscribers/README.md#createbulk)
- [subscribersCreate](docs/sdks/subscribers/README.md#create)
- [subscribersCredentialsAppend](docs/sdks/credentials/README.md#append)
- [subscribersCredentialsDelete](docs/sdks/credentials/README.md#delete)
- [subscribersCredentialsUpdate](docs/sdks/credentials/README.md#update)
- [subscribersDelete](docs/sdks/subscribers/README.md#delete)
- [subscribersList](docs/sdks/subscribers/README.md#list)
- [subscribersMessagesMarkAllAs](docs/sdks/novumessages/README.md#markallas)
- [subscribersMessagesMarkAll](docs/sdks/novumessages/README.md#markall)
- [subscribersMessagesUpdateAsSeen](docs/sdks/novumessages/README.md#updateasseen)
- [subscribersNotificationsRetrieve](docs/sdks/novunotifications/README.md#retrieve)
- [subscribersNotificationsUnseenCount](docs/sdks/novunotifications/README.md#unseencount)
- [subscribersPreferencesList](docs/sdks/preferences/README.md#list)
- [subscribersPreferencesRetrieveByLevel](docs/sdks/preferences/README.md#retrievebylevel)
- [subscribersPreferencesUpdateGlobal](docs/sdks/preferences/README.md#updateglobal)
- [subscribersPreferencesUpdate](docs/sdks/preferences/README.md#update)
- [subscribersPropertiesUpdateOnlineFlag](docs/sdks/properties/README.md#updateonlineflag)
- [subscribersRetrieve](docs/sdks/subscribers/README.md#retrieve)
- [subscribersUpdate](docs/sdks/subscribers/README.md#update)
- [tenantsCreate](docs/sdks/tenants/README.md#create)
- [tenantsDelete](docs/sdks/tenants/README.md#delete)
- [tenantsList](docs/sdks/tenants/README.md#list)
- [tenantsRetrieve](docs/sdks/tenants/README.md#retrieve)
- [tenantsUpdate](docs/sdks/tenants/README.md#update)
- [topicsCreate](docs/sdks/topics/README.md#create)
- [topicsDelete](docs/sdks/topics/README.md#delete)
- [topicsList](docs/sdks/topics/README.md#list)
- [topicsRename](docs/sdks/topics/README.md#rename)
- [topicsRetrieve](docs/sdks/topics/README.md#retrieve)
- [topicsSubscribersAssign](docs/sdks/novusubscribers/README.md#assign)
- [topicsSubscribersDelete](docs/sdks/novusubscribers/README.md#delete)
- [topicsSubscribersRetrieve](docs/sdks/novusubscribers/README.md#retrieve)
- [triggerBroadcast](docs/sdks/novu/README.md#triggerbroadcast)
- [triggerBulk](docs/sdks/novu/README.md#triggerbulk)
- [trigger](docs/sdks/novu/README.md#trigger)
- [workflowGroupsCreate](docs/sdks/workflowgroups/README.md#create)
- [workflowGroupsDelete](docs/sdks/workflowgroups/README.md#delete)
- [workflowGroupsList](docs/sdks/workflowgroups/README.md#list)
- [workflowGroupsRetrieve](docs/sdks/workflowgroups/README.md#retrieve)
- [workflowGroupsUpdate](docs/sdks/workflowgroups/README.md#update)
- [workflowsCreate](docs/sdks/workflows/README.md#create)
- [workflowsDelete](docs/sdks/workflows/README.md#delete)
- [workflowsList](docs/sdks/workflows/README.md#list)
- [workflowsRetrieve](docs/sdks/workflows/README.md#retrieve)
- [workflowsStatusUpdate](docs/sdks/status/README.md#update)
- [workflowsUpdate](docs/sdks/workflows/README.md#update)
- [workflowsVariablesRetrieve](docs/sdks/variables/README.md#retrieve)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.subscribers.list();

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Novu } from "@novu/api";
import { SDKValidationError } from "@novu/api/models/errors";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.novu.co` | None |
| 1 | `https://eu.api.novu.co` | None |

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  serverIdx: 1,
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>");

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  serverURL: "https://api.novu.co",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>");

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Novu } from "@novu/api";
import { HTTPClient } from "@novu/api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Novu({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>");

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>", {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<value>");

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Novu } from "@novu/api";

const sdk = new Novu({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
