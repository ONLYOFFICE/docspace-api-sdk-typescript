# DocumentBuilderTaskDto

The state of a background document building task: how far it has got, how it ended, and the file it produced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the task. It is derived from the portal, the account and the kind of report, so starting the  same report again while it runs returns this same value, which is how a resumed poll is told from a newly  queued build. | [default to undefined]
**error** | **string** | The message of the failure that stopped the build. It is filled in only for a task that ended in the failed  state, and stays empty while the task runs and after it succeeds. | [default to undefined]
**percentage** | **number** | How far the build has got, from 0 to 100. It advances in a few coarse steps rather than smoothly, so it is a  progress hint and not a measure of the time left; wait on the completion flag instead. | [default to undefined]
**isCompleted** | **boolean** | True once the task has stopped for any reason, a failure and a cancellation included. It is the field to poll  on, and the status tells those outcomes apart. | [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) | How the task ended, or that it has not started yet. Read it together with the completion flag: a stopped task  can be a finished build, a cancelled one or a failure, and only this field separates them. | [default to undefined]
**resultFileId** | **any** |  | [default to undefined]
**resultFileName** | **string** | The name the produced file was saved with, extension included. The name is built from the subject of the  report and is not unique: a second build adds another file instead of replacing the first. | [default to undefined]
**resultFileUrl** | **string** | The address of the produced file in the document editor, relative to the portal root, so prefix it with the  portal address to open it. It stays empty until the build succeeds. | [default to undefined]

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
