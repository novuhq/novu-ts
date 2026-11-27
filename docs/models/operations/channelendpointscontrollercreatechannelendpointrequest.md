# ChannelEndpointsControllerCreateChannelEndpointRequest

## Example Usage

```typescript
import { ChannelEndpointsControllerCreateChannelEndpointRequest } from "@novu/api/models/operations";

let value: ChannelEndpointsControllerCreateChannelEndpointRequest = {
  requestBody: {
    subscriberId: "subscriber-123",
    createSubscriberIfMissing: false,
    integrationIdentifier: "slack-prod",
    type: "ms_teams_channel",
    endpoint: {
      teamId: "19:abc123...@thread.tacv2",
      channelId: "19:def456...@thread.tacv2",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A header for idempotency purposes                                                |
| `requestBody`                                                                    | *operations.ChannelEndpointsControllerCreateChannelEndpointRequestBody*          | :heavy_check_mark:                                                               | Channel endpoint creation request. The structure varies based on the type field. |