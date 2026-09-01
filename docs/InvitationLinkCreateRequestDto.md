# InvitationLinkCreateRequestDto

The request parameters for creating an invitation link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeType** | [**EmployeeType**](EmployeeType.md) | The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User). | [default to undefined]
**expiration** | **string** | The expiration date of the invitation link. | [optional] [default to undefined]
**maxUseCount** | **number** | The maximum number of times the invitation link can be used. | [optional] [default to undefined]

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
