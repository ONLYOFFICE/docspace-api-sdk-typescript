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
import type { CronParamsDto } from './cron-params-dto';

/**
 * The backup schedule of a portal.
 */
export interface ScheduleDto {
    /**
     * The storage the scheduled archives are written to, reported as a number rather than as the name the  schedule was created with.
     */
    'storageType': BackupStorageType;
    /**
     * The settings of the storage, as an object keyed by parameter name - not as the array of key and value  pairs the schedule was created with, so it cannot be sent back unchanged. For every storage type  except `ThirdPartyConsumer` the `folderId` key is built from the stored base path.
     */
    'storageParams': { [key: string]: string | null; };
    /**
     * When the backup runs, read back from the stored cron expression. `day` is 0 for a daily schedule,  because a daily one has no day.
     */
    'cronParams': CronParamsDto;
    /**
     * The number of scheduled copies kept. It is null, not 0, when the schedule keeps an unlimited number.
     */
    'backupsStored'?: number | null;
    /**
     * The date and time the schedule last ran at. It is `0001-01-01T00:00:00` until the schedule has run  for the first time.
     */
    'lastBackupTime': string;
    /**
     * Specifies whether this schedule backs up the whole server instead of one portal.
     */
    'dump': boolean;
}



