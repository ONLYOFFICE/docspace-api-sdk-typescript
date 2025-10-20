# CompanyWhiteLabelSettingsDto

The company white label settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **string** | The company name. | [default to undefined]
**site** | **string** | The company site. | [default to undefined]
**email** | **string** | The company email address. | [default to undefined]
**address** | **string** | The company address. | [default to undefined]
**phone** | **string** | The company phone number. | [default to undefined]
**isLicensor** | **boolean** | Specifies if a company is a licensor or not. | [default to undefined]
**hideAbout** | **boolean** | Specifies if the About page is visible or not. | [default to undefined]
**isDefault** | **boolean** | Specifies if these settings are default or not. | [default to undefined]

## Example

```typescript
import { CompanyWhiteLabelSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: CompanyWhiteLabelSettingsDto = {
    companyName,
    site,
    email,
    address,
    phone,
    isLicensor,
    hideAbout,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
