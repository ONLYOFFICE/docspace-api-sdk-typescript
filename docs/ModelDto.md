# ModelDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **number** | The unique identifier of the AI provider that offers this model. | [optional] [default to undefined]
**providerTitle** | **string** | The human-readable display name of the AI provider (e.g., OpenAI, Anthropic). | [default to undefined]
**modelId** | **string** | The model identifier as recognized by the AI provider (e.g., gpt-4o, claude-sonnet-4-20250514). | [default to undefined]

## Example

```typescript
import { ModelDto } from '@onlyoffice/docspace-api-sdk';

const instance: ModelDto = {
    providerId,
    providerTitle,
    modelId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
