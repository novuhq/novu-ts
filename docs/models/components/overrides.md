# Overrides

## Example Usage

```typescript
import { Overrides } from "@novu/api/models/components";

let value: Overrides = {
  channel: "sms",
  source: "workflowOverride",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `channel`                                                                  | [components.OverridesChannel](../../models/components/overrideschannel.md) | :heavy_check_mark:                                                         | The channel type which is overridden                                       |
| `source`                                                                   | [components.Source](../../models/components/source.md)                     | :heavy_check_mark:                                                         | The source of overrides                                                    |