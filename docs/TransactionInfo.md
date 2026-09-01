# TransactionInfo

Represents information about the transaction applied to an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**amount** | **number** | The amount in the specified currency. | [optional] [default to undefined]
**date** | **string** | The date and time when the credit transaction occurred. | [optional] [default to undefined]

## Example

```typescript
import { TransactionInfo } from '@onlyoffice/docspace-api-sdk';

const instance: TransactionInfo = {
    currency,
    amount,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
