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
 * The login settings parameters.
 * @export
 * @interface LoginSettingsDto
 */
export interface LoginSettingsDto {
    /**
     * The maximum number of consecutive failed login attempts allowed before triggering account suspension.
     * @type {number}
     * @memberof LoginSettingsDto
     */
    'attemptCount'?: number;
    /**
     * The duration (in minutes) for which an account remains suspended after exceeding maximum login attempts.
     * @type {number}
     * @memberof LoginSettingsDto
     */
    'blockTime'?: number;
    /**
     * The maximum time (in seconds) allowed for server to process and respond to login requests.
     * @type {number}
     * @memberof LoginSettingsDto
     */
    'checkPeriod'?: number;
    /**
     * Specifies if these settings are default or not
     * @type {boolean}
     * @memberof LoginSettingsDto
     */
    'isDefault'?: boolean;
}

