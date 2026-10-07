# TfaValidateRequestDto

The one-time code that completes a pending two-factor step, and how long the resulting sign-in lasts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The code to check - either one from the authenticator application or one of the account\'s unused backup  codes, which is spent by the check. A wrong code is refused with 400 and counts against the portal login  attempt limit. | [default to undefined]
**session** | **boolean** | Whether the sign-in that follows is tied to the browser session. When it is, the session ends with the  browser rather than lasting for the portal session lifetime. | [optional] [default to undefined]

## Example

```typescript
import { TfaValidateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TfaValidateRequestDto = {
    code,
    session,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
