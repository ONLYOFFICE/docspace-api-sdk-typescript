# CustomColorThemesSettingsDto

The custom color themes settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**themes** | [**Array&lt;CustomColorThemesSettingsItem&gt;**](CustomColorThemesSettingsItem.md) | The list of the custom color themes. | [optional] [default to undefined]
**selected** | **number** | Specifies whether the custom color theme is selected. | [optional] [default to undefined]
**limit** | **number** | The maximum number of the custom color themes. | [optional] [default to undefined]

## Example

```typescript
import { CustomColorThemesSettingsDto } from '@onlyoffice/docspace-api-typescript';

const instance: CustomColorThemesSettingsDto = {
    themes,
    selected,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
