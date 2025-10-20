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
 * [0 - Ok, 1 - Invalid, 2 - Expired, 3 - Required password, 4 - Invalid password, 5 - External access denied]
 * @export
 * @enum {number}
 */

export const Status = {
    /**
    * Ok
    */
    Ok: 0,
    /**
    * Invalid
    */
    Invalid: 1,
    /**
    * Expired
    */
    Expired: 2,
    /**
    * Required password
    */
    RequiredPassword: 3,
    /**
    * Invalid password
    */
    InvalidPassword: 4,
    /**
    * External access denied
    */
    ExternalAccessDenied: 5
} as const;

export type Status = typeof Status[keyof typeof Status];



