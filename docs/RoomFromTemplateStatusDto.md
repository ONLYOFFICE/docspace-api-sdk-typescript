# RoomFromTemplateStatusDto

The progress of the job that creates a room out of a room template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomId** | **number** | The room the job is creating. It is meaningful once the room exists, which is guaranteed only after  `isCompleted` turns true and `error` stays empty; until then it carries no usable id. | [default to undefined]
**progress** | **number** | How far the job has got. The value climbs while the contents of the template are being copied into the new  room and reaches its maximum at the very end. | [default to undefined]
**error** | **string** | Why the job stopped. It is empty while the job runs and after a successful one, and a filled value means that  no room was created, so the request has to be repeated rather than waited out. | [default to undefined]
**isCompleted** | **boolean** | Whether the job has ended. It is set both after a successful creation and after a failure, so it is the flag  to poll for, while `error` is what separates the two outcomes. | [default to undefined]

## Example

```typescript
import { RoomFromTemplateStatusDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomFromTemplateStatusDto = {
    roomId,
    progress,
    error,
    isCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
