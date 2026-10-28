# WizardRequestDto

What the initial setup wizard needs to finish a new portal: the owner credentials and the portal locale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The address the portal owner account is created with, which is also the address every administrative letter  goes to afterwards. It has to be a well-formed email address; a malformed one leaves the wizard unfinished. | [default to undefined]
**passwordHash** | **string** | The owner password, already hashed in the client rather than sent in the clear. Hash it with the `salt`,  iteration count and hash size that `GET api/2.0/settings?withpassword=true` publishes, so the portal can  recognise it later; an empty value leaves the wizard unfinished. | [default to undefined]
**lng** | **string** | The portal interface language, as a culture name such as `en-US`. It has to be one of the cultures enabled  for the installation, and an unknown one leaves the shipped default in place instead of failing the wizard. | [optional] [default to undefined]
**timeZone** | **string** | The time zone every portal date is rendered in, as an IANA identifier such as `Europe/Riga`. A value that  matches nothing falls back to UTC rather than failing the wizard. | [optional] [default to undefined]
**amiId** | **string** | The identifier of the Amazon Machine Image the portal was launched from, for an installation started from an  AWS image. It is recorded for the installation record only and changes nothing about the portal; leave it out  anywhere else. | [optional] [default to undefined]
**subscribeFromSite** | **boolean** | Whether the owner agrees to receive product news at the address in `email`. It is a mailing consent and has  no bearing on the portal notifications, which are subscribed separately. | [optional] [default to undefined]

## Example

```typescript
import { WizardRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: WizardRequestDto = {
    email,
    passwordHash,
    lng,
    timeZone,
    amiId,
    subscribeFromSite,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
