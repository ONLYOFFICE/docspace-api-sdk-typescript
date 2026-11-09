# AiSkillsGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destId** | [**AiSkillsGenerateRequestDestId**](AiSkillsGenerateRequestDestId.md) |  | [default to undefined]
**title** | **string** | The skill\'s title, at most 64 characters; its kebab-case form is the skill\'s name. | [default to undefined]
**description** | **string** | What the skill should do, at most 2000 characters; a specification for the model. | [default to undefined]

## Example

```typescript
import { AiSkillsGenerateRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiSkillsGenerateRequest = {
    destId,
    title,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
