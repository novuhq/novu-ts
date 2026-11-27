# DomainRouteDto

## Example Usage

```typescript
import { DomainRouteDto } from "@novu/api/models/components";

let value: DomainRouteDto = {
  address: "361 West Road",
  type: "webhook",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `address`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | Inbox address local part (e.g. "support", "*")                                          |
| `agentId`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | Agent identifier; required when type is agent, unused for webhook                       |
| `type`                                                                                  | [components.DomainRouteDtoType](../../models/components/domainroutedtotype.md)          | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `data`                                                                                  | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | Optional string key-value metadata (max 10 keys, 500 characters total for keys+values). |