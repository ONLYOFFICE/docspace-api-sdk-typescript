# AiCreatePromptInput

Input for creating a prompt — the engine generates `id`/`createdAt`/`updatedAt`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The prompt name. | [default to undefined]
**text** | **string** | The prompt body. | [default to undefined]
**folderId** | **string** | The folder to file the prompt under. Omit or send null to leave it outside any folder. | [optional] [default to undefined]

## Example

```typescript
import { AiCreatePromptInput } from '@onlyoffice/docspace-api-sdk';

const instance: AiCreatePromptInput = {
    name,
    text,
    folderId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
