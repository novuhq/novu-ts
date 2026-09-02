# ChatStepResponseDtoControlValues

Control values for the chat step

## Example Usage

```typescript
import { ChatStepResponseDtoControlValues } from "@novu/api/models/components";

let value: ChatStepResponseDtoControlValues = {
  skip: {
    "and": [
      {
        "==": [
          {
            "var": "payload.tier",
          },
          "pro",
        ],
      },
      {
        "==": [
          {
            "var": "subscriber.data.role",
          },
          "admin",
        ],
      },
      {
        ">": [
          {
            "var": "payload.amount",
          },
          "4",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  | Example                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `skip`                                                                                                                                                                                                       | Record<string, *any*>                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                           | JSONLogic filter conditions for conditionally skipping the step execution. Supports complex logical operations with AND, OR, and comparison operators. See https://jsonlogic.com/ for full typing reference. | {<br/>"and": [<br/>{<br/>"==": [<br/>{<br/>"var": "payload.tier"<br/>},<br/>"pro"<br/>]<br/>},<br/>{<br/>"==": [<br/>{<br/>"var": "subscriber.data.role"<br/>},<br/>"admin"<br/>]<br/>},<br/>{<br/>"\u003e": [<br/>{<br/>"var": "payload.amount"<br/>},<br/>"4"<br/>]<br/>}<br/>]<br/>} |
| `body`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | Content of the chat message.                                                                                                                                                                                 |                                                                                                                                                                                                              |
| `editorType`                                                                                                                                                                                                 | [components.ChatStepResponseDtoEditorType](../../models/components/chatstepresponsedtoeditortype.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                           | Type of editor to use for the body. When omitted, inferred from the body: Maily JSON is "block", otherwise "text".                                                                                           |                                                                                                                                                                                                              |
| `additionalProperties`                                                                                                                                                                                       | Record<string, *any*>                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |                                                                                                                                                                                                              |