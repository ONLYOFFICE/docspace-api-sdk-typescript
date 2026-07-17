# TransactionInfo

Represents information about the transaction applied to an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date and time when the credit transaction occurred. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the transaction. | [optional] [default to undefined]
**amount** | **number** | Amount of the transaction. | [optional] [default to undefined]

## Example

```typescript
import { TransactionInfo } from '@onlyoffice/docspace-api-sdk';

const instance: TransactionInfo = {
    date,
    currency,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
