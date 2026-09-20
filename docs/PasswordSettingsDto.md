# PasswordSettingsDto

The password policy of the portal, with the expressions a client can check a password against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minLength** | **number** | The shortest password the portal accepts, 8 characters on a portal nobody has configured. Whatever the  policy says, a password longer than 30 characters is refused as well, and that ceiling is not reported  here. | [default to undefined]
**upperCase** | **boolean** | Whether at least one uppercase letter is demanded. While it is `false` an uppercase letter is still  allowed - the flag adds a requirement rather than permission. | [default to undefined]
**digits** | **boolean** | Whether at least one digit is demanded, read the same way as `upperCase`. | [default to undefined]
**specSymbols** | **boolean** | Whether at least one special symbol is demanded, read the same way as `upperCase`. Which symbols count is  spelled out by `specSymbolsRegexStr`. | [default to undefined]
**allowedCharactersRegexStr** | **string** | The expression the whole password has to match, which is what defines the alphabet the portal accepts at  all. It comes from the installation\'s configuration rather than from the portal policy, so it is the same  for every portal of an installation and unaffected by the flags above. | [default to undefined]
**digitsRegexStr** | **string** | The look-ahead expression that tests the digit requirement, meant to be applied only while `digits` is  `true`. It is always filled in, so its presence is not itself a requirement. | [default to undefined]
**upperCaseRegexStr** | **string** | The look-ahead expression that tests the uppercase requirement, to be applied while `upperCase` is `true`. | [default to undefined]
**specSymbolsRegexStr** | **string** | The look-ahead expression that tests the special-symbol requirement, to be applied while `specSymbols` is  `true`. It also enumerates the symbols the portal treats as special. | [default to undefined]

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
