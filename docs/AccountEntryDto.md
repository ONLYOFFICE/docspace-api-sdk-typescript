# AccountEntryDto

One entry of an account search: either a user or a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The group ID. | [default to undefined]
**displayName** | **string** | The HTML-encoded user\'s display name formatted according to the default format for the current culture. | [optional] [default to undefined]
**avatar** | **string** | The user avatar. | [optional] [default to undefined]
**avatarOriginal** | **string** | The user original size avatar. | [optional] [default to undefined]
**avatarMax** | **string** | The user maximum size avatar. | [optional] [default to undefined]
**avatarMedium** | **string** | The user medium size avatar. | [optional] [default to undefined]
**avatarSmall** | **string** | The user small size avatar. | [optional] [default to undefined]
**profileUrl** | **string** | The user profile URL. | [optional] [default to undefined]
**hasAvatar** | **boolean** | Specifies if the user has an avatar or not. | [optional] [default to undefined]
**isAnonim** | **boolean** | Specifies if the user is anonymous or not. | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**userName** | **string** | The user username. | [optional] [default to undefined]
**email** | **string** | The user email. | [optional] [default to undefined]
**contacts** | [**Array&lt;Contact&gt;**](Contact.md) | The list of user contacts. | [optional] [default to undefined]
**status** | [**EmployeeStatus**](EmployeeStatus.md) | The user status. | [optional] [default to undefined]
**activationStatus** | [**EmployeeActivationStatus**](EmployeeActivationStatus.md) | The user activation status. | [optional] [default to undefined]
**terminated** | [**ApiDateTime**](ApiDateTime.md) | The date when the user account was terminated. | [optional] [default to undefined]
**department** | **string** | The user department. | [optional] [default to undefined]
**groups** | [**Array&lt;GroupSummaryDto&gt;**](GroupSummaryDto.md) | The list of user groups. | [optional] [default to undefined]
**location** | **string** | The user location. | [optional] [default to undefined]
**notes** | **string** | The user notes. | [optional] [default to undefined]
**isAdmin** | **boolean** | Specifies if the user is an administrator or not. | [optional] [default to undefined]
**isRoomAdmin** | **boolean** | Specifies if the user is a room administrator or not. | [optional] [default to undefined]
**isLDAP** | **boolean** | Specifies if the LDAP settings are enabled for the group or not. | [default to undefined]
**listAdminModules** | **Array&lt;string&gt;** | The list of the administrator modules. | [optional] [default to undefined]
**isOwner** | **boolean** | Specifies if the user is a portal owner or not. | [optional] [default to undefined]
**isVisitor** | **boolean** | Specifies if the user is a portal visitor or not. | [optional] [default to undefined]
**isCollaborator** | **boolean** | Specifies if the user is a portal collaborator or not. | [optional] [default to undefined]
**cultureName** | **string** | The user culture code. | [optional] [default to undefined]
**mobilePhone** | **string** | The user mobile phone number. | [optional] [default to undefined]
**mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](MobilePhoneActivationStatus.md) | The mobile phone activation status. | [optional] [default to undefined]
**isSSO** | **boolean** | Specifies if the SSO settings are enabled for the user or not. | [optional] [default to undefined]
**theme** | [**DarkThemeSettingsType**](DarkThemeSettingsType.md) | The user theme settings. | [optional] [default to undefined]
**quotaLimit** | **number** | The user quota limit. | [optional] [default to undefined]
**usedSpace** | **number** | The portal used space of the user. | [optional] [default to undefined]
**shared** | **boolean** | Specifies whether the group can be shared or not. | [optional] [default to undefined]
**isCustomQuota** | **boolean** | Specifies if the user has a custom quota or not. | [optional] [default to undefined]
**loginEventId** | **number** | The current login event ID. | [optional] [default to undefined]
**authCookieLifetime** | **number** | The auth cookie lifetime in seconds. | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) | The user who created the current user. | [optional] [default to undefined]
**registrationDate** | [**ApiDateTime**](ApiDateTime.md) | The user registration date. | [optional] [default to undefined]
**hasPersonalFolder** | **boolean** | Specifies if the user has a personal folder or not. | [optional] [default to undefined]
**tfaAppEnabled** | **boolean** | Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app. | [optional] [default to undefined]
**name** | **string** | The group name. | [default to undefined]
**parent** | **string** | The parent group ID. | [optional] [default to undefined]
**category** | **string** | The group category ID. | [default to undefined]
**isSystem** | **boolean** | Indicates whether the group is a system group. | [optional] [default to undefined]
**manager** | [**EmployeeFullDto**](EmployeeFullDto.md) | The group manager full information. | [optional] [default to undefined]
**members** | [**Array&lt;EmployeeFullDto&gt;**](EmployeeFullDto.md) | The list of group members. | [optional] [default to undefined]
**membersCount** | **number** | The number of group members. | [optional] [default to undefined]

## Example

```typescript
import { AccountEntryDto } from '@onlyoffice/docspace-api-sdk';

const instance: AccountEntryDto = {
    id,
    displayName,
    avatar,
    avatarOriginal,
    avatarMax,
    avatarMedium,
    avatarSmall,
    profileUrl,
    hasAvatar,
    isAnonim,
    firstName,
    lastName,
    userName,
    email,
    contacts,
    status,
    activationStatus,
    terminated,
    department,
    groups,
    location,
    notes,
    isAdmin,
    isRoomAdmin,
    isLDAP,
    listAdminModules,
    isOwner,
    isVisitor,
    isCollaborator,
    cultureName,
    mobilePhone,
    mobilePhoneActivationStatus,
    isSSO,
    theme,
    quotaLimit,
    usedSpace,
    shared,
    isCustomQuota,
    loginEventId,
    authCookieLifetime,
    createdBy,
    registrationDate,
    hasPersonalFolder,
    tfaAppEnabled,
    name,
    parent,
    category,
    isSystem,
    manager,
    members,
    membersCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
