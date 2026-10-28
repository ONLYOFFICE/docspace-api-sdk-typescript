# SetAuditLifetimeSettingsRequest

How long the portal keeps its two security logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginHistoryLifeTime** | **number** | How many days login events are kept, from 1 to 180. | [optional] [default to undefined]
**auditTrailLifeTime** | **number** | How many days audit trail events are kept, from 1 to 180. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { SetAuditLifetimeSettingsRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SetAuditLifetimeSettingsRequest = {
    loginHistoryLifeTime,
    auditTrailLifeTime,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
