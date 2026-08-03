# AiTProvider

Minimal provider connection configuration. Used to connect to a provider API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AiProviderType**](AiProviderType.md) |  | [default to undefined]
**name** | **string** | User-defined display name for this provider connection. | [default to undefined]
**key** | **string** | API key or token. Optional for local providers (Ollama, LM Studio). | [optional] [default to undefined]
**baseUrl** | **string** | Base URL of the provider API. | [default to undefined]

## Example

```typescript
import { AiTProvider } from '@onlyoffice/docspace-api-sdk';

const instance: AiTProvider = {
    type,
    name,
    key,
    baseUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
