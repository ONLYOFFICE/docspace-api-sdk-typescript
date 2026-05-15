# CreditAiBalanceRequestDto

The request parameters for crediting AI quota to the customer AI subaccount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount to transfer from the main balance to the AI subaccount. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]

## Example

```typescript
import { CreditAiBalanceRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreditAiBalanceRequestDto = {
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
