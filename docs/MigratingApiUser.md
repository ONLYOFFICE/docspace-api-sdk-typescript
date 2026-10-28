# MigratingApiUser

The migrating user parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shouldImport** | **boolean** | Specifies whether the API entity should be imported. | [optional] [default to undefined]
**key** | **string** | The user key. | [optional] [default to undefined]
**email** | **string** | The user email. | [optional] [default to undefined]
**displayName** | **string** | The user display name. | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**userType** | [**EmployeeType**](EmployeeType.md) | The user type. | [optional] [default to undefined]
**migratingFiles** | [**MigratingApiFiles**](MigratingApiFiles.md) | The user\'s migrating files. | [optional] [default to undefined]

## Example

```typescript
import { MigratingApiUser } from '@onlyoffice/docspace-api-sdk';

const instance: MigratingApiUser = {
    shouldImport,
    key,
    email,
    displayName,
    firstName,
    lastName,
    userType,
    migratingFiles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
