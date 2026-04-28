# ListDomainsResponseDto

## Example Usage

```typescript
import { ListDomainsResponseDto } from "@novu/api/models/components";

let value: ListDomainsResponseDto = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      status: "pending",
      mxRecordConfigured: false,
      environmentId: "<id>",
      organizationId: "<id>",
      createdAt: "1728012190537",
      updatedAt: "1735613859020",
      expectedDnsRecords: [
        {
          type: "MX",
          name: "inbound",
          content: "inbound-smtp.us-east-1.amazonaws.com",
          ttl: "Auto",
          priority: 10,
        },
      ],
    },
  ],
  next: "<value>",
  previous: "<value>",
  totalCount: 2208.45,
  totalCountCapped: true,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [components.DomainResponseDto](../../models/components/domainresponsedto.md)[]  | :heavy_check_mark:                                                              | List of returned domains                                                        |
| `next`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The cursor for the next page of results, or null if there are no more pages.    |
| `previous`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | The cursor for the previous page of results, or null if this is the first page. |
| `totalCount`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | The total count of items (up to 50,000)                                         |
| `totalCountCapped`                                                              | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether there are more than 50,000 results available                            |