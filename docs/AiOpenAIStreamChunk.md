# AiOpenAIStreamChunk

A chunk or the terminal error envelope emitted on a failed stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The completion identifier, stable across every chunk of one response. | [default to undefined]
**object** | **string** | Always `chat.completion.chunk`. | [default to undefined]
**created** | **number** | When the completion started, in Unix seconds. | [default to undefined]
**model** | **string** | The model that produced the completion - the resolved profile\'s model. | [default to undefined]
**choices** | [**Array&lt;AiOpenAIChunkChoice&gt;**](AiOpenAIChunkChoice.md) | The choices carried by this chunk. This service emits exactly one. | [default to undefined]
**error** | [**AiOpenAIStreamErrorError**](AiOpenAIStreamErrorError.md) |  | [default to undefined]

## Example

```typescript
import { AiOpenAIStreamChunk } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenAIStreamChunk = {
    id,
    object,
    created,
    model,
    choices,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
