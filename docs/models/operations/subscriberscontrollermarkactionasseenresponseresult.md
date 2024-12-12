# SubscribersControllerMarkActionAsSeenResponseResult


## Supported Types

### `components.ValidationErrorDto`

```typescript
const value: components.ValidationErrorDto = {
  statusCode: 404,
  timestamp: "2024-12-12T13:00:00Z",
  path: "/api/v1/resource",
  message: "Resource not found.",
  ctx: {
    "workflowId": "some_wf_id",
    "stepId": "some_wf_id",
  },
  errorId: "abc123",
  errors: {
    "fieldName1": {
      messages: [
        "Field is required",
        "Must be a valid email address",
      ],
      value: "invalidEmail",
    },
    "fieldName2": {
      messages: [
        "Must be at least 18 years old",
      ],
      value: 17,
    },
    "fieldName3": {
      messages: [
        "Field cannot be null",
      ],
      value: "<value>",
    },
  },
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
  createdAt: "<value>",
  content: {
    type: "text",
    content: "<value>",
  },
  transactionId: "<id>",
  channel: "in_app",
  read: false,
  seen: false,
  cta: {
    data: {},
  },
  status: "warning",
  errorId: "<id>",
  errorText: "<value>",
  payload: {},
  overrides: {},
};
```

