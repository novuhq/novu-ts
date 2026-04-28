# ExpectedDnsRecordDto

## Example Usage

```typescript
import { ExpectedDnsRecordDto } from "@novu/api/models/components";

let value: ExpectedDnsRecordDto = {
  type: "MX",
  name: "inbound",
  content: "inbound-smtp.us-east-1.amazonaws.com",
  ttl: "Auto",
  priority: 10,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `type`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | MX                                   |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | inbound                              |
| `content`                            | *string*                             | :heavy_check_mark:                   | N/A                                  | inbound-smtp.us-east-1.amazonaws.com |
| `ttl`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | Auto                                 |
| `priority`                           | *number*                             | :heavy_minus_sign:                   | N/A                                  | 10                                   |