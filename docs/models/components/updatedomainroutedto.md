# UpdateDomainRouteDto

## Example Usage

```typescript
import { UpdateDomainRouteDto } from "@novu/api/models/components";

let value: UpdateDomainRouteDto = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `agentId`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Agent identifier; required when type is agent, ignored when type is webhook.               |
| `type`                                                                                     | [components.UpdateDomainRouteDtoType](../../models/components/updatedomainroutedtotype.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `data`                                                                                     | Record<string, *string*>                                                                   | :heavy_minus_sign:                                                                         | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |