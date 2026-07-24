# ProviderOverrides

Per-provider content overrides keyed by providerId. Stored separately from controlValues and merged over the default body at send time.

## Example Usage

```typescript
import { ProviderOverrides } from "@novu/api/models/components";

let value: ProviderOverrides = {
  pagerduty: {
    "severity": "warning",
    "source": "novu",
    "summary": "{{payload.title}}",
  },
  opsgenie: {
    "priority": "P2",
    "message": "{{payload.title}}",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagerduty`                                                                                                                                  | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | PagerDuty content overrides. Merged over the default step body at send time. Supported keys are documented in the PagerDuty override schema. | {<br/>"severity": "warning",<br/>"source": "novu",<br/>"summary": "{{payload.title}}"<br/>}                                                  |
| `opsgenie`                                                                                                                                   | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | Opsgenie content overrides. Merged over the default step body at send time. Supported keys are documented in the Opsgenie override schema.   | {<br/>"priority": "P2",<br/>"message": "{{payload.title}}"<br/>}                                                                             |