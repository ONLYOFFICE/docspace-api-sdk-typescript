# AiPrompt

Saved prompt template that users can quickly insert into the chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique prompt identifier (UUID). | [default to undefined]
**name** | **string** | Prompt display name shown in the prompt picker. | [default to undefined]
**text** | **string** | Prompt template text. May contain placeholder tokens. | [default to undefined]
**folderId** | **string** | Optional parent folder ID. `undefined` means the prompt is at the root level. | [optional] [default to undefined]
**createdAt** | **number** | Timestamp (ms since epoch) when the prompt was created. | [default to undefined]
**updatedAt** | **number** | Timestamp (ms since epoch) of the last prompt modification. | [default to undefined]

## Example

```typescript
import { AiPrompt } from '@onlyoffice/docspace-api-sdk';

const instance: AiPrompt = {
    id,
    name,
    text,
    folderId,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
