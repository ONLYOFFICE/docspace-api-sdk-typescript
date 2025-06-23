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



