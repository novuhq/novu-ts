# UpdateAgentIntegrationRequestDto

## Example Usage

```typescript
import { UpdateAgentIntegrationRequestDto } from "@novu/api/models/components";

let value: UpdateAgentIntegrationRequestDto = {
  integrationIdentifier: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `integrationIdentifier`                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | The integration identifier this link should point to (not the internal document _id). |