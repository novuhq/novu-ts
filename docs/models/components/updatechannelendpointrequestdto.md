# UpdateChannelEndpointRequestDto

## Example Usage

```typescript
import { UpdateChannelEndpointRequestDto } from "@novu/api/models/components";

let value: UpdateChannelEndpointRequestDto = {
  endpoint: {
    personId: "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8...",
    personEmail: "user@example.com",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `endpoint`                                                                          | *components.UpdateChannelEndpointRequestDtoEndpoint*                                | :heavy_check_mark:                                                                  | Updated endpoint data. The structure must match the existing channel endpoint type. |