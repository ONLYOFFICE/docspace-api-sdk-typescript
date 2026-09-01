# AiFolderMutationResult

Outcome of `createFolder` / `renameFolder` — either the persisted folder or a field-scoped error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the folder was persisted. | [default to undefined]
**folder** | [**AiPromptFolder**](AiPromptFolder.md) | The persisted folder. Present on success. | [optional] [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) | Why the folder was rejected. Present on failure. | [optional] [default to undefined]

## Example

```typescript
import { AiFolderMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiFolderMutationResult = {
    success,
    folder,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
