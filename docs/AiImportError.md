# AiImportError

Per-entry error reported by  {@link  PromptsEngine.importBundle } .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | `folder` or `prompt`, plus the offending name or id. | [default to undefined]
**ref** | **string** |  | [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [default to undefined]

## Example

```typescript
import { AiImportError } from '@onlyoffice/docspace-api-sdk';

const instance: AiImportError = {
    kind,
    ref,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
