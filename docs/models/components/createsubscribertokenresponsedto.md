# CreateSubscriberTokenResponseDto

## Example Usage

```typescript
import { CreateSubscriberTokenResponseDto } from "@novu/api/models/components";

let value: CreateSubscriberTokenResponseDto = {
  token: "<value>",
  expiresAt: new Date("2025-01-01T00:10:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Novu-signed login token for the subscriber. Exchange it in the browser for an Inbox session.  |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the token expires, in ISO 8601.                                                          | 2025-01-01T00:10:00.000Z                                                                      |