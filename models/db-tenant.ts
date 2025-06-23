// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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



