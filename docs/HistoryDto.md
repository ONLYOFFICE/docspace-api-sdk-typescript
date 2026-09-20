# HistoryDto

One record of the activity log of a file or a folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The identifier of the record, which tells two records of the same action apart and stays stable as long as the  portal keeps the log. | [default to undefined]
**action** | [**HistoryAction**](HistoryAction.md) | What happened - the kind of event the record stands for, such as a file being uploaded, renamed, moved or  shared - with the key a client can key its own wording off. | [default to undefined]
**initiator** | [**EmployeeDto**](EmployeeDto.md) | Who caused the event. For an event caused by a visitor following an external link only the name they gave is  filled in, the account fields staying empty. | [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) | When the event happened, written with the offset of the portal\'s time zone. | [default to undefined]
**data** | [**HistoryData**](HistoryData.md) | The history data. Absent for actions that carry no payload of their own - changing a room\'s  logo, icon colour or cover, whose interpreter returns no data (see  `RoomLogoChangedInterpreter`). It used to be declared required, which put it in the  OpenAPI document\'s required list while the null-dropping serializer left it out of the  response, so a generated client threw on any history page holding one of those entries. | [optional] [default to undefined]
**related** | [**Array&lt;HistoryDto&gt;**](HistoryDto.md) | The records folded into this one because they belong to the same action, the separate files of one upload for  instance. It is empty when the record stands alone, and the records inside it carry no further nesting. | [optional] [default to undefined]

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
