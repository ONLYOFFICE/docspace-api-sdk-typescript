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
 * [0 - Active, 1 - Suspended, 2 - Remove pending, 3 - Transfering, 4 - Restoring, 5 - Migrating, 6 - Encryption]
 * @export
 * @enum {number}
 */

export const TenantStatus = {
    /**
    * Active
    */
    Active: 0,
    /**
    * Suspended
    */
    Suspended: 1,
    /**
    * Remove pending
    */
    RemovePending: 2,
    /**
    * Transfering
    */
    Transfering: 3,
    /**
    * Restoring
    */
    Restoring: 4,
    /**
    * Migrating
    */
    Migrating: 5,
    /**
    * Encryption
    */
    Encryption: 6
} as const;

export type TenantStatus = typeof TenantStatus[keyof typeof TenantStatus];



