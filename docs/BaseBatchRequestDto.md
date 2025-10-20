# BaseBatchRequestDto

The base batch request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **boolean** | Specifies whether to return only the current operation | [optional] [default to undefined]
**folderIds** | [**Array&lt;BaseBatchRequestDtoAllOfFolderIds&gt;**](BaseBatchRequestDtoAllOfFolderIds.md) | The list of folder IDs of the base batch request. | [optional] [default to undefined]
**fileIds** | [**Array&lt;BaseBatchRequestDtoAllOfFileIds&gt;**](BaseBatchRequestDtoAllOfFileIds.md) | The list of file IDs of the base batch request. | [optional] [default to undefined]

## Example

```typescript
import { BaseBatchRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: BaseBatchRequestDto = {
    returnSingleOperation,
    folderIds,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
