# SubscribersControllerMarkActionAsSeenResponseResult


## Supported Types

### `components.ErrorDto`

```typescript
const value: components.ErrorDto = {
  statusCode: 404,
  timestamp: "2024-12-12T13:00:00Z",
  path: "/api/v1/resource",
  message: "Resource not found.",
  ctx: {
    "workflowId": "some_wf_id",
    "stepId": "some_wf_id",
  },
  errorId: "abc123",
};
```

### `components.MessageResponseDto`

```typescript
const value: components.MessageResponseDto = {
  templateId: "<id>",
  environmentId: "<id>",
  messageTemplateId: "<id>",
  organizationId: "<id>",
  notificationId: "<id>",
  subscriberId: "<id>",
  subscriber: {
    subscriberId: "<id>",
    channels: [
      {
        providerId: "discord",
        credentials: {
          webhookUrl: "https://example.com/webhook",
          channel: "general",
          deviceTokens: [
            "token1",
            "token2",
            "token3",
          ],
          alertUid: "12345-abcde",
          title: "Critical Alert",
          imageUrl: "https://example.com/image.png",
          state: "resolved",
          externalUrl: "https://example.com/details",
        },
        integrationId: "<id>",
      },
    ],
    organizationId: "<id>",
    environmentId: "<id>",
    deleted: false,
    createdAt: "1723487667285",
    updatedAt: "1736854509440",
  },
  createdAt: "1715371009344",
  content: "<value>",
  transactionId: "<id>",
  channel: "in_app",
  read: false,
  seen: false,
  cta: {
    data: {},
  },
  status: "warning",
};
```

