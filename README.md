# novu-typescript

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Novu } from "novu-typescript";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.organizations.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - Fetch all organizations
* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [organizationControllerRename](docs/sdks/organizations/README.md#organizationcontrollerrename) - Rename organization name
* [organizationControllerSelf](docs/sdks/organizations/README.md#organizationcontrollerself) - Fetch current organization details

### [organizations.members](docs/sdks/members/README.md)

* [organizationControllerRemove](docs/sdks/members/README.md#organizationcontrollerremove) - Remove a member from organization using memberId
* [organizationControllerMe](docs/sdks/members/README.md#organizationcontrollerme) - Fetch all members of current organizations

### [organizations.branding](docs/sdks/branding/README.md)

* [organizationControllerUpdateBrandingDetails](docs/sdks/branding/README.md#organizationcontrollerupdatebrandingdetails) - Update organization branding details

### [environments](docs/sdks/environments/README.md)

* [retrieve](docs/sdks/environments/README.md#retrieve) - Get current environment
* [list](docs/sdks/environments/README.md#list) - Get environments
* [environmentsControllerRegenerateOrganizationApiKeys](docs/sdks/environments/README.md#environmentscontrollerregenerateorganizationapikeys) - Regenerate api keys

### [environments.apiKeys](docs/sdks/apikeys/README.md)

* [list](docs/sdks/apikeys/README.md#list) - Get api keys

### [executionDetails](docs/sdks/executiondetails/README.md)

* [retrieve](docs/sdks/executiondetails/README.md#retrieve) - Get execution details

### [workflows](docs/sdks/workflows/README.md)

* [list](docs/sdks/workflows/README.md#list) - Get workflows
* [create](docs/sdks/workflows/README.md#create) - Create workflow
* [retrieve](docs/sdks/workflows/README.md#retrieve) - Get workflow
* [workflowControllerUpdateWorkflowById](docs/sdks/workflows/README.md#workflowcontrollerupdateworkflowbyid) - Update workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete workflow
* [workflowControllerChangeActiveStatus](docs/sdks/workflows/README.md#workflowcontrollerchangeactivestatus) - Update workflow status

### [workflows.variables](docs/sdks/variables/README.md)

* [retrieve](docs/sdks/variables/README.md#retrieve) - Get available variables

### [events](docs/sdks/events/README.md)

* [eventsControllerTrigger](docs/sdks/events/README.md#eventscontrollertrigger) - Trigger event
* [eventsControllerTriggerBulk](docs/sdks/events/README.md#eventscontrollertriggerbulk) - Bulk trigger event
* [eventsControllerBroadcastEventToAll](docs/sdks/events/README.md#eventscontrollerbroadcasteventtoall) - Broadcast event to all
* [eventsControllerCancel](docs/sdks/events/README.md#eventscontrollercancel) - Cancel triggered event

### [notifications](docs/sdks/notifications/README.md)

* [list](docs/sdks/notifications/README.md#list) - Get notifications
* [retrieve](docs/sdks/notifications/README.md#retrieve) - Get notification

### [notifications.stats](docs/sdks/stats/README.md)

* [retrieve](docs/sdks/stats/README.md#retrieve) - Get notification statistics
* [graph](docs/sdks/stats/README.md#graph) - Get notification graph statistics

### [workflowGroups](docs/sdks/workflowgroups/README.md)

* [list](docs/sdks/workflowgroups/README.md#list) - Get workflow groups
* [create](docs/sdks/workflowgroups/README.md#create) - Create workflow group
* [retrieve](docs/sdks/workflowgroups/README.md#retrieve) - Get workflow group
* [delete](docs/sdks/workflowgroups/README.md#delete) - Delete workflow group
* [notificationGroupsControllerUpdateNotificationGroup](docs/sdks/workflowgroups/README.md#notificationgroupscontrollerupdatenotificationgroup) - Update workflow group

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - Get integrations
* [create](docs/sdks/integrations/README.md#create) - Create integration
* [listActive](docs/sdks/integrations/README.md#listactive) - Get active integrations
* [retrieve](docs/sdks/integrations/README.md#retrieve) - Get webhook support status for provider
* [integrationsControllerUpdateIntegrationById](docs/sdks/integrations/README.md#integrationscontrollerupdateintegrationbyid) - Update integration
* [integrationsControllerRemoveIntegration](docs/sdks/integrations/README.md#integrationscontrollerremoveintegration) - Delete integration
* [integrationsControllerSetIntegrationAsPrimary](docs/sdks/integrations/README.md#integrationscontrollersetintegrationasprimary) - Set integration as primary

### [changes](docs/sdks/changes/README.md)

* [retrieve](docs/sdks/changes/README.md#retrieve) - Get changes
* [count](docs/sdks/changes/README.md#count) - Get changes count
* [changesControllerBulkApplyDiff](docs/sdks/changes/README.md#changescontrollerbulkapplydiff) - Apply changes
* [changesControllerApplyDiff](docs/sdks/changes/README.md#changescontrollerapplydiff) - Apply change

### [subscribers](docs/sdks/subscribers/README.md)

* [list](docs/sdks/subscribers/README.md#list) - Get subscribers
* [create](docs/sdks/subscribers/README.md#create) - Create subscriber
* [retrieve](docs/sdks/subscribers/README.md#retrieve) - Get subscriber
* [subscribersControllerUpdateSubscriber](docs/sdks/subscribers/README.md#subscriberscontrollerupdatesubscriber) - Update subscriber
* [subscribersControllerRemoveSubscriber](docs/sdks/subscribers/README.md#subscriberscontrollerremovesubscriber) - Delete subscriber
* [subscribersControllerBulkCreateSubscribers](docs/sdks/subscribers/README.md#subscriberscontrollerbulkcreatesubscribers) - Bulk create subscribers
* [subscribersControllerUpdateSubscriberChannel](docs/sdks/subscribers/README.md#subscriberscontrollerupdatesubscriberchannel) - Update subscriber credentials
* [subscribersControllerModifySubscriberChannel](docs/sdks/subscribers/README.md#subscriberscontrollermodifysubscriberchannel) - Modify subscriber credentials
* [delete](docs/sdks/subscribers/README.md#delete) - Delete subscriber credentials by providerId
* [subscribersControllerUpdateSubscriberOnlineFlag](docs/sdks/subscribers/README.md#subscriberscontrollerupdatesubscriberonlineflag) - Update subscriber online status
* [subscribersControllerUpdateSubscriberGlobalPreferences](docs/sdks/subscribers/README.md#subscriberscontrollerupdatesubscriberglobalpreferences) - Update subscriber global preferences
* [subscribersControllerUpdateSubscriberPreference](docs/sdks/subscribers/README.md#subscriberscontrollerupdatesubscriberpreference) - Update subscriber preference
* [subscribersControllerMarkMessagesAs](docs/sdks/subscribers/README.md#subscriberscontrollermarkmessagesas) - Mark a subscriber messages as seen, read, unseen or unread
* [subscribersControllerMarkAllUnreadAsRead](docs/sdks/subscribers/README.md#subscriberscontrollermarkallunreadasread) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
* [subscribersControllerMarkActionAsSeen](docs/sdks/subscribers/README.md#subscriberscontrollermarkactionasseen) - Mark message action as seen
* [subscribersControllerChatOauthCallback](docs/sdks/subscribers/README.md#subscriberscontrollerchatoauthcallback) - Handle providers oauth redirect
* [subscribersControllerChatAccessOauth](docs/sdks/subscribers/README.md#subscriberscontrollerchataccessoauth) - Handle chat oauth

### [subscribers.preferences](docs/sdks/preferences/README.md)

* [list](docs/sdks/preferences/README.md#list) - Get subscriber preferences
* [retrieveByLevel](docs/sdks/preferences/README.md#retrievebylevel) - Get subscriber preferences by level

### [subscribers.notifications](docs/sdks/novunotifications/README.md)

* [retrieve](docs/sdks/novunotifications/README.md#retrieve) - Get in-app notification feed for a particular subscriber
* [unseenCount](docs/sdks/novunotifications/README.md#unseencount) - Get the unseen in-app notifications count for subscribers feed

### [feeds](docs/sdks/feeds/README.md)

* [retrieve](docs/sdks/feeds/README.md#retrieve) - Get feeds
* [create](docs/sdks/feeds/README.md#create) - Create feed
* [delete](docs/sdks/feeds/README.md#delete) - Delete feed

### [layouts](docs/sdks/layouts/README.md)

* [layoutsControllerFilterLayouts](docs/sdks/layouts/README.md#layoutscontrollerfilterlayouts) - Filter layouts
* [layoutsControllerPropertyDescriptor](docs/sdks/layouts/README.md#layoutscontrollerpropertydescriptor) - Layout creation
* [retrieve](docs/sdks/layouts/README.md#retrieve) - Get layout
* [delete](docs/sdks/layouts/README.md#delete) - Delete layout
* [layoutsControllerUpdateLayout](docs/sdks/layouts/README.md#layoutscontrollerupdatelayout) - Update a layout
* [layoutsControllerSetDefaultLayout](docs/sdks/layouts/README.md#layoutscontrollersetdefaultlayout) - Set default layout

### [messages](docs/sdks/messages/README.md)

* [retrieve](docs/sdks/messages/README.md#retrieve) - Get messages
* [delete](docs/sdks/messages/README.md#delete) - Delete message
* [deleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId

### [topics](docs/sdks/topics/README.md)

* [list](docs/sdks/topics/README.md#list) - Filter topics
* [create](docs/sdks/topics/README.md#create) - Topic creation
* [retrieve](docs/sdks/topics/README.md#retrieve) - Get topic
* [delete](docs/sdks/topics/README.md#delete) - Delete topic
* [topicsControllerRenameTopic](docs/sdks/topics/README.md#topicscontrollerrenametopic) - Rename a topic

### [topics.subscribers](docs/sdks/novusubscribers/README.md)

* [topicsControllerAddSubscribers](docs/sdks/novusubscribers/README.md#topicscontrolleraddsubscribers) - Subscribers addition
* [retrieve](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber
* [topicsControllerRemoveSubscribers](docs/sdks/novusubscribers/README.md#topicscontrollerremovesubscribers) - Subscribers removal

### [tenants](docs/sdks/tenants/README.md)

* [list](docs/sdks/tenants/README.md#list) - Get tenants
* [create](docs/sdks/tenants/README.md#create) - Create tenant
* [retrieve](docs/sdks/tenants/README.md#retrieve) - Get tenant
* [tenantControllerRemoveTenant](docs/sdks/tenants/README.md#tenantcontrollerremovetenant) - Delete tenant
* [tenantControllerUpdateTenant](docs/sdks/tenants/README.md#tenantcontrollerupdatetenant) - Update tenant
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Novu } from "novu-typescript";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.subscribers.list(7685.78, 10);

    for await (const page of result) {
        // handle page
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
import { Novu } from "novu-typescript";
import * as errors from "novu-typescript/models/errors";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await novu.organizations.list();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
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

    // Handle the result
    console.log(result);
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
| 0 | `http://127.0.0.1:3000` | None |

```typescript
import { Novu } from "novu-typescript";

const novu = new Novu({
    serverIdx: 0,
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.organizations.list();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Novu } from "novu-typescript";

const novu = new Novu({
    serverURL: "http://127.0.0.1:3000",
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.organizations.list();

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
import { Novu } from "novu-typescript";
import { HTTPClient } from "novu-typescript/lib/http";

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
import { Novu } from "novu-typescript";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.organizations.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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
