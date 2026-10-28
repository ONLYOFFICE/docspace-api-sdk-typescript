# SsoFieldMappingDto

Which SAML attributes fill the profile fields of a user who signs in through SSO.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | The first name. | [optional] [default to undefined]
**lastName** | **string** | The last name. | [optional] [default to undefined]
**email** | **string** | The email address. | [optional] [default to undefined]
**title** | **string** | The title. | [optional] [default to undefined]
**location** | **string** | The location. | [optional] [default to undefined]
**phone** | **string** | The phone number. | [optional] [default to undefined]

## Example

```typescript
import { SsoFieldMappingDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoFieldMappingDto = {
    firstName,
    lastName,
    email,
    title,
    location,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
