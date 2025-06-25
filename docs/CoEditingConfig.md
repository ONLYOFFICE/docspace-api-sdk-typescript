# CoEditingConfig

The co-editing configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change** | **boolean** | Specifies if the co-editing mode can be changed in the editor interface or not. | [optional] [default to undefined]
**fast** | **boolean** | Specifies if the co-editing mode is fast. | [optional] [default to undefined]
**mode** | [**CoEditingConfigMode**](CoEditingConfigMode.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CoEditingConfig } from '@onlyoffice/docspace-api-typescript';

const instance: CoEditingConfig = {
    change,
    fast,
    mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
