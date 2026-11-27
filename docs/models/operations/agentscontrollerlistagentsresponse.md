# AgentsControllerListAgentsResponse

## Example Usage

```typescript
import { AgentsControllerListAgentsResponse } from "@novu/api/models/operations";

let value: AgentsControllerListAgentsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: [],
    next: "<value>",
    previous: "<value>",
    totalCount: 1635.13,
    totalCountCapped: true,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ListAgentsResponseDto](../../models/components/listagentsresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |