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
 */
export interface DbTenant {
    /**
     * The tenant ID.
     */
    'id'?: number;
    /**
     * The tenant name.
     */
    'name'?: string | null;
    /**
     * The tenant alias.
     */
    'alias'?: string | null;
    /**
     * Mapped domain
     */
    'mappedDomain'?: string | null;
    /**
     * The tenant version.
     */
    'version'?: number;
    /**
     * The Version_changed field.
     */
    'version_Changed'?: string | null;
    /**
     * The date and time when the version was changed.
     */
    'versionChanged'?: string;
    /**
     * The tenant language.
     */
    'language'?: string | null;
    /**
     * The tenant time zone.
     */
    'timeZone'?: string | null;
    /**
     * The tenant trusted domains raw.
     */
    'trustedDomainsRaw'?: string | null;
    'trustedDomainsEnabled'?: TenantTrustedDomainsType;
    'status'?: TenantStatus;
    /**
     * The date and time when the tenant status was changed.
     */
    'statusChanged'?: string | null;
    /**
     * The hacked date and time when the tenant status was changed.
     */
    'statusChangedHack'?: string;
    /**
     * The tenant creation date.
     */
    'creationDateTime'?: string;
    /**
     * The tenant owner ID.
     */
    'ownerId'?: string | null;
    /**
     * The tenant payment ID.
     */
    'paymentId'?: string | null;
    'industry'?: TenantIndustry;
    /**
     * The date and time when the tenant was last modified.
     */
    'lastModified'?: string;
    /**
     * Specifies if the calls are available for the current tenant or not.
     */
    'calls'?: boolean;
    'partner'?: DbTenantPartner;
}



