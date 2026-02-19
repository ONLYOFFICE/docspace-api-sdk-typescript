# CreateAgentRequestDto

Request to create a new AI agent room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The room name. | [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create a room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the room. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags. | [optional] [default to undefined]
**color** | **string** | The room color. | [optional] [default to undefined]
**cover** | **string** | The room cover. | [optional] [default to undefined]
**_private** | **boolean** | Specifies whether the room to be created is private or not. | [optional] [default to undefined]
**share** | [**Array&lt;FileShareParams&gt;**](FileShareParams.md) | The collection of sharing parameters. | [optional] [default to undefined]
**chatSettings** | [**ChatSettings**](ChatSettings.md) |  | [default to undefined]
**attachDefaultTools** | **boolean** | Specifies whether to attach default tools to the agent or not. | [optional] [default to undefined]

## Example

```typescript
import { CreateAgentRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateAgentRequestDto = {
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
    _private,
    share,
    chatSettings,
    attachDefaultTools,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
