# UpdateChannelEndpointRequestDto

## Example Usage

```typescript
import { UpdateChannelEndpointRequestDto } from "@novu/api/models/components";

let value: UpdateChannelEndpointRequestDto = {
  endpoint: {
    url: "https://example.com/tools/incoming",
    headers: {
      "Authorization": "Bearer <token>",
    },
    method: "POST",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `endpoint`                                                                          | *components.UpdateChannelEndpointRequestDtoEndpoint*                                | :heavy_check_mark:                                                                  | Updated endpoint data. The structure must match the existing channel endpoint type. |