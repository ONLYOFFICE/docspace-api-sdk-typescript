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
 * The SMTP settings parameters.
 * @export
 * @interface SmtpSettingsDto
 */
export interface SmtpSettingsDto {
    /**
     * The SMTP host.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'host'?: string | null;
    /**
     * The SMTP port.
     * @type {number}
     * @memberof SmtpSettingsDto
     */
    'port'?: number | null;
    /**
     * The sender address.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'senderAddress'?: string | null;
    /**
     * The sender display name.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'senderDisplayName'?: string | null;
    /**
     * The credentials username.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'credentialsUserName'?: string | null;
    /**
     * The credentials user password.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'credentialsUserPassword'?: string | null;
    /**
     * Specifies whether the SSL is enabled or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'enableSSL'?: boolean;
    /**
     * Specifies whether the authentication is enabled or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'enableAuth'?: boolean;
    /**
     * Specifies whether to use NTLM or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'useNtlm'?: boolean;
    /**
     * Specifies if the current settings are default or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'isDefaultSettings'?: boolean;
}

