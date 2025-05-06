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
**quota** | **number** | Room quota | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomFromTemplateDto } from '@onlyoffice/docspace-api-typescript';

const instance: CreateRoomFromTemplateDto = {
    templateId,
    title,
    logo,
    copyLogo,
    tags,
    color,
    cover,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
