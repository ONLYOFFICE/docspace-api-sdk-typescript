# ProviderDto

The provider information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The provider name. | [optional] [default to undefined]
**key** | **string** | The provider key. | [optional] [default to undefined]
**connected** | **boolean** | Specifies whether the provider is connected. | [optional] [default to undefined]
**oauth** | **boolean** | Specifies if the provider is OAuth. | [optional] [default to undefined]
**redirectUrl** | **string** | The provider redirect URL. | [optional] [default to undefined]
**requiredConnectionUrl** | **boolean** | The required connection URL flag. | [optional] [default to undefined]
**clientId** | **string** | The provider OAuth client ID. | [optional] [default to undefined]

## Example

```typescript
import { ProviderDto } from '@onlyoffice/docspace-api-sdk';

const instance: ProviderDto = {
    name,
    key,
    connected,
    oauth,
    redirectUrl,
    requiredConnectionUrl,
    clientId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
