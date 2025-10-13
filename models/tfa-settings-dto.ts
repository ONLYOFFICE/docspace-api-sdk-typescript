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
 * The parameters representing the Two-Factor Authentication (TFA) configuration settings.
 * @export
 * @interface TfaSettingsDto
 */
export interface TfaSettingsDto {
    /**
     * The ID of the TFA configuration.
     * @type {string}
     * @memberof TfaSettingsDto
     */
    'id': string | null;
    /**
     * The display name or description of the TFA configuration.
     * @type {string}
     * @memberof TfaSettingsDto
     */
    'title': string | null;
    /**
     * Indicates whether the TFA configuration is currently active.
     * @type {boolean}
     * @memberof TfaSettingsDto
     */
    'enabled': boolean;
    /**
     * Indicates whether the TFA configuration can be used.
     * @type {boolean}
     * @memberof TfaSettingsDto
     */
    'avaliable': boolean;
    /**
     * The list of IP addresses that are exempt from TFA requirements.
     * @type {Array<string>}
     * @memberof TfaSettingsDto
     */
    'trustedIps'?: Array<string> | null;
    /**
     * The list of user IDs that are required to use TFA.
     * @type {Array<string>}
     * @memberof TfaSettingsDto
     */
    'mandatoryUsers'?: Array<string> | null;
    /**
     * The list of group IDs whose members are required to use TFA.
     * @type {Array<string>}
     * @memberof TfaSettingsDto
     */
    'mandatoryGroups'?: Array<string> | null;
}

