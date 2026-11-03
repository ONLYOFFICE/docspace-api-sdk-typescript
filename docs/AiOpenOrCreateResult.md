# AiOpenOrCreateResult

The thread that was opened or created, with its stored messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | The thread that was opened, or the one just created. | [default to undefined]
**title** | **string** | The title generated for a thread this call created; an empty string when it opened an existing thread. | [default to undefined]
**priorMessages** | [**Array&lt;AiThreadMessageLike&gt;**](AiThreadMessageLike.md) | The messages already in the thread - empty for a thread that was just created. | [default to undefined]

## Example

```typescript
import { AiOpenOrCreateResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenOrCreateResult = {
    threadId,
    title,
    priorMessages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
