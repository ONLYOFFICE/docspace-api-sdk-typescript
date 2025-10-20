# DuplicateRequestDto

The request parameters for duplicating files and fodlers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;DuplicateRequestDtoAllOfFolderIds&gt;**](DuplicateRequestDtoAllOfFolderIds.md) | The list of folder IDs. | [optional] [default to undefined]
**fileIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of file IDs. | [optional] [default to undefined]

## Example

```typescript
import { DuplicateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DuplicateRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
