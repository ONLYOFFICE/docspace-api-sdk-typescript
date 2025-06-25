# DbTenant

The database tenant parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The tenant ID. | [optional] [default to undefined]
**name** | **string** | The tenant name. | [optional] [default to undefined]
**alias** | **string** | The tenant alias. | [optional] [default to undefined]
**mappedDomain** | **string** | Mapped domain | [optional] [default to undefined]
**version** | **number** | The tenant version. | [optional] [default to undefined]
**version_Changed** | **string** | The Version_changed field. | [optional] [default to undefined]
**versionChanged** | **string** | The date and time when the version was changed. | [optional] [default to undefined]
**language** | **string** | The tenant language. | [optional] [default to undefined]
**timeZone** | **string** | The tenant time zone. | [optional] [default to undefined]
**trustedDomainsRaw** | **string** | The tenant trusted domains raw. | [optional] [default to undefined]
**trustedDomainsEnabled** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [optional] [default to undefined]
**status** | [**TenantStatus**](TenantStatus.md) |  | [optional] [default to undefined]
**statusChanged** | **string** | The date and time when the tenant status was changed. | [optional] [default to undefined]
**statusChangedHack** | **string** | The hacked date and time when the tenant status was changed. | [optional] [default to undefined]
**creationDateTime** | **string** | The tenant creation date. | [optional] [default to undefined]
**ownerId** | **string** | The tenant owner ID. | [optional] [default to undefined]
**paymentId** | **string** | The tenant payment ID. | [optional] [default to undefined]
**industry** | [**TenantIndustry**](TenantIndustry.md) |  | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the tenant was last modified. | [optional] [default to undefined]
**calls** | **boolean** | Specifies if the calls are available for the current tenant or not. | [optional] [default to undefined]
**partner** | [**DbTenantPartner**](DbTenantPartner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DbTenant } from '@onlyoffice/docspace-api-typescript';

const instance: DbTenant = {
    id,
    name,
    alias,
    mappedDomain,
    version,
    version_Changed,
    versionChanged,
    language,
    timeZone,
    trustedDomainsRaw,
    trustedDomainsEnabled,
    status,
    statusChanged,
    statusChangedHack,
    creationDateTime,
    ownerId,
    paymentId,
    industry,
    lastModified,
    calls,
    partner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
