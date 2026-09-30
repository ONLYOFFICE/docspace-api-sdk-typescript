# OrderRequestDto

The position an entry is to take inside its folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **number** | The position the entry is to take, counting from 1. The entry that held it, and everything after it, is  shifted to make room. A dotted path such as 1.2.3 is accepted as well, of which only the last segment is  read. | [optional] [default to undefined]

## Example

```typescript
import { OrderRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: OrderRequestDto = {
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
