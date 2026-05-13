# CreateIntegrationRequestDtoKind

Distinguishes delivery integrations from agent-runtime integrations. Defaults to "delivery". Agent integrations do not require a channel.

## Example Usage

```typescript
import { CreateIntegrationRequestDtoKind } from "@novu/api/models/components";

let value: CreateIntegrationRequestDtoKind = "agent";
```

## Values

```typescript
"delivery" | "agent"
```