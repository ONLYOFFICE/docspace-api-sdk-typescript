# RoomFromTemplateStatusDto

The progress parameters of creating a room from the template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomId** | **number** | The room ID. | [default to undefined]
**progress** | **number** | The progress of creating a room from the template. | [default to undefined]
**error** | **string** | The error message that is sent when a room is not created successfully from the template. | [default to undefined]
**isCompleted** | **boolean** | Specifies whether the process of creating a room from the template is completed. | [default to undefined]

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
