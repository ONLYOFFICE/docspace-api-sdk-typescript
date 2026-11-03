# AiSendStreamBody

Shared body of the two streaming send endpoints (`sendWithStream` and its OpenAI-framed twin) — the `Chat` action is implied, so there is no `actionType`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | The user turn to send. | [default to undefined]
**actionArgs** | [**AiActionArgs**](AiActionArgs.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**contextEntityId** | **string** | The folder or room the user is in. Tools run against it and the model is told it is the user\'s location; falls back to `entityId` when omitted. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiSendStreamBody } from '@onlyoffice/docspace-api-sdk';

const instance: AiSendStreamBody = {
    threadId,
    userMessage,
    actionArgs,
    entityId,
    contextEntityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
