# IpRestrictionsSettingsDto

Whether the portal limits sign-in to its list of allowed IP addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **boolean** | Specifies if the IP restrictions are enabled or not. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionsSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionsSettingsDto = {
    enable,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
