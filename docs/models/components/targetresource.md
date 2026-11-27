# TargetResource

Target resource information

## Example Usage

```typescript
import { TargetResource } from "@novu/api/models/components";

let value: TargetResource = {
  updatedAt: new Date("2024-01-15T10:30:00.000Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Resource ID (workflow ID or step ID)                                                                   |                                                                                                        |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Resource name (workflow name or step name)                                                             |                                                                                                        |
| `updatedBy`                                                                                            | [components.ResourceDiffResultDtoUpdatedBy](../../models/components/resourcediffresultdtoupdatedby.md) | :heavy_minus_sign:                                                                                     | User who last updated the resource                                                                     |                                                                                                        |
| `updatedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | When the resource was last updated                                                                     | 2024-01-15T10:30:00.000Z                                                                               |