# GenerateConnectOauthUrlRequestDtoConnectionMode

Connection mode that determines how the channel connection is scoped. "subscriber" (default) associates the connection with a specific subscriber. "shared" associates the connection with a context instead of a subscriber.

## Example Usage

```typescript
import { GenerateConnectOauthUrlRequestDtoConnectionMode } from "@novu/api/models/components";

let value: GenerateConnectOauthUrlRequestDtoConnectionMode = "shared";
```

## Values

```typescript
"subscriber" | "shared"
```