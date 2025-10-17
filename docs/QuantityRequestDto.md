# QuantityRequestDto

The request parameters for specifying payment quantity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **{ [key: string]: number; }** | The mapping of item identifiers to their respective quantities in the payment. | [optional] [default to undefined]

## Example

```typescript
import { QuantityRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: QuantityRequestDto = {
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
