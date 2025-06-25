# DeleteVersionBatchRequestDto

The request parameters for deleting file versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | Specifies whether to delete a file after the editing session is finished or not. | [optional] [default to undefined]
**fileId** | **number** | The file ID to delete. | [default to undefined]
**versions** | **Array&lt;number&gt;** | The collection of file versions to be deleted. | [default to undefined]

## Example

```typescript
import { DeleteVersionBatchRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: DeleteVersionBatchRequestDto = {
    deleteAfter,
    fileId,
    versions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
