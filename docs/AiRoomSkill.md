# AiRoomSkill

A skill of an Instructions room: the frontmatter of one Markdown skill file. `name` and `description` are what the model is shown; the body is read through `GET api/2.0/ai/context/get-room-skill`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The skill\'s ID, as `GET api/2.0/ai/context/get-room-skill` takes it. | [default to undefined]
**name** | **string** | The skill\'s name, from its frontmatter. | [default to undefined]
**description** | **string** | What the skill is for, from its frontmatter; empty when it declares none. | [default to undefined]

## Example

```typescript
import { AiRoomSkill } from '@onlyoffice/docspace-api-sdk';

const instance: AiRoomSkill = {
    id,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
