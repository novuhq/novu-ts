# PlainCardRequestDto

## Example Usage

```typescript
import { PlainCardRequestDto } from "@novu/api/models/components";

let value: PlainCardRequestDto = {
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cardKeys`                                                                                   | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customer`                                                                                   | [components.Customer](../../models/components/customer.md)                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `tenant`                                                                                     | [components.PlainCardRequestDtoTenant](../../models/components/plaincardrequestdtotenant.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `thread`                                                                                     | [components.Thread](../../models/components/thread.md)                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `timestamp`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |