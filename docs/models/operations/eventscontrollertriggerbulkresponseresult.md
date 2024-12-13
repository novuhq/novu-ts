# EventsControllerTriggerBulkResponseResult


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
        "Must be a boolean value",
      ],
      value: true,
    },
    "fieldName4": {
      messages: [
        "Must be a valid object",
      ],
      value: 6458.94,
    },
  },
};
```

### `components.TriggerEventResponseDto[]`

```typescript
const value: components.TriggerEventResponseDto[] = [
  {
    acknowledged: false,
    status: "no_workflow_steps_defined",
  },
];
```

