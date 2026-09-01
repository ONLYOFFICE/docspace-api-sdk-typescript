# CustomerServiceUsageReportRequestDto

The request parameters for generating a customer service usage report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceName** | **Array&lt;string&gt;** | The service name list. A single string is also accepted for backward compatibility. | [optional] [default to undefined]
**startDate** | **string** | The report start date. | [optional] [default to undefined]
**endDate** | **string** | The report end date. | [optional] [default to undefined]
**participantName** | **string** | The participant name. | [optional] [default to undefined]
**status** | [**OperationStatus**](OperationStatus.md) | The operation status to filter by. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Metadata key-value pairs to filter by. | [optional] [default to undefined]
**orderBy** | **string** | The field to order by. | [optional] [default to undefined]
**orderType** | [**OperationOrderType**](OperationOrderType.md) | Order direction: Ascending or Descending. | [optional] [default to undefined]

## Example

```typescript
import { CustomerServiceUsageReportRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerServiceUsageReportRequestDto = {
    serviceName,
    startDate,
    endDate,
    participantName,
    status,
    metadata,
    orderBy,
    orderType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
