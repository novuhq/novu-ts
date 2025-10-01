# Steps


## Supported Types

### `components.InAppStepUpsertDto`

```typescript
const value: components.InAppStepUpsertDto = {
  name: "<value>",
  type: "push",
  controlValues: {},
};
```

### `components.EmailStepUpsertDto`

```typescript
const value: components.EmailStepUpsertDto = {
  name: "<value>",
  type: "delay",
  controlValues: {
    "key": "<value>",
  },
};
```

### `components.SmsStepUpsertDto`

```typescript
const value: components.SmsStepUpsertDto = {
  name: "<value>",
  type: "push",
  controlValues: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `components.PushStepUpsertDto`

```typescript
const value: components.PushStepUpsertDto = {
  name: "<value>",
  type: "trigger",
  controlValues: {
    "skip": {
      "and": [
        {
          "==": [
            {
              "var": "payload.tier",
            },
            "pro",
          ],
        },
        {
          "==": [
            {
              "var": "subscriber.data.role",
            },
            "admin",
          ],
        },
        {
          ">": [
            {
              "var": "payload.amount",
            },
            "4",
          ],
        },
      ],
    },
  },
};
```

### `components.ChatStepUpsertDto`

```typescript
const value: components.ChatStepUpsertDto = {
  name: "<value>",
  type: "throttle",
  controlValues: {
    "skip": {
      "and": [
        {
          "==": [
            {
              "var": "payload.tier",
            },
            "pro",
          ],
        },
        {
          "==": [
            {
              "var": "subscriber.data.role",
            },
            "admin",
          ],
        },
        {
          ">": [
            {
              "var": "payload.amount",
            },
            "4",
          ],
        },
      ],
    },
  },
};
```

### `components.DelayStepUpsertDto`

```typescript
const value: components.DelayStepUpsertDto = {
  name: "<value>",
  type: "email",
  controlValues: {},
};
```

### `components.DigestStepUpsertDto`

```typescript
const value: components.DigestStepUpsertDto = {
  name: "<value>",
  type: "digest",
  controlValues: {
    "skip": {
      "and": [
        {
          "==": [
            {
              "var": "payload.tier",
            },
            "pro",
          ],
        },
        {
          "==": [
            {
              "var": "subscriber.data.role",
            },
            "admin",
          ],
        },
        {
          ">": [
            {
              "var": "payload.amount",
            },
            "4",
          ],
        },
      ],
    },
  },
};
```

### `components.ThrottleStepUpsertDto`

```typescript
const value: components.ThrottleStepUpsertDto = {
  name: "<value>",
  type: "digest",
  controlValues: {
    "skip": {
      "and": [
        {
          "==": [
            {
              "var": "payload.tier",
            },
            "pro",
          ],
        },
        {
          "==": [
            {
              "var": "subscriber.data.role",
            },
            "admin",
          ],
        },
        {
          ">": [
            {
              "var": "payload.amount",
            },
            "4",
          ],
        },
      ],
    },
    "type": "fixed",
    "dynamicKey": "payload.timestamp",
    "threshold": 1,
  },
};
```

### `components.CustomStepUpsertDto`

```typescript
const value: components.CustomStepUpsertDto = {
  name: "<value>",
  type: "sms",
};
```

