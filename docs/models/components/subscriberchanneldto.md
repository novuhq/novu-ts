# SubscriberChannelDto

## Example Usage

```typescript
import { SubscriberChannelDto } from "@novu/api/models/components";

let value: SubscriberChannelDto = {
  providerId: {},
  credentials: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `integrationIdentifier`                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `providerId`                                                                         | [components.ProviderId](../../models/components/providerid.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `credentials`                                                                        | [components.ChannelCredentialsDto](../../models/components/channelcredentialsdto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |