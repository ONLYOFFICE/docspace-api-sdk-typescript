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
import type { EmployeeType } from './employee-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MigratingApiFiles } from './migrating-api-files';

/**
 * 
 * @export
 * @interface MigratingApiUser
 */
export interface MigratingApiUser {
    /**
     * 
     * @type {boolean}
     * @memberof MigratingApiUser
     */
    'shouldImport'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigratingApiUser
     */
    'key'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MigratingApiUser
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MigratingApiUser
     */
    'displayName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MigratingApiUser
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MigratingApiUser
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {EmployeeType}
     * @memberof MigratingApiUser
     */
    'userType'?: EmployeeType;
    /**
     * 
     * @type {MigratingApiFiles}
     * @memberof MigratingApiUser
     */
    'migratingFiles'?: MigratingApiFiles;
}



