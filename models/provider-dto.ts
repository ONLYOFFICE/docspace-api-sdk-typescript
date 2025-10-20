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
 * The provider information.
 * @export
 * @interface ProviderDto
 */
export interface ProviderDto {
    /**
     * The provider name.
     * @type {string}
     * @memberof ProviderDto
     */
    'name'?: string | null;
    /**
     * The provider key.
     * @type {string}
     * @memberof ProviderDto
     */
    'key'?: string | null;
    /**
     * Specifies whether the provider is connected.
     * @type {boolean}
     * @memberof ProviderDto
     */
    'connected'?: boolean;
    /**
     * Specifies if the provider is OAuth.
     * @type {boolean}
     * @memberof ProviderDto
     */
    'oauth'?: boolean;
    /**
     * The provider redirect URL.
     * @type {string}
     * @memberof ProviderDto
     */
    'redirectUrl'?: string | null;
    /**
     * The required connection URL flag.
     * @type {boolean}
     * @memberof ProviderDto
     */
    'requiredConnectionUrl'?: boolean;
    /**
     * The provider OAuth client ID.
     * @type {string}
     * @memberof ProviderDto
     */
    'clientId'?: string | null;
}

