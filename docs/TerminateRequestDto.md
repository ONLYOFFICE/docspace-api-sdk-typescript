# TerminateRequestDto

The request parameters that address the queued job of a single user - a data reassignment, a data deletion or a  user type change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The ID of the user whose job is addressed. For a terminate operation it has to be the same ID that was passed  when the job was started. | [default to undefined]

## Example

```typescript
import { TerminateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TerminateRequestDto = {
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
