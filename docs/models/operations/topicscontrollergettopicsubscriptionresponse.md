# TopicsControllerGetTopicSubscriptionResponse

## Example Usage

```typescript
import { TopicsControllerGetTopicSubscriptionResponse } from "@novu/api/models/operations";

let value: TopicsControllerGetTopicSubscriptionResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    id: "64f5e95d3d7946d80d0cb679",
    identifier: "subscription-identifier",
    name: "My Subscription",
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
          severity: "none",
        },
        enabled: true,
        condition: {
          "and": [
            {
              "===": [
                {
                  "var": "tier",
                },
                "premium",
              ],
            },
          ],
        },
      },
    ],
    contextKeys: [
      "tenant:org-a",
      "project:proj-123",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.SubscriptionDetailsResponseDto](../../models/components/subscriptiondetailsresponsedto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |