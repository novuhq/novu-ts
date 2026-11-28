# GetRequestResponseDto

## Example Usage

```typescript
import { GetRequestResponseDto } from "@novu/api/models/components";

let value: GetRequestResponseDto = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [components.RequestLogResponseDto](../../models/components/requestlogresponsedto.md) | :heavy_check_mark:                                                                   | Request details                                                                      |
| `traces`                                                                             | [components.TraceResponseDto](../../models/components/traceresponsedto.md)[]         | :heavy_check_mark:                                                                   | Associated traces                                                                    |