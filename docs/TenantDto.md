# TenantDto

The record of one portal: its name, owner, language, time zone and lifecycle state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliateId** | **string** | The partner the portal was signed up through, empty for a portal that came in directly. It is bookkeeping  for the vendor and has no bearing on what the portal may do. | [optional] [default to undefined]
**tenantAlias** | **string** | The portal\'s own name within the installation, which together with the installation\'s base domain forms  the address it is reached at. A caller without the portal-settings right gets `tenantId` alone, so an  empty value here is the sign that the rest of this object was withheld rather than unset. | [optional] [default to undefined]
**calls** | **boolean** | Whether telephony is switched on for the portal. It is carried over from portal registration and stays  `false` on a DocSpace portal, where the feature does not exist. | [optional] [default to undefined]
**campaign** | **string** | The marketing campaign the portal was signed up under, empty for a portal that came in outside one. Like  `affiliateId`, it is bookkeeping only. | [optional] [default to undefined]
**creationDateTime** | **string** | When the portal was created, in UTC rather than in the portal time zone. | [optional] [readonly] [default to undefined]
**hostedRegion** | **string** | The data-centre region written on the portal record itself, as opposed to `region`, which is looked up  from the hosting service. It is empty on a server installation. | [optional] [default to undefined]
**tenantId** | **number** | The numeric identifier of the portal inside the installation. It is the one field every caller gets,  whatever their rights. | [optional] [readonly] [default to undefined]
**industry** | [**TenantIndustry**](TenantIndustry.md) | The line of business chosen when the portal was created. It only steers what the vendor suggests and  restricts nothing. | [optional] [default to undefined]
**language** | **string** | The default language of the portal as a culture name, the same value `GET api/2.0/settings` reports as  `culture`. A member may have a language of their own, which this does not reflect. | [optional] [default to undefined]
**lastModified** | **string** | When any field of this record last changed, in UTC. It does not move when portal settings outside this  record are changed. | [optional] [default to undefined]
**mappedDomain** | **string** | The custom domain the portal answers on in addition to its own address, empty when none has been set up. | [optional] [default to undefined]
**name** | **string** | The portal title as shown to people, which is what `GET api/2.0/settings` returns as  `greetingSettings`. It is free text, unlike `tenantAlias`, and empty until someone sets it. | [optional] [default to undefined]
**ownerId** | **string** | The portal owner, the one account that cannot be removed or demoted.  `PUT api/2.0/settings/owner` hands the role over. | [optional] [default to undefined]
**paymentId** | **string** | The portal\'s identifier in the billing system, empty for a portal that has never been billed. The  subscription itself is read with `GET api/2.0/portal/tariff`. | [optional] [default to undefined]
**spam** | **boolean** | Whether the owner agreed to receive the vendor\'s newsletter. Despite the name it does not mark the portal  as a spammer and affects nothing but marketing mail. | [optional] [default to undefined]
**status** | [**TenantStatus**](TenantStatus.md) | The lifecycle state of the portal. Anything other than active means most operations are refused for the  moment, because the portal is being transferred, restored, encrypted or removed. | [optional] [default to undefined]
**statusChangeDate** | **string** | When `status` last changed, in UTC. For a portal pending removal it is the moment the countdown to  deletion started. | [optional] [readonly] [default to undefined]
**timeZone** | **string** | The portal time zone, which is the zone the dates this API calls portal time are expressed in. It may be  stored as a Windows identifier here, while `GET api/2.0/settings` always reports the IANA form. | [optional] [default to undefined]
**trustedDomains** | **Array&lt;string&gt;** | The mail domains a new member may register or be invited from without confirming the address. It is empty  whenever `trustedDomainsType` is not `Custom`. | [optional] [default to undefined]
**trustedDomainsRaw** | **string** | The same domains as the single stored string they are kept in, separated by commas. Read  `trustedDomains` instead; this one exists because it is what the record holds. | [optional] [default to undefined]
**trustedDomainsType** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) | How the mail domains are applied: no domain trusted, every domain trusted, or only the listed ones. Only  the last of the three makes `trustedDomains` meaningful. | [optional] [default to undefined]
**version** | **number** | The identifier of the portal version the installation pins this portal to, which is an internal number  and not the product version string that `GET api/2.0/settings` reports as `version`. | [optional] [default to undefined]
**versionChanged** | **string** | When `version` last changed, in UTC. It stays at its zero value on a portal whose version has never been  switched. | [optional] [default to undefined]
**region** | **string** | The data-centre region the portal is actually served from, looked up from the hosting service. It is  empty on a server installation and also whenever the installation\'s portal cache is switched off, so an  empty value does not mean the portal has no region - `hostedRegion` is the value from the record itself. | [optional] [default to undefined]

## Example

```typescript
import { TenantDto } from '@onlyoffice/docspace-api-sdk';

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
