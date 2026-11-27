# PreviewErrorDto

## Example Usage

```typescript
import { PreviewErrorDto } from "@novu/api/models/components";

let value: PreviewErrorDto = {
  title: "<value>",
  message: "<value>",
  hint: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `title`                      | *string*                     | :heavy_check_mark:           | Short error title            |
| `message`                    | *string*                     | :heavy_check_mark:           | Detailed error message       |
| `hint`                       | *string*                     | :heavy_check_mark:           | Actionable hint for the user |