# TfaSettingsDto

The parameters representing the Two-Factor Authentication (TFA) configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the TFA configuration. | [optional] [default to undefined]
**title** | **string** | The display name or description of the TFA configuration. | [optional] [default to undefined]
**enabled** | **boolean** | Indicates whether the TFA configuration is currently active. | [optional] [default to undefined]
**avaliable** | **boolean** | Indicates whether the TFA configuration can be used. | [optional] [default to undefined]
**trustedIps** | **Array&lt;string&gt;** | The list of IP addresses that are exempt from TFA requirements. | [optional] [default to undefined]
**mandatoryUsers** | **Array&lt;string&gt;** | The list of user IDs that are required to use TFA. | [optional] [default to undefined]
**mandatoryGroups** | **Array&lt;string&gt;** | The list of group IDs whose members are required to use TFA. | [optional] [default to undefined]

## Example

```typescript
import { TfaSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TfaSettingsDto = {
    id,
    title,
    enabled,
    avaliable,
    trustedIps,
    mandatoryUsers,
    mandatoryGroups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
