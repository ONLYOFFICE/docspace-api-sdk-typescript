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
 * The capabilities parameters.
 * @export
 * @interface CapabilitiesDto
 */
export interface CapabilitiesDto {
    /**
     * Specifies if the LDAP settings are enabled or not.
     * @type {boolean}
     * @memberof CapabilitiesDto
     */
    'ldapEnabled'?: boolean;
    /**
     * The LDAP domain.
     * @type {string}
     * @memberof CapabilitiesDto
     */
    'ldapDomain'?: string | null;
    /**
     * The list of providers.
     * @type {Array<string>}
     * @memberof CapabilitiesDto
     */
    'providers'?: Array<string> | null;
    /**
     * The SP login label.
     * @type {string}
     * @memberof CapabilitiesDto
     */
    'ssoLabel'?: string | null;
    /**
     * Specifies if OAuth is enabled or not.
     * @type {boolean}
     * @memberof CapabilitiesDto
     */
    'oauthEnabled'?: boolean;
    /**
     * The SSO URL. If this parameter is empty, then the SSO settings are disabled.
     * @type {string}
     * @memberof CapabilitiesDto
     */
    'ssoUrl'?: string | null;
    /**
     * Specifies if identity server is enabled or not
     * @type {boolean}
     * @memberof CapabilitiesDto
     */
    'identityServerEnabled'?: boolean;
}

