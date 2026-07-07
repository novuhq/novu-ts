# LinkChannelEndpointRequestDto

## Example Usage

```typescript
import { LinkChannelEndpointRequestDto } from "@novu/api/models/components";

let value: LinkChannelEndpointRequestDto = {
  integrationIdentifier: "telegram-bot",
  subscriberId: "subscriber-123",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `integrationIdentifier`                                       | *string*                                                      | :heavy_check_mark:                                            | Integration identifier for the chat provider integration      | telegram-bot                                                  |
| `subscriberId`                                                | *string*                                                      | :heavy_check_mark:                                            | External subscriber identifier to link to their chat identity | subscriber-123                                                |