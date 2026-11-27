# ConnectionMode

Scope results relative to the subscriber. `subscriber` returns only the subscriber-owned connections, `shared` returns only shared (workspace-level) connections. Omit to return both.

## Example Usage

```typescript
import { ConnectionMode } from "@novu/api/models/operations";

let value: ConnectionMode = "shared";
```

## Values

```typescript
"subscriber" | "shared"
```