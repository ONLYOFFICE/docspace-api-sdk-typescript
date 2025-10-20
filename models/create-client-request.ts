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
 * The request parameters for creating a client.
 * @export
 * @interface CreateClientRequest
 */
export interface CreateClientRequest {
    /**
     * The client name.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'name'?: string;
    /**
     * The client description.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'description'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'logo'?: string;
    /**
     * The client scopes.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'scopes'?: Set<string>;
    /**
     * Indicates whether PKCE is allowed for the client.
     * @type {boolean}
     * @memberof CreateClientRequest
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof CreateClientRequest
     */
    'is_public'?: boolean;
    /**
     * The URL to the client\'s website.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'website_url'?: string;
    /**
     * The URL to the client\'s terms of service.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'terms_url'?: string;
    /**
     * The URL to the client\'s privacy policy.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'policy_url'?: string;
    /**
     * The list of allowed redirect URIs.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'redirect_uris': Set<string>;
    /**
     * The list of allowed CORS origins.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'allowed_origins': Set<string>;
    /**
     * The list of allowed logout redirect URIs.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'logout_redirect_uri'?: string;
}

