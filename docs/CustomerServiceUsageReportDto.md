# CustomerServiceUsageReportDto

Represents a paged report of customer service usage statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**Array&lt;CustomerServiceUsageDto&gt;**](CustomerServiceUsageDto.md) | A collection of service usage statistics. | [optional] [default to undefined]
**offset** | **number** | The report data offset. | [optional] [default to undefined]
**limit** | **number** | The report data limit. | [optional] [default to undefined]
**totalQuantity** | **number** | The total quantity of records in the report. | [optional] [default to undefined]
**totalPage** | **number** | The total number of pages in the report. | [optional] [default to undefined]
**currentPage** | **number** | The current page number of the report. | [optional] [default to undefined]

## Example

```typescript
import { CustomerServiceUsageReportDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerServiceUsageReportDto = {
    collection,
    offset,
    limit,
    totalQuantity,
    totalPage,
    currentPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
