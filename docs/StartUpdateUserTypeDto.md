# StartUpdateUserTypeDto

The parameters for updating the type of the user or guest when reassigning rooms and shared files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EmployeeType**](EmployeeType.md) |  | [optional] [default to undefined]
**userId** | **string** | The user ID. | [optional] [default to undefined]
**reassignUserId** | **string** | The user ID to reassign. | [optional] [default to undefined]

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
