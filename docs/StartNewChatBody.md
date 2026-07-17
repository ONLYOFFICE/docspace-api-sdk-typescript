# StartNewChatBody

Parameters for starting a new AI chat session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The initial user message to send to the AI assistant. | [default to undefined]
**contextFolderId** | **number** | The optional collection of file identifiers to attach as context for the AI model. | [optional] [default to undefined]
**files** | [**Array&lt;ContinueChatBodyFilesInner&gt;**](ContinueChatBodyFilesInner.md) | The list of attached files. | [optional] [default to undefined]

## Example

```typescript
import { StartNewChatBody } from '@onlyoffice/docspace-api-sdk';

const instance: StartNewChatBody = {
    message,
    contextFolderId,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
