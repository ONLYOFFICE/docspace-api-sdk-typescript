# AutoCleanUpData

The auto-clearing setting parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isAutoCleanUp** | **boolean** | Specifies whether to permanently delete files in the Trash folder. | [optional] [default to undefined]
**gap** | [**DateToAutoCleanUp**](DateToAutoCleanUp.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AutoCleanUpData } from '@onlyoffice/docspace-api-sdk';

const instance: AutoCleanUpData = {
    isAutoCleanUp,
    gap,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
