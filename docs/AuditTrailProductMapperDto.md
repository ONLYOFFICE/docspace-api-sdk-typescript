# AuditTrailProductMapperDto

The audit trail actions of one product, grouped by module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productType** | **string** | The product this branch of the tree belongs to, as the `productType` filter of this operation spells it and  as `GET api/2.0/security/audit/types` lists it under `productTypes`. | [optional] [default to undefined]
**modules** | [**Array&lt;AuditTrailModuleMapperDto&gt;**](AuditTrailModuleMapperDto.md) | The locations inside the product. It is empty when `moduleType` was passed and this product has no module  of that name, which is why a product can come back with nothing under it. | [optional] [default to undefined]

## Example

```typescript
import { AuditTrailProductMapperDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuditTrailProductMapperDto = {
    productType,
    modules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
