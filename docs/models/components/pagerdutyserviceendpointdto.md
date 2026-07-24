# PagerDutyServiceEndpointDto

## Example Usage

```typescript
import { PagerDutyServiceEndpointDto } from "@novu/api/models/components";

let value: PagerDutyServiceEndpointDto = {
  routingKey: "R0UTINGK3YEXAMPLE000000000000000",
  region: "us",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `routingKey`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | PagerDuty Events API v2 integration key (32-character alphanumeric string). Stored encrypted on the linked channel connection. | R0UTINGK3YEXAMPLE000000000000000                                                                                               |
| `region`                                                                                                                       | [components.Region](../../models/components/region.md)                                                                         | :heavy_check_mark:                                                                                                             | PagerDuty account region — determines the events API data-center endpoint.                                                     | us                                                                                                                             |