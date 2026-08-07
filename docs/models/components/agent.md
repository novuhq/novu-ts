# Agent

Optional agent assignment used to route this workflow through an agent's connected channels. Pass null to clear.

## Example Usage

```typescript
import { Agent } from "@novu/api/models/components";

let value: Agent = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Public agent identifier used to route this workflow through an agent's connected channels.                               |
| `providers`                                                                                                              | Record<string, [components.Providers](../../models/components/providers.md)>                                             | :heavy_minus_sign:                                                                                                       | Optional per-provider overrides keyed by providerId (e.g. novu-email-agent). Today only Novu Email replyTo is supported. |