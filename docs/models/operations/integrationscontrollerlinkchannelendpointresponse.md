# IntegrationsControllerLinkChannelEndpointResponse

## Example Usage

```typescript
import { IntegrationsControllerLinkChannelEndpointResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerLinkChannelEndpointResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    url: "https://t.me/MyBot?start=AbCdEfGhIjKlMnOpQrStUvWxYz012345",
    providerMetadata: {
      "botUsername": "MyBot",
      "expiresAt": "2026-06-23T12:00:00.000Z",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.LinkChannelEndpointResponseDto](../../models/components/linkchannelendpointresponsedto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |