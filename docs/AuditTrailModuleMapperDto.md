# AuditTrailModuleMapperDto

The audit trail actions of one module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moduleType** | **string** | The location inside the product, as the `moduleType` filter of `GET api/2.0/security/audit/events/filter`  spells it. | [optional] [default to undefined]
**actions** | [**Array&lt;AuditTrailActionMapperDto&gt;**](AuditTrailActionMapperDto.md) | Every action this module can record. Each action appears under exactly one module, so this tree is where a  caller learns which module a given action belongs to. | [optional] [default to undefined]

## Example

```typescript
import { AuditTrailModuleMapperDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuditTrailModuleMapperDto = {
    moduleType,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
