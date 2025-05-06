# AuthenticationTokenDto

The authentication token parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** | The authentication token. | [optional] [default to undefined]
**expires** | **string** | The token expiration time. | [optional] [default to undefined]
**sms** | **boolean** | Specifies if the authentication code is sent by SMS or not. | [optional] [default to undefined]
**phoneNoise** | **string** | The phone number. | [optional] [default to undefined]
**tfa** | **boolean** | Specifies if the two-factor application is used or not. | [optional] [default to undefined]
**tfaKey** | **string** | The two-factor authentication key. | [optional] [default to undefined]
**confirmUrl** | **string** | The confirmation email URL. | [optional] [default to undefined]

## Example

```typescript
import { AuthenticationTokenDto } from '@onlyoffice/docspace-api-typescript';

const instance: AuthenticationTokenDto = {
    token,
    expires,
    sms,
    phoneNoise,
    tfa,
    tfaKey,
    confirmUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
