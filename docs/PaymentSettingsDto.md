# PaymentSettingsDto

The payment settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salesEmail** | **string** | The email address for sales inquiries and support. | [default to undefined]
**feedbackAndSupportUrl** | **string** | The URL for accessing the feedback and support resources. | [optional] [default to undefined]
**buyUrl** | **string** | The URL for purchasing or upgrading the product. | [default to undefined]
**standalone** | **boolean** | Indicates whether the system is running in standalone mode. | [default to undefined]
**currentLicense** | [**CurrentLicenseInfo**](CurrentLicenseInfo.md) |  | [default to undefined]
**max** | **number** | The maximum quota quantity. | [default to undefined]

## Example

```typescript
import { PaymentSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PaymentSettingsDto = {
    salesEmail,
    feedbackAndSupportUrl,
    buyUrl,
    standalone,
    currentLicense,
    max,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
