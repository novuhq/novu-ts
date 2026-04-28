# DomainResponseDto

## Example Usage

```typescript
import { DomainResponseDto } from "@novu/api/models/components";

let value: DomainResponseDto = {
  id: "<id>",
  name: "<value>",
  status: "verified",
  mxRecordConfigured: false,
  environmentId: "<id>",
  organizationId: "<id>",
  createdAt: "1732025134092",
  updatedAt: "1735637214768",
  expectedDnsRecords: [
    {
      type: "MX",
      name: "inbound",
      content: "inbound-smtp.us-east-1.amazonaws.com",
      ttl: "Auto",
      priority: 10,
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [components.DomainResponseDtoStatus](../../models/components/domainresponsedtostatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mxRecordConfigured`                                                                     | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `dnsProvider`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `environmentId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `organizationId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `expectedDnsRecords`                                                                     | [components.ExpectedDnsRecordDto](../../models/components/expecteddnsrecorddto.md)[]     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `data`                                                                                   | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | String key-value metadata (max 10 keys, 500 characters total when set via API).          |