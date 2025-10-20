# BatchRequestDto

The request parameters for copying/moving files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;BatchRequestDtoAllOfFolderIds&gt;**](BatchRequestDtoAllOfFolderIds.md) | The list of folder IDs to be copied/moved. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BatchRequestDtoAllOfFileIds&gt;**](BatchRequestDtoAllOfFileIds.md) | The list of file IDs to be copied/moved. | [optional] [default to undefined]
**destFolderId** | [**BatchRequestDtoAllOfDestFolderId**](BatchRequestDtoAllOfDestFolderId.md) |  | [optional] [default to undefined]
**conflictResolveType** | [**FileConflictResolveType**](FileConflictResolveType.md) |  | [optional] [default to undefined]
**deleteAfter** | **boolean** | Specifies whether to delete the source files/folders after they are moved or copied to the destination folder. | [optional] [default to undefined]
**content** | **boolean** | Specifies whether to copy or move the folder content or not. | [optional] [default to undefined]
**toFillOut** | **boolean** | Specifies whether the file is copied for filling out | [optional] [default to undefined]

## Example

```typescript
import { BatchRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: BatchRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
    destFolderId,
    conflictResolveType,
    deleteAfter,
    content,
    toFillOut,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
