# SubscribersControllerMarkActionAsSeenResponse

## Example Usage

```typescript
import { SubscribersControllerMarkActionAsSeenResponse } from "@novu/api/models/operations";

let value: SubscribersControllerMarkActionAsSeenResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    templateId: "<id>",
    environmentId: "<id>",
    messageTemplateId: "<id>",
    organizationId: "<id>",
    notificationId: "<id>",
    subscriberId: "<id>",
    createdAt: "<value>",
    content: {
      type: "text",
      content: "<value>",
    },
    transactionId: "<id>",
    channel: "in_app",
    read: false,
    seen: false,
    cta: {
      data: {},
    },
    status: "sent",
    errorId: "<id>",
    errorText: "<value>",
    payload: {},
    overrides: {},
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.MessageResponseDto](../../models/components/messageresponsedto.md) | :heavy_check_mark:                                                             | N/A                                                                            |