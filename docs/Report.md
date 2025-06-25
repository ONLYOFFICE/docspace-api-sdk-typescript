# Report

Represents a report containing a collection of operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**Array&lt;Operation&gt;**](Operation.md) | Collection of operations. | [optional] [default to undefined]
**offset** | **number** | Offset of the report data. | [optional] [default to undefined]
**limit** | **number** | Limit of the report data. | [optional] [default to undefined]
**totalQuantity** | **number** | Total quantity of operations in the report. | [optional] [default to undefined]
**totalPage** | **number** | Total number of pages in the report. | [optional] [default to undefined]
**currentPage** | **number** | Current page number of the report. | [optional] [default to undefined]

## Example

```typescript
import { Report } from '@onlyoffice/docspace-api-typescript';

const instance: Report = {
    collection,
    offset,
    limit,
    totalQuantity,
    totalPage,
    currentPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
