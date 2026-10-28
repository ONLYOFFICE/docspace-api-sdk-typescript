# AiEmbeddingPriceDto

What an embedding model charges, which has one direction only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **number** | The cost of one million tokens turned into vectors. Embedding produces no completion, so this single  figure is the whole price. | [optional] [default to undefined]

## Example

```typescript
import { AiEmbeddingPriceDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiEmbeddingPriceDto = {
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
