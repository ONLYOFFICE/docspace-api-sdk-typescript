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


/**
 * The current tenant quota.
 * @export
 * @interface TenantQuota
 */
export interface TenantQuota {
    /**
     * The tenant ID.
     * @type {number}
     * @memberof TenantQuota
     */
    'tenantId'?: number;
    /**
     * The tenant name.
     * @type {string}
     * @memberof TenantQuota
     */
    'name'?: string | null;
    /**
     * The tenant price.
     * @type {number}
     * @memberof TenantQuota
     */
    'price'?: number;
    /**
     * The tenant price currency symbol.
     * @type {string}
     * @memberof TenantQuota
     */
    'priceCurrencySymbol'?: string | null;
    /**
     * The tenant price three-character ISO 4217 currency symbol.
     * @type {string}
     * @memberof TenantQuota
     */
    'priceISOCurrencySymbol'?: string | null;
    /**
     * The tenant product ID.
     * @type {string}
     * @memberof TenantQuota
     */
    'productId'?: string | null;
    /**
     * Specifies if the tenant quota is visible or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'visible'?: boolean;
    /**
     * Specifies if the tenant quota applies to the wallet or not
     * @type {boolean}
     * @memberof TenantQuota
     */
    'wallet'?: boolean;
    /**
     * The quota due date.
     * @type {string}
     * @memberof TenantQuota
     */
    'dueDate'?: string | null;
    /**
     * The tenant quota features.
     * @type {string}
     * @memberof TenantQuota
     */
    'features'?: string | null;
    /**
     * The tenant maximum file size.
     * @type {number}
     * @memberof TenantQuota
     */
    'maxFileSize'?: number;
    /**
     * The tenant maximum total size.
     * @type {number}
     * @memberof TenantQuota
     */
    'maxTotalSize'?: number;
    /**
     * The number of portal users.
     * @type {number}
     * @memberof TenantQuota
     */
    'countUser'?: number;
    /**
     * The number of portal room administrators.
     * @type {number}
     * @memberof TenantQuota
     */
    'countRoomAdmin'?: number;
    /**
     * The number of room users.
     * @type {number}
     * @memberof TenantQuota
     */
    'usersInRoom'?: number;
    /**
     * The number of rooms.
     * @type {number}
     * @memberof TenantQuota
     */
    'countRoom'?: number;
    /**
     * Specifies if the tenant quota is nonprofit or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'nonProfit'?: boolean;
    /**
     * Specifies if the tenant quota is trial or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'trial'?: boolean;
    /**
     * Specifies if the tenant quota is free or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'free'?: boolean;
    /**
     * Specifies if the tenant quota is updated or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'update'?: boolean;
    /**
     * Specifies if the audit trail is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'audit'?: boolean;
    /**
     * Specifies if ONLYOFFICE Docs is included in the tenant quota or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'docsEdition'?: boolean;
    /**
     * Specifies if the LDAP settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'ldap'?: boolean;
    /**
     * Specifies if the SSO settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'sso'?: boolean;
    /**
     * Specifies if the statistics settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'statistic'?: boolean;
    /**
     * Specifies if the branding settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'branding'?: boolean;
    /**
     * Specifies if the customization settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'customization'?: boolean;
    /**
     * Specifies if the license has the lifetime settings or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'lifetime'?: boolean;
    /**
     * Specifies if the custom domain URL is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'custom'?: boolean;
    /**
     * Specifies if the automatic backup option is enabled or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'autoBackupRestore'?: boolean;
    /**
     * Specifies if Oauth is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'oauth'?: boolean;
    /**
     * Specifies if the content search is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'contentSearch'?: boolean;
    /**
     * Specifies if the third-party accounts linking is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'thirdParty'?: boolean;
    /**
     * Specifies if the tenant quota is yearly subscription or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'year'?: boolean;
}

