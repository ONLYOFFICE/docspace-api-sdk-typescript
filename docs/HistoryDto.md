# HistoryDto

The file history information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**HistoryAction**](HistoryAction.md) |  | [default to undefined]
**initiator** | [**EmployeeDto**](EmployeeDto.md) |  | [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [default to undefined]
**data** | [**HistoryData**](HistoryData.md) |  | [default to undefined]
**related** | [**Array&lt;HistoryDto&gt;**](HistoryDto.md) | The list of related history. | [optional] [default to undefined]

## Example

```typescript
import { HistoryDto } from '@onlyoffice/docspace-api-sdk';

const instance: HistoryDto = {
    action,
    initiator,
    date,
    data,
    related,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
