# Balance

Represents a balance with an account number and a list of sub-accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **number** | The account number. | [optional] [default to undefined]
**subAccounts** | [**Array&lt;SubAccount&gt;**](SubAccount.md) | A list of sub-accounts. | [optional] [default to undefined]

## Example

```typescript
import { Balance } from '@onlyoffice/docspace-api-typescript';

const instance: Balance = {
    accountNumber,
    subAccounts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
