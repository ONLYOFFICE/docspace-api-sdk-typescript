# FillingFormResultDtoInteger

The parameters of the form filling result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formNumber** | **number** | The filling form number. | [optional] [default to undefined]
**completedForm** | [**FileDtoInteger**](FileDtoInteger.md) |  | [optional] [default to undefined]
**originalForm** | [**FileDtoInteger**](FileDtoInteger.md) |  | [optional] [default to undefined]
**manager** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] [default to undefined]
**roomId** | **number** | The room ID where filling the form. | [optional] [default to undefined]
**isRoomMember** | **boolean** | Specifies if the manager who fills the form is a room member or not. | [optional] [default to undefined]

## Example

```typescript
import { FillingFormResultDtoInteger } from '@onlyoffice/docspace-api-typescript';

const instance: FillingFormResultDtoInteger = {
    formNumber,
    completedForm,
    originalForm,
    manager,
    roomId,
    isRoomMember,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
