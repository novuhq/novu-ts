# Endpoint

Endpoint data specific to the channel type


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

### `components.MsTeamsChannelEndpointDto`

```typescript
const value: components.MsTeamsChannelEndpointDto = {
  teamId: "19:abc123...@thread.tacv2",
  channelId: "19:def456...@thread.tacv2",
};
```

### `components.MsTeamsUserEndpointDto`

```typescript
const value: components.MsTeamsUserEndpointDto = {
  userId: "29:1234567890abcdef",
};
```

### `components.TelegramChatEndpointDto`

```typescript
const value: components.TelegramChatEndpointDto = {
  chatId: "123456789",
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

### `components.LineUserEndpointDto`

```typescript
const value: components.LineUserEndpointDto = {
  userId: "U1234567890abcdef",
};
```

