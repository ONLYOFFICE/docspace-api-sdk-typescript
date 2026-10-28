# InvitationLinkDto

The portal\'s standing invitation link for one role: what it grants, how long it lasts, how often it was used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier to address the link by in `PUT api/2.0/portal/users/invitationlink` and  `DELETE api/2.0/portal/users/invitationlink`. It survives a change of deadline or use limit, so it is  worth storing rather than re-reading. | [optional] [default to undefined]
**employeeType** | [**EmployeeType**](EmployeeType.md) | The role an account gets by joining through this link. A portal keeps at most one link per role, and the  role of an existing link cannot be changed - the link has to be deleted and created again. | [default to undefined]
**expiration** | [**ApiDateTime**](ApiDateTime.md) | When the link stops working, in the portal time zone. It is empty for a link that never expires, which is  what omitting the deadline on create or update leaves behind. | [optional] [default to undefined]
**isExpired** | **boolean** | Whether that deadline has already passed. A link without a deadline always reports `false`, and an expired  link is still returned rather than treated as gone - it can be revived by moving `expiration`. | [optional] [default to undefined]
**maxUseCount** | **number** | How many accounts may join through the link in total. It is empty for a link with no use limit, and an  update may not lower it below `currentUseCount`. | [optional] [default to undefined]
**currentUseCount** | **number** | How many accounts have already joined through the link. It only ever grows, and reaching `maxUseCount`  retires the link as surely as a passed deadline. | [optional] [default to undefined]
**url** | **string** | The shortened address to hand to the people being invited. It is signed for the account that read it, so  two administrators are given two different URLs for one and the same link and both of them work; the `id`  above, not this string, is what identifies the link. | [optional] [default to undefined]

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
