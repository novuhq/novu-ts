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

