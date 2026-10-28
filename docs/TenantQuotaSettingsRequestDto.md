# TenantQuotaSettingsRequestDto

The storage limit set on one tenant of a self-hosted installation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **number** | The tenant the limit applies to, by tenant ID. Only a self-hosted installation has more than one, which is  why the operation is refused on SaaS. | [default to undefined]
**quota** | **number** | The limit in bytes. A negative value is not a smaller limit but the absence of one: it removes whatever limit  the tenant had. The value is a ceiling on stored data and says nothing about how much of it is already used. | [optional] [default to undefined]

## Example

```typescript
import { TenantQuotaSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantQuotaSettingsRequestDto = {
    tenantId,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
