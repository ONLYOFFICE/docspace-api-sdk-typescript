# NewAiBulkAssignmentResult

Outcome of  {@link  AssignmentsEngine.bulkAssign } . Either every entry persisted, or no entries persisted and a per-key error report. The engine validates first and writes second so a single bad entry never leaves the assignment table in a half-written state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**errors** | [**Array&lt;NewAiBulkAssignmentResultErrorsInner&gt;**](NewAiBulkAssignmentResultErrorsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiBulkAssignmentResult } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiBulkAssignmentResult = {
    success,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
