/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// May contain unused imports in some cases
// @ts-ignore
import type { TenantIndustry } from './tenant-industry';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantStatus } from './tenant-status';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantTrustedDomainsType } from './tenant-trusted-domains-type';

/**
 * The record of one portal: its name, owner, language, time zone and lifecycle state.
 */
export interface TenantDto {
    /**
     * The partner the portal was signed up through, empty for a portal that came in directly. It is bookkeeping  for the vendor and has no bearing on what the portal may do.
     */
    'affiliateId'?: string | null;
    /**
     * The portal\'s own name within the installation, which together with the installation\'s base domain forms  the address it is reached at. A caller without the portal-settings right gets `tenantId` alone, so an  empty value here is the sign that the rest of this object was withheld rather than unset.
     */
    'tenantAlias'?: string | null;
    /**
     * Whether telephony is switched on for the portal. It is carried over from portal registration and stays  `false` on a DocSpace portal, where the feature does not exist.
     */
    'calls'?: boolean;
    /**
     * The marketing campaign the portal was signed up under, empty for a portal that came in outside one. Like  `affiliateId`, it is bookkeeping only.
     */
    'campaign'?: string | null;
    /**
     * When the portal was created, in UTC rather than in the portal time zone.
     */
    'creationDateTime'?: string;
    /**
     * The data-centre region written on the portal record itself, as opposed to `region`, which is looked up  from the hosting service. It is empty on a server installation.
     */
    'hostedRegion'?: string | null;
    /**
     * The numeric identifier of the portal inside the installation. It is the one field every caller gets,  whatever their rights.
     */
    'tenantId'?: number;
    /**
     * The line of business chosen when the portal was created. It only steers what the vendor suggests and  restricts nothing.
     */
    'industry'?: TenantIndustry;
    /**
     * The default language of the portal as a culture name, the same value `GET api/2.0/settings` reports as  `culture`. A member may have a language of their own, which this does not reflect.
     */
    'language'?: string | null;
    /**
     * When any field of this record last changed, in UTC. It does not move when portal settings outside this  record are changed.
     */
    'lastModified'?: string;
    /**
     * The custom domain the portal answers on in addition to its own address, empty when none has been set up.
     */
    'mappedDomain'?: string | null;
    /**
     * The portal title as shown to people, which is what `GET api/2.0/settings` returns as  `greetingSettings`. It is free text, unlike `tenantAlias`, and empty until someone sets it.
     */
    'name'?: string | null;
    /**
     * The portal owner, the one account that cannot be removed or demoted.  `PUT api/2.0/settings/owner` hands the role over.
     */
    'ownerId'?: string;
    /**
     * The portal\'s identifier in the billing system, empty for a portal that has never been billed. The  subscription itself is read with `GET api/2.0/portal/tariff`.
     */
    'paymentId'?: string | null;
    /**
     * Whether the owner agreed to receive the vendor\'s newsletter. Despite the name it does not mark the portal  as a spammer and affects nothing but marketing mail.
     */
    'spam'?: boolean;
    /**
     * The lifecycle state of the portal. Anything other than active means most operations are refused for the  moment, because the portal is being transferred, restored, encrypted or removed.
     */
    'status'?: TenantStatus;
    /**
     * When `status` last changed, in UTC. For a portal pending removal it is the moment the countdown to  deletion started.
     */
    'statusChangeDate'?: string;
    /**
     * The portal time zone, which is the zone the dates this API calls portal time are expressed in. It may be  stored as a Windows identifier here, while `GET api/2.0/settings` always reports the IANA form.
     */
    'timeZone'?: string | null;
    /**
     * The mail domains a new member may register or be invited from without confirming the address. It is empty  whenever `trustedDomainsType` is not `Custom`.
     */
    'trustedDomains'?: Array<string> | null;
    /**
     * The same domains as the single stored string they are kept in, separated by commas. Read  `trustedDomains` instead; this one exists because it is what the record holds.
     */
    'trustedDomainsRaw'?: string | null;
    /**
     * How the mail domains are applied: no domain trusted, every domain trusted, or only the listed ones. Only  the last of the three makes `trustedDomains` meaningful.
     */
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The identifier of the portal version the installation pins this portal to, which is an internal number  and not the product version string that `GET api/2.0/settings` reports as `version`.
     */
    'version'?: number;
    /**
     * When `version` last changed, in UTC. It stays at its zero value on a portal whose version has never been  switched.
     */
    'versionChanged'?: string;
    /**
     * The data-centre region the portal is actually served from, looked up from the hosting service. It is  empty on a server installation and also whenever the installation\'s portal cache is switched off, so an  empty value does not mean the portal has no region - `hostedRegion` is the value from the record itself.
     */
    'region'?: string | null;
}



