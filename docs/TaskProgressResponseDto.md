# TaskProgressResponseDto

The task progress response parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the queued job. It identifies this run of the job and changes every time the job is started again. | [default to undefined]
**error** | **string** | The message of the error that stopped the job. It is empty while the job is running and after a job that  succeeded, and it is the only place where the reason for a failure is reported. | [optional] [default to undefined]
**percentage** | **number** | The share of the job that is already done, from 0 to 100. | [default to undefined]
**isCompleted** | **boolean** | Specifies whether the job has stopped running. This is the field to poll: true means the job will not change  any more, whether it succeeded, failed or was cancelled, and `status` tells which of the three it is. | [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) | The state of the job: `Created` while it waits in the queue, `Running` while it works, `Completed` once it has  finished on its own, `Canceled` after a terminate operation, and `Failted` when it stopped on an error, in  which case `error` carries the reason. | [default to undefined]

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
