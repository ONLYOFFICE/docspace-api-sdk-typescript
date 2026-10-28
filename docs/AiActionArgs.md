# AiActionArgs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;AiMCPItem&gt;**](AiMCPItem.md) | Extra tools offered to the model for this request. | [optional] [default to undefined]
**isReasoning** | **boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [default to undefined]
**reasoningLevel** | [**AiReasoningLevel**](AiReasoningLevel.md) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [default to undefined]
**prompt** | [**AiActionArgsPrompt**](AiActionArgsPrompt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiActionArgs } from '@onlyoffice/docspace-api-sdk';

const instance: AiActionArgs = {
    tools,
    isReasoning,
    reasoningLevel,
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
