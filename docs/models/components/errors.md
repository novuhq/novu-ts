# Errors

## Example Usage

```typescript
import { Errors } from "@novu/api/models/components";

let value: Errors = {
  messages: [
    "Field is required",
    "Invalid format",
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `messages`                           | *string*[]                           | :heavy_check_mark:                   | N/A                                  |
| `value`                              | *components.ValidationErrorDtoValue* | :heavy_minus_sign:                   | N/A                                  |