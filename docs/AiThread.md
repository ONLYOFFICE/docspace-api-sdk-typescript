# AiThread

Chat conversation metadata. Represents a single chat session (thread).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Unique thread identifier (UUID). | [default to undefined]
**title** | **string** | Optional thread title. Auto-generated from the first message if not set. | [optional] [default to undefined]
**lastEditDate** | **number** | Timestamp (ms since epoch) of the last message in this thread. Used for sorting. | [optional] [default to undefined]
**provider** | [**AiTProvider**](AiTProvider.md) |  | [optional] [default to undefined]
**model** | [**AiModel**](AiModel.md) |  | [optional] [default to undefined]
**profileId** | **string** | ID of the profile used for this thread. Links to  {@link  Profile.id } . | [optional] [default to undefined]

## Example

```typescript
import { AiThread } from '@onlyoffice/docspace-api-sdk';

const instance: AiThread = {
    threadId,
    title,
    lastEditDate,
    provider,
    model,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
