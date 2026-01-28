# SubscriptionDetailsResponseDto

## Example Usage

```typescript
import { SubscriptionDetailsResponseDto } from "@novu/api/models/components";

let value: SubscriptionDetailsResponseDto = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier of the subscription                                                      | 64f5e95d3d7946d80d0cb679                                                                       |
| `identifier`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | The identifier of the subscription                                                             | subscription-identifier                                                                        |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the subscription                                                                   | My Subscription                                                                                |
| `preferences`                                                                                  | [components.SubscriptionPreferenceDto](../../models/components/subscriptionpreferencedto.md)[] | :heavy_minus_sign:                                                                             | The preferences/rules for the subscription                                                     |                                                                                                |
| `contextKeys`                                                                                  | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)               | [<br/>"tenant:org-a",<br/>"project:proj-123"<br/>]                                             |