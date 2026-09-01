# AiPricesResponse

The AI price list: per-model pricing for every model kind, in a single currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat** | [**Array&lt;AiChatModelPricing&gt;**](AiChatModelPricing.md) | The pricing of every available chat model. | [default to undefined]
**embedding** | [**Array&lt;AiEmbeddingModelPricing&gt;**](AiEmbeddingModelPricing.md) | The pricing of every available embedding model. | [default to undefined]
**image** | [**Array&lt;AiImageModelPricing&gt;**](AiImageModelPricing.md) | The pricing of every available image model. | [default to undefined]
**search** | [**Array&lt;AiWebSearchPricing&gt;**](AiWebSearchPricing.md) | The pricing of every available web search provider. | [default to undefined]
**currency** | [**CurrencyInfo**](CurrencyInfo.md) | The currency the AI prices are quoted in. | [default to undefined]

## Example

```typescript
import { AiPricesResponse } from '@onlyoffice/docspace-api-sdk';

const instance: AiPricesResponse = {
    chat,
    embedding,
    image,
    search,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
