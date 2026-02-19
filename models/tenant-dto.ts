/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
    'affiliateId'?: string;
    /**
     * The tenant alias.
     */
    'tenantAlias'?: string;
    /**
     * Specifies if the calls are available for this tenant or not.
     */
    'calls'?: boolean;
    /**
     * The tenant campaign.
     */
    'campaign'?: string;
    /**
     * The tenant creation date and time.
     */
    'creationDateTime'?: string;
    /**
     * The hosted region.
     */
    'hostedRegion'?: string;
    /**
     * The tenant ID.
     */
    'tenantId'?: number;
    'industry'?: TenantIndustry;
    /**
     * The tenant language.
     */
    'language'?: string;
    /**
     * The date and time when the tenant was last modified.
     */
    'lastModified'?: string;
    /**
     * The tenant mapped domain.
     */
    'mappedDomain'?: string;
    /**
     * The tenant name.
     */
    'name'?: string;
    /**
     * The tenant owner ID.
     */
    'ownerId'?: string;
    /**
     * The tenant payment ID.
     */
    'paymentId'?: string;
    /**
     * Specifies if the ONLYOFFICE newsletter is allowed or not.
     */
    'spam'?: boolean;
    'status'?: TenantStatus;
    /**
     * The date and time when the tenant status was changed.
     */
    'statusChangeDate'?: string;
    /**
     * The tenant time zone.
     */
    'timeZone'?: string;
    /**
     * The list of tenant trusted domains.
     */
    'trustedDomains'?: Array<string>;
    /**
     * The tenant trusted domains in the string format.
     */
    'trustedDomainsRaw'?: string;
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
    'region'?: string;
}



