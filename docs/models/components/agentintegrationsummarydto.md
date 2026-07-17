# AgentIntegrationSummaryDto

## Example Usage

```typescript
import { AgentIntegrationSummaryDto } from "@novu/api/models/components";

let value: AgentIntegrationSummaryDto = {
  integrationId: "<id>",
  providerId: "<id>",
  name: "<value>",
  identifier: "<value>",
  active: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationId`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | Integration document id.                                                 |
| `providerId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `identifier`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `channel`                                                                | [components.ChannelTypeEnum](../../models/components/channeltypeenum.md) | :heavy_minus_sign:                                                       | Channel type through which the message is sent                           |
| `active`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |