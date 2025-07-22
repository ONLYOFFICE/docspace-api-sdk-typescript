# CustomerOperationsReportRequestDto

Parameters of the request for generating the report on client operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date | [optional] [default to undefined]
**endDate** | **string** | End date | [optional] [default to undefined]
**credit** | **boolean** | Include credit operations | [optional] [default to undefined]
**withdrawal** | **boolean** | Include withdrawal operations | [optional] [default to undefined]

## Example

```typescript
import { CustomerOperationsReportRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerOperationsReportRequestDto = {
    startDate,
    endDate,
    credit,
    withdrawal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
