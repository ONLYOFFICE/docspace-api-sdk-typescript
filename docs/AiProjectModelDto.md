# AiProjectModelDto

The AI model selected for an AI project\'s chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **string** | ID of the AI model profile selected for the project, as listed by `GET api/2.0/ai/profiles/list`. Null when no model has been selected for the project, or the selected profile no longer exists. | [optional] [default to undefined]

## Example

```typescript
import { AiProjectModelDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiProjectModelDto = {
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
