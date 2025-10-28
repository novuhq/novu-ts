# ContextsControllerGetContextResponse

## Example Usage

```typescript
import { ContextsControllerGetContextResponse } from "@novu/api/models/operations";

let value: ContextsControllerGetContextResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    type: "<value>",
    id: "<id>",
    data: {},
    createdAt: "1712519779260",
    updatedAt: "1735648218923",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GetContextResponseDto](../../models/components/getcontextresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |