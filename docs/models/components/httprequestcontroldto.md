# HttpRequestControlDto

## Example Usage

```typescript
import { HttpRequestControlDto } from "@novu/api/models/components";

let value: HttpRequestControlDto = {
  method: "PATCH",
  url: "https://weighty-sonar.name/",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `method`                                                                                         | [components.HttpMethodEnum](../../models/components/httpmethodenum.md)                           | :heavy_check_mark:                                                                               | HTTP method                                                                                      |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Target URL for the HTTP request                                                                  |
| `headers`                                                                                        | [components.HttpRequestKeyValuePairDto](../../models/components/httprequestkeyvaluepairdto.md)[] | :heavy_minus_sign:                                                                               | Request headers as key-value pairs                                                               |
| `body`                                                                                           | [components.HttpRequestKeyValuePairDto](../../models/components/httprequestkeyvaluepairdto.md)[] | :heavy_minus_sign:                                                                               | Request body as key-value pairs                                                                  |
| `responseBodySchema`                                                                             | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | JSON schema to validate response body against                                                    |
| `enforceSchemaValidation`                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to enforce response body schema validation                                               |
| `continueOnFailure`                                                                              | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to continue workflow execution on failure                                                |