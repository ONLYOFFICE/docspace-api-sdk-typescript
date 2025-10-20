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
 * [0 - All, 1 - Room admin, 2 - Guest, 3 - DocSpace admin, 4 - User]
 * @export
 * @enum {number}
 */

export const EmployeeType = {
    /**
    * All
    */
    All: 0,
    /**
    * Room admin
    */
    RoomAdmin: 1,
    /**
    * Guest
    */
    Guest: 2,
    /**
    * DocSpace admin
    */
    DocSpaceAdmin: 3,
    /**
    * User
    */
    User: 4
} as const;

export type EmployeeType = typeof EmployeeType[keyof typeof EmployeeType];



