# ChannelEndpointsControllerCreateChannelEndpointRequestBody

Channel endpoint creation request. The structure varies based on the type field.


## Supported Types

### `components.CreateSlackChannelEndpointDto`

```typescript
const value: components.CreateSlackChannelEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "slack_channel",
  endpoint: {
    channelId: "C123456789",
  },
};
```

### `components.CreateSlackUserEndpointDto`

```typescript
const value: components.CreateSlackUserEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "slack_user",
  endpoint: {
    userId: "U123456789",
  },
};
```

### `components.CreateWebhookEndpointDto`

```typescript
const value: components.CreateWebhookEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "webhook",
  endpoint: {
    url: "https://example.com/webhook",
  },
};
```

### `components.CreatePhoneEndpointDto`

```typescript
const value: components.CreatePhoneEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "phone",
  endpoint: {
    phoneNumber: "+1234567890",
  },
};
```

### `components.CreateMsTeamsChannelEndpointDto`

```typescript
const value: components.CreateMsTeamsChannelEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "ms_teams_channel",
  endpoint: {
    teamId: "19:abc123...@thread.tacv2",
    channelId: "19:def456...@thread.tacv2",
  },
};
```

### `components.CreateMsTeamsUserEndpointDto`

```typescript
const value: components.CreateMsTeamsUserEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "ms_teams_user",
  endpoint: {
    userId: "29:1234567890abcdef",
  },
};
```

### `components.CreateTelegramChatEndpointDto`

```typescript
const value: components.CreateTelegramChatEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "telegram_chat",
  endpoint: {
    chatId: "123456789",
  },
};
```

### `components.CreateWebexRoomEndpointDto`

```typescript
const value: components.CreateWebexRoomEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "webex-connection-abc123",
  type: "webex_room",
  endpoint: {
    roomId: "Y2lzY29zcGFyazovL3VzL1JPT00v...",
    parentId: "Y2lzY29zcGFyazovL3VzL01FU1NBR0Uv...",
  },
};
```

### `components.CreateWebexPersonEndpointDto`

```typescript
const value: components.CreateWebexPersonEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "webex-connection-abc123",
  type: "webex_person",
  endpoint: {
    personId: "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8...",
    personEmail: "user@example.com",
  },
};
```

### `components.CreateLineUserEndpointDto`

```typescript
const value: components.CreateLineUserEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "line_user",
  endpoint: {
    userId: "U1234567890abcdef",
  },
};
```

### `components.CreatePagerDutyServiceEndpointDto`

```typescript
const value: components.CreatePagerDutyServiceEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "pagerduty_service",
  endpoint: {
    routingKey: "R0UTINGK3YEXAMPLE000000000000000",
    region: "us",
  },
};
```

### `components.CreateOpsgenieIntegrationEndpointDto`

```typescript
const value: components.CreateOpsgenieIntegrationEndpointDto = {
  identifier: "slack-channel-user123-abc4",
  subscriberId: "subscriber-123",
  context: {
    "key": "org-acme",
  },
  integrationIdentifier: "slack-prod",
  connectionIdentifier: "slack-connection-abc123",
  type: "opsgenie_integration",
  endpoint: {
    apiKey: "abcdefg-a25a-4652-883c-73703b12345",
    region: "us",
  },
};
```

