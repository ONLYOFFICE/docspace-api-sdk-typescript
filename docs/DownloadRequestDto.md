# DownloadRequestDto

The request parameters for downloading files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to be downloaded. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to be downloaded. | [optional] [default to undefined]
**fileConvertIds** | [**Array&lt;DownloadRequestItemDto&gt;**](DownloadRequestItemDto.md) | The list of file IDs which will be converted. | [optional] [default to undefined]

## Example

```typescript
import { DownloadRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: DownloadRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
    fileConvertIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
