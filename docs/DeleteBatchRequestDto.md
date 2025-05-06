# DeleteBatchRequestDto

The request parameters for deleting files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to be deleted. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to be deleted. | [optional] [default to undefined]
**deleteAfter** | **boolean** | Specifies whether to delete a file after the editing session is finished or not | [optional] [default to undefined]
**immediately** | **boolean** | Specifies whether to move a file to the \\\&quot;Trash\\\&quot; folder or delete it immediately. | [optional] [default to undefined]

## Example

```typescript
import { DeleteBatchRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: DeleteBatchRequestDto = {
    folderIds,
    fileIds,
    deleteAfter,
    immediately,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
