# AiThreadsAppendUserMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** |  | [default to undefined]
**message** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | Message to persist (id/createdAt are storage-assigned). | [default to undefined]
**profileId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AiThreadsAppendUserMessageRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadsAppendUserMessageRequest = {
    threadId,
    message,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
