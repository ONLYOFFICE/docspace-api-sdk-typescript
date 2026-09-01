# AiEmbeddingModelPricing

The pricing of a single embedding model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the model, as the provider expects it on the wire. | [default to undefined]
**alias** | **string** | The display name of the model. | [optional] [default to undefined]
**ownedBy** | **string** | The owner of the model, as reported by the provider. | [optional] [default to undefined]
**provider** | **string** | The provider that serves the model. | [optional] [default to undefined]
**link** | **string** | The link to the pricing page of the model. | [optional] [default to undefined]
**price** | [**AiEmbeddingPrice**](AiEmbeddingPrice.md) | The price of an embedding model, per token. | [default to undefined]

## Example

```typescript
import { AiEmbeddingModelPricing } from '@onlyoffice/docspace-api-sdk';

const instance: AiEmbeddingModelPricing = {
    id,
    alias,
    ownedBy,
    provider,
    link,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
