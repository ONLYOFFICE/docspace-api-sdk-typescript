# AiProviderDto

AI provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | AI provider identifier. | [optional] [default to undefined]
**title** | **string** | AI provider display title. | [default to undefined]
**type** | [**ProviderType**](ProviderType.md) |  | [optional] [default to undefined]
**url** | **string** | API endpoint URL for the AI provider. | [optional] [default to undefined]
**createdOn** | [**ApiDateTime**](ApiDateTime.md) |  | [default to undefined]
**modifiedOn** | [**ApiDateTime**](ApiDateTime.md) |  | [default to undefined]
**needReset** | **boolean** | Indicates whether the provider\'s API key needs to be reset. | [optional] [default to undefined]
**isDefault** | **boolean** | Indicates whether this provider is the default provider for the tenant. | [optional] [default to undefined]

## Example

```typescript
import { AiProviderDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiProviderDto = {
    id,
    title,
    type,
    url,
    createdOn,
    modifiedOn,
    needReset,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
