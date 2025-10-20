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
 * [1 - Active, 2 - Terminated, 4 - Pending, 5 - Default, 7 - All]
 * @export
 * @enum {number}
 */

export const EmployeeStatus = {
    /**
    * Active
    */
    Active: 1,
    /**
    * Terminated
    */
    Terminated: 2,
    /**
    * Pending
    */
    Pending: 4,
    /**
    * Default
    */
    Default: 5,
    /**
    * All
    */
    All: 7
} as const;

export type EmployeeStatus = typeof EmployeeStatus[keyof typeof EmployeeStatus];



