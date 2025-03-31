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
      channels: {},
    },
    workflows: [
      {
        enabled: false,
        channels: {},
        overrides: [
          {
            channel: "chat",
            source: "template",
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