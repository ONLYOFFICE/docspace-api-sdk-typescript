# OrdersRequestDto

The request that moves several files and folders to given positions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrdersItemRequestDto&gt;**](OrdersItemRequestDto.md) | The entries to move, applied one after another in the order they are sent, so each of them shifts the  neighbours the ones before it left behind. | [default to undefined]

## Example

```typescript
import { OrdersRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: OrdersRequestDto = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
