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
    overrides: {},
    to: "SUBSCRIBER_ID",
  });

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
    overrides: {
      additionalProperties: {
        "fcm": {
          "data": {
            "key": "value",
          },
        },
      },
    },
  });

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
        overrides: {},
        to: "SUBSCRIBER_ID",
      },
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {},
        to: "SUBSCRIBER_ID",
      },
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {},
        to: "SUBSCRIBER_ID",
      },
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [environments](docs/sdks/environments/README.md)

* [getTags](docs/sdks/environments/README.md#gettags) - Get environment tags
* [create](docs/sdks/environments/README.md#create) - Create an environment
* [list](docs/sdks/environments/README.md#list) - List all environments
* [update](docs/sdks/environments/README.md#update) - Update an environment
* [delete](docs/sdks/environments/README.md#delete) - Delete an environment

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List all integrations
* [create](docs/sdks/integrations/README.md#create) - Create an integration
* [update](docs/sdks/integrations/README.md#update) - Update an integration
* [delete](docs/sdks/integrations/README.md#delete) - Delete an integration
* [setAsPrimary](docs/sdks/integrations/README.md#setasprimary) - Update integration as primary
* [listActive](docs/sdks/integrations/README.md#listactive) - List active integrations

### [messages](docs/sdks/messages/README.md)

* [retrieve](docs/sdks/messages/README.md#retrieve) - List all messages
* [delete](docs/sdks/messages/README.md#delete) - Delete a message
* [deleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId

### [notifications](docs/sdks/notifications/README.md)

* [list](docs/sdks/notifications/README.md#list) - List all events
* [retrieve](docs/sdks/notifications/README.md#retrieve) - Retrieve an event

### [Novu SDK](docs/sdks/novu/README.md)

* [trigger](docs/sdks/novu/README.md#trigger) - Trigger event
* [cancel](docs/sdks/novu/README.md#cancel) - Cancel triggered event
* [triggerBroadcast](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
* [triggerBulk](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event

### [subscribers](docs/sdks/subscribers/README.md)

* [search](docs/sdks/subscribers/README.md#search) - Search subscribers
* [create](docs/sdks/subscribers/README.md#create) - Create a subscriber
* [retrieve](docs/sdks/subscribers/README.md#retrieve) - Retrieve a subscriber
* [patch](docs/sdks/subscribers/README.md#patch) - Update a subscriber
* [delete](docs/sdks/subscribers/README.md#delete) - Delete a subscriber
* [createBulk](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers

#### [subscribers.credentials](docs/sdks/credentials/README.md)

* [update](docs/sdks/credentials/README.md#update) - Upsert provider credentials
* [append](docs/sdks/credentials/README.md#append) - Update provider credentials
* [delete](docs/sdks/credentials/README.md#delete) - Delete provider credentials

#### [subscribers.messages](docs/sdks/novumessages/README.md)

* [updateAsSeen](docs/sdks/novumessages/README.md#updateasseen) - Update notification action status
* [markAll](docs/sdks/novumessages/README.md#markall) - Update all notifications state
* [markAllAs](docs/sdks/novumessages/README.md#markallas) - Update notifications state

#### [subscribers.notifications](docs/sdks/novunotifications/README.md)

* [feed](docs/sdks/novunotifications/README.md#feed) - Retrieve subscriber notifications
* [unseenCount](docs/sdks/novunotifications/README.md#unseencount) - Retrieve unseen notifications count

#### [subscribers.preferences](docs/sdks/preferences/README.md)

* [list](docs/sdks/preferences/README.md#list) - Retrieve subscriber preferences
* [update](docs/sdks/preferences/README.md#update) - Update subscriber preferences
* [bulkUpdate](docs/sdks/preferences/README.md#bulkupdate) - Bulk update subscriber preferences

#### [subscribers.properties](docs/sdks/properties/README.md)

* [updateOnlineFlag](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status

#### [subscribers.topics](docs/sdks/novutopics/README.md)

* [list](docs/sdks/novutopics/README.md#list) - Retrieve subscriber subscriptions

### [topics](docs/sdks/topics/README.md)

* [list](docs/sdks/topics/README.md#list) - List all topics
* [create](docs/sdks/topics/README.md#create) - Create a topic
* [get](docs/sdks/topics/README.md#get) - Retrieve a topic
* [update](docs/sdks/topics/README.md#update) - Update a topic
* [delete](docs/sdks/topics/README.md#delete) - Delete a topic

#### [topics.subscribers](docs/sdks/novusubscribers/README.md)

* [retrieve](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber

#### [topics.subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List topic subscriptions
* [create](docs/sdks/subscriptions/README.md#create) - Create topic subscriptions
* [delete](docs/sdks/subscriptions/README.md#delete) - Delete topic subscriptions

### [workflows](docs/sdks/workflows/README.md)

* [create](docs/sdks/workflows/README.md#create) - Create a workflow
* [list](docs/sdks/workflows/README.md#list) - List all workflows
* [update](docs/sdks/workflows/README.md#update) - Update a workflow
* [get](docs/sdks/workflows/README.md#get) - Retrieve a workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete a workflow
* [patch](docs/sdks/workflows/README.md#patch) - Update a workflow
* [sync](docs/sdks/workflows/README.md#sync) - Sync a workflow

#### [workflows.steps](docs/sdks/steps/README.md)

* [retrieve](docs/sdks/steps/README.md#retrieve) - Retrieve workflow step

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
- [`environmentsCreate`](docs/sdks/environments/README.md#create) - Create an environment
- [`environmentsDelete`](docs/sdks/environments/README.md#delete) - Delete an environment
- [`environmentsGetTags`](docs/sdks/environments/README.md#gettags) - Get environment tags
- [`environmentsList`](docs/sdks/environments/README.md#list) - List all environments
- [`environmentsUpdate`](docs/sdks/environments/README.md#update) - Update an environment
- [`integrationsCreate`](docs/sdks/integrations/README.md#create) - Create an integration
- [`integrationsDelete`](docs/sdks/integrations/README.md#delete) - Delete an integration
- [`integrationsList`](docs/sdks/integrations/README.md#list) - List all integrations
- [`integrationsListActive`](docs/sdks/integrations/README.md#listactive) - List active integrations
- [`integrationsSetAsPrimary`](docs/sdks/integrations/README.md#setasprimary) - Update integration as primary
- [`integrationsUpdate`](docs/sdks/integrations/README.md#update) - Update an integration
- [`messagesDelete`](docs/sdks/messages/README.md#delete) - Delete a message
- [`messagesDeleteByTransactionId`](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId
- [`messagesRetrieve`](docs/sdks/messages/README.md#retrieve) - List all messages
- [`notificationsList`](docs/sdks/notifications/README.md#list) - List all events
- [`notificationsRetrieve`](docs/sdks/notifications/README.md#retrieve) - Retrieve an event
- [`subscribersCreate`](docs/sdks/subscribers/README.md#create) - Create a subscriber
- [`subscribersCreateBulk`](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers
- [`subscribersCredentialsAppend`](docs/sdks/credentials/README.md#append) - Update provider credentials
- [`subscribersCredentialsDelete`](docs/sdks/credentials/README.md#delete) - Delete provider credentials
- [`subscribersCredentialsUpdate`](docs/sdks/credentials/README.md#update) - Upsert provider credentials
- [`subscribersDelete`](docs/sdks/subscribers/README.md#delete) - Delete a subscriber
- [`subscribersMessagesMarkAll`](docs/sdks/novumessages/README.md#markall) - Update all notifications state
- [`subscribersMessagesMarkAllAs`](docs/sdks/novumessages/README.md#markallas) - Update notifications state
- [`subscribersMessagesUpdateAsSeen`](docs/sdks/novumessages/README.md#updateasseen) - Update notification action status
- [`subscribersNotificationsFeed`](docs/sdks/novunotifications/README.md#feed) - Retrieve subscriber notifications
- [`subscribersNotificationsUnseenCount`](docs/sdks/novunotifications/README.md#unseencount) - Retrieve unseen notifications count
- [`subscribersPatch`](docs/sdks/subscribers/README.md#patch) - Update a subscriber
- [`subscribersPreferencesBulkUpdate`](docs/sdks/preferences/README.md#bulkupdate) - Bulk update subscriber preferences
- [`subscribersPreferencesList`](docs/sdks/preferences/README.md#list) - Retrieve subscriber preferences
- [`subscribersPreferencesUpdate`](docs/sdks/preferences/README.md#update) - Update subscriber preferences
- [`subscribersPropertiesUpdateOnlineFlag`](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status
- [`subscribersRetrieve`](docs/sdks/subscribers/README.md#retrieve) - Retrieve a subscriber
- [`subscribersSearch`](docs/sdks/subscribers/README.md#search) - Search subscribers
- [`subscribersTopicsList`](docs/sdks/novutopics/README.md#list) - Retrieve subscriber subscriptions
- [`topicsCreate`](docs/sdks/topics/README.md#create) - Create a topic
- [`topicsDelete`](docs/sdks/topics/README.md#delete) - Delete a topic
- [`topicsGet`](docs/sdks/topics/README.md#get) - Retrieve a topic
- [`topicsList`](docs/sdks/topics/README.md#list) - List all topics
- [`topicsSubscribersRetrieve`](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber
- [`topicsSubscriptionsCreate`](docs/sdks/subscriptions/README.md#create) - Create topic subscriptions
- [`topicsSubscriptionsDelete`](docs/sdks/subscriptions/README.md#delete) - Delete topic subscriptions
- [`topicsSubscriptionsList`](docs/sdks/subscriptions/README.md#list) - List topic subscriptions
- [`topicsUpdate`](docs/sdks/topics/README.md#update) - Update a topic
- [`trigger`](docs/sdks/novu/README.md#trigger) - Trigger event
- [`triggerBroadcast`](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
- [`triggerBulk`](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event
- [`workflowsCreate`](docs/sdks/workflows/README.md#create) - Create a workflow
- [`workflowsDelete`](docs/sdks/workflows/README.md#delete) - Delete a workflow
- [`workflowsGet`](docs/sdks/workflows/README.md#get) - Retrieve a workflow
- [`workflowsList`](docs/sdks/workflows/README.md#list) - List all workflows
- [`workflowsPatch`](docs/sdks/workflows/README.md#patch) - Update a workflow
- [`workflowsStepsRetrieve`](docs/sdks/steps/README.md#retrieve) - Retrieve workflow step
- [`workflowsSync`](docs/sdks/workflows/README.md#sync) - Sync a workflow
- [`workflowsUpdate`](docs/sdks/workflows/README.md#update) - Update a workflow

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`NovuError`](./src/models/errors/novuerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Novu } from "@novu/api";
import * as errors from "@novu/api/models/errors";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  try {
    const result = await novu.trigger({
      workflowId: "workflow_identifier",
      payload: {
        "comment_id": "string",
        "post": {
          "text": "string",
        },
      },
      overrides: {},
      to: "SUBSCRIBER_ID",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.NovuError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.PayloadValidationExceptionDto) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.timestamp); // string
        console.log(error.data$.path); // string
        console.log(error.data$.message); // errors.PayloadValidationExceptionDtoMessage
        console.log(error.data$.ctx); // { [k: string]: any }
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`NovuError`](./src/models/errors/novuerror.ts): The base class for HTTP error responses.
  * [`ErrorDto`](./src/models/errors/errordto.ts): Generic error.
  * [`ValidationErrorDto`](./src/models/errors/validationerrordto.ts): Unprocessable Entity. Status code `422`.

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`NovuError`](./src/models/errors/novuerror.ts)**:
* [`PayloadValidationExceptionDto`](./src/models/errors/payloadvalidationexceptiondto.ts): Status code `400`. Applicable to 3 of 56 methods.*
* [`SubscriberResponseDto`](./src/models/errors/subscriberresponsedto.ts): Created. Status code `409`. Applicable to 1 of 56 methods.*
* [`TopicResponseDto`](./src/models/errors/topicresponsedto.ts): OK. Status code `409`. Applicable to 1 of 56 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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
    overrides: {},
    to: "SUBSCRIBER_ID",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  serverURL: "https://eu.api.novu.co",
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
    overrides: {},
    to: "SUBSCRIBER_ID",
  });

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
    overrides: {},
    to: "SUBSCRIBER_ID",
  });

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
    overrides: {},
    to: "SUBSCRIBER_ID",
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
    overrides: {},
    to: "SUBSCRIBER_ID",
  });

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
