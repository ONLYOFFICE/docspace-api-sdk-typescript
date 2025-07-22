# CompanyWhiteLabelSettingsDto

The company white label settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **string** | The company name. | [optional] [default to undefined]
**site** | **string** | The company site. | [optional] [default to undefined]
**email** | **string** | The company email address. | [optional] [default to undefined]
**address** | **string** | The company address. | [optional] [default to undefined]
**phone** | **string** | The company phone number. | [optional] [default to undefined]
**isLicensor** | **boolean** | Specifies if a company is a licensor or not. | [optional] [default to undefined]
**isDefault** | **boolean** | Specifies if company white label settings are default or not. | [optional] [default to undefined]

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
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
