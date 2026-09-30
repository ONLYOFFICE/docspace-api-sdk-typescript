# DefaultTemplateSettingsResetRequestDto

The extension whose custom blank is dropped in favour of the built-in one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileExtension** | **string** | The extension whose custom blank is dropped, written in lower case with the leading dot. Only the extensions  the portal\'s built-in template set covers are accepted, and `GET api/2.0/files/settings/defaulttemplate`  returns exactly that list; an extension outside it leaves the settings unchanged instead of failing. | [default to undefined]

## Example

```typescript
import { DefaultTemplateSettingsResetRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultTemplateSettingsResetRequestDto = {
    fileExtension,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
