# DefaultProviderDto

Default AI provider information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **number** | AI provider identifier. | [optional] [default to undefined]
**defaultModel** | **string** | Default model identifier used with this provider. | [default to undefined]
**providerTitle** | **string** | AI provider title. | [optional] [default to undefined]

## Example

```typescript
import { DefaultProviderDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultProviderDto = {
    providerId,
    defaultModel,
    providerTitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
