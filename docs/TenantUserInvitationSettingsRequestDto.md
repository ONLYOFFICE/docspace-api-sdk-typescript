# TenantUserInvitationSettingsRequestDto

Whether the portal still lets its members invite new members and new guests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowInvitingMembers** | **boolean** | Whether new DocSpace members may be invited through the Contacts section. Switching it off only stops new  invitations being created; links already issued keep working and members already invited stay. | [optional] [default to undefined]
**allowInvitingGuests** | **boolean** | Whether every DocSpace member, and not only an administrator, may invite external guests into rooms.  Switching it off leaves the guests already invited in place. | [optional] [default to undefined]

## Example

```typescript
import { TenantUserInvitationSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantUserInvitationSettingsRequestDto = {
    allowInvitingMembers,
    allowInvitingGuests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
