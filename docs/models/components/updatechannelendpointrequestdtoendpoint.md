# UpdateChannelEndpointRequestDtoEndpoint

Updated endpoint data. The structure must match the existing channel endpoint type.


## Supported Types

### `components.SlackChannelEndpointDto`

```typescript
const value: components.SlackChannelEndpointDto = {
  channelId: "C123456789",
};
```

### `components.SlackUserEndpointDto`

```typescript
const value: components.SlackUserEndpointDto = {
  userId: "U123456789",
};
```

### `components.WebhookEndpointDto`

```typescript
const value: components.WebhookEndpointDto = {
  url: "https://example.com/webhook",
};
```

### `components.PhoneEndpointDto`

```typescript
const value: components.PhoneEndpointDto = {
  phoneNumber: "+1234567890",
};
```

### `components.WebexRoomEndpointDto`

```typescript
const value: components.WebexRoomEndpointDto = {
  roomId: "Y2lzY29zcGFyazovL3VzL1JPT00v...",
  parentId: "Y2lzY29zcGFyazovL3VzL01FU1NBR0Uv...",
};
```

### `components.WebexPersonEndpointDto`

```typescript
const value: components.WebexPersonEndpointDto = {
  personId: "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8...",
  personEmail: "user@example.com",
};
```

