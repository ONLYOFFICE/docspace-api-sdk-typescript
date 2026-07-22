# NewAiAiToolCallData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Thread the assistant message belongs to. | [default to undefined]
**messageId** | **string** | Storage id of the assistant message holding the tool call. | [default to undefined]
**idx** | **number** | Index of the tool-call content part inside `message.content`. | [default to undefined]
**message** | [**NewAiThreadMessageLike**](NewAiThreadMessageLike.md) |  | [default to undefined]
**actionArgs** | [**NewAiAiActionArgs**](NewAiAiActionArgs.md) |  | [optional] [default to undefined]
**entityId** | **string** |  | [optional] [default to undefined]
**profileId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiAiToolCallData } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAiToolCallData = {
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
