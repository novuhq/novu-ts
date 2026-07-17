# AgentSkillInputDto

## Example Usage

```typescript
import { AgentSkillInputDto } from "@novu/api/models/components";

let value: AgentSkillInputDto = {
  type: "custom",
  skillId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [components.AgentSkillInputDtoType](../../models/components/agentskillinputdtotype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `skillId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Skill identifier, e.g. "xlsx" or "skill_01XJ5..."                                      |
| `version`                                                                              | [components.Version](../../models/components/version.md)                               | :heavy_minus_sign:                                                                     | Version to pin. Omit for latest.                                                       |