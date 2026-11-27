# WebexRoomEndpointDto

## Example Usage

```typescript
import { WebexRoomEndpointDto } from "@novu/api/models/components";

let value: WebexRoomEndpointDto = {
  roomId: "Y2lzY29zcGFyazovL3VzL1JPT00v...",
  parentId: "Y2lzY29zcGFyazovL3VzL01FU1NBR0Uv...",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `roomId`                                              | *string*                                              | :heavy_check_mark:                                    | Webex room ID                                         | Y2lzY29zcGFyazovL3VzL1JPT00v...                       |
| `parentId`                                            | *string*                                              | :heavy_minus_sign:                                    | Optional Webex parent message ID for threaded replies | Y2lzY29zcGFyazovL3VzL01FU1NBR0Uv...                   |