# AiSkillsRoomDto

An Instructions room with its skills.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | ID of the room. | [default to undefined]
**title** | **string** | Room title. | [default to undefined]
**logo** | [**LogoDto**](LogoDto.md) | Room logo. | [default to undefined]
**skills** | [**Array&lt;AiSkillDto&gt;**](AiSkillDto.md) | Skills of the room, sorted by file title. | [default to undefined]

## Example

```typescript
import { AiSkillsRoomDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiSkillsRoomDto = {
    id,
    title,
    logo,
    skills,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
