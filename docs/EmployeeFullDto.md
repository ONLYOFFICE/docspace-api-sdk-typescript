# EmployeeFullDto

The full list of user parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The user ID. | [optional] [default to undefined]
**displayName** | **string** | The user display name. | [optional] [default to undefined]
**title** | **string** | The user title. | [optional] [default to undefined]
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
**birthday** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**sex** | **string** | The user sex. | [optional] [default to undefined]
**status** | [**EmployeeStatus**](EmployeeStatus.md) |  | [optional] [default to undefined]
**activationStatus** | [**EmployeeActivationStatus**](EmployeeActivationStatus.md) |  | [optional] [default to undefined]
**terminated** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**department** | **string** | The user department. | [optional] [default to undefined]
**workFrom** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**groups** | [**Array&lt;GroupSummaryDto&gt;**](GroupSummaryDto.md) | The list of user groups. | [optional] [default to undefined]
**location** | **string** | The user location. | [optional] [default to undefined]
**notes** | **string** | The user notes. | [optional] [default to undefined]
**isAdmin** | **boolean** | Specifies if the user is an administrator or not. | [optional] [default to undefined]
**isRoomAdmin** | **boolean** | Specifies if the user is a room administrator or not. | [optional] [default to undefined]
**isLDAP** | **boolean** | Specifies if the LDAP settings are enabled for the user or not. | [optional] [default to undefined]
**listAdminModules** | **Array&lt;string&gt;** | The list of the administrator modules. | [optional] [default to undefined]
**isOwner** | **boolean** | Specifies if the user is a portal owner or not. | [optional] [default to undefined]
**isVisitor** | **boolean** | Specifies if the user is a portal visitor or not. | [optional] [default to undefined]
**isCollaborator** | **boolean** | Specifies if the user is a portal collaborator or not. | [optional] [default to undefined]
**cultureName** | **string** | The user culture code. | [optional] [default to undefined]
**mobilePhone** | **string** | The user mobile phone number. | [optional] [default to undefined]
**mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](MobilePhoneActivationStatus.md) |  | [optional] [default to undefined]
**isSSO** | **boolean** | Specifies if the SSO settings are enabled for the user or not. | [optional] [default to undefined]
**theme** | [**DarkThemeSettingsType**](DarkThemeSettingsType.md) |  | [optional] [default to undefined]
**quotaLimit** | **number** | The user quota limit. | [optional] [default to undefined]
**usedSpace** | **number** | The portal used space of the user. | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the user has access rights. | [optional] [default to undefined]
**isCustomQuota** | **boolean** | Specifies if the user has a custom quota or not. | [optional] [default to undefined]
**loginEventId** | **number** | The current login event ID. | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**registrationDate** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**hasPersonalFolder** | **boolean** | Specifies if the user has a personal folder or not. | [optional] [default to undefined]

## Example

```typescript
import { EmployeeFullDto } from '@onlyoffice/docspace-api-typescript';

const instance: EmployeeFullDto = {
    id,
    displayName,
    title,
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
    birthday,
    sex,
    status,
    activationStatus,
    terminated,
    department,
    workFrom,
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
    createdBy,
    registrationDate,
    hasPersonalFolder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
