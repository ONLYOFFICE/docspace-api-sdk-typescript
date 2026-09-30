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
import type { BackupStorageType } from './backup-storage-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Cron } from './cron';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemKeyValuePairObjectObject } from './item-key-value-pair-object-object';

/**
 * The request parameters for setting the backup schedule.
 */
export interface BackupScheduleDto {
    /**
     * The storage the scheduled archives are written to. It defaults to `Documents`, and it decides which  keys `storageParams` has to carry.
     */
    'storageType'?: BackupStorageType;
    /**
     * The settings of the chosen storage, as an array of key and value pairs. `Documents` and  `ThridpartyDocuments` need `folderId`, `Local` needs `filePath`, `ThirdPartyConsumer` needs `module`  plus the settings of that consumer, and `DataStore` needs none.
     */
    'storageParams'?: Array<ItemKeyValuePairObjectObject> | null;
    /**
     * The number of scheduled copies to keep, from 1 to 30. It defaults to 1, and only the copies this  schedule creates are counted and removed - archives started by hand are left alone.
     */
    'backupsStored'?: number | null;
    /**
     * When the backup runs. It is required: a request without it fails rather than falling back to a  default.
     */
    'cronParams'?: Cron;
    /**
     * Schedules a backup of the whole server rather than of this one portal. It requires the space access  permission and works on a standalone installation only.
     */
    'dump'?: boolean;
}



