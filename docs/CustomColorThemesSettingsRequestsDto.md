# CustomColorThemesSettingsRequestsDto

The request parameters for managing the portal theme settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**theme** | [**CustomColorThemesSettingsItem**](CustomColorThemesSettingsItem.md) |  | [optional] [default to undefined]
**selected** | **number** | Specifies the optional value indicating the selected custom color theme. | [optional] [default to undefined]

## Example

```typescript
import { CustomColorThemesSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomColorThemesSettingsRequestsDto = {
    theme,
    selected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
