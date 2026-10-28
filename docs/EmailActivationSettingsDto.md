# EmailActivationSettingsDto

Whether the calling user is shown the reminder to confirm their email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**show** | **boolean** | Specifies whether the email activation settings are shown or hidden. | [optional] [default to undefined]
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { EmailActivationSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: EmailActivationSettingsDto = {
    show,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
