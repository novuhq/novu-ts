<!-- Start SDK Example Usage [usage] -->
### Trigger Notification Event

```typescript
import { Novu } from "novu-node";
import { TopicPayloadDtoType } from "novu-node/models/components";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.events.trigger({
        name: "<value>",
        payload: {},
        overrides: {},
        to: [
            {
                topicKey: "<value>",
                type: TopicPayloadDtoType.Topic,
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->