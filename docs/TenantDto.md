# TenantDto

The tenant parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliateId** | **string** | The affiliate ID. | [optional] [default to undefined]
**tenantAlias** | **string** | The tenant alias. | [optional] [default to undefined]
**calls** | **boolean** | Specifies if the calls are available for this tenant or not. | [optional] [default to undefined]
**campaign** | **string** | The tenant campaign. | [optional] [default to undefined]
**creationDateTime** | **string** | The tenant creation date and time. | [optional] [readonly] [default to undefined]
**hostedRegion** | **string** | The hosted region. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [readonly] [default to undefined]
**industry** | [**TenantIndustry**](TenantIndustry.md) |  | [optional] [default to undefined]
**language** | **string** | The tenant language. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the tenant was last modified. | [optional] [default to undefined]
**mappedDomain** | **string** | The tenant mapped domain. | [optional] [default to undefined]
**name** | **string** | The tenant name. | [optional] [default to undefined]
**ownerId** | **string** | The tenant owner ID. | [optional] [default to undefined]
**paymentId** | **string** | The tenant payment ID. | [optional] [default to undefined]
**spam** | **boolean** | Specifies if the ONLYOFFICE newsletter is allowed or not. | [optional] [default to undefined]
**status** | [**TenantStatus**](TenantStatus.md) |  | [optional] [default to undefined]
**statusChangeDate** | **string** | The date and time when the tenant status was changed. | [optional] [readonly] [default to undefined]
**timeZone** | **string** | The tenant time zone. | [optional] [default to undefined]
**trustedDomains** | **Array&lt;string&gt;** | The list of tenant trusted domains. | [optional] [default to undefined]
**trustedDomainsRaw** | **string** | The tenant trusted domains in the string format. | [optional] [default to undefined]
**trustedDomainsType** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [optional] [default to undefined]
**version** | **number** | The tenant version | [optional] [default to undefined]
**versionChanged** | **string** | The date and time when the tenant version was changed. | [optional] [default to undefined]
**region** | **string** | The tenant AWS region. | [optional] [default to undefined]

## Example

```typescript
import { TenantDto } from '@onlyoffice/docspace-api-typescript';

const instance: TenantDto = {
    affiliateId,
    tenantAlias,
    calls,
    campaign,
    creationDateTime,
    hostedRegion,
    tenantId,
    industry,
    language,
    lastModified,
    mappedDomain,
    name,
    ownerId,
    paymentId,
    spam,
    status,
    statusChangeDate,
    timeZone,
    trustedDomains,
    trustedDomainsRaw,
    trustedDomainsType,
    version,
    versionChanged,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
