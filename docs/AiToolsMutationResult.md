# AiToolsMutationResult

Outcome of an MCP-server CRUD call. Either success or a field-scoped error suitable for the settings form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiToolsMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolsMutationResult = {
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
