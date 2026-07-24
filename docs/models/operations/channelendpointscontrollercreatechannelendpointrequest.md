# ChannelEndpointsControllerCreateChannelEndpointRequest

## Example Usage

```typescript
import { ChannelEndpointsControllerCreateChannelEndpointRequest } from "@novu/api/models/operations";

let value: ChannelEndpointsControllerCreateChannelEndpointRequest = {
  requestBody: {
    subscriberId: "subscriber-123",
    createSubscriberIfMissing: false,
    integrationIdentifier: "slack-prod",
    type: "phone",
    endpoint: {
      phoneNumber: "+1234567890",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A header for idempotency purposes                                                |
| `requestBody`                                                                    | *operations.ChannelEndpointsControllerCreateChannelEndpointRequestBody*          | :heavy_check_mark:                                                               | Channel endpoint creation request. The structure varies based on the type field. |