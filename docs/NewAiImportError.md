# NewAiImportError

Per-entry error reported by  {@link  PromptsEngine.importBundle } .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | `folder` or `prompt`, plus the offending name or id. | [default to undefined]
**ref** | **string** |  | [default to undefined]
**error** | [**NewAiTErrorData**](NewAiTErrorData.md) |  | [default to undefined]

## Example

```typescript
import { NewAiImportError } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiImportError = {
    kind,
    ref,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
