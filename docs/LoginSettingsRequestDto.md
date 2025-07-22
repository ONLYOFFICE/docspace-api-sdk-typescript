# LoginSettingsRequestDto

The request parameters for configuring login security and performance settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attemptCount** | **number** | The maximum number of consecutive failed login attempts allowed before triggering account suspension. | [optional] [default to undefined]
**blockTime** | **number** | The duration (in minutes) for which an account remains suspended after exceeding maximum login attempts. | [optional] [default to undefined]
**checkPeriod** | **number** | The maximum time (in seconds) allowed for server to process and respond to login requests. | [optional] [default to undefined]

## Example

```typescript
import { LoginSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: LoginSettingsRequestDto = {
    attemptCount,
    blockTime,
    checkPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
