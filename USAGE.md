<!-- Start SDK Example Usage [usage] -->
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