<!-- Start SDK Example Usage [usage] -->
### Trigger Notification Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.trigger({
    name: "workflow_identifier",
    payload: {
      "comment_id": "string",
      "post": {
        "text": "string",
      },
    },
    bridgeUrl: "https://example.com/bridge",
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

### Trigger Notification Events in Bulk

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.triggerBulk({
    events: [
      {
        name: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        bridgeUrl: "https://example.com/bridge",
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
        name: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        bridgeUrl: "https://example.com/bridge",
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
        name: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        bridgeUrl: "https://example.com/bridge",
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

### Broadcast Event to All

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
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

### Cancel Triggered Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.cancel("<id>");

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->