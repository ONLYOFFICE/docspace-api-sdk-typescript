# PasswordSettingsDto

The password settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minLength** | **number** | The minimum number of characters required for valid passwords. | [optional] [default to undefined]
**upperCase** | **boolean** | Specifies whether the password should contain the uppercase letters or not. | [optional] [default to undefined]
**digits** | **boolean** | Specifies whether the password should contain the digits or not. | [optional] [default to undefined]
**specSymbols** | **boolean** | Specifies whether the password should contain the special symbols or not. | [optional] [default to undefined]
**allowedCharactersRegexStr** | **string** | The allowed password characters in the regex string format. | [optional] [default to undefined]
**digitsRegexStr** | **string** | The password digits in the regex string format. | [optional] [default to undefined]
**upperCaseRegexStr** | **string** | The password uppercase letters in the regex string format. | [optional] [default to undefined]
**specSymbolsRegexStr** | **string** | The passaword special symbols in the regex string format. | [optional] [default to undefined]

## Example

```typescript
import { PasswordSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PasswordSettingsDto = {
    minLength,
    upperCase,
    digits,
    specSymbols,
    allowedCharactersRegexStr,
    digitsRegexStr,
    upperCaseRegexStr,
    specSymbolsRegexStr,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
