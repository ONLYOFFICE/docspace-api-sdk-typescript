# SubAccountDto

A sub-account of the wallet: its currency and balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**amount** | **number** | The amount in the specified currency. | [optional] [default to undefined]

## Example

```typescript
import { SubAccountDto } from '@onlyoffice/docspace-api-sdk';

const instance: SubAccountDto = {
    currency,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
