# NewAiToolsMutationResult

Outcome of an MCP-server CRUD call. Either success or a field-scoped error suitable for the settings form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**error** | [**NewAiTErrorData**](NewAiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiToolsMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiToolsMutationResult = {
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
