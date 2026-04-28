# DiagnoseDomainResponseDto

## Example Usage

```typescript
import { DiagnoseDomainResponseDto } from "@novu/api/models/components";

let value: DiagnoseDomainResponseDto = {
  ok: true,
  runAt: "<value>",
  checks: [
    {
      code: "mx_wrong_target",
      status: "pass",
      latencyMs: 5904.1,
    },
  ],
  issues: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ok`                                                                                         | *boolean*                                                                                    | :heavy_check_mark:                                                                           | True when there are no error-severity issues                                                 |
| `runAt`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | ISO timestamp when the diagnostic run finished                                               |
| `checks`                                                                                     | [components.DomainDiagnosticCheckDto](../../models/components/domaindiagnosticcheckdto.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `issues`                                                                                     | [components.DomainDiagnosticIssueDto](../../models/components/domaindiagnosticissuedto.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |