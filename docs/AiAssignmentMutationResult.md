# AiAssignmentMutationResult

The outcome of an assign or unassign: a success, or an error naming the field that was refused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the assignment was persisted. | [default to undefined]
**error** | [**AiErrorData**](AiErrorData.md) | Why the assignment was rejected. Present on failure. | [optional] [default to undefined]

## Example

```typescript
import { AiAssignmentMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiAssignmentMutationResult = {
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
