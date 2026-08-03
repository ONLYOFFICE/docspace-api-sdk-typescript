# AiWebSearchMutationResult

Outcome of  {@link  WebSearchEngine.configure }  — either the persisted config or a field-scoped error suitable for the settings form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**config** | [**AiWebSearchConfig**](AiWebSearchConfig.md) |  | [optional] [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiWebSearchMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiWebSearchMutationResult = {
    success,
    config,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
