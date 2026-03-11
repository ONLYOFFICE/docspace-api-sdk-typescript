# UploadSessionResponseDtoInteger

The upload session response parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The upload session ID. | [optional] [default to undefined]
**folderId** | **number** | The folder ID where the file is being uploaded. | [optional] [default to undefined]
**version** | **number** | The file version number. | [optional] [default to undefined]
**title** | **string** | The file title. | [optional] [default to undefined]
**providerKey** | **string** | The third-party provider key. | [optional] [default to undefined]
**uploaded** | **boolean** | Specifies whether the file has been uploaded. | [optional] [default to undefined]
**file** | [**FileDtoInteger**](FileDtoInteger.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UploadSessionResponseDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: UploadSessionResponseDtoInteger = {
    id,
    folderId,
    version,
    title,
    providerKey,
    uploaded,
    file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
