# RedirectDto

## Example Usage

```typescript
import { RedirectDto } from "@novu/api/models/components";

let value: RedirectDto = {
  url: "https://stiff-council.name",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `url`                                                  | *string*                                               | :heavy_check_mark:                                     | URL to redirect to                                     |
| `target`                                               | [components.Target](../../models/components/target.md) | :heavy_minus_sign:                                     | Target attribute for the redirect link                 |