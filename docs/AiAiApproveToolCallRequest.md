# AiAiApproveToolCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **any** |  | [default to undefined]
**allowAlways** | **boolean** | Persist auto-approve for this tool\'s name. | [optional] [default to undefined]
**threadId** | **string** | Thread the assistant message belongs to. | [default to undefined]
**messageId** | **string** | Storage id of the assistant message holding the tool call. | [default to undefined]
**idx** | **number** | Index of the tool-call content part inside `message.content`. | [default to undefined]
**message** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | Snapshot of the assistant message at the time the tool call surfaced. | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiAiApproveToolCallRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiApproveToolCallRequest = {
    result,
    allowAlways,
    threadId,
    messageId,
    idx,
    message,
    actionArgs,
    entityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
