# DomainDiagnosticCheckDto

## Example Usage

```typescript
import { DomainDiagnosticCheckDto } from "@novu/api/models/components";

let value: DomainDiagnosticCheckDto = {
  code: "apex_cname_collision",
  status: "pass",
  latencyMs: 5536.55,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | [components.Code](../../models/components/code.md)                                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [components.DomainDiagnosticCheckDtoStatus](../../models/components/domaindiagnosticcheckdtostatus.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `latencyMs`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | Round-trip time for this check in milliseconds                                                         |