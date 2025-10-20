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
 * The user parameters.
 * @export
 * @interface EmployeeDto
 */
export interface EmployeeDto {
    /**
     * The user ID.
     * @type {string}
     * @memberof EmployeeDto
     */
    'id'?: string;
    /**
     * The user display name.
     * @type {string}
     * @memberof EmployeeDto
     */
    'displayName'?: string | null;
    /**
     * The user title.
     * @type {string}
     * @memberof EmployeeDto
     */
    'title'?: string | null;
    /**
     * The user avatar.
     * @type {string}
     * @memberof EmployeeDto
     */
    'avatar'?: string | null;
    /**
     * The user original size avatar.
     * @type {string}
     * @memberof EmployeeDto
     */
    'avatarOriginal'?: string | null;
    /**
     * The user maximum size avatar.
     * @type {string}
     * @memberof EmployeeDto
     */
    'avatarMax'?: string | null;
    /**
     * The user medium size avatar.
     * @type {string}
     * @memberof EmployeeDto
     */
    'avatarMedium'?: string | null;
    /**
     * The user small size avatar.
     * @type {string}
     * @memberof EmployeeDto
     */
    'avatarSmall'?: string | null;
    /**
     * The user profile URL.
     * @type {string}
     * @memberof EmployeeDto
     */
    'profileUrl'?: string | null;
    /**
     * Specifies if the user has an avatar or not.
     * @type {boolean}
     * @memberof EmployeeDto
     */
    'hasAvatar'?: boolean;
    /**
     * Specifies if the user is anonymous or not.
     * @type {boolean}
     * @memberof EmployeeDto
     */
    'isAnonim'?: boolean;
}

