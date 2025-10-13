# DocumentBuilderTaskDto

The document builder task parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The document builder ID. | [default to undefined]
**error** | **string** | The error message occured while the document building process. | [default to undefined]
**percentage** | **number** | The percentage of the progress of the document building process. | [default to undefined]
**isCompleted** | **boolean** | Specifies whether the document building process is completed or not. | [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) |  | [default to undefined]
**resultFileId** | **any** | The result file ID. | [default to undefined]
**resultFileName** | **string** | The result file name. | [default to undefined]
**resultFileUrl** | **string** | The result file URL. | [default to undefined]

## Example

```typescript
import { DocumentBuilderTaskDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocumentBuilderTaskDto = {
    id,
    error,
    percentage,
    isCompleted,
    status,
    resultFileId,
    resultFileName,
    resultFileUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
