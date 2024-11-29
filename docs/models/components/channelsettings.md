# ChannelSettings

## Example Usage

```typescript
import { ChannelSettings } from "@novu/api/models/components";

let value: ChannelSettings = {
  providerId: "expo",
  credentials: {
    webhookUrl: "https://dental-morbidity.com/",
  },
  integrationId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `providerId`                                                                   | [components.ProviderId](../../models/components/providerid.md)                 | :heavy_check_mark:                                                             | The provider identifier for the credentials                                    |
| `integrationIdentifier`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The integration identifier                                                     |
| `credentials`                                                                  | [components.ChannelCredentials](../../models/components/channelcredentials.md) | :heavy_check_mark:                                                             | Credentials payload for the specified provider                                 |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Id of the integration that is used for this channel                            |