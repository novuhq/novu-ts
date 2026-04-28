# TestDomainRouteDto

## Example Usage

```typescript
import { TestDomainRouteDto } from "@novu/api/models/components";

let value: TestDomainRouteDto = {
  from: {
    address: "677 Hillside Road",
  },
  subject: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                                | [components.TestDomainRouteFromDto](../../models/components/testdomainroutefromdto.md)                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `subject`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `text`                                                                                                                | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `html`                                                                                                                | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `dryRun`                                                                                                              | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | When true, returns the payload that would be delivered without invoking outbound webhooks or the agent HTTP endpoint. |