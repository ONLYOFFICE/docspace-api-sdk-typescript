# NewAiAiActionArgs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;NewAiTMCPItem&gt;**](NewAiTMCPItem.md) | Extra tools offered to the model for this request. | [optional] [default to undefined]
**isReasoning** | **boolean** | Enable extended thinking / reasoning for this request. | [optional] [default to undefined]
**prompt** | [**NewAiAiActionArgsPrompt**](NewAiAiActionArgsPrompt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiAiActionArgs } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAiActionArgs = {
    tools,
    isReasoning,
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
