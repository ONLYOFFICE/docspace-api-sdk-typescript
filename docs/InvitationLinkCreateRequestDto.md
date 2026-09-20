# InvitationLinkCreateRequestDto

The role a new invitation link grants, and the limits placed on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeType** | [**EmployeeType**](EmployeeType.md) | The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` are accepted, and  the role cannot be changed afterwards - delete the link and create one for the other role instead. | [default to undefined]
**expiration** | **string** | When the link stops letting anyone in, read in the portal time zone. It has to lie in the future; leaving it  out creates a link with no deadline at all. | [optional] [default to undefined]
**maxUseCount** | **number** | How many accounts may join through the link in total. Leaving it out creates a link with no use limit; the  uses spent so far are reported as `currentUseCount`. | [optional] [default to undefined]

## Example

```typescript
import { InvitationLinkCreateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: InvitationLinkCreateRequestDto = {
    employeeType,
    expiration,
    maxUseCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
