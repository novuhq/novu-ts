# MessageActionResult

## Example Usage

```typescript
import { MessageActionResult } from "@novu/api/models/components";

let value: MessageActionResult = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `payload`                                                              | [components.Payload](../../models/components/payload.md)               | :heavy_minus_sign:                                                     | Payload of the action result                                           |
| `type`                                                                 | [components.ButtonTypeEnum](../../models/components/buttontypeenum.md) | :heavy_minus_sign:                                                     | Type of button for the action result                                   |