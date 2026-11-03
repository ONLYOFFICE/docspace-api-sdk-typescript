# AiRegenerateStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Target thread (must already exist). | [default to undefined]
**messageId** | **string** | The user message to re-roll from: everything stored after it is deleted. When omitted, or no longer in the thread, the last user message is used. | [optional] [default to undefined]
**keepCount** | **number** | How many messages from the start of the thread to keep, used when `messageId` does not resolve. The message at `keepCount - 1` has to be a user message; otherwise the value is ignored. | [optional] [default to undefined]
**expectedLength** | **number** | The thread length the caller saw when it computed `keepCount`. When it differs from the stored length, `keepCount` is discarded and the last user message is used instead. | [optional] [default to undefined]
**actionArgs** | [**AiActionArgs**](AiActionArgs.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**contextEntityId** | **string** | The folder or room the user is in. Tools run against it and the model is told it is the user\'s location; falls back to `entityId` when omitted. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiRegenerateStreamRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiRegenerateStreamRequest = {
    threadId,
    messageId,
    keepCount,
    expectedLength,
    actionArgs,
    entityId,
    contextEntityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
