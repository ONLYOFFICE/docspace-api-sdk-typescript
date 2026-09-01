# AiOpenAIChunkChoice

One choice of a streaming completion, carrying the part this chunk adds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **number** | The zero-based position of the choice. This service emits a single choice, so always 0. | [default to undefined]
**delta** | [**AiOpenAIChoiceDelta**](AiOpenAIChoiceDelta.md) | What this chunk adds to the choice. | [default to undefined]
**finish_reason** | [**AiOpenAIFinishReason**](AiOpenAIFinishReason.md) | Why the completion stopped, or null while it is still streaming. | [default to undefined]

## Example

```typescript
import { AiOpenAIChunkChoice } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenAIChunkChoice = {
    index,
    delta,
    finish_reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
