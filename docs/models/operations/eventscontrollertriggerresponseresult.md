# EventsControllerTriggerResponseResult


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

### `components.TriggerEventResponseDto`

```typescript
const value: components.TriggerEventResponseDto = {
  acknowledged: false,
  status: "processed",
};
```
