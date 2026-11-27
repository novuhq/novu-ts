# AuthMethod

Twilio: `apiKey` authenticates with `apiKey` (API Key SID) and `secretKey` (API Key Secret) on behalf of `accountSid`. When omitted, `token` (Auth Token) is used.

## Example Usage

```typescript
import { AuthMethod } from "@novu/api/models/components";

let value: AuthMethod = "apiKey";
```

## Values

```typescript
"apiKey"
```