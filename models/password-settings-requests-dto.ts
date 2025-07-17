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
 * The request parameters for configuring the password complexity requirements.
 * @export
 * @interface PasswordSettingsRequestsDto
 */
export interface PasswordSettingsRequestsDto {
    /**
     * The minimum number of characters required for valid passwords.
     * @type {number}
     * @memberof PasswordSettingsRequestsDto
     */
    'minLength'?: number;
    /**
     * Specifies whether the password should contain the uppercase letters or not.
     * @type {boolean}
     * @memberof PasswordSettingsRequestsDto
     */
    'upperCase'?: boolean;
    /**
     * Specifies whether the password should contain the digits or not.
     * @type {boolean}
     * @memberof PasswordSettingsRequestsDto
     */
    'digits'?: boolean;
    /**
     * Specifies whether the password should contain the special symbols or not.
     * @type {boolean}
     * @memberof PasswordSettingsRequestsDto
     */
    'specSymbols'?: boolean;
}

