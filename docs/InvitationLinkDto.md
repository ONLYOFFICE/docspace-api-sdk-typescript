# InvitationLinkDto

The invitation link parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the invitation link. | [optional] [default to undefined]
**employeeType** | [**EmployeeType**](EmployeeType.md) |  | [default to undefined]
**expiration** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**isExpired** | **boolean** | Indicates whether the invitation link has expired. | [optional] [default to undefined]
**maxUseCount** | **number** | The maximum number of times the invitation link can be used. | [optional] [default to undefined]
**currentUseCount** | **number** | The current number of times the invitation link has been used. | [optional] [default to undefined]
**url** | **string** | The URL of the invitation link. | [optional] [default to undefined]

## Example

```typescript
import { InvitationLinkDto } from '@onlyoffice/docspace-api-sdk';

const instance: InvitationLinkDto = {
    id,
    employeeType,
    expiration,
    isExpired,
    maxUseCount,
    currentUseCount,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
