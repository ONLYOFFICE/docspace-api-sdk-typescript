# AiOpenAIChatCompletionChunk

One `chat.completion.chunk` of an OpenAI-compatible streaming response. Only the fields this service can populate are emitted - an OpenAI client tolerates the rest as absent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The completion identifier, stable across every chunk of one response. | [default to undefined]
**object** | **string** | Always `chat.completion.chunk`. | [default to undefined]
**created** | **number** | When the completion started, in Unix seconds. | [default to undefined]
**model** | **string** | The model that produced the completion - the resolved profile\'s model. | [default to undefined]
**choices** | [**Array&lt;AiOpenAIChunkChoice&gt;**](AiOpenAIChunkChoice.md) | The choices carried by this chunk. This service emits exactly one. | [default to undefined]

## Example

```typescript
import { AiOpenAIChatCompletionChunk } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenAIChatCompletionChunk = {
    id,
    object,
    created,
    model,
    choices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
