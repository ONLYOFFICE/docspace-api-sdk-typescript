# ExternalDbSyncTaskDto

The external DB synchronization task parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The task ID. | [default to undefined]
**error** | **string** | The error message if the synchronization failed. | [optional] [default to undefined]
**percentage** | **number** | The progress percentage of the synchronization. | [default to undefined]
**isCompleted** | **boolean** | Specifies whether the synchronization is completed or not. | [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) | The status of the synchronization task. | [default to undefined]
**forms** | [**Array&lt;ExternalDbSyncFormResultDto&gt;**](ExternalDbSyncFormResultDto.md) | The synchronization results for all original forms in the room. | [default to undefined]

## Example

```typescript
import { ExternalDbSyncTaskDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalDbSyncTaskDto = {
    id,
    error,
    percentage,
    isCompleted,
    status,
    forms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
