# StepContentIssueDto

## Example Usage

```typescript
import { StepContentIssueDto } from "@novu/api/models/components";

let value: StepContentIssueDto = {
  issueType: "ILLEGAL_VARIABLE_IN_CONTROL_VALUE",
  message: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `issueType`                                                                                                     | [components.ContentIssueEnum](../../models/components/contentissueenum.md)                                      | :heavy_check_mark:                                                                                              | Type of step content issue                                                                                      |
| `variableName`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Name of the variable related to the issue                                                                       |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Detailed message describing the issue                                                                           |
| `severity`                                                                                                      | [components.StepIssueSeverityEnum](../../models/components/stepissueseverityenum.md)                            | :heavy_minus_sign:                                                                                              | Blocking severity of the issue. `error` (default when omitted) blocks save; `warning` is a non-blocking notice. |