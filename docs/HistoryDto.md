# HistoryDto

The file history information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**HistoryAction**](HistoryAction.md) |  | [optional] [default to undefined]
**initiator** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**data** | [**HistoryData**](HistoryData.md) |  | [optional] [default to undefined]
**related** | [**Array&lt;HistoryDto&gt;**](HistoryDto.md) | The list of related history. | [optional] [default to undefined]

## Example

```typescript
import { HistoryDto } from '@onlyoffice/docspace-api-typescript';

const instance: HistoryDto = {
    action,
    initiator,
    date,
    data,
    related,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
