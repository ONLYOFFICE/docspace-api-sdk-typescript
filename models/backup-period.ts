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


/**
 * [0 - Every day, 1 - Every week, 2 - Every month]
 * @export
 * @enum {number}
 */

export const BackupPeriod = {
    /**
    * Every day
    */
    EveryDay: 0,
    /**
    * Every week
    */
    EveryWeek: 1,
    /**
    * Every month
    */
    EveryMonth: 2
} as const;

export type BackupPeriod = typeof BackupPeriod[keyof typeof BackupPeriod];



