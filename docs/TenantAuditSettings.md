# TenantAuditSettings

The tenant audit settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginHistoryLifeTime** | **number** | The login history lifetime. | [optional] [default to undefined]
**auditTrailLifeTime** | **number** | The audit trail lifetime. | [optional] [default to undefined]
**lastModified** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantAuditSettings } from '@onlyoffice/docspace-api-sdk';

const instance: TenantAuditSettings = {
    loginHistoryLifeTime,
    auditTrailLifeTime,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
