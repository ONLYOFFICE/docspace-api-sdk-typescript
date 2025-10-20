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
 * The request for updating client details.
 * @export
 * @interface UpdateClientRequest
 */
export interface UpdateClientRequest {
    /**
     * The client name.
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'name'?: string;
    /**
     * The client description
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'description'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'logo'?: string;
    /**
     * Indicates whether PKCE is allowed for the client.
     * @type {boolean}
     * @memberof UpdateClientRequest
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof UpdateClientRequest
     */
    'is_public'?: boolean;
    /**
     * The allowed origins for the client.
     * @type {Set<string>}
     * @memberof UpdateClientRequest
     */
    'allowed_origins'?: Set<string>;
}

