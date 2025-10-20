# InviteUsersRequestDto

The request parameters for inviting users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**Array&lt;UserInvitationRequestDto&gt;**](UserInvitationRequestDto.md) | The list of user invitations. | [default to undefined]
**culture** | **string** | The culture code of invitations. | [optional] [default to undefined]

## Example

```typescript
import { InviteUsersRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: InviteUsersRequestDto = {
    invitations,
    culture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
