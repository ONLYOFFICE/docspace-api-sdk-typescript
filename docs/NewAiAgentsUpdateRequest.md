# NewAiAgentsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **string** | Profile id to rebind (optional). | [optional] [default to undefined]
**chatSettings** | **object** | Chat settings (`ChatSettings`); requires a valid provider/model. | [optional] [default to undefined]
**sendFormToExternalDB** | **boolean** | Whether form results are sent to an external DB. | [optional] [default to undefined]
**saveFormAsXLSX** | **boolean** | Whether forms are saved as XLSX. | [optional] [default to undefined]
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
import { NewAiAgentsUpdateRequest } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAgentsUpdateRequest = {
    profileId,
    chatSettings,
    sendFormToExternalDB,
    saveFormAsXLSX,
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
