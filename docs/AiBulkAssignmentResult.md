# AiBulkAssignmentResult

Outcome of `AssignmentsEngine.bulkAssign`. Either every entry persisted, or no entries persisted and a per-key error report. The engine validates first and writes second so a single bad entry never leaves the assignment table in a half-written state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when every entry was persisted. | [default to undefined]
**errors** | [**Array&lt;AiBulkAssignmentResultErrorsInner&gt;**](AiBulkAssignmentResultErrorsInner.md) | What was rejected, per action. Present on failure - and then no entry was persisted. | [optional] [default to undefined]

## Example

```typescript
import { AiBulkAssignmentResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiBulkAssignmentResult = {
    success,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
