# CreateSubscriberTokenRequestDto

## Example Usage

```typescript
import { CreateSubscriberTokenRequestDto } from "@novu/api/models/components";

let value: CreateSubscriberTokenRequestDto = {
  context: {
    "key": "org-acme",
  },
  subscriber: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    avatar: "https://example.com/avatar.jpg",
    locale: "en-US",
    timezone: "America/New_York",
  },
  scope: [
    "channels:shared",
  ],
  expiresIn: 600,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `context`                                                                                                                      | Record<string, *components.CreateSubscriberTokenRequestDtoContext*>                                                            | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `subscriber`                                                                                                                   | [components.BaseSubscriberFieldsDto](../../models/components/basesubscriberfieldsdto.md)                                       | :heavy_minus_sign:                                                                                                             | Profile fields saved on the subscriber when the token is exchanged for an Inbox session. The subscriberId comes from the path. |                                                                                                                                |
| `scope`                                                                                                                        | [components.SubscriberTokenScopeEnum](../../models/components/subscribertokenscopeenum.md)[]                                   | :heavy_minus_sign:                                                                                                             | Extra permissions granted to the session the token is exchanged for. Defaults to none.                                         | [<br/>"channels:shared"<br/>]                                                                                                  |
| `expiresIn`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Token lifetime in seconds, from 1 to 3600.                                                                                     | 600                                                                                                                            |