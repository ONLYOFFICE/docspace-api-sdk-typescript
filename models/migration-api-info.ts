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

