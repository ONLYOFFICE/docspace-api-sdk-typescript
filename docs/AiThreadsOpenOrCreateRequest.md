# AiThreadsOpenOrCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** |  | [optional] [default to undefined]
**profile** | [**AiProfile**](AiProfile.md) | Profile the title generation runs on. | [default to undefined]
**profileId** | **string** |  | [default to undefined]
**firstMessage** | [**AiThreadMessageLike**](AiThreadMessageLike.md) | First user message a fresh thread derives its title from. | [default to undefined]
**entityId** | **string** | Opaque scope token persisted on a freshly created thread. | [optional] [default to undefined]
**entityMeta** | [**AiThreadsOpenOrCreateRequestEntityMeta**](AiThreadsOpenOrCreateRequestEntityMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiThreadsOpenOrCreateRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadsOpenOrCreateRequest = {
    threadId,
    profile,
    profileId,
    firstMessage,
    entityId,
    entityMeta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
