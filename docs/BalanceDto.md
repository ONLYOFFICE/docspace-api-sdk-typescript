# BalanceDto

Represents a balance with an account number and a list of sub-accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **number** | The account number. | [optional] [default to undefined]
**subAccountNumber** | **number** | The sub-account number. | [optional] [default to undefined]
**accountName** | **string** | The account name. | [optional] [default to undefined]
**accountCurrency** | **string** | The account currency. | [optional] [default to undefined]
**subAccounts** | [**Array&lt;SubAccountDto&gt;**](SubAccountDto.md) | A list of sub-accounts. | [optional] [default to undefined]
**lastCredit** | [**TransactionInfoDto**](TransactionInfoDto.md) | The most recent credit transaction applied to the account. | [optional] [default to undefined]

## Example

```typescript
import { BalanceDto } from '@onlyoffice/docspace-api-sdk';

const instance: BalanceDto = {
    accountNumber,
    subAccountNumber,
    accountName,
    accountCurrency,
    subAccounts,
    lastCredit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
