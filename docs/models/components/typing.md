# Typing

Per-turn typing/status control. Pass `{ status?: string }` to set/update the status (omit `status` for "Thinking…"), or `"stop"` to clear it. Best-effort per platform.


## Supported Types

### `components.Typing1`

```typescript
const value: components.Typing1 = "stop";
```

### `components.TypingStatusDto`

```typescript
const value: components.TypingStatusDto = {
  status: "Looking up your order…",
};
```

