# AiImportResult

Outcome of  {@link  PromptsEngine.importBundle } . Either every entry persisted with counts, or no entries persisted plus a per-entry error report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**imported** | [**AiImportResultImported**](AiImportResultImported.md) |  | [optional] [default to undefined]
**errors** | [**Array&lt;AiImportError&gt;**](AiImportError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiImportResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiImportResult = {
    success,
    imported,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
