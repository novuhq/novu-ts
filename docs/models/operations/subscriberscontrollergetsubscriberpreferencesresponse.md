# SubscribersControllerGetSubscriberPreferencesResponse

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberPreferencesResponse } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberPreferencesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    global: {
      enabled: false,
      channels: {
        email: true,
        sms: false,
        inApp: true,
        chat: false,
        push: true,
      },
    },
    workflows: [
      {
        enabled: false,
        channels: {
          email: true,
          sms: false,
          inApp: true,
          chat: false,
          push: true,
        },
        overrides: [
          {
            channel: "in_app",
            source: "workflowOverride",
          },
        ],
        workflow: {
          slug: "<value>",
          identifier: "<value>",
          name: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.GetSubscriberPreferencesDto](../../models/components/getsubscriberpreferencesdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |