# AiPromptFolder

Folder for organizing saved prompts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique folder identifier (UUID). | [default to undefined]
**name** | **string** | Folder display name. | [default to undefined]
**createdAt** | **number** | Timestamp (ms since epoch) when the folder was created. | [default to undefined]
**updatedAt** | **number** | Timestamp (ms since epoch) of the last folder modification. | [default to undefined]

## Example

```typescript
import { AiPromptFolder } from '@onlyoffice/docspace-api-sdk';

const instance: AiPromptFolder = {
    id,
    name,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
