# AiThreadMessageLikeStatus

Delivery/generation status of the message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | `running`, `requires-action`, `complete` or `incomplete`. | [default to undefined]
**reason** | **string** | Why the message is in that state: `tool-calls` or `interrupt` for `requires-action`; `stop` or `unknown` for `complete`; `cancelled`, `tool-calls`, `length`, `content-filter`, `other` or `error` for `incomplete`. An `incomplete` message the chat stored carries `cancelled` (the round was stopped) or `error`. | [optional] [default to undefined]
**error** | [**AiChatErrorPayload**](AiChatErrorPayload.md) | What failed, on an `incomplete` message whose `reason` is `error`. | [optional] [default to undefined]

## Example

```typescript
import { AiThreadMessageLikeStatus } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadMessageLikeStatus = {
    type,
    reason,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
