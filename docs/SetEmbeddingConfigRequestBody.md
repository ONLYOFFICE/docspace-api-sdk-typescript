# SetEmbeddingConfigRequestBody

Parameters for configuring the embedding provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EmbeddingProviderType**](EmbeddingProviderType.md) |  | [optional] [default to undefined]
**key** | **string** | The API key for the selected embedding provider. Pass null to keep the existing key unchanged. | [optional] [default to undefined]

## Example

```typescript
import { SetEmbeddingConfigRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: SetEmbeddingConfigRequestBody = {
    type,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
