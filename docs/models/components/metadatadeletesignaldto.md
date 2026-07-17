# MetadataDeleteSignalDto

## Example Usage

```typescript
import { MetadataDeleteSignalDto } from "@novu/api/models/components";

let value: MetadataDeleteSignalDto = {
  type: "metadata",
  action: "delete",
  key: "crm:ticketId",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.MetadataDeleteSignalDtoType](../../models/components/metadatadeletesignaldtotype.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `action`                                                                                             | [components.MetadataDeleteSignalDtoAction](../../models/components/metadatadeletesignaldtoaction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | Metadata key to remove.                                                                              | crm:ticketId                                                                                         |