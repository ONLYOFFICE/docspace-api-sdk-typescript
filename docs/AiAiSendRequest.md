# AiAiSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | [**AiActionType**](AiActionType.md) |  | [default to undefined]
**userMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) |  | [optional] [default to undefined]
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
