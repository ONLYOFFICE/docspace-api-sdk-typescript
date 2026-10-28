# SaveCompanyInfoRequest

The company the installation is branded for, as shown on the About page and in letters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **string** | The company name. | [optional] [default to undefined]
**site** | **string** | The company website, as an absolute URL. | [optional] [default to undefined]
**email** | **string** | The contact email address. | [optional] [default to undefined]
**address** | **string** | The postal address. | [optional] [default to undefined]
**phone** | **string** | The contact phone number. | [optional] [default to undefined]
**IsLicensor** | **boolean** | Accepted for compatibility with earlier clients and not read: saved details are never those of the licensor, so the server always stores `false`. | [optional] [default to undefined]
**hideAbout** | **boolean** | Whether the About page is hidden. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { SaveCompanyInfoRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SaveCompanyInfoRequest = {
    companyName,
    site,
    email,
    address,
    phone,
    IsLicensor,
    hideAbout,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
