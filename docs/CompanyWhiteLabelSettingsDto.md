# CompanyWhiteLabelSettingsDto

The vendor details the About page and the notification letters print, shared by the whole installation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **string** | The vendor name the About page shows and the letters sign off with. Until details are saved it holds  whatever the installation ships as its built-in vendor, and it is empty on an installation that ships none. | [default to undefined]
**site** | **string** | The address the vendor name links to, as an absolute URL with its scheme. Empty under the same conditions  as `companyName`. | [default to undefined]
**email** | **string** | The mailbox the About page offers for reaching the vendor. It is not the portal\'s own support address, and  it is empty under the same conditions as `companyName`. | [default to undefined]
**address** | **string** | The postal address of the vendor as one free-form line, in the shape it was saved in - no structure is  imposed on it. | [default to undefined]
**phone** | **string** | The telephone number of the vendor in the shape it was saved in, with no dialling format enforced. | [default to undefined]
**isLicensor** | **boolean** | Whether these details are those of the licensor of the product itself rather than of a reseller. Saving  through `POST api/2.0/settings/rebranding/company` always clears it, so only details that came with the  installation can report `true`. | [default to undefined]
**hideAbout** | **boolean** | Whether the About page is hidden from the interface. A plan that does not include branding cannot switch it  on: the value is stored as `false` in that case, so it can come back different from what was saved. | [default to undefined]
**isDefault** | **boolean** | Whether every field above still matches the installation\'s built-in vendor details. It turns `false` as  soon as one of them is saved differently and `true` again after  `DELETE api/2.0/settings/rebranding/company`. | [default to undefined]

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
