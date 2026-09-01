# AiAiRegenerateStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threadId** | **string** | Target thread (must already exist). | [default to undefined]
**actionArgs** | [**AiAiActionArgs**](AiAiActionArgs.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [default to undefined]
**entityId** | **string** | Optional entity (room) scope for profile resolution. | [optional] [default to undefined]
**profileId** | **string** | Session-level profile override for this request only. | [optional] [default to undefined]

## Example

```typescript
import { AiAiRegenerateStreamRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAiRegenerateStreamRequest = {
    threadId,
    actionArgs,
    entityId,
    profileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
