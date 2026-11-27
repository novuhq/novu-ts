# TypingStatusDto

## Example Usage

```typescript
import { TypingStatusDto } from "@novu/api/models/components";

let value: TypingStatusDto = {
  status: "Looking up your order…",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `status`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Status text shown while the agent works. Omit for the default "Thinking…". | Looking up your order…                                                     |