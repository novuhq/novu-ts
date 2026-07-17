# To

Recipient(s). Accepts a subscriberId string, subscriber object, topic object, or an array of those. When omitted, Novu falls back to the conversation subscriber.


## Supported Types

### `string`

```typescript
const value: string = "subscriber-123";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "subscriberId": "subscriber-123",
};
```

### `components.To3[]`

```typescript
const value: components.To3[] = [];
```

