# HmacSecretKeyEncoding

Email webhook: how `secretKey` is interpreted when signing webhook calls. `text` signs with the raw UTF-8 bytes; `base64`/`hex` decode it to binary first (e.g. for AWS KMS).

## Example Usage

```typescript
import { HmacSecretKeyEncoding } from "@novu/api/models/components";

let value: HmacSecretKeyEncoding = "text";
```

## Values

```typescript
"text" | "base64" | "hex"
```