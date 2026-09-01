# AiAgentsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **string** | Profile id bound to the agent. | [default to undefined]
**prompt** | **string** | Agent system prompt; stored as the room\'s `chatSettings.prompt`. | [default to undefined]
**_private** | **boolean** | Whether the agent room is private. | [optional] [default to undefined]
**share** | **Array&lt;object&gt;** | Initial share entries (`FileShareParams`). | [optional] [default to undefined]
**attachDefaultTools** | **boolean** | Whether to attach the default DocSpace MCP tool server. | [optional] [default to undefined]
**title** | **string** | Agent (room) title. | [optional] [default to undefined]
**quota** | **number** | Room quota in bytes. | [optional] [default to undefined]
**indexing** | **boolean** | Whether room content is indexed for search. | [optional] [default to undefined]
**denyDownload** | **boolean** | Whether downloading room content is denied. | [optional] [default to undefined]
**lifetime** | **object** | Room data lifetime policy (`RoomDataLifetimeDto`). | [optional] [default to undefined]
**watermark** | **object** | Watermark settings (`WatermarkRequestDto`). | [optional] [default to undefined]
**logo** | **object** | Room logo (`LogoRequest`). | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Room tags. | [optional] [default to undefined]
**color** | **string** | Room accent color. | [optional] [default to undefined]
**cover** | **string** | Room cover image id. | [optional] [default to undefined]

## Example

```typescript
import { AiAgentsCreateRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAgentsCreateRequest = {
    profileId,
    prompt,
    _private,
    share,
    attachDefaultTools,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
