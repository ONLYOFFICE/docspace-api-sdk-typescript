# CustomerOperationsReportRequestDto

The request parameters for generating a report on client operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | The report start date. | [optional] [default to undefined]
**endDate** | **string** | The report end date. | [optional] [default to undefined]
**participantName** | **string** | The participant name. | [optional] [default to undefined]
**credit** | **boolean** | Specifies whether to include credit operations in the report. | [optional] [default to undefined]
**debit** | **boolean** | Specifies whether to include debit operations in the report. | [optional] [default to undefined]

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
