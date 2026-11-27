# ActivityControllerGetRequestTracesResponse

## Example Usage

```typescript
import { ActivityControllerGetRequestTracesResponse } from "@novu/api/models/operations";

let value: ActivityControllerGetRequestTracesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    request: {
      id: "<id>",
      createdAt: "1727425969311",
      url: "https://irresponsible-allegation.info",
      urlPattern: "<value>",
      method: "<value>",
      statusCode: 4873.16,
      path: "/usr/ports",
      hostname: "only-swanling.net",
      ip: "180.131.154.139",
      userAgent: "<value>",
      requestBody: "<value>",
      responseBody: "<value>",
      userId: "<id>",
      organizationId: "<id>",
      environmentId: "<id>",
      authType: "<value>",
      durationMs: 7208.07,
      source: "http",
    },
    traces: [
      {
        id: "<id>",
        createdAt: "1704944032192",
        eventType: "<value>",
        title: "<value>",
        status: "<value>",
        entityType: "<value>",
        entityId: "<id>",
        organizationId: "<id>",
        environmentId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GetRequestResponseDto](../../models/components/getrequestresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |