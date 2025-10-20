# UploadRequestDto

The request parameters for uploading a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **File** | The file to be uploaded. | [optional] [default to undefined]
**contentType** | [**ContentType**](ContentType.md) |  | [optional] [default to undefined]
**contentDisposition** | [**ContentDisposition**](ContentDisposition.md) |  | [optional] [default to undefined]
**files** | **Array&lt;File&gt;** | The list of files when specified as multipart/form-data. | [optional] [default to undefined]
**createNewIfExist** | **boolean** | Specifies whether to create the new file if it already exists or not. | [optional] [default to undefined]
**storeOriginalFileFlag** | **boolean** | Specifies whether to upload documents in the original formats as well or not. | [optional] [default to undefined]
**keepConvertStatus** | **boolean** | Specifies whether to keep the file converting status or not. | [optional] [default to undefined]
**stream** | **File** | The request input stream. | [optional] [default to undefined]

## Example

```typescript
import { UploadRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UploadRequestDto = {
    file,
    contentType,
    contentDisposition,
    files,
    createNewIfExist,
    storeOriginalFileFlag,
    keepConvertStatus,
    stream,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
