# AiSendCustomRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isStream** | **boolean** | Stream the reply (ndjson) when true, else return a single message. | [default to undefined]
**systemPrompt** | **string** | Caller-supplied system prompt for this one-turn call. | [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**AiActionArgs**](AiActionArgs.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [default to undefined]
**profileId** | **string** | Profile to run this call on. When omitted, or when no profile has this id, the `Default` assignment is used. | [optional] [default to undefined]

## Example

```typescript
import { AiSendCustomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiSendCustomRequest = {
    isStream,
    systemPrompt,
    userMessage,
    actionArgs,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
