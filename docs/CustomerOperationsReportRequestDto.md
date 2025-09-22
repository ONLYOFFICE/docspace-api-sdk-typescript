# CustomerOperationsReportRequestDto

Parameters of the request for generating the report on client operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date | [optional] [default to undefined]
**endDate** | **string** | End date | [optional] [default to undefined]
**participantName** | **string** | Participant name | [optional] [default to undefined]
**credit** | **boolean** | Include credit operations | [optional] [default to undefined]
**debit** | **boolean** | Include debit operations | [optional] [default to undefined]

## Example

```typescript
import { CustomerOperationsReportRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerOperationsReportRequestDto = {
    startDate,
    endDate,
    participantName,
    credit,
    debit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
