# AiSkillDto

A skill of an Instructions room: a Markdown file in the room root with a YAML frontmatter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the skill file. | [default to undefined]
**name** | **string** | Skill name from the frontmatter. | [default to undefined]
**description** | **string** | Skill description from the frontmatter. | [default to undefined]

## Example

```typescript
import { AiSkillDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiSkillDto = {
    id,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
