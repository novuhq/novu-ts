<!-- Start SDK Example Usage [usage] -->
```typescript
import { Novu } from "novu-typescript";

const novu = new Novu();

async function run() {
    const result = await novu.create(
        {
            name: "<value>",
            notificationGroupId: "<value>",
            steps: [{}],
        },
        {
            bearer: "<YOUR_BEARER_TOKEN_HERE>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->