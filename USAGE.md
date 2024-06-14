<!-- Start SDK Example Usage [usage] -->
### Trigger Notification Event

```typescript
import { Novu } from "novu-sdk";
import { TopicPayloadDtoType } from "novu-sdk/models/components";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.events.trigger({
        name: "workflow_identifier",
        payload: {},
        overrides: {},
        to: [
            {
                topicKey: "topic_key",
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