# SubscribersControllerGetSubscriberPreferenceByLevelRequest

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberPreferenceByLevelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberPreferenceByLevelRequest = {
<<<<<<< Updated upstream
  parameter: "Subscriber",
  subscriberId: "<value>",
=======
  parameter: "template",
  subscriberId: "<id>",
>>>>>>> Stashed changes
};
```

## Fields

<<<<<<< Updated upstream
| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `parameter`                                                  | [operations.Parameter](../../models/operations/parameter.md) | :heavy_check_mark:                                           | the preferences level to be retrieved( Subscriber / Topic)   |
| `subscriberId`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
=======
| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `includeInactiveChannels`                                                                                                 | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | A flag which specifies if the inactive workflow channels should be included in the retrieved preferences. Default is true |
| `parameter`                                                                                                               | [operations.Parameter](../../models/operations/parameter.md)                                                              | :heavy_check_mark:                                                                                                        | the preferences level to be retrieved (template / global)                                                                 |
| `subscriberId`                                                                                                            | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
>>>>>>> Stashed changes
