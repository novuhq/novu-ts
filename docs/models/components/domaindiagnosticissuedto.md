# DomainDiagnosticIssueDto

## Example Usage

```typescript
import { DomainDiagnosticIssueDto } from "@novu/api/models/components";

let value: DomainDiagnosticIssueDto = {
  code: "mx_missing",
  severity: "warn",
  message: "<value>",
  fix: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | [components.DomainDiagnosticIssueDtoCode](../../models/components/domaindiagnosticissuedtocode.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `severity`                                                                                         | [components.Severity](../../models/components/severity.md)                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `fix`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Plain-language remediation guidance                                                                |