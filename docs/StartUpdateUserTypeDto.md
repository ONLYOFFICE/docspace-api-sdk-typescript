# StartUpdateUserTypeDto

The parameters for updating the type of the user or guest when reassigning rooms and shared files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EmployeeType**](EmployeeType.md) | The type to convert the account to. Only `Guest` and `User` are accepted, because they are the types that  cannot own rooms; `RoomAdmin`, `DocSpaceAdmin` and `All` are rejected here and belong to  `PUT api/2.0/people/type/{type}`. | [optional] [default to undefined]
**userId** | **string** | The ID of the account being converted. It has to be an active account other than the caller, and only the  portal owner may pass the ID of a DocSpace administrator. | [optional] [default to undefined]
**reassignUserId** | **string** | The ID of the administrator who receives the rooms and the shared files of the converted account. It has to be  an active room admin or DocSpace admin other than the converted account, and when it is omitted the data goes  to the caller. | [optional] [default to undefined]

## Example

```typescript
import { StartUpdateUserTypeDto } from '@onlyoffice/docspace-api-sdk';

const instance: StartUpdateUserTypeDto = {
    type,
    userId,
    reassignUserId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
