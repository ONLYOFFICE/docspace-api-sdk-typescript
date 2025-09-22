# DeleteBatchRequestDto

The request parameters for deleting files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;DeleteBatchRequestDtoAllOfFolderIds&gt;**](DeleteBatchRequestDtoAllOfFolderIds.md) | The list of folder IDs to be deleted. | [optional] [default to undefined]
**fileIds** | [**Array&lt;DeleteBatchRequestDtoAllOfFileIds&gt;**](DeleteBatchRequestDtoAllOfFileIds.md) | The list of file IDs to be deleted. | [optional] [default to undefined]
**deleteAfter** | **boolean** | Specifies whether to delete a file after the editing session is finished or not | [optional] [default to undefined]
**immediately** | **boolean** | Specifies whether to move a file to the \\Trash\\ folder or delete it immediately. | [optional] [default to undefined]

## Example

```typescript
import { DeleteBatchRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DeleteBatchRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
    deleteAfter,
    immediately,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
