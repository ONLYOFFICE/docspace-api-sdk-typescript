# HistoryDto

The file history information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier for the file history entry. | [default to undefined]
**action** | [**HistoryAction**](HistoryAction.md) | The action performed on the file. | [default to undefined]
**initiator** | [**EmployeeDto**](EmployeeDto.md) | The action initiator. | [default to undefined]
**date** | **string** | The date and time when an action on the file was performed. | [default to undefined]
**data** | [**HistoryData**](HistoryData.md) | The history data. | [default to undefined]
**related** | [**Array&lt;HistoryDto&gt;**](HistoryDto.md) | The list of related history. | [optional] [default to undefined]

## Example

```typescript
import { HistoryDto } from '@onlyoffice/docspace-api-sdk';

const instance: HistoryDto = {
    id,
    action,
    initiator,
    date,
    data,
    related,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
