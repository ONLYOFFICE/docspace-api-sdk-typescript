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
 * [0 - Backup, 1 - Restore, 2 - Transfer]
 * @export
 * @enum {number}
 */

export const BackupProgressEnum = {
    /**
    * Backup
    */
    Backup: 0,
    /**
    * Restore
    */
    Restore: 1,
    /**
    * Transfer
    */
    Transfer: 2
} as const;

export type BackupProgressEnum = typeof BackupProgressEnum[keyof typeof BackupProgressEnum];



