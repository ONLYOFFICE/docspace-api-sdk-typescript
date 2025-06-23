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
import type { ApiDateTime } from './api-date-time';

/**
 * The active connection item parameters.
 * @export
 * @interface ActiveConnectionsItemDto
 */
export interface ActiveConnectionsItemDto {
    /**
     * The active connection ID.
     * @type {number}
     * @memberof ActiveConnectionsItemDto
     */
    'id'?: number;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof ActiveConnectionsItemDto
     */
    'tenantId'?: number;
    /**
     * The user ID.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'userId'?: string;
    /**
     * Specifies if the active connection has a mobile phone or not.
     * @type {boolean}
     * @memberof ActiveConnectionsItemDto
     */
    'mobile'?: boolean;
    /**
     * The IP address of the active connection.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'ip'?: string | null;
    /**
     * The active connection country.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'country'?: string | null;
    /**
     * The active connection city.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'city'?: string | null;
    /**
     * The active connection browser.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'browser'?: string | null;
    /**
     * The active connection platform.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'platform'?: string | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof ActiveConnectionsItemDto
     */
    'date'?: ApiDateTime;
    /**
     * The active connection page.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'page'?: string | null;
}

