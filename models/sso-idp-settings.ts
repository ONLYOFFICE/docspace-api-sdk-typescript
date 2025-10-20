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
 * The SSO IdP settings.
 * @export
 * @interface SsoIdpSettings
 */
export interface SsoIdpSettings {
    /**
     * The entity ID.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'entityId'?: string | null;
    /**
     * The SSO URL.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'ssoUrl'?: string | null;
    /**
     * The SSO binding.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'ssoBinding'?: string | null;
    /**
     * The SLO URL.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'sloUrl'?: string | null;
    /**
     * The SLO binding.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'sloBinding'?: string | null;
    /**
     * The name ID format.
     * @type {string}
     * @memberof SsoIdpSettings
     */
    'nameIdFormat'?: string | null;
}

