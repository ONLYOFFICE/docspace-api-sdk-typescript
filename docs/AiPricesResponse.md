# AiPricesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat** | [**Array&lt;AiChatModelPricing&gt;**](AiChatModelPricing.md) |  | [default to undefined]
**embedding** | [**Array&lt;AiEmbeddingModelPricing&gt;**](AiEmbeddingModelPricing.md) |  | [default to undefined]
**webSearch** | [**AiWebSearchPricing**](AiWebSearchPricing.md) |  | [default to undefined]
**currency** | [**CurrencyInfo**](CurrencyInfo.md) |  | [default to undefined]

## Example

```typescript
import { AiPricesResponse } from '@onlyoffice/docspace-api-sdk';

const instance: AiPricesResponse = {
    chat,
    embedding,
    webSearch,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
