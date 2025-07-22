# TenantUserInvitationSettingsRequestDto

User invitation settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowInvitingMembers** | **boolean** | Allow invite new DocSpace members through the Contacts section. | [optional] [default to undefined]
**allowInvitingGuests** | **boolean** | Allow all DocSpace members to invite external guests to rooms. | [optional] [default to undefined]

## Example

```typescript
import { TenantUserInvitationSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantUserInvitationSettingsRequestDto = {
    allowInvitingMembers,
    allowInvitingGuests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
