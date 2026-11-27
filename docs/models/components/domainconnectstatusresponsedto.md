# DomainConnectStatusResponseDto

## Example Usage

```typescript
import { DomainConnectStatusResponseDto } from "@novu/api/models/components";

let value: DomainConnectStatusResponseDto = {
  available: false,
  manualRecords: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `available`                                                                          | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `providerName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `providerId`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reason`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reasonCode`                                                                         | [components.ReasonCode](../../models/components/reasoncode.md)                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `manualRecords`                                                                      | [components.ExpectedDnsRecordDto](../../models/components/expecteddnsrecorddto.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |