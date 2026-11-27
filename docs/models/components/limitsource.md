# LimitSource

Which constraint produced the limits. `plan` limits are lifted by upgrading; `system` limits (platform cap or per-organization override) require contacting the Novu team.

## Example Usage

```typescript
import { LimitSource } from "@novu/api/models/components";

let value: LimitSource = "plan";
```

## Values

```typescript
"plan" | "system"
```