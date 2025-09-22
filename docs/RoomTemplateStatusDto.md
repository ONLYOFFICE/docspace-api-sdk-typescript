# RoomTemplateStatusDto

The room template status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **number** | The room template ID. | [default to undefined]
**progress** | **number** | The progress of the room template creation process. | [default to undefined]
**error** | **string** | The error message that is sent when the room template is not created successfully. | [optional] [default to undefined]
**isCompleted** | **boolean** | Specifies whether the process of creating the room template is completed. | [default to undefined]

## Example

```typescript
import { RoomTemplateStatusDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomTemplateStatusDto = {
    templateId,
    progress,
    error,
    isCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
