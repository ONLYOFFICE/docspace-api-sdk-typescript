# ContinueChatBody

Parameters for continuing an AI chat session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The user message to append to the conversation. | [default to undefined]
**files** | [**Array&lt;ContinueChatBodyFilesInner&gt;**](ContinueChatBodyFilesInner.md) | The optional collection of file identifiers to attach as context for the AI model. | [optional] [default to undefined]

## Example

```typescript
import { ContinueChatBody } from '@onlyoffice/docspace-api-sdk';

const instance: ContinueChatBody = {
    message,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
