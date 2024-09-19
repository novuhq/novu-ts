# ChannelSettings

## Example Usage

```typescript
import { ChannelSettings } from "@novu/api/models/components";

let value: ChannelSettings = {
  integrationId: "<value>",
  credentials: {
    webhookUrl: "<value>",
  },
  providerId: 1433.53,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Id of the integration that is used for this channel                            |
| `credentials`                                                                  | [components.ChannelCredentials](../../models/components/channelcredentials.md) | :heavy_check_mark:                                                             | Credentials payload for the specified provider                                 |
| `integrationIdentifier`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The integration identifier                                                     |
| `providerId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | The provider identifier for the credentials                                    |