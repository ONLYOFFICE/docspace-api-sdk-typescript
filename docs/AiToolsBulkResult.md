# AiToolsBulkResult

Outcome of `ToolsEngine.replaceAllCustomServers` — either every entry persisted, or no entries persisted plus a per-key error report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when every custom MCP server was persisted. | [default to undefined]
**errors** | [**Array&lt;AiToolsBulkResultErrorsInner&gt;**](AiToolsBulkResultErrorsInner.md) | What was rejected, per server. Present on failure - and then no server was persisted. | [optional] [default to undefined]

## Example

```typescript
import { AiToolsBulkResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolsBulkResult = {
    success,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
