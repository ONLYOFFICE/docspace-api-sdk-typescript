/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 * The migration API information.
 */
export interface MigrationApiInfo {
    /**
     * The migrator name.
     */
    'migratorName'?: string | null;
    /**
     * The migration operation.
     */
    'operation'?: string | null;
    /**
     * The list of failed archives.
     */
    'failedArchives'?: Array<string> | null;
    /**
     * The list of migrating users.
     */
    'users'?: Array<MigratingApiUser> | null;
    /**
     * The list of migrating users without email.
     */
    'withoutEmailUsers'?: Array<MigratingApiUser> | null;
    /**
     * The list of existing migrating users.
     */
    'existUsers'?: Array<MigratingApiUser> | null;
    /**
     * The list of migrating groups.
     */
    'groups'?: Array<MigratingApiGroup> | null;
    /**
     * Specifies whether to import personal files or not.
     */
    'importPersonalFiles'?: boolean;
    /**
     * Specifies whether to import shared files or not.
     */
    'importSharedFiles'?: boolean;
    /**
     * Specifies whether to import shared folders or not.
     */
    'importSharedFolders'?: boolean;
    /**
     * Specifies whether to import common files or not.
     */
    'importCommonFiles'?: boolean;
    /**
     * Specifies whether to import project files or not.
     */
    'importProjectFiles'?: boolean;
    /**
     * Specifies whether to import groups or not.
     */
    'importGroups'?: boolean;
    /**
     * The number of successfully migrated users.
     */
    'successedUsers'?: number;
    /**
     * The number of unsuccessfully migrated users.
     */
    'failedUsers'?: number;
    /**
     * The list of migrated files.
     */
    'files'?: Array<string> | null;
    /**
     * The list of migration errors.
     */
    'errors'?: Array<string> | null;
}

