# ChatRenderOutput

## Example Usage

```typescript
import { ChatRenderOutput } from "@novu/api/models/components";

let value: ChatRenderOutput = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `body`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Body of the chat message. Mutually exclusive with `card`.                       |
| `card`                                                                          | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | Rich Chat: compiled provider-agnostic card DSL. Mutually exclusive with `body`. |