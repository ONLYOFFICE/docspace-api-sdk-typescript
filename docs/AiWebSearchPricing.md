# AiWebSearchPricing

The pricing of a single web search provider, per request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the web search provider. | [optional] [default to undefined]
**provider** | **string** | The provider that serves the web search requests. | [optional] [default to undefined]
**price** | **number** | The price of a single web search request. | [optional] [default to undefined]
**link** | **string** | The link to the pricing page of the provider. | [optional] [default to undefined]

## Example

```typescript
import { AiWebSearchPricing } from '@onlyoffice/docspace-api-sdk';

const instance: AiWebSearchPricing = {
    id,
    provider,
    price,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
