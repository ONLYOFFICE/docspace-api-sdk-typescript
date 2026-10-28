# AiWebSearchConfigure400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the configuration was persisted. | [default to undefined]
**config** | [**AiWebSearchConfig**](AiWebSearchConfig.md) | The persisted web-search configuration. Present on success. | [optional] [default to undefined]
**error** | **string** | The error message, ready to be shown to the caller. | [default to undefined]

## Example

```typescript
import { AiWebSearchConfigure400Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiWebSearchConfigure400Response = {
    success,
    config,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
