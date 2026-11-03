# AiToolCallData

Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Thread the assistant message belongs to. | [default to undefined]
**messageId** | **string** | Storage id of the assistant message holding the tool call. | [default to undefined]
**idx** | **number** | Index of the tool-call content part inside `message.content`. | [default to undefined]
**message** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | A copy of the assistant message as it was when the tool call surfaced. Optional and ignored: the round resumes from the stored message. Leave it out - a long conversation\'s copy can push the body past the size limit. | [optional] [default to undefined]
**actionArgs** | [**AiActionArgs**](AiActionArgs.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**contextEntityId** | **string** | The folder or room the user is in. Tools run against it and the model is told it is the user\'s location; falls back to `entityId` when omitted. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiToolCallData } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolCallData = {
    threadId,
    messageId,
    idx,
    message,
    actionArgs,
    entityId,
    contextEntityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
