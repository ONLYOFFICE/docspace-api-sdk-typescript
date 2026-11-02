# UpdateAiProjectModelRequest

The AI model to set for the AI project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **string** | ID of the AI model profile that answers in the project\'s chat; take it from the `id` of a profile that `GET api/2.0/ai/profiles/list` returns. | [default to undefined]

## Example

```typescript
import { UpdateAiProjectModelRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateAiProjectModelRequest = {
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
