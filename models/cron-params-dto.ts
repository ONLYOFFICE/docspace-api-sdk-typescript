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
import type { BackupPeriod } from './backup-period';

/**
 * The time a scheduled backup runs at.
 */
export interface CronParamsDto {
    /**
     * How often the backup runs: 0 for every day, 1 for every week and 2 for every month.
     */
    'period'?: BackupPeriod;
    /**
     * The hour of the day the backup starts at, from 0 to 23.
     */
    'hour'?: number;
    /**
     * The day the backup runs on: the day of the week from 1 to 7, Sunday being 1, for a weekly schedule,  and the day of the month from 1 to 31 for a monthly one. It is 0 for a daily schedule.
     */
    'day'?: number;
}



