# SubAccount

Represents a sub-account with a specific currency and amount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The three-character ISO 4217 currency symbol of the sub-account. | [optional] [default to undefined]
**amount** | **number** | The amount of the sub-account. | [optional] [default to undefined]

## Example

```typescript
import { SubAccount } from '@onlyoffice/docspace-api-sdk';

const instance: SubAccount = {
    currency,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
