# AiSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | [**AiActionType**](AiActionType.md) | Which AI action to run — selects the assignment slot and action. | [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | The user turn to send. | [default to undefined]
**actionArgs** | [**AiActionArgs**](AiActionArgs.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**contextEntityId** | **string** | The folder or room the user is in. Tools run against it and the model is told it is the user\'s location; falls back to `entityId` when omitted. | [optional] [default to undefined]

## Example

```typescript
import { AiSendRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiSendRequest = {
    actionType,
    userMessage,
    actionArgs,
    entityId,
    contextEntityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
