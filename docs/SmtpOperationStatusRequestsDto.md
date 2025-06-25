# SmtpOperationStatusRequestsDto

The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **boolean** | Specifies whether the SMTP operation has finished processing. | [optional] [default to undefined]
**id** | **string** | The unique identifier for tracking the SMTP operation. | [optional] [default to undefined]
**error** | **string** | The error message if the SMTP operation encountered issues. | [optional] [default to undefined]
**status** | **string** | The current state of the SMTP operation. | [optional] [default to undefined]
**percents** | **number** | The progress indicator showing completion percentage of the operation. | [optional] [default to undefined]

## Example

```typescript
import { SmtpOperationStatusRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: SmtpOperationStatusRequestsDto = {
    completed,
    id,
    error,
    status,
    percents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
