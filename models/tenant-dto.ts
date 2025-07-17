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
 * @export
 * @interface TenantDto
 */
export interface TenantDto {
    /**
     * The affiliate ID.
     * @type {string}
     * @memberof TenantDto
     */
    'affiliateId'?: string | null;
    /**
     * The tenant alias.
     * @type {string}
     * @memberof TenantDto
     */
    'tenantAlias'?: string | null;
    /**
     * Specifies if the calls are available for this tenant or not.
     * @type {boolean}
     * @memberof TenantDto
     */
    'calls'?: boolean;
    /**
     * The tenant campaign.
     * @type {string}
     * @memberof TenantDto
     */
    'campaign'?: string | null;
    /**
     * The tenant creation date and time.
     * @type {string}
     * @memberof TenantDto
     */
    'creationDateTime'?: string;
    /**
     * The hosted region.
     * @type {string}
     * @memberof TenantDto
     */
    'hostedRegion'?: string | null;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof TenantDto
     */
    'tenantId'?: number;
    /**
     * 
     * @type {TenantIndustry}
     * @memberof TenantDto
     */
    'industry'?: TenantIndustry;
    /**
     * The tenant language.
     * @type {string}
     * @memberof TenantDto
     */
    'language'?: string | null;
    /**
     * The date and time when the tenant was last modified.
     * @type {string}
     * @memberof TenantDto
     */
    'lastModified'?: string;
    /**
     * The tenant mapped domain.
     * @type {string}
     * @memberof TenantDto
     */
    'mappedDomain'?: string | null;
    /**
     * The tenant name.
     * @type {string}
     * @memberof TenantDto
     */
    'name'?: string | null;
    /**
     * The tenant owner ID.
     * @type {string}
     * @memberof TenantDto
     */
    'ownerId'?: string;
    /**
     * The tenant payment ID.
     * @type {string}
     * @memberof TenantDto
     */
    'paymentId'?: string | null;
    /**
     * Specifies if the ONLYOFFICE newsletter is allowed or not.
     * @type {boolean}
     * @memberof TenantDto
     */
    'spam'?: boolean;
    /**
     * 
     * @type {TenantStatus}
     * @memberof TenantDto
     */
    'status'?: TenantStatus;
    /**
     * The date and time when the tenant status was changed.
     * @type {string}
     * @memberof TenantDto
     */
    'statusChangeDate'?: string;
    /**
     * The tenant time zone.
     * @type {string}
     * @memberof TenantDto
     */
    'timeZone'?: string | null;
    /**
     * The list of tenant trusted domains.
     * @type {Array<string>}
     * @memberof TenantDto
     */
    'trustedDomains'?: Array<string> | null;
    /**
     * The tenant trusted domains in the string format.
     * @type {string}
     * @memberof TenantDto
     */
    'trustedDomainsRaw'?: string | null;
    /**
     * 
     * @type {TenantTrustedDomainsType}
     * @memberof TenantDto
     */
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The tenant version
     * @type {number}
     * @memberof TenantDto
     */
    'version'?: number;
    /**
     * The date and time when the tenant version was changed.
     * @type {string}
     * @memberof TenantDto
     */
    'versionChanged'?: string;
    /**
     * The tenant AWS region.
     * @type {string}
     * @memberof TenantDto
     */
    'region'?: string | null;
}



