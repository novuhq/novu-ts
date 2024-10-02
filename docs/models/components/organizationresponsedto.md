# OrganizationResponseDto

## Example Usage

```typescript
import { OrganizationResponseDto } from "@novu/api/models/components";

let value: OrganizationResponseDto = {
  branding: {
    color: "purple",
    contentBackground: "<value>",
    fontColor: "<value>",
    logo: "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `branding`                                                                                               | [components.OrganizationBrandingResponseDto](../../models/components/organizationbrandingresponsedto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `logo`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `partnerConfigurations`                                                                                  | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |