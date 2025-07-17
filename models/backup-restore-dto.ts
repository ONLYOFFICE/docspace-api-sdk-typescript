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
import type { BackupStorageType } from './backup-storage-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemKeyValuePairObjectObject } from './item-key-value-pair-object-object';

/**
 * The backup restoring parameters.
 * @export
 * @interface BackupRestoreDto
 */
export interface BackupRestoreDto {
    /**
     * The backup ID.
     * @type {string}
     * @memberof BackupRestoreDto
     */
    'backupId'?: string | null;
    /**
     * 
     * @type {BackupStorageType}
     * @memberof BackupRestoreDto
     */
    'storageType'?: BackupStorageType;
    /**
     * The backup storage parameters.
     * @type {Array<ItemKeyValuePairObjectObject>}
     * @memberof BackupRestoreDto
     */
    'storageParams'?: Array<ItemKeyValuePairObjectObject> | null;
    /**
     * Notifies users about the portal restoring process or not.
     * @type {boolean}
     * @memberof BackupRestoreDto
     */
    'notify'?: boolean;
    /**
     * Specifies if a dump will be created or not.
     * @type {boolean}
     * @memberof BackupRestoreDto
     */
    'dump'?: boolean;
}



