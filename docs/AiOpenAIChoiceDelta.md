# AiOpenAIChoiceDelta

The incremental part of one choice - what this chunk adds to the assistant message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | Sent on the first chunk only, always `assistant`. | [optional] [default to undefined]
**content** | **string** | The text this chunk appends. Null when the chunk carries no text. | [optional] [default to undefined]
**tool_calls** | [**Array&lt;AiOpenAIToolCallDelta&gt;**](AiOpenAIToolCallDelta.md) | The tool calls the model requested, emitted in place of text. | [optional] [default to undefined]

## Example

```typescript
import { AiOpenAIChoiceDelta } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenAIChoiceDelta = {
    role,
    content,
    tool_calls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
