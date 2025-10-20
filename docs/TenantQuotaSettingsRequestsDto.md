# TenantQuotaSettingsRequestsDto

The request parameters for managing the tenant storage quota settings in a multi-tenant system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **number** | The ID of the tenant whose quota is being configured. | [default to undefined]
**quota** | **number** | The storage quota limit in bytes allocated to the tenant. | [optional] [default to undefined]

## Example

```typescript
import { TenantQuotaSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantQuotaSettingsRequestsDto = {
    tenantId,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
