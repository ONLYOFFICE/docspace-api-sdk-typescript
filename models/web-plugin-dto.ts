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
import type { EmployeeDto } from './employee-dto';

/**
 * The web plugin information.
 * @export
 * @interface WebPluginDto
 */
export interface WebPluginDto {
    /**
     * The web plugin name.
     * @type {string}
     * @memberof WebPluginDto
     */
    'name'?: string | null;
    /**
     * The web plugin version.
     * @type {string}
     * @memberof WebPluginDto
     */
    'version'?: string | null;
    /**
     * The web plugin description.
     * @type {string}
     * @memberof WebPluginDto
     */
    'description'?: string | null;
    /**
     * The web plugin license.
     * @type {string}
     * @memberof WebPluginDto
     */
    'license'?: string | null;
    /**
     * The web plugin author.
     * @type {string}
     * @memberof WebPluginDto
     */
    'author'?: string | null;
    /**
     * The web plugin home page URL.
     * @type {string}
     * @memberof WebPluginDto
     */
    'homePage'?: string | null;
    /**
     * The name by which the web plugin is registered in the window object.
     * @type {string}
     * @memberof WebPluginDto
     */
    'pluginName'?: string | null;
    /**
     * The web plugin scopes.
     * @type {string}
     * @memberof WebPluginDto
     */
    'scopes'?: string | null;
    /**
     * The web plugin image.
     * @type {string}
     * @memberof WebPluginDto
     */
    'image'?: string | null;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof WebPluginDto
     */
    'createBy'?: EmployeeDto;
    /**
     * The date and time when the web plugin was created.
     * @type {string}
     * @memberof WebPluginDto
     */
    'createOn'?: string;
    /**
     * Specifies if the web plugin is enabled or not.
     * @type {boolean}
     * @memberof WebPluginDto
     */
    'enabled'?: boolean;
    /**
     * Specifies if the web plugin is system or not.
     * @type {boolean}
     * @memberof WebPluginDto
     */
    'system'?: boolean;
    /**
     * The web plugin URL.
     * @type {string}
     * @memberof WebPluginDto
     */
    'url'?: string | null;
    /**
     * The web plugin settings.
     * @type {string}
     * @memberof WebPluginDto
     */
    'settings'?: string | null;
}

