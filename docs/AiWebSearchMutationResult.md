# AiWebSearchMutationResult

The outcome of storing a web-search configuration: the stored configuration, or an error naming the field that was refused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the configuration was persisted. | [default to undefined]
**config** | [**AiWebSearchConfig**](AiWebSearchConfig.md) | The persisted web-search configuration. Present on success. | [optional] [default to undefined]
**error** | [**AiErrorData**](AiErrorData.md) | Why the configuration was rejected. Present on failure. | [optional] [default to undefined]

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
