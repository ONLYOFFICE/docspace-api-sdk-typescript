# AiChatEvent

One event of a chat stream, told apart by `type`: `message-start`, `message-delta` and `message-end` frame the assistant reply, `message-incomplete` reports a provider error or an unfinished answer, `thread-title` carries a generated title, and `tool-call-pending` pauses the round until the call is approved (`POST api/2.0/ai/ai/approve-tool-call`) or denied (`POST api/2.0/ai/ai/deny-tool-call`).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Emitted once per `sendWithStream` call, immediately after the user message has been persisted by storage and before the assistant stream starts. Carries the storage-assigned `id` and `createdAt`. The UI uses it to render the user bubble — no client-side optimistic placeholder is needed, which keeps the runtime tree free of phantom nodes from index-fallback ids. | [default to undefined]
**message** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | The message the event is about, in the state it has reached. | [optional] [default to undefined]
**messageId** | **string** | The storage identifier of that message. | [optional] [default to undefined]
**idx** | **number** | The zero-based position of the pending tool call within the message. | [optional] [default to undefined]
**threadId** | **string** | The thread the event belongs to. | [optional] [default to undefined]
**autoAllow** | **boolean** | The tool runs without asking the user, as the user\'s tool permission mode decides: under `ask` never - the always-allow list, `requireApproval` and the annotations are all ignored; under `auto` a tool on the always-allow list, one with `requireApproval: false`, or one annotated `readOnlyHint: true` or `destructiveHint: false`; under `allow` every tool. | [optional] [default to undefined]
**serverExecuted** | **boolean** | The tool is run by the service itself: the client must not run it, only ask for approval (unless `autoAllow`) and approve or deny the call - an approval needs no `result`. | [optional] [default to undefined]
**title** | **string** | The generated thread title. | [optional] [default to undefined]
**profileId** | **string** | The profile that generated the title, when one was used. | [optional] [default to undefined]

## Example

```typescript
import { AiChatEvent } from '@onlyoffice/docspace-api-sdk';

const instance: AiChatEvent = {
    type,
    message,
    messageId,
    idx,
    threadId,
    autoAllow,
    serverExecuted,
    title,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
