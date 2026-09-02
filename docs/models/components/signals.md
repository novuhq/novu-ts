# Signals


## Supported Types

### `components.MetadataSetSignalDto`

```typescript
const value: components.MetadataSetSignalDto = {
  type: "metadata",
  key: "crm:ticketId",
  value: {},
};
```

### `components.MetadataDeleteSignalDto`

```typescript
const value: components.MetadataDeleteSignalDto = {
  type: "metadata",
  action: "delete",
  key: "crm:ticketId",
};
```

### `components.MetadataClearSignalDto`

```typescript
const value: components.MetadataClearSignalDto = {
  type: "metadata",
  action: "clear",
};
```

### `components.TriggerSignalDto`

```typescript
const value: components.TriggerSignalDto = {
  type: "trigger",
  workflowId: "order-shipped",
  to: "subscriber-123",
  payload: {
    "orderId": "ORD-42",
  },
};
```

### `components.HumanSignalDto`

```typescript
const value: components.HumanSignalDto = {
  type: "human",
  kind: "approve",
  prompt: "Deploy v2.4.1 to production?",
  requestId: "hr_7c2e1a3b-4d5f-6789-abcd-ef0123456789",
  options: [
    "us-east",
    "eu-west",
  ],
  from: "deploy-bot",
  ttlSeconds: 3600,
  to: "alice",
};
```

