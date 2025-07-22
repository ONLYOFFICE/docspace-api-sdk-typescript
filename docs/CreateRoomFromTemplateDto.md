# CreateRoomFromTemplateDto

The parameters for creating a room from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **number** | The template ID from which the room to be created. | [default to undefined]
**title** | **string** | The room title. | [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]
**copyLogo** | **boolean** | Specifies whether to copy a logo or not. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The collection of tags. | [optional] [default to undefined]
**color** | **string** | The color of the room to be created. | [optional] [default to undefined]
**cover** | **string** | The cover of the room to be created. | [optional] [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create a room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the room. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] [default to undefined]
**_private** | **boolean** | Specifies whether the room to be created is private or not. | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomFromTemplateDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateRoomFromTemplateDto = {
    templateId,
    title,
    logo,
    copyLogo,
    tags,
    color,
    cover,
    quota,
    indexing,
    denyDownload,
    lifetime,
    watermark,
    _private,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
