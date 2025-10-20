# TenantUserInvitationSettingsDto

The user invitation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowInvitingMembers** | **boolean** | Specifies whether to allow inviting new DocSpace members through the Contacts section. | [default to undefined]
**allowInvitingGuests** | **boolean** | Specifies whether to allow all DocSpace members to invite external guests to the rooms. | [default to undefined]

## Example

```typescript
import { TenantUserInvitationSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantUserInvitationSettingsDto = {
    allowInvitingMembers,
    allowInvitingGuests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
