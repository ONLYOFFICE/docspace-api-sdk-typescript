# TaskProgressResponseDto

The task progress response parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The task progress ID. | [optional] [default to undefined]
**error** | **string** | The task progress error message. | [optional] [default to undefined]
**percentage** | **number** | The percentage of the task progress. | [optional] [default to undefined]
**isCompleted** | **boolean** | Specifies if the task peogress is completed or not. | [optional] [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TaskProgressResponseDto } from '@onlyoffice/docspace-api-sdk';

const instance: TaskProgressResponseDto = {
    id,
    error,
    percentage,
    isCompleted,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
