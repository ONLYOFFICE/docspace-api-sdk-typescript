# TenantAuditSettingsDto

How long the portal keeps its login history and its audit trail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginHistoryLifeTime** | **number** | How many days login events are kept, from 1 to 180; 180 when the portal never changed it. | [optional] [default to undefined]
**auditTrailLifeTime** | **number** | How many days audit trail events are kept, from 1 to 180; 180 when the portal never changed it. | [optional] [default to undefined]
**lastModified** | **string** | When the pair was last stored; when it never was, the moment it was read instead. | [optional] [default to undefined]

## Example

```typescript
import { TenantAuditSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantAuditSettingsDto = {
    loginHistoryLifeTime,
    auditTrailLifeTime,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
