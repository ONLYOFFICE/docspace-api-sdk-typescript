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
import type { DbTenantPartner } from './db-tenant-partner';
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
 * The database tenant parameters.
 * @export
 * @interface DbTenant
 */
export interface DbTenant {
    /**
     * The tenant ID.
     * @type {number}
     * @memberof DbTenant
     */
    'id'?: number;
    /**
     * The tenant name.
     * @type {string}
     * @memberof DbTenant
     */
    'name'?: string | null;
    /**
     * The tenant alias.
     * @type {string}
     * @memberof DbTenant
     */
    'alias'?: string | null;
    /**
     * Mapped domain
     * @type {string}
     * @memberof DbTenant
     */
    'mappedDomain'?: string | null;
    /**
     * The tenant version.
     * @type {number}
     * @memberof DbTenant
     */
    'version'?: number;
    /**
     * The Version_changed field.
     * @type {string}
     * @memberof DbTenant
     */
    'version_Changed'?: string | null;
    /**
     * The date and time when the version was changed.
     * @type {string}
     * @memberof DbTenant
     */
    'versionChanged'?: string;
    /**
     * The tenant language.
     * @type {string}
     * @memberof DbTenant
     */
    'language'?: string | null;
    /**
     * The tenant time zone.
     * @type {string}
     * @memberof DbTenant
     */
    'timeZone'?: string | null;
    /**
     * The tenant trusted domains raw.
     * @type {string}
     * @memberof DbTenant
     */
    'trustedDomainsRaw'?: string | null;
    /**
     * 
     * @type {TenantTrustedDomainsType}
     * @memberof DbTenant
     */
    'trustedDomainsEnabled'?: TenantTrustedDomainsType;
    /**
     * 
     * @type {TenantStatus}
     * @memberof DbTenant
     */
    'status'?: TenantStatus;
    /**
     * The date and time when the tenant status was changed.
     * @type {string}
     * @memberof DbTenant
     */
    'statusChanged'?: string | null;
    /**
     * The hacked date and time when the tenant status was changed.
     * @type {string}
     * @memberof DbTenant
     */
    'statusChangedHack'?: string;
    /**
     * The tenant creation date.
     * @type {string}
     * @memberof DbTenant
     */
    'creationDateTime'?: string;
    /**
     * The tenant owner ID.
     * @type {string}
     * @memberof DbTenant
     */
    'ownerId'?: string | null;
    /**
     * The tenant payment ID.
     * @type {string}
     * @memberof DbTenant
     */
    'paymentId'?: string | null;
    /**
     * 
     * @type {TenantIndustry}
     * @memberof DbTenant
     */
    'industry'?: TenantIndustry;
    /**
     * The date and time when the tenant was last modified.
     * @type {string}
     * @memberof DbTenant
     */
    'lastModified'?: string;
    /**
     * Specifies if the calls are available for the current tenant or not.
     * @type {boolean}
     * @memberof DbTenant
     */
    'calls'?: boolean;
    /**
     * 
     * @type {DbTenantPartner}
     * @memberof DbTenant
     */
    'partner'?: DbTenantPartner;
}



