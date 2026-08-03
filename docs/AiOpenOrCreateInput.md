# AiOpenOrCreateInput

Input for  {@link  ThreadsEngine.openOrCreate } : open an existing thread if `threadId` is given, otherwise create a new one with an auto-generated title derived from `firstMessage`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** |  | [optional] [default to undefined]
**profile** | [**AiProfile**](AiProfile.md) |  | [default to undefined]
**profileId** | **string** |  | [default to undefined]
**firstMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) |  | [default to undefined]
**entityId** | **string** | Opaque scope token persisted on a freshly created thread. Ignored when `threadId` is provided (the existing thread keeps its scope). | [optional] [default to undefined]

## Example

```typescript
import { AiOpenOrCreateInput } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenOrCreateInput = {
    threadId,
    profile,
    profileId,
    firstMessage,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
