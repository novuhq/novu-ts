# RuntimeIssueDto

## Example Usage

```typescript
import { RuntimeIssueDto } from "@novu/api/models/components";

let value: RuntimeIssueDto = {
  issueType: "DUPLICATED_VALUE",
  message: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `issueType`                                                                          | [components.WorkflowIssueTypeEnum](../../models/components/workflowissuetypeenum.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `variableName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Variable associated with the issue                                                   |
| `message`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | Human-readable issue message                                                         |