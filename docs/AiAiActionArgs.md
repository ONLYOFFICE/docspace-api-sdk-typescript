# AiAiActionArgs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;AiTMCPItem&gt;**](AiTMCPItem.md) | Extra tools offered to the model for this request. | [optional] [default to undefined]
**isReasoning** | **boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [default to undefined]
**reasoningLevel** | [**AiAiReasoningLevel**](AiAiReasoningLevel.md) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [default to undefined]
**prompt** | [**AiAiActionArgsPrompt**](AiAiActionArgsPrompt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiAiActionArgs } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiActionArgs = {
    tools,
    isReasoning,
    reasoningLevel,
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
