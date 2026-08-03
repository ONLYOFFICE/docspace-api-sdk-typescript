# NewAiAiSettingsDto

The AI module settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vectorizationEnabled** | **boolean** | Indicates whether document vectorization is enabled. | [optional] [default to undefined]
**vectorizationNeedReset** | **boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [default to undefined]
**aiReady** | **boolean** | Indicates whether the AI subsystem is fully configured and operational. | [optional] [default to undefined]
**embeddingModel** | **string** | The name of the embedding model used for document vectorization. | [default to undefined]
**systemAiEnabled** | **boolean** | Indicates whether the system-level AI provider is enabled. | [optional] [default to undefined]
**recommendedModelForForms** | **string** | The identifier of the model recommended for form generation. | [optional] [default to undefined]

## Example

```typescript
import { NewAiAiSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAiSettingsDto = {
    vectorizationEnabled,
    vectorizationNeedReset,
    aiReady,
    embeddingModel,
    systemAiEnabled,
    recommendedModelForForms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
