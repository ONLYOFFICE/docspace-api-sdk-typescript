# NewAiAttachmentsSaveFileRequestInput

A file attachment draft to persist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | Storage path/key of the file. | [default to undefined]
**content** | **string** | File contents. | [default to undefined]
**type** | **number** | File type discriminator. | [default to undefined]
**title** | **string** | Optional display title. | [optional] [default to undefined]

## Example

```typescript
import { NewAiAttachmentsSaveFileRequestInput } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAttachmentsSaveFileRequestInput = {
    path,
    content,
    type,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
