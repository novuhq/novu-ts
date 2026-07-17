# MetadataSetSignalDto

## Example Usage

```typescript
import { MetadataSetSignalDto } from "@novu/api/models/components";

let value: MetadataSetSignalDto = {
  type: "metadata",
  key: "crm:ticketId",
  value: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.MetadataSetSignalDtoType](../../models/components/metadatasetsignaldtotype.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `action`                                                                                     | [components.Action](../../models/components/action.md)                                       | :heavy_minus_sign:                                                                           | Defaults to `set` when omitted.                                                              |                                                                                              |
| `key`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | Metadata key (1–128 chars; letters, digits, and `-` `_` `:` separators).                     | crm:ticketId                                                                                 |
| `value`                                                                                      | [components.MetadataSetSignalDtoValue](../../models/components/metadatasetsignaldtovalue.md) | :heavy_check_mark:                                                                           | JSON-serializable value to store.                                                            | TCK-1001                                                                                     |