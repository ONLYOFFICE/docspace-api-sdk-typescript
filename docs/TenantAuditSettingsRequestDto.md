# TenantAuditSettingsRequestDto

The body of an audit lifetime change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**SetAuditLifetimeSettingsRequest**](SetAuditLifetimeSettingsRequest.md) | The login history and audit trail lifetimes to store. | [optional] [default to undefined]

## Example

```typescript
import { TenantAuditSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantAuditSettingsRequestDto = {
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
