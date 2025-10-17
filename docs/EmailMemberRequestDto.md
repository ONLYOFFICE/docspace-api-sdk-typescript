# EmailMemberRequestDto

The request parameters for the user email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The user email address. | [default to undefined]
**recaptchaType** | [**RecaptchaType**](RecaptchaType.md) |  | [optional] [default to undefined]
**recaptchaResponse** | **string** | The user\&#39;s response to the CAPTCHA challenge. | [optional] [default to undefined]

## Example

```typescript
import { EmailMemberRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: EmailMemberRequestDto = {
    email,
    recaptchaType,
    recaptchaResponse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
