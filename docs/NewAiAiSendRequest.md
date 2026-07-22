# NewAiAiSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | [**NewAiActionType**](NewAiActionType.md) |  | [default to undefined]
**userMessage** | [**NewAiThreadMessageLike**](NewAiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**NewAiAiActionArgs**](NewAiAiActionArgs.md) |  | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]

## Example

```typescript
import { NewAiAiSendRequest } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAiSendRequest = {
    actionType,
    userMessage,
    actionArgs,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
