# StepsOverrides

## Example Usage

```typescript
import { StepsOverrides } from "@novu/api/models/components";

let value: StepsOverrides = {
  providers: {
    "sendgrid": {
      "templateId": "1234567890",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `providers`                                                      | Record<string, Record<string, *any*>>                            | :heavy_check_mark:                                               | Passing the provider id and the provider specific configurations | {<br/>"sendgrid": {<br/>"templateId": "1234567890"<br/>}<br/>}   |