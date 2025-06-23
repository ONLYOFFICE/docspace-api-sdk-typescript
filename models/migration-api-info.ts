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
import type { MigratingApiGroup } from './migrating-api-group';
// May contain unused imports in some cases
// @ts-ignore
import type { MigratingApiUser } from './migrating-api-user';

/**
 * 
 * @export
 * @interface MigrationApiInfo
 */
export interface MigrationApiInfo {
    /**
     * 
     * @type {string}
     * @memberof MigrationApiInfo
     */
    'migratorName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MigrationApiInfo
     */
    'operation'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MigrationApiInfo
     */
    'failedArchives'?: Array<string> | null;
    /**
     * 
     * @type {Array<MigratingApiUser>}
     * @memberof MigrationApiInfo
     */
    'users'?: Array<MigratingApiUser> | null;
    /**
     * 
     * @type {Array<MigratingApiUser>}
     * @memberof MigrationApiInfo
     */
    'withoutEmailUsers'?: Array<MigratingApiUser> | null;
    /**
     * 
     * @type {Array<MigratingApiUser>}
     * @memberof MigrationApiInfo
     */
    'existUsers'?: Array<MigratingApiUser> | null;
    /**
     * 
     * @type {Array<MigratingApiGroup>}
     * @memberof MigrationApiInfo
     */
    'groups'?: Array<MigratingApiGroup> | null;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importPersonalFiles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importSharedFiles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importSharedFolders'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importCommonFiles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importProjectFiles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationApiInfo
     */
    'importGroups'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MigrationApiInfo
     */
    'successedUsers'?: number;
    /**
     * 
     * @type {number}
     * @memberof MigrationApiInfo
     */
    'failedUsers'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof MigrationApiInfo
     */
    'files'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MigrationApiInfo
     */
    'errors'?: Array<string> | null;
}

