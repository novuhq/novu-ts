# GetWorkflowRunResponseDtoDeliveryLifecycleDetail

Why the run reached its delivery lifecycle status, e.g. preference or missing_email. Absent when no reason was recorded.

## Example Usage

```typescript
import { GetWorkflowRunResponseDtoDeliveryLifecycleDetail } from "@novu/api/models/components";

let value: GetWorkflowRunResponseDtoDeliveryLifecycleDetail = "missing_phone";
```

## Values

```typescript
"step_condition" | "preference" | "missing_phone" | "missing_email" | "missing_push_token" | "missing_webhook_url" | "some_channels_missing_credentials" | "workflow_missing_channel_step" | "unknown_error" | "execution_stopped" | "execution_canceled_by_user"
```