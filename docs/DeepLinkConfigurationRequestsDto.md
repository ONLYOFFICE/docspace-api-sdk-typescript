# DeepLinkConfigurationRequestsDto

How the portal opens its links on a mobile device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deepLinkSettings** | [**TenantDeepLinkSettings**](TenantDeepLinkSettings.md) | The deep link configuration to store. Only its `handlingMode` is read - whether a link always opens in the  browser, always in the native application, or asks the user each time - and a mode outside the defined set is  refused with 400 before anything is stored. | [optional] [default to undefined]

## Example

```typescript
import { DeepLinkConfigurationRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: DeepLinkConfigurationRequestsDto = {
    deepLinkSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
