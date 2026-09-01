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
 * The tenant parameters.
 */
export interface TenantDto {
    /**
     * The affiliate ID.
     */
    'affiliateId'?: string | null;
    /**
     * The tenant alias.
     */
    'tenantAlias'?: string | null;
    /**
     * Specifies if the calls are available for this tenant or not.
     */
    'calls'?: boolean;
    /**
     * The tenant campaign.
     */
    'campaign'?: string | null;
    /**
     * The tenant creation date and time.
     */
    'creationDateTime'?: string;
    /**
     * The hosted region.
     */
    'hostedRegion'?: string | null;
    /**
     * The tenant ID.
     */
    'tenantId'?: number;
    /**
     * The tenant industry.
     */
    'industry'?: TenantIndustry;
    /**
     * The tenant language.
     */
    'language'?: string | null;
    /**
     * The date and time when the tenant was last modified.
     */
    'lastModified'?: string;
    /**
     * The tenant mapped domain.
     */
    'mappedDomain'?: string | null;
    /**
     * The tenant name.
     */
    'name'?: string | null;
    /**
     * The tenant owner ID.
     */
    'ownerId'?: string;
    /**
     * The tenant payment ID.
     */
    'paymentId'?: string | null;
    /**
     * Specifies if the ONLYOFFICE newsletter is allowed or not.
     */
    'spam'?: boolean;
    /**
     * The tenant status.
     */
    'status'?: TenantStatus;
    /**
     * The date and time when the tenant status was changed.
     */
    'statusChangeDate'?: string;
    /**
     * The tenant time zone.
     */
    'timeZone'?: string | null;
    /**
     * The list of tenant trusted domains.
     */
    'trustedDomains'?: Array<string> | null;
    /**
     * The tenant trusted domains in the string format.
     */
    'trustedDomainsRaw'?: string | null;
    /**
     * The type of the tenant trusted domains.
     */
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The tenant version
     */
    'version'?: number;
    /**
     * The date and time when the tenant version was changed.
     */
    'versionChanged'?: string;
    /**
     * The tenant AWS region.
     */
    'region'?: string | null;
}



