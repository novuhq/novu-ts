# UpdateSubscriberChannelRequestDto

## Example Usage

```typescript
import { UpdateSubscriberChannelRequestDto } from "@novu/api/models/components";

let value: UpdateSubscriberChannelRequestDto = {
    credentials: {
        webhookUrl: "<value>",
    },
    providerId: 5373.73,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `credentials`                                                                  | [components.ChannelCredentials](../../models/components/channelcredentials.md) | :heavy_check_mark:                                                             | Credentials payload for the specified provider                                 |
| `integrationIdentifier`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The integration identifier                                                     |
| `providerId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | The provider identifier for the credentials                                    |