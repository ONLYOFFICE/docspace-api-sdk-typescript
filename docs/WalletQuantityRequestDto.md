# WalletQuantityRequestDto

The request parameters for the wallet payment quantity specifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **{ [key: string]: number | null; }** | The mapping of item identifiers with their respective quantities in the payment. | [optional] [default to undefined]
**productQuantityType** | [**ProductQuantityType**](ProductQuantityType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WalletQuantityRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: WalletQuantityRequestDto = {
    quantity,
    productQuantityType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
