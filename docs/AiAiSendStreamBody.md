# AiAiSendStreamBody

Shared body of the two streaming send endpoints (`sendWithStream` and its OpenAI-framed twin) — the `Chat` action is implied, so there is no `actionType`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | The user turn to send. | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiAiSendStreamBody } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiSendStreamBody = {
    threadId,
    userMessage,
    actionArgs,
    entityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
