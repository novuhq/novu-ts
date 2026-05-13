# Kind

Distinguishes delivery integrations from agent-runtime integrations. Defaults to "delivery". Agent integrations do not have a channel.

## Example Usage

```typescript
import { Kind } from "@novu/api/models/components";

let value: Kind = "delivery";
```

## Values

```typescript
"delivery" | "agent"
```