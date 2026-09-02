# StepIssueSeverityEnum

Blocking severity of the issue. `error` (default when omitted) blocks save; `warning` is a non-blocking notice.

## Example Usage

```typescript
import { StepIssueSeverityEnum } from "@novu/api/models/components";

let value: StepIssueSeverityEnum = "warning";
```

## Values

```typescript
"error" | "warning"
```