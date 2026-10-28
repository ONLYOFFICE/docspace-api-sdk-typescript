# CustomColorThemeRequestDto

A colour theme to store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The id of the custom theme to replace, or an id no stored theme has to add a new one. | [optional] [default to undefined]
**name** | **string** | Accepted for compatibility with earlier clients and not read: a custom theme is always stored without a name. | [optional] [default to undefined]
**main** | [**ColorThemeColorsRequestDto**](ColorThemeColorsRequestDto.md) | The accent and button colours of the interface. Left out, a stored theme keeps its own. | [optional] [default to undefined]
**text** | [**ColorThemeColorsRequestDto**](ColorThemeColorsRequestDto.md) | The colours of the text shown on the accent and on the buttons. Left out, a stored theme keeps its own. | [optional] [default to undefined]

## Example

```typescript
import { CustomColorThemeRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomColorThemeRequestDto = {
    id,
    name,
    main,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
