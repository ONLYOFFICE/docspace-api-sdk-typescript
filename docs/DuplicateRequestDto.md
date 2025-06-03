# DuplicateRequestDto

The duplicate request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs. | [optional] [default to undefined]

## Example

```typescript
import { DuplicateRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: DuplicateRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
