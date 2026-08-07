# Method

Optional HTTP method override for this webhook. Defaults to the integration-level method.

## Example Usage

```typescript
import { Method } from "@novu/api/models/components";

let value: Method = "POST";
```

## Values

```typescript
"POST" | "PUT" | "PATCH"
```