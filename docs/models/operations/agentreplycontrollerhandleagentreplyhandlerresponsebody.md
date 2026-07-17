# AgentReplyControllerHandleAgentReplyHandlerResponseBody

OK. When a reply or edit is delivered, `data` contains the platform message identifiers. Side-effect-only requests (typing, reactions, deletes, signals without an outbound message) return `data: null`.

## Example Usage

```typescript
import { AgentReplyControllerHandleAgentReplyHandlerResponseBody } from "@novu/api/models/operations";

let value: AgentReplyControllerHandleAgentReplyHandlerResponseBody = {
  messageId: "1712345678.123456",
  platformThreadId: "C0123456789",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `messageId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | Platform-native message id of the delivered or edited message (e.g. Slack `ts`, Teams activity id). | 1712345678.123456                                                                                   |
| `platformThreadId`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | Platform-native thread / conversation id where the message was delivered.                           | C0123456789                                                                                         |