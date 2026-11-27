# UpdateTopicRequestDto

## Example Usage

```typescript
import { UpdateTopicRequestDto } from "@novu/api/models/components";

let value: UpdateTopicRequestDto = {
  name: "Updated Topic Name",
  data: {
    "category": "product",
    "priority": 1,
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    | Example                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                         | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | The display name for the topic                                                                                                                                 | Updated Topic Name                                                                                                                                             |
| `data`                                                                                                                                                         | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | Additional custom data associated with the topic. Flat key-value pairs of scalars (string, number, boolean, string[]). Maximum size: 64KB. Pass null to clear. | {<br/>"category": "product",<br/>"priority": 1<br/>}                                                                                                           |