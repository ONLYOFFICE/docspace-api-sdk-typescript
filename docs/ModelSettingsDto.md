# ModelSettingsDto

AI model settings information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The model identifier. | [default to undefined]
**alias** | **string** | The display name for the model. | [optional] [default to undefined]
**isEnabled** | **boolean** | Whether the model is enabled for use in chat. | [optional] [default to undefined]
**isRecommended** | **boolean** | Whether the model is recommended (defined in configuration). | [optional] [default to undefined]
**capabilities** | [**AiModelCapabilities**](AiModelCapabilities.md) |  | [default to undefined]

## Example

```typescript
import { ModelSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: ModelSettingsDto = {
    id,
    alias,
    isEnabled,
    isRecommended,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
