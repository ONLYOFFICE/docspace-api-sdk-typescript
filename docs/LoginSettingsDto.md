# LoginSettingsDto

The brute-force protection of the sign-in form: how many failures, over how long, cost how long a block.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attemptCount** | **number** | How many failed attempts inside one window are tolerated before the offender is blocked. Attempts are  counted per user name and client address together, so one member being blocked leaves the rest of the  portal signing in normally. | [default to undefined]
**blockTime** | **number** | How long, in seconds, a blocked user name and address pair stays refused. While the block lasts the  sign-in is refused even once the password is correct. | [default to undefined]
**checkPeriod** | **number** | The length, in seconds, of the rolling window the failures are counted over. It is not a request timeout: a  wider window makes the same `attemptCount` stricter, because failures further apart still add up. | [default to undefined]
**isDefault** | **boolean** | Whether the three numbers above still match the ones the installation ships with. It turns `false` as soon  as any of them is saved differently, and `true` again after  `DELETE api/2.0/settings/security/loginsettings`. | [default to undefined]

## Example

```typescript
import { LoginSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: LoginSettingsDto = {
    attemptCount,
    blockTime,
    checkPeriod,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
