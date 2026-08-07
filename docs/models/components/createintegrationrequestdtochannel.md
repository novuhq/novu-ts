# CreateIntegrationRequestDtoChannel

The channel type for the integration. Not required for agent-kind integrations.

## Example Usage

```typescript
import { CreateIntegrationRequestDtoChannel } from "@novu/api/models/components";

let value: CreateIntegrationRequestDtoChannel = "in_app";
```

## Values

```typescript
"in_app" | "email" | "sms" | "chat" | "push" | "tool"
```