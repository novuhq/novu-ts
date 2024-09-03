# Actor

It is used to display the Avatar of the provided actor's subscriber id or actor object.
    If a new actor object is provided, we will create a new subscriber in our system
    

## Example Usage

```typescript
import { Actor } from "@novu/api/models/components";

let value: Actor = {
    subscriberId: "<value>",
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.SubscriberPayloadDto`

```typescript
const value: components.SubscriberPayloadDto = /* values here */
```

