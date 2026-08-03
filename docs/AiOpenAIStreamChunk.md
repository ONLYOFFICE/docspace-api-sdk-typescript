# AiOpenAIStreamChunk

A chunk or the terminal error envelope emitted on a failed stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**created** | **number** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**choices** | [**Array&lt;AiOpenAIChunkChoice&gt;**](AiOpenAIChunkChoice.md) |  | [default to undefined]
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
