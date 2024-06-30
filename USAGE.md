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
        overrides: {},
        payload: {},
        to: [
            {
                topicKey: "topic_key",
                type: "Topic",
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->