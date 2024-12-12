# ChannelCredentials

## Example Usage

```typescript
import { ChannelCredentials } from "@novu/api/models/components";

let value: ChannelCredentials = {
  webhookUrl: "https://polished-horde.com/",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `webhookUrl`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | Webhook url used by chat app integrations. The webhook should be obtained from the chat app provider. |
| `channel`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Channel specification for Mattermost chat notifications                                               |
| `deviceTokens`                                                                                        | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Contains an array of the subscriber device tokens for a given provider. Used on Push integrations     |
| `alertUid`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | alert_uid for grafana on-call webhook payload                                                         |
| `title`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | title to be used with grafana on call webhook                                                         |
| `imageUrl`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | image_url property fo grafana on call webhook                                                         |
| `state`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | state property fo grafana on call webhook                                                             |
| `externalUrl`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | link_to_upstream_details property fo grafana on call webhook                                          |