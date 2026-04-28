# Mode

OAuth flow mode. Use "connect" (default) to create a workspace channel connection, or "link_user" to identify the subscriber's Slack user ID without creating a connection.

## Example Usage

```typescript
import { Mode } from "@novu/api/models/components";

let value: Mode = "link_user";
```

## Values

```typescript
"connect" | "link_user"
```