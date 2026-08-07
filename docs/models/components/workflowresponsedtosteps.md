# WorkflowResponseDtoSteps


## Supported Types

### `components.InAppStepResponseDto`

```typescript
const value: components.InAppStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "in_app",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.EmailStepResponseDto`

```typescript
const value: components.EmailStepResponseDto = {
  controls: {
    values: {
      skip: {
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
      subject: "<value>",
    },
  },
  controlValues: {
    skip: {
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
    subject: "<value>",
  },
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "email",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.SmsStepResponseDto`

```typescript
const value: components.SmsStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "sms",
  origin: "novu-cloud-v1",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.PushStepResponseDto`

```typescript
const value: components.PushStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "push",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.ChatStepResponseDto`

```typescript
const value: components.ChatStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "chat",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.DelayStepResponseDto`

```typescript
const value: components.DelayStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "delay",
  origin: "external",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.DigestStepResponseDto`

```typescript
const value: components.DigestStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {

  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "digest",
  origin: "external",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.CustomStepResponseDto`

```typescript
const value: components.CustomStepResponseDto = {
  controls: {
    values: {},
  },
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {

  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "custom",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.ThrottleStepResponseDto`

```typescript
const value: components.ThrottleStepResponseDto = {
  controls: {
    values: {
      skip: {
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
      dynamicKey: "payload.timestamp",
    },
  },
  controlValues: {
    skip: {
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
    dynamicKey: "payload.timestamp",
  },
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "throttle",
  origin: "external",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.HttpRequestStepResponseDto`

```typescript
const value: components.HttpRequestStepResponseDto = {
  controls: {
    values: {
      method: "PATCH",
      url: "https://frightened-pillow.name",
    },
  },
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {

  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "http_request",
  origin: "novu-cloud-v1",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

### `components.ToolStepResponseDto`

```typescript
const value: components.ToolStepResponseDto = {
  controls: {
    values: {
      skip: {
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
  },
  controlValues: {
    skip: {
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
  providerOverrides: {
    "slack": {
      "text": "{{"{{"}}payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{"{{"}}payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{"{{"}}payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "tool",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

