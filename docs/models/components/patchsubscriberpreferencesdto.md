# PatchSubscriberPreferencesDto

## Example Usage

```typescript
import { PatchSubscriberPreferencesDto } from "@novu/api/models/components";

let value: PatchSubscriberPreferencesDto = {
  channels: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channels`                                                                                     | [components.PatchPreferenceChannelsDto](../../models/components/patchpreferencechannelsdto.md) | :heavy_check_mark:                                                                             | Channel-specific preference settings                                                           |
| `workflowId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | If provided, update workflow specific preferences, otherwise update global preferences         |