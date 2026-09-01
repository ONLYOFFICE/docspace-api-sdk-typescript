# ConnectionTestResult

The outcome of a connection test against an external database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Specifies whether the connection to the database succeeded. | [optional] [default to undefined]
**error** | **string** | The reason the connection failed, or null when it succeeded. | [optional] [default to undefined]

## Example

```typescript
import { ConnectionTestResult } from '@onlyoffice/docspace-api-sdk';

const instance: ConnectionTestResult = {
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
