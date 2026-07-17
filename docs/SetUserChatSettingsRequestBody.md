# SetUserChatSettingsRequestBody

Parameters for updating user chat settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webSearchEnabled** | **boolean** | Indicates whether the AI assistant is allowed to perform web searches when generating responses. | [optional] [default to undefined]
**reasoningEffort** | [**ChatReasoningEffort**](ChatReasoningEffort.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SetUserChatSettingsRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: SetUserChatSettingsRequestBody = {
    webSearchEnabled,
    reasoningEffort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
