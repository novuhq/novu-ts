# IntegrationResponseDtoChannel

The channel type for the integration, which defines how it communicates (e.g., email, SMS). Not set for agent-kind integrations.

## Example Usage

```typescript
import { IntegrationResponseDtoChannel } from "@novu/api/models/components";

let value: IntegrationResponseDtoChannel = "sms";
```

## Values

```typescript
"in_app" | "email" | "sms" | "chat" | "push" | "tool"
```