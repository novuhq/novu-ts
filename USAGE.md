<!-- Start SDK Example Usage [usage] -->
```typescript
import { Novu } from "novu-typescript";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.workflowControllerCreate({
        name: "<value>",
        notificationGroupId: "<value>",
        steps: [{}],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->