# AiAiSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | [**AiActionType**](AiActionType.md) | Which AI action to run — selects the assignment slot and action. | [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | The user turn to send. | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]

## Example

```typescript
import { AiAiSendRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiSendRequest = {
    actionType,
    userMessage,
    actionArgs,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
