# IntegrationsControllerLinkChannelEndpointRequest

## Example Usage

```typescript
import { IntegrationsControllerLinkChannelEndpointRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerLinkChannelEndpointRequest = {
  linkChannelEndpointRequestDto: {
    integrationIdentifier: "telegram-bot",
    subscriberId: "subscriber-123",
    context: {
      "key": "org-acme",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A header for idempotency purposes                                                                    |
| `linkChannelEndpointRequestDto`                                                                      | [components.LinkChannelEndpointRequestDto](../../models/components/linkchannelendpointrequestdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |