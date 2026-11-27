# SnoozeSubscriberNotificationDto

## Example Usage

```typescript
import { SnoozeSubscriberNotificationDto } from "@novu/api/models/components";

let value: SnoozeSubscriberNotificationDto = {
  snoozeUntil: new Date("2026-03-01T10:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `snoozeUntil`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time until which the notification should be snoozed                              | 2026-03-01T10:00:00Z                                                                          |