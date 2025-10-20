# TopUpDepositRequestDto

The request parameters for putting money on deposit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of money for the operation. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]

## Example

```typescript
import { TopUpDepositRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TopUpDepositRequestDto = {
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
