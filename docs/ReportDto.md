# ReportDto

Represents a report containing a collection of operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**Array&lt;OperationDto&gt;**](OperationDto.md) | A collection of operations. | [optional] [default to undefined]
**offset** | **number** | The report data offset. | [optional] [default to undefined]
**limit** | **number** | The report data limit. | [optional] [default to undefined]
**totalQuantity** | **number** | The total quantity of operations in the report. | [optional] [default to undefined]
**totalPage** | **number** | The total number of pages in the report. | [optional] [default to undefined]
**currentPage** | **number** | The current page number of the report. | [optional] [default to undefined]

## Example

```typescript
import { ReportDto } from '@onlyoffice/docspace-api-sdk';

const instance: ReportDto = {
    collection,
    offset,
    limit,
    totalQuantity,
    totalPage,
    currentPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
