# ContextsControllerUpdateContextResponse

## Example Usage

```typescript
import { ContextsControllerUpdateContextResponse } from "@novu/api/models/operations";

let value: ContextsControllerUpdateContextResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
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