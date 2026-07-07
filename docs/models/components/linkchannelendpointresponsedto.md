# LinkChannelEndpointResponseDto

## Example Usage

```typescript
import { LinkChannelEndpointResponseDto } from "@novu/api/models/components";

let value: LinkChannelEndpointResponseDto = {
  url: "https://t.me/MyBot?start=AbCdEfGhIjKlMnOpQrStUvWxYz012345",
  providerMetadata: {
    "botUsername": "MyBot",
    "expiresAt": "2026-06-23T12:00:00.000Z",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `url`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | URL the subscriber opens to link their chat identity (OAuth URL or deep link) | https://t.me/MyBot?start=AbCdEfGhIjKlMnOpQrStUvWxYz012345                     |
| `providerMetadata`                                                            | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | Provider-specific metadata returned alongside the link URL                    | {<br/>"botUsername": "MyBot",<br/>"expiresAt": "2026-06-23T12:00:00.000Z"<br/>} |