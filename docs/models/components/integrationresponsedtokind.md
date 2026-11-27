# IntegrationResponseDtoKind

Distinguishes delivery integrations from agent-runtime integrations. Defaults to "delivery". Agent integrations do not have a channel.

## Example Usage

```typescript
import { IntegrationResponseDtoKind } from "@novu/api/models/components";

let value: IntegrationResponseDtoKind = "agent";
```

## Values

```typescript
"delivery" | "agent"
```