# AiAttachmentsSaveImageRequestInput

An image attachment draft to persist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Image name. | [default to undefined]
**base64** | **string** | Full `data:image/...;base64,…` data URL. | [default to undefined]
**title** | **string** | Optional display title. | [optional] [default to undefined]

## Example

```typescript
import { AiAttachmentsSaveImageRequestInput } from '@onlyoffice/docspace-api-sdk';

const instance: AiAttachmentsSaveImageRequestInput = {
    name,
    base64,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
