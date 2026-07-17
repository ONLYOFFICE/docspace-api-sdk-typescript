# PreviewProviderModelsRequestDto

Request parameters for previewing models available from a provider before saving it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ProviderType**](ProviderType.md) |  | [optional] [default to undefined]
**url** | **string** | The API endpoint URL. Required for OpenAiCompatible type; optional for other types that have default URLs. | [optional] [default to undefined]
**key** | **string** | The authentication API key for the AI provider. | [default to undefined]

## Example

```typescript
import { PreviewProviderModelsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: PreviewProviderModelsRequestDto = {
    type,
    url,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
