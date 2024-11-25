<!-- Start SDK Example Usage [usage] -->
### Cancel Triggered Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream
  const result = await novu.cancel("<value>");
=======
  const result = await novu.cancel("<id>");
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
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
    events: [
      {
        name: "workflow_identifier",
        overrides: {},
        payload: {},
        to: [
          {
            topicKey: "<value>",
            type: "Topic",
          },
          {
            subscriberId: "<id>",
          },
        ],
      },
      {
        name: "workflow_identifier",
        overrides: {},
        payload: {},
        to: [
          {
            topicKey: "<value>",
            type: "Topic",
          },
        ],
      },
      {
        name: "workflow_identifier",
        overrides: {},
        payload: {},
        to: [
          {
            topicKey: "<value>",
            type: "Topic",
          },
          {
            topicKey: "<value>",
            type: "Topic",
          },
        ],
      },
>>>>>>> Stashed changes
    ],
  });

  // Handle the result
  console.log(result);
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
}

run();

```
<!-- End SDK Example Usage [usage] -->