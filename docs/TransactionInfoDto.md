# TransactionInfoDto

Represents information about the transaction applied to an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date and time when the credit transaction occurred. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**amount** | **number** | The amount in the specified currency. | [optional] [default to undefined]

## Example

```typescript
import { TransactionInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: TransactionInfoDto = {
    date,
    currency,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
