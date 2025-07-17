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
 * The password settings parameters.
 * @export
 * @interface PasswordSettingsDto
 */
export interface PasswordSettingsDto {
    /**
     * The minimum number of characters required for valid passwords.
     * @type {number}
     * @memberof PasswordSettingsDto
     */
    'minLength'?: number;
    /**
     * Specifies whether the password should contain the uppercase letters or not.
     * @type {boolean}
     * @memberof PasswordSettingsDto
     */
    'upperCase'?: boolean;
    /**
     * Specifies whether the password should contain the digits or not.
     * @type {boolean}
     * @memberof PasswordSettingsDto
     */
    'digits'?: boolean;
    /**
     * Specifies whether the password should contain the special symbols or not.
     * @type {boolean}
     * @memberof PasswordSettingsDto
     */
    'specSymbols'?: boolean;
    /**
     * The allowed password characters in the regex string format.
     * @type {string}
     * @memberof PasswordSettingsDto
     */
    'allowedCharactersRegexStr'?: string | null;
    /**
     * The password digits in the regex string format.
     * @type {string}
     * @memberof PasswordSettingsDto
     */
    'digitsRegexStr'?: string | null;
    /**
     * The password uppercase letters in the regex string format.
     * @type {string}
     * @memberof PasswordSettingsDto
     */
    'upperCaseRegexStr'?: string | null;
    /**
     * The passaword special symbols in the regex string format.
     * @type {string}
     * @memberof PasswordSettingsDto
     */
    'specSymbolsRegexStr'?: string | null;
}

