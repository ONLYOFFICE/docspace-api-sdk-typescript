# AiOpenOrCreateResult

Resolved thread state returned by  {@link  ThreadsEngine.openOrCreate } .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** |  | [default to undefined]
**title** | **string** | Empty string for existing threads — the engine doesn\'t re-fetch. | [default to undefined]
**priorMessages** | [**Array&lt;AiThreadMessageLike&gt;**](AiThreadMessageLike.md) |  | [default to undefined]

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
