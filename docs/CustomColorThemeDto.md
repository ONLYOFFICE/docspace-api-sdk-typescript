# CustomColorThemeDto

One colour theme of the portal interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The theme id; the built-in themes have the lowest ids. | [optional] [default to undefined]
**name** | **string** | The theme name; empty for a custom theme. | [optional] [default to undefined]
**main** | [**ColorThemeColorsDto**](ColorThemeColorsDto.md) | The accent and button colours of the interface. | [optional] [default to undefined]
**text** | [**ColorThemeColorsDto**](ColorThemeColorsDto.md) | The colours of the text shown on the accent and on the buttons. | [optional] [default to undefined]

## Example

```typescript
import { CustomColorThemeDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomColorThemeDto = {
    id,
    name,
    main,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
