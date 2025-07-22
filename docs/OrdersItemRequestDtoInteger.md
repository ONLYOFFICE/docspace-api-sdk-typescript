# OrdersItemRequestDtoInteger

An item in the ordering request with its entry type and ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryId** | **number** | The entry unique identifier (file or folder). | [optional] [default to undefined]
**entryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] [default to undefined]
**order** | **number** | The order value. | [optional] [default to undefined]

## Example

```typescript
import { OrdersItemRequestDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: OrdersItemRequestDtoInteger = {
    entryId,
    entryType,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
