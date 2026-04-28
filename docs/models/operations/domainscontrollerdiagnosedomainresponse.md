# DomainsControllerDiagnoseDomainResponse

## Example Usage

```typescript
import { DomainsControllerDiagnoseDomainResponse } from "@novu/api/models/operations";

let value: DomainsControllerDiagnoseDomainResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    ok: false,
    runAt: "<value>",
    checks: [
      {
        code: "mx_wrong_target",
        status: "pass",
        latencyMs: 5904.1,
      },
    ],
    issues: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.DiagnoseDomainResponseDto](../../models/components/diagnosedomainresponsedto.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |