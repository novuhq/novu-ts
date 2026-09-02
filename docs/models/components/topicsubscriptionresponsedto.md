# TopicSubscriptionResponseDto

## Example Usage

```typescript
import { TopicSubscriptionResponseDto } from "@novu/api/models/components";

let value: TopicSubscriptionResponseDto = {
  id: "64da692e9a94fb2e6449ad08",
  identifier: "tk=product-updates:si=subscriber-123",
  createdAt: "2021-01-01T00:00:00.000Z",
  topic: {
    id: "64da692e9a94fb2e6449ad06",
    key: "product-updates",
    name: "Product Updates",
    data: {
      "category": "product",
      "priority": 1,
    },
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The identifier of the subscription                                                             | 64da692e9a94fb2e6449ad08                                                                       |
| `identifier`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The identifier of the subscription                                                             | tk=product-updates:si=subscriber-123                                                           |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The date and time the subscription was created                                                 | 2021-01-01T00:00:00.000Z                                                                       |
| `topic`                                                                                        | [components.TopicResponseDto](../../models/components/topicresponsedto.md)                     | :heavy_check_mark:                                                                             | Topic information                                                                              |                                                                                                |
| `subscriber`                                                                                   | [components.SubscriberDto](../../models/components/subscriberdto.md)                           | :heavy_check_mark:                                                                             | Subscriber information                                                                         |                                                                                                |
| `contextKeys`                                                                                  | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)               | [<br/>"tenant:org-a",<br/>"project:proj-123"<br/>]                                             |
| `preferences`                                                                                  | [components.SubscriptionPreferenceDto](../../models/components/subscriptionpreferencedto.md)[] | :heavy_minus_sign:                                                                             | The preferences for workflows in this subscription                                             |                                                                                                |