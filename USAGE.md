<!-- Start SDK Example Usage [usage] -->
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
      steps: {
        "email-step": {
          providers: {
            "sendgrid": {
              "templateId": "1234567890",
            },
          },
        },
      },
      providers: {
        "sendgrid": {
          "templateId": "1234567890",
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
    overrides: {
      steps: {
        "email-step": {
          providers: {
            "sendgrid": {
              "templateId": "1234567890",
            },
          },
        },
      },
      providers: {
        "sendgrid": {
          "templateId": "1234567890",
        },
      },
      additionalProperties: {
        "fcm": {
          "data": {
            "key": "value",
          },
        },
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
          steps: {
            "email-step": {
              providers: {
                "sendgrid": {
                  "templateId": "1234567890",
                },
              },
            },
          },
          providers: {
            "sendgrid": {
              "templateId": "1234567890",
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
          steps: {
            "email-step": {
              providers: {
                "sendgrid": {
                  "templateId": "1234567890",
                },
              },
            },
          },
          providers: {
            "sendgrid": {
              "templateId": "1234567890",
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
          steps: {
            "email-step": {
              providers: {
                "sendgrid": {
                  "templateId": "1234567890",
                },
              },
            },
          },
          providers: {
            "sendgrid": {
              "templateId": "1234567890",
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