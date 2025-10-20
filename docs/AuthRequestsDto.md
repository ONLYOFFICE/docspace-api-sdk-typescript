# AuthRequestsDto

The parameters required for the user authentication requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userName** | **string** | The username or email used for authentication. | [optional] [default to undefined]
**password** | **string** | The password in plain text for user authentication. | [optional] [default to undefined]
**passwordHash** | **string** | The hashed password for secure verification. | [optional] [default to undefined]
**provider** | **string** | The type of authentication provider (e.g., internal, Google, Azure). | [optional] [default to undefined]
**accessToken** | **string** | The access token used for authentication with external providers. | [optional] [default to undefined]
**serializedProfile** | **string** | The serialized user profile data, if applicable. | [optional] [default to undefined]
**code** | **string** | The code for two-factor authentication. | [optional] [default to undefined]
**codeOAuth** | **string** | The authorization code used for obtaining OAuth tokens. | [optional] [default to undefined]
**session** | **boolean** | Specifies whether the authentication is session-based. | [optional] [default to undefined]
**confirmData** | [**ConfirmData**](ConfirmData.md) |  | [optional] [default to undefined]
**recaptchaType** | [**RecaptchaType**](RecaptchaType.md) |  | [optional] [default to undefined]
**recaptchaResponse** | **string** | The user\&#39;s response to the CAPTCHA challenge. | [optional] [default to undefined]
**culture** | **string** | The culture code for localization during authentication. | [optional] [default to undefined]

## Example

```typescript
import { AuthRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuthRequestsDto = {
    userName,
    password,
    passwordHash,
    provider,
    accessToken,
    serializedProfile,
    code,
    codeOAuth,
    session,
    confirmData,
    recaptchaType,
    recaptchaResponse,
    culture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
