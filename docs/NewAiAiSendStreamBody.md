# NewAiAiSendStreamBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [default to undefined]
**userMessage** | [**NewAiThreadMessageLike**](NewAiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**NewAiAiActionArgs**](NewAiAiActionArgs.md) |  | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { NewAiAiSendStreamBody } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAiSendStreamBody = {
    threadId,
    userMessage,
    actionArgs,
    entityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
