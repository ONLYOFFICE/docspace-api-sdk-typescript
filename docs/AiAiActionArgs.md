# AiAiActionArgs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;AiTMCPItem&gt;**](AiTMCPItem.md) | Extra tools offered to the model for this request. | [optional] [default to undefined]
**isReasoning** | **boolean** | Enable extended thinking / reasoning for this request. | [optional] [default to undefined]
**prompt** | [**AiAiActionArgsPrompt**](AiAiActionArgsPrompt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiAiActionArgs } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiActionArgs = {
    tools,
    isReasoning,
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
