# UpdateSubscriberChannelRequestDto

## Example Usage

```typescript
import { UpdateSubscriberChannelRequestDto } from "@novu/api/models/components";

let value: UpdateSubscriberChannelRequestDto = {
  providerId: "getstream",
  credentials: {
    webhookUrl: "https://runny-epic.net",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `providerId`                                                                                                                     | [components.UpdateSubscriberChannelRequestDtoProviderId](../../models/components/updatesubscriberchannelrequestdtoproviderid.md) | :heavy_check_mark:                                                                                                               | The provider identifier for the credentials                                                                                      |
| `integrationIdentifier`                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The integration identifier                                                                                                       |
| `credentials`                                                                                                                    | [components.ChannelCredentials](../../models/components/channelcredentials.md)                                                   | :heavy_check_mark:                                                                                                               | Credentials payload for the specified provider                                                                                   |