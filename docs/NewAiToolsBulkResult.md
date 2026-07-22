# NewAiToolsBulkResult

Outcome of  {@link  ToolsEngine.replaceAllCustomServers }  — either every entry persisted, or no entries persisted plus a per-key error report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**errors** | [**Array&lt;NewAiToolsBulkResultErrorsInner&gt;**](NewAiToolsBulkResultErrorsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiToolsBulkResult } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiToolsBulkResult = {
    success,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
