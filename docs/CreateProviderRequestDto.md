# CreateProviderRequestDto

Request parameters for creating a new AI provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ProviderType**](ProviderType.md) |  | [optional] [default to undefined]
**title** | **string** | The display title for the AI provider. | [default to undefined]
**url** | **string** | The API endpoint URL for the AI provider. Required for OpenAiCompatible type; optional for other types that have default URLs. | [optional] [default to undefined]
**key** | **string** | The authentication API key for the AI provider. | [default to undefined]
**modelSettings** | [**Set&lt;ModelSettingsItemDto&gt;**](ModelSettingsItemDto.md) | Optional list of model settings to configure atomically with the provider creation. | [optional] [default to undefined]

## Example

```typescript
import { CreateProviderRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateProviderRequestDto = {
    type,
    title,
    url,
    key,
    modelSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
