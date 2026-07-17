# DefaultTemplateItemDto

Default template setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectedFile** | **number** | File id to use as a default template | [optional] [default to undefined]
**fileExtension** | **string** | Extension of a default template | [default to undefined]
**fileTitle** | **string** | Title of a default template | [optional] [default to undefined]
**lastModified** | **string** | Last modified date of a default template | [optional] [default to undefined]
**fileSize** | **number** | Filesize (in bytes) of a default template | [optional] [default to undefined]
**viewUrl** | **string** | View url of a default template | [optional] [default to undefined]

## Example

```typescript
import { DefaultTemplateItemDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultTemplateItemDto = {
    selectedFile,
    fileExtension,
    fileTitle,
    lastModified,
    fileSize,
    viewUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
