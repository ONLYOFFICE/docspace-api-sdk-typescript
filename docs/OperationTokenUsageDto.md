# OperationTokenUsageDto

Tokens an AI operation consumed, as recorded in the operation metadata. A kind the provider did not report is `0`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalTokens** | **number** | All tokens of the request: prompt plus completion. | [optional] [default to undefined]
**promptTokens** | **number** | Tokens sent to the model, cached ones included. | [optional] [default to undefined]
**completionTokens** | **number** | Tokens the model generated, reasoning ones included. | [optional] [default to undefined]
**cachedTokens** | **number** | Part of the prompt tokens read from the provider cache. | [optional] [default to undefined]
**cacheWriteTokens** | **number** | Part of the prompt tokens written to the provider cache. | [optional] [default to undefined]
**reasoningTokens** | **number** | Part of the completion tokens the model spent on reasoning. | [optional] [default to undefined]
**imageTokens** | **number** | Tokens spent on images. | [optional] [default to undefined]

## Example

```typescript
import { OperationTokenUsageDto } from '@onlyoffice/docspace-api-sdk';

const instance: OperationTokenUsageDto = {
    totalTokens,
    promptTokens,
    completionTokens,
    cachedTokens,
    cacheWriteTokens,
    reasoningTokens,
    imageTokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
