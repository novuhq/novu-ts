# IssueIntegrationMobileLinkRequestDto

## Example Usage

```typescript
import { IssueIntegrationMobileLinkRequestDto } from "@novu/api/models/components";

let value: IssueIntegrationMobileLinkRequestDto = {
  subscriberId: "subscriber-123",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                                                                                       | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | Optional subscriber to link via `/start` deep link after mobile setup completes. When provided, the consume response may include a ready-to-open Telegram deep link. | subscriber-123                                                                                                                                                       |