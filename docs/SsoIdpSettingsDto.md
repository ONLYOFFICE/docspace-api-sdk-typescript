# SsoIdpSettingsDto

The identity provider the portal trusts: its entity id, endpoints and bindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **string** | The entity ID. | [optional] [default to undefined]
**ssoUrl** | **string** | The SSO URL. | [optional] [default to undefined]
**ssoBinding** | **string** | The SSO binding. | [optional] [default to undefined]
**sloUrl** | **string** | The SLO URL. | [optional] [default to undefined]
**sloBinding** | **string** | The SLO binding. | [optional] [default to undefined]
**nameIdFormat** | **string** | The name ID format. | [optional] [default to undefined]

## Example

```typescript
import { SsoIdpSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoIdpSettingsDto = {
    entityId,
    ssoUrl,
    ssoBinding,
    sloUrl,
    sloBinding,
    nameIdFormat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
