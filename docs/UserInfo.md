# UserInfo

The user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The user ID. | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**userName** | **string** | The user username. | [optional] [default to undefined]
**birthDate** | **string** | The user birthday. | [optional] [default to undefined]
**sex** | **boolean** | The user sex (male or female). | [optional] [default to undefined]
**status** | [**EmployeeStatus**](EmployeeStatus.md) |  | [optional] [default to undefined]
**activationStatus** | [**EmployeeActivationStatus**](EmployeeActivationStatus.md) |  | [optional] [default to undefined]
**terminatedDate** | **string** | The date and time when the user account was terminated. | [optional] [default to undefined]
**title** | **string** | The user title. | [optional] [default to undefined]
**workFromDate** | **string** | The user registration date. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]
**contacts** | **string** | The list of user contacts in the string format. | [optional] [default to undefined]
**contactsList** | **Array&lt;string&gt;** | The list of user contacts. | [optional] [default to undefined]
**location** | **string** | The user location. | [optional] [default to undefined]
**notes** | **string** | The user notes. | [optional] [default to undefined]
**removed** | **boolean** | Specifies if the user account was removed or not. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the user account was last modified. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**isActive** | **boolean** | Specifies if the user is active or not. | [optional] [readonly] [default to undefined]
**cultureName** | **string** | The user culture code. | [optional] [default to undefined]
**mobilePhone** | **string** | The user mobile phone. | [optional] [default to undefined]
**mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](MobilePhoneActivationStatus.md) |  | [optional] [default to undefined]
**sid** | **string** | The LDAP user identificator. | [optional] [default to undefined]
**ldapQouta** | **number** | The LDAP user quota attribute. | [optional] [default to undefined]
**ssoNameId** | **string** | The SSO SAML user identificator. | [optional] [default to undefined]
**ssoSessionId** | **string** | The SSO SAML user session identificator. | [optional] [default to undefined]
**createDate** | **string** | The date and time when the user account was created. | [optional] [default to undefined]
**createdBy** | **string** | The ID of the user who created the current user account. | [optional] [default to undefined]
**spam** | **boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] [default to undefined]
**checkActivation** | **boolean** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { UserInfo } from '@onlyoffice/docspace-api-sdk';

const instance: UserInfo = {
    id,
    firstName,
    lastName,
    userName,
    birthDate,
    sex,
    status,
    activationStatus,
    terminatedDate,
    title,
    workFromDate,
    email,
    contacts,
    contactsList,
    location,
    notes,
    removed,
    lastModified,
    tenantId,
    isActive,
    cultureName,
    mobilePhone,
    mobilePhoneActivationStatus,
    sid,
    ldapQouta,
    ssoNameId,
    ssoSessionId,
    createDate,
    createdBy,
    spam,
    checkActivation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
