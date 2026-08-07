# SubscribersControllerListSubscriberTopicsResponse

## Example Usage

```typescript
import { SubscribersControllerListSubscriberTopicsResponse } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscriberTopicsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: [
      {
        id: "64da692e9a94fb2e6449ad08",
        identifier: "tk=product-updates:si=subscriber-123",
        createdAt: "2021-01-01T00:00:00.000Z",
        topic: {
          id: "64da692e9a94fb2e6449ad06",
          key: "product-updates",
          name: "Product Updates",
          createdAt: "2023-08-15T00:00:00.000Z",
          updatedAt: "2023-08-15T00:00:00.000Z",
        },
        subscriber: {
          id: "64da692e9a94fb2e6449ad07",
          subscriberId: "user-123",
          avatar: "https://example.com/avatar.png",
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
        },
        contextKeys: [
          "tenant:org-a",
          "project:proj-123",
        ],
        preferences: [
          {
            subscriptionId: "64f5e95d3d7946d80d0cb679",
            workflow: {
              id: "64a1b2c3d4e5f6g7h8i9j0k1",
              identifier: "welcome-email",
              name: "Welcome Email Workflow",
              critical: false,
              tags: [
                "user-onboarding",
                "email",
              ],
              data: {},
              severity: "low",
            },
            enabled: true,
            condition: {
              "and": [
                {
                  "===": [
                    {
                      "var": "payload.tier",
                    },
                    "premium",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
    next: null,
    previous: "<value>",
    totalCount: 8461.59,
    totalCountCapped: false,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.ListTopicSubscriptionsResponseDto](../../models/components/listtopicsubscriptionsresponsedto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |