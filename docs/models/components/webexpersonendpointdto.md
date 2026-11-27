# WebexPersonEndpointDto

## Example Usage

```typescript
import { WebexPersonEndpointDto } from "@novu/api/models/components";

let value: WebexPersonEndpointDto = {
  personId: "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8...",
  personEmail: "user@example.com",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `personId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Webex person ID. Provide exactly one of personId or personEmail.    | Y2lzY29zcGFyazovL3VzL1BFT1BMRS8...                                  |
| `personEmail`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | Webex person email. Provide exactly one of personId or personEmail. | user@example.com                                                    |