# DuplicateRequestDto

The files and folders to duplicate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list. | [optional] [default to undefined]
**folderIds** | [**Array&lt;DuplicateRequestDtoAllOfFolderIds&gt;**](DuplicateRequestDtoAllOfFolderIds.md) | The folders to duplicate, by id; the copy of each one is created in the folder that already holds it. A number  addresses a folder stored in the portal itself, a string addresses a folder on a connected third-party  account, and both kinds may be sent in one list. | [optional] [default to undefined]
**fileIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The files to duplicate, by id; the copy of each one is created in the folder that already holds it. A number  addresses a file stored in the portal itself, a string addresses a file on a connected third-party account,  and both kinds may be sent in one list. | [optional] [default to undefined]

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
