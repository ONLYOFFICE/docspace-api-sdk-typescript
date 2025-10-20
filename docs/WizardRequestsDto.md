# WizardRequestsDto

The request parameters for initial configuration of the setup wizard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The user\&#39;s email address for authentication and communication. | [default to undefined]
**passwordHash** | **string** | The hashed representation of the user\&#39;s password. | [default to undefined]
**lng** | **string** | The user\&#39;s preferred interface language code. | [optional] [default to undefined]
**timeZone** | **string** | The user\&#39;s time zone identifier. | [optional] [default to undefined]
**amiId** | **string** | The Amazon Machine Image (AMI) identifier. | [optional] [default to undefined]
**subscribeFromSite** | **boolean** | Specifies whether the user opted in for site communications. | [optional] [default to undefined]

## Example

```typescript
import { WizardRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: WizardRequestsDto = {
    email,
    passwordHash,
    lng,
    timeZone,
    amiId,
    subscribeFromSite,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
