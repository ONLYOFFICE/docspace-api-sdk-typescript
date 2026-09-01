# AiAiSendCustomRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isStream** | **boolean** | Stream the reply (ndjson) when true, else return a single message. | [default to undefined]
**systemPrompt** | **string** | Caller-supplied system prompt for this one-turn call. | [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [default to undefined]

## Example

```typescript
import { AiAiSendCustomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiSendCustomRequest = {
    isStream,
    systemPrompt,
    userMessage,
    actionArgs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
