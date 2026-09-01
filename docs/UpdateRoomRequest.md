# UpdateRoomRequest

The request parameters for updating a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The room title. | [optional] [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create a third-party room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the third-party room. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) | The room data lifetime information. | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) | The watermark settings. | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) | The room logo. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags. | [optional] [default to undefined]
**color** | **string** | The room color, as a six-digit hexadecimal value without a leading \'#\'. | [optional] [default to undefined]
**cover** | **string** | The room cover. | [optional] [default to undefined]
**chatSettings** | [**ChatSettings**](ChatSettings.md) | The chat settings. | [optional] [default to undefined]
**sendFormToExternalDB** | **boolean** | Specifies whether to send form data to external database. | [optional] [default to undefined]
**saveFormAsXLSX** | **boolean** | Specifies whether to save form data as XLSX file. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateRoomRequest = {
    title,
    quota,
    indexing,
    denyDownload,
    lifetime,
    watermark,
    logo,
    tags,
    color,
    cover,
    chatSettings,
    sendFormToExternalDB,
    saveFormAsXLSX,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
