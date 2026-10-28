# CurrenciesDto

One currency the portal\'s subscription prices can be quoted in, with the region it belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isoCountryCode** | **string** | The two-letter ISO code of the country the currency is that of, which is the region the price list was  picked for rather than the country of the caller. | [optional] [default to undefined]
**isoCurrencySymbol** | **string** | The three-letter ISO 4217 code of the currency. On the first item of the answer it is the currency the  amounts from `GET api/2.0/portal/payment/prices` are expressed in. | [optional] [default to undefined]
**currencyNativeName** | **string** | The currency name in the language of its own region - not in the portal language, and not a symbol. | [optional] [default to undefined]

## Example

```typescript
import { CurrenciesDto } from '@onlyoffice/docspace-api-sdk';

const instance: CurrenciesDto = {
    isoCountryCode,
    isoCurrencySymbol,
    currencyNativeName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
