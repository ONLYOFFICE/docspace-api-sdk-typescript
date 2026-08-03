# AiAssignmentMutationResult

Outcome of  {@link  AssignmentsEngine.assign }  /  {@link  AssignmentsEngine.unassign } . Either a success or a field-scoped error suitable for displaying in the profile editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiAssignmentMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiAssignmentMutationResult = {
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
