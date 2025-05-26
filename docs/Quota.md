# Quota

The quota parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota ID. | [optional] [default to undefined]
**quantity** | **number** | The quota quantity. | [optional] [default to undefined]
**wallet** | **boolean** | The quota applies to the wallet or not | [optional] [default to undefined]
**dueDate** | **string** | The quota due date. | [optional] [default to undefined]
**nextQuantity** | **number** | The quota next quantity. | [optional] [default to undefined]

## Example

```typescript
import { Quota } from '@onlyoffice/docspace-api-typescript';

const instance: Quota = {
    id,
    quantity,
    wallet,
    dueDate,
    nextQuantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
