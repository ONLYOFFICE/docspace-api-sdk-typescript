# ModelSettingsItemDto

A single model settings entry within a provider create or update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modelId** | **string** | The model identifier. | [default to undefined]
**isEnabled** | **boolean** | Whether the model is enabled for use in chat. | [optional] [default to undefined]
**alias** | **string** | The display name for the model. Only applies to non-recommended models. | [optional] [default to undefined]
**capabilities** | [**AiModelCapabilities**](AiModelCapabilities.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ModelSettingsItemDto } from '@onlyoffice/docspace-api-sdk';

const instance: ModelSettingsItemDto = {
    modelId,
    isEnabled,
    alias,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
