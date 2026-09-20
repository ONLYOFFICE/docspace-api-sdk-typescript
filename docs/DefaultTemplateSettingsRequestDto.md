# DefaultTemplateSettingsRequestDto

The document to use as the blank the portal creates for one extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectedFile** | [**DefaultTemplateSettingsRequestDtoSelectedFile**](DefaultTemplateSettingsRequestDtoSelectedFile.md) |  | [default to undefined]
**fileExtension** | **string** | The extension the blank is set for, written in lower case with the leading dot. Only the extensions the  portal\'s built-in template set covers are accepted, and `GET api/2.0/files/settings/defaulttemplate` returns  exactly that list; an extension outside it leaves the settings unchanged instead of failing. | [default to undefined]

## Example

```typescript
import { DefaultTemplateSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultTemplateSettingsRequestDto = {
    selectedFile,
    fileExtension,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
