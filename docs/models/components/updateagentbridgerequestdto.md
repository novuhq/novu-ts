# UpdateAgentBridgeRequestDto

## Example Usage

```typescript
import { UpdateAgentBridgeRequestDto } from "@novu/api/models/components";

let value: UpdateAgentBridgeRequestDto = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `bridgeUrl`                                  | *string*                                     | :heavy_minus_sign:                           | Production bridge URL for this agent         |
| `devBridgeUrl`                               | *string*                                     | :heavy_minus_sign:                           | Development bridge URL (set by npx novu dev) |
| `devBridgeActive`                            | *boolean*                                    | :heavy_minus_sign:                           | Whether the dev bridge override is active    |