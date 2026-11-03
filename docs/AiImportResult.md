# AiImportResult

The outcome of a prompt bundle import: either every entry was stored, with counts, or none was and the errors are reported per entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the whole bundle was imported. | [default to undefined]
**imported** | [**AiImportResultImported**](AiImportResultImported.md) |  | [optional] [default to undefined]
**errors** | [**Array&lt;AiImportError&gt;**](AiImportError.md) | What was rejected, per entry. Present on failure - and then nothing was imported. | [optional] [default to undefined]

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
