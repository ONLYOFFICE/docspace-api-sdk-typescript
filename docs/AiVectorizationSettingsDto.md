# AiVectorizationSettingsDto

The vectorization settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AiEmbeddingProviderType**](AiEmbeddingProviderType.md) | The type of embedding provider configured for document vectorization. | [optional] [default to undefined]
**needReset** | **boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [default to undefined]

## Example

```typescript
import { AiVectorizationSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiVectorizationSettingsDto = {
    type,
    needReset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
