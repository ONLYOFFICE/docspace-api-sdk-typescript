# NewAiFolderMutationResult

Outcome of `createFolder` / `renameFolder` — either the persisted folder or a field-scoped error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**folder** | [**NewAiPromptFolder**](NewAiPromptFolder.md) |  | [optional] [default to undefined]
**error** | [**NewAiTErrorData**](NewAiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiFolderMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiFolderMutationResult = {
    success,
    folder,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
