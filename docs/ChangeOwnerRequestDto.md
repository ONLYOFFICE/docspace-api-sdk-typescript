# ChangeOwnerRequestDto

The request parameters for changing the file owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to change the owner. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to change the owner. | [optional] [default to undefined]
**userId** | **string** | The new file owner ID. | [default to undefined]

## Example

```typescript
import { ChangeOwnerRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: ChangeOwnerRequestDto = {
    folderIds,
    fileIds,
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
