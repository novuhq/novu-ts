<!-- speakeasy-ignore-start -->

<div align="center">
  <a href="https://novu.co?utm_source=github" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img alt="Novu Logo" src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280"/>
  </picture>
  </a>
</div>

<br/>

<p align="center">
   <a href="https://www.producthunt.com/products/novu">
    <img src="https://img.shields.io/badge/Product%20Hunt-Golden%20Kitty%20Award%202023-yellow" alt="Product Hunt">
  </a>
  <a href="https://news.ycombinator.com/item?id=38419513"><img src="https://img.shields.io/badge/Hacker%20News-%231-%23FF6600" alt="Hacker News"></a>
  <a href="https://www.npmjs.com/package/@novu/node">
    <img src="https://img.shields.io/npm/dm/@novu/node" alt="npm downloads">
  </a>
</p>

<h1 align="center">The &lt;Inbox /&gt; infrastructure for modern products</h1>

<div align="center">
The notification platform that turns complex multi-channel delivery into a single <Inbox /> component. Built for developers, designed for growth, powered by open source.
</div>

<!-- speakeasy-ignore-end -->

<!-- Start Summary [summary] -->
## Summary

Novu API: Novu REST API. Please see https://docs.novu.co/api-reference for more details.

For more information about the API: [Novu Documentation](https://docs.novu.co)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Retries](#retries)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

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



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Novu": {
      "command": "npx",
      "args": [
        "-y", "--package", "@novu/api",
        "--",
        "mcp", "start",
        "--secret-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Novu": {
      "command": "npx",
      "args": [
        "-y", "--package", "@novu/api",
        "--",
        "mcp", "start",
        "--secret-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @novu/api -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Trigger Notification Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

### Cancel Triggered Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.cancel("<id>");

  // Handle the result
  console.log(result);
}

run();

```

### Broadcast Event to All

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.triggerBroadcast({
    name: "<value>",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
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
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.triggerBulk({
    events: [
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {
          "fcm": {
            "data": {
              "key": "value",
            },
          },
        },
        to: {
          subscriberId: "<id>",
        },
      },
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {
          "fcm": {
            "data": {
              "key": "value",
            },
          },
        },
        to: [
          {
            topicKey: "<value>",
            type: "Subscriber",
          },
        ],
      },
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {
          "fcm": {
            "data": {
              "key": "value",
            },
          },
        },
        to: [
          "SUBSCRIBER_ID",
          "SUBSCRIBER_ID",
        ],
      },
    ],
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

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - Get integrations
* [create](docs/sdks/integrations/README.md#create) - Create integration
* [update](docs/sdks/integrations/README.md#update) - Update integration
* [delete](docs/sdks/integrations/README.md#delete) - Delete integration
* [setAsPrimary](docs/sdks/integrations/README.md#setasprimary) - Set integration as primary
* [listActive](docs/sdks/integrations/README.md#listactive) - Get active integrations

#### [integrations.webhooks](docs/sdks/webhooks/README.md)

* [retrieve](docs/sdks/webhooks/README.md#retrieve) - Get webhook support status for provider

### [messages](docs/sdks/messages/README.md)

* [retrieve](docs/sdks/messages/README.md#retrieve) - Get messages
* [delete](docs/sdks/messages/README.md#delete) - Delete message
* [deleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId

### [notifications](docs/sdks/notifications/README.md)

* [list](docs/sdks/notifications/README.md#list) - Get notifications
* [retrieve](docs/sdks/notifications/README.md#retrieve) - Get notification

#### [notifications.stats](docs/sdks/stats/README.md)

* [graph](docs/sdks/stats/README.md#graph) - Get notification graph statistics
* [retrieve](docs/sdks/stats/README.md#retrieve) - Get notification statistics

### [Novu SDK](docs/sdks/novu/README.md)

* [trigger](docs/sdks/novu/README.md#trigger) - Trigger event
* [cancel](docs/sdks/novu/README.md#cancel) - Cancel triggered event
* [triggerBroadcast](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
* [triggerBulk](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event

### [subscribers](docs/sdks/subscribers/README.md)

* [search](docs/sdks/subscribers/README.md#search) - Search for subscribers
* [create](docs/sdks/subscribers/README.md#create) - Create subscriber
* [retrieve](docs/sdks/subscribers/README.md#retrieve) - Get subscriber
* [patch](docs/sdks/subscribers/README.md#patch) - Patch subscriber
* [delete](docs/sdks/subscribers/README.md#delete) - Delete subscriber
* [list](docs/sdks/subscribers/README.md#list) - Get subscribers
* [upsert](docs/sdks/subscribers/README.md#upsert) - Upsert subscriber
* [createBulk](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers

#### [subscribers.authentication](docs/sdks/authentication/README.md)

* [chatAccessOauth](docs/sdks/authentication/README.md#chataccessoauth) - Handle chat oauth
* [chatAccessOauthCallBack](docs/sdks/authentication/README.md#chataccessoauthcallback) - Handle providers oauth redirect

#### [subscribers.credentials](docs/sdks/credentials/README.md)

* [update](docs/sdks/credentials/README.md#update) - Update subscriber credentials
* [append](docs/sdks/credentials/README.md#append) - Modify subscriber credentials
* [delete](docs/sdks/credentials/README.md#delete) - Delete subscriber credentials by providerId

#### [subscribers.messages](docs/sdks/novumessages/README.md)

* [updateAsSeen](docs/sdks/novumessages/README.md#updateasseen) - Mark message action as seen
* [markAll](docs/sdks/novumessages/README.md#markall) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
* [markAllAs](docs/sdks/novumessages/README.md#markallas) - Mark a subscriber messages as seen, read, unseen or unread

#### [subscribers.notifications](docs/sdks/novunotifications/README.md)

* [feed](docs/sdks/novunotifications/README.md#feed) - Get in-app notification feed for a particular subscriber
* [unseenCount](docs/sdks/novunotifications/README.md#unseencount) - Get the unseen in-app notifications count for subscribers feed

#### [subscribers.preferences](docs/sdks/preferences/README.md)

* [list](docs/sdks/preferences/README.md#list) - Get subscriber preferences
* [update](docs/sdks/preferences/README.md#update) - Update subscriber global or workflow specific preferences

#### [subscribers.properties](docs/sdks/properties/README.md)

* [updateOnlineFlag](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status

### [topics](docs/sdks/topics/README.md)

* [create](docs/sdks/topics/README.md#create) - Topic creation
* [list](docs/sdks/topics/README.md#list) - Get topic list filtered 
* [delete](docs/sdks/topics/README.md#delete) - Delete topic
* [retrieve](docs/sdks/topics/README.md#retrieve) - Get topic
* [rename](docs/sdks/topics/README.md#rename) - Rename a topic

#### [topics.subscribers](docs/sdks/novusubscribers/README.md)

* [assign](docs/sdks/novusubscribers/README.md#assign) - Subscribers addition
* [retrieve](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber
* [remove](docs/sdks/novusubscribers/README.md#remove) - Subscribers removal

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

- [`cancel`](docs/sdks/novu/README.md#cancel) - Cancel triggered event
- [`integrationsCreate`](docs/sdks/integrations/README.md#create) - Create integration
- [`integrationsDelete`](docs/sdks/integrations/README.md#delete) - Delete integration
- [`integrationsList`](docs/sdks/integrations/README.md#list) - Get integrations
- [`integrationsListActive`](docs/sdks/integrations/README.md#listactive) - Get active integrations
- [`integrationsSetAsPrimary`](docs/sdks/integrations/README.md#setasprimary) - Set integration as primary
- [`integrationsUpdate`](docs/sdks/integrations/README.md#update) - Update integration
- [`integrationsWebhooksRetrieve`](docs/sdks/webhooks/README.md#retrieve) - Get webhook support status for provider
- [`messagesDelete`](docs/sdks/messages/README.md#delete) - Delete message
- [`messagesDeleteByTransactionId`](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId
- [`messagesRetrieve`](docs/sdks/messages/README.md#retrieve) - Get messages
- [`notificationsList`](docs/sdks/notifications/README.md#list) - Get notifications
- [`notificationsRetrieve`](docs/sdks/notifications/README.md#retrieve) - Get notification
- [`notificationsStatsGraph`](docs/sdks/stats/README.md#graph) - Get notification graph statistics
- [`notificationsStatsRetrieve`](docs/sdks/stats/README.md#retrieve) - Get notification statistics
- [`subscribersAuthenticationChatAccessOauth`](docs/sdks/authentication/README.md#chataccessoauth) - Handle chat oauth
- [`subscribersAuthenticationChatAccessOauthCallBack`](docs/sdks/authentication/README.md#chataccessoauthcallback) - Handle providers oauth redirect
- [`subscribersCreate`](docs/sdks/subscribers/README.md#create) - Create subscriber
- [`subscribersCreateBulk`](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers
- [`subscribersCredentialsAppend`](docs/sdks/credentials/README.md#append) - Modify subscriber credentials
- [`subscribersCredentialsDelete`](docs/sdks/credentials/README.md#delete) - Delete subscriber credentials by providerId
- [`subscribersCredentialsUpdate`](docs/sdks/credentials/README.md#update) - Update subscriber credentials
- [`subscribersDelete`](docs/sdks/subscribers/README.md#delete) - Delete subscriber
- [`subscribersList`](docs/sdks/subscribers/README.md#list) - Get subscribers
- [`subscribersMessagesMarkAll`](docs/sdks/novumessages/README.md#markall) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
- [`subscribersMessagesMarkAllAs`](docs/sdks/novumessages/README.md#markallas) - Mark a subscriber messages as seen, read, unseen or unread
- [`subscribersMessagesUpdateAsSeen`](docs/sdks/novumessages/README.md#updateasseen) - Mark message action as seen
- [`subscribersNotificationsFeed`](docs/sdks/novunotifications/README.md#feed) - Get in-app notification feed for a particular subscriber
- [`subscribersNotificationsUnseenCount`](docs/sdks/novunotifications/README.md#unseencount) - Get the unseen in-app notifications count for subscribers feed
- [`subscribersPatch`](docs/sdks/subscribers/README.md#patch) - Patch subscriber
- [`subscribersPreferencesList`](docs/sdks/preferences/README.md#list) - Get subscriber preferences
- [`subscribersPreferencesUpdate`](docs/sdks/preferences/README.md#update) - Update subscriber global or workflow specific preferences
- [`subscribersPropertiesUpdateOnlineFlag`](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status
- [`subscribersRetrieve`](docs/sdks/subscribers/README.md#retrieve) - Get subscriber
- [`subscribersSearch`](docs/sdks/subscribers/README.md#search) - Search for subscribers
- [`subscribersUpsert`](docs/sdks/subscribers/README.md#upsert) - Upsert subscriber
- [`topicsCreate`](docs/sdks/topics/README.md#create) - Topic creation
- [`topicsDelete`](docs/sdks/topics/README.md#delete) - Delete topic
- [`topicsList`](docs/sdks/topics/README.md#list) - Get topic list filtered 
- [`topicsRename`](docs/sdks/topics/README.md#rename) - Rename a topic
- [`topicsRetrieve`](docs/sdks/topics/README.md#retrieve) - Get topic
- [`topicsSubscribersAssign`](docs/sdks/novusubscribers/README.md#assign) - Subscribers addition
- [`topicsSubscribersRemove`](docs/sdks/novusubscribers/README.md#remove) - Subscribers removal
- [`topicsSubscribersRetrieve`](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber
- [`trigger`](docs/sdks/novu/README.md#trigger) - Trigger event
- [`triggerBroadcast`](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
- [`triggerBulk`](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event

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
  secretKey: "YOUR_SECRET_KEY_HERE",
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

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `trigger` method may throw the following errors:

| Error Type                | Status Code                            | Content Type     |
| ------------------------- | -------------------------------------- | ---------------- |
| errors.ErrorDto           | 414                                    | application/json |
| errors.ErrorDto           | 400, 401, 403, 404, 405, 409, 413, 415 | application/json |
| errors.ValidationErrorDto | 422                                    | application/json |
| errors.ErrorDto           | 500                                    | application/json |
| errors.SDKError           | 4XX, 5XX                               | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Novu } from "@novu/api";
import {
  ErrorDto,
  SDKValidationError,
  ValidationErrorDto,
} from "@novu/api/models/errors";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  let result;
  try {
    result = await novu.trigger({
      workflowId: "workflow_identifier",
      payload: {
        "comment_id": "string",
        "post": {
          "text": "string",
        },
      },
      overrides: {
        "fcm": {
          "data": {
            "key": "value",
          },
        },
      },
      to: {
        subscriberId: "<id>",
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorDto): {
        // Handle err.data$: ErrorDtoData
        console.error(err);
        return;
      }
      case (err instanceof ErrorDto): {
        // Handle err.data$: ErrorDtoData
        console.error(err);
        return;
      }
      case (err instanceof ValidationErrorDto): {
        // Handle err.data$: ValidationErrorDtoData
        console.error(err);
        return;
      }
      case (err instanceof ErrorDto): {
        // Handle err.data$: ErrorDtoData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                   | Description |
| --- | ------------------------ | ----------- |
| 0   | `https://api.novu.co`    |             |
| 1   | `https://eu.api.novu.co` |             |

#### Example

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  serverIdx: 1,
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  serverURL: "https://api.novu.co",
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  });

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

| Name        | Type   | Scheme  |
| ----------- | ------ | ------- |
| `secretKey` | apiKey | API key |

To authenticate with the API the `secretKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  });

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
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  }, {
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
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.trigger({
    workflowId: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    overrides: {
      "fcm": {
        "data": {
          "key": "value",
        },
      },
    },
    to: {
      subscriberId: "<id>",
    },
  });

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
