# HttpRequestStepResponseDtoControlValues

Control values for the HTTP request step

## Example Usage

```typescript
import { HttpRequestStepResponseDtoControlValues } from "@novu/api/models/components";

let value: HttpRequestStepResponseDtoControlValues = {
  method: "PUT",
  url: "https://exhausted-annual.org/",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `method`                                                                                         | [components.HttpMethodEnum](../../models/components/httpmethodenum.md)                           | :heavy_check_mark:                                                                               | HTTP method                                                                                      |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Target URL for the HTTP request                                                                  |
| `headers`                                                                                        | [components.HttpRequestKeyValuePairDto](../../models/components/httprequestkeyvaluepairdto.md)[] | :heavy_minus_sign:                                                                               | Request headers as key-value pairs                                                               |
| `body`                                                                                           | *components.HttpRequestStepResponseDtoBody*                                                      | :heavy_minus_sign:                                                                               | Request body as a raw JSON string. Key-value arrays are supported for legacy workflows.          |
| `responseBodySchema`                                                                             | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | JSON schema to validate response body against                                                    |
| `enforceSchemaValidation`                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to enforce response body schema validation                                               |
| `continueOnFailure`                                                                              | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to continue workflow execution on failure                                                |
| `additionalProperties`                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |