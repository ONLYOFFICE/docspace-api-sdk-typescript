# AiOpenAIToolCallDelta

The incremental part of one tool call the model requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **number** | The zero-based position of the tool call within the message. | [default to undefined]
**id** | **string** | The tool call identifier, quoted back when its result is submitted. | [optional] [default to undefined]
**type** | **string** | Always `function` - the only tool kind the API defines. | [optional] [default to undefined]
**_function** | [**AiOpenAIToolCallDeltaFunction**](AiOpenAIToolCallDeltaFunction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiOpenAIToolCallDelta } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenAIToolCallDelta = {
    index,
    id,
    type,
    _function,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
