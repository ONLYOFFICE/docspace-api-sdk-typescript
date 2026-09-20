# FileUploadResultDto

The file upload result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the upload succeeded. This is the field to check: the operation answers 200 even when it fails, and  reports the reason in `message` instead of in the status code. | [optional] [default to undefined]
**data** | **any** |  | [optional] [default to undefined]
**message** | **string** | The reason the upload failed, ready to be shown to a person. It is empty for a successful upload, and it is  the only place where a failure is described, because the status code stays 200. | [optional] [default to undefined]

## Example

```typescript
import { FileUploadResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: FileUploadResultDto = {
    success,
    data,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
