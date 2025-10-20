# PasswordSettingsRequestsDto

The request parameters for configuring the password complexity requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minLength** | **number** | The minimum number of characters required for valid passwords. | [default to undefined]
**upperCase** | **boolean** | Specifies whether the password should contain the uppercase letters or not. | [optional] [default to undefined]
**digits** | **boolean** | Specifies whether the password should contain the digits or not. | [optional] [default to undefined]
**specSymbols** | **boolean** | Specifies whether the password should contain the special symbols or not. | [optional] [default to undefined]

## Example

```typescript
import { PasswordSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PasswordSettingsRequestsDto = {
    minLength,
    upperCase,
    digits,
    specSymbols,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
