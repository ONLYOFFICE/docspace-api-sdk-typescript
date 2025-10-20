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
 * The response containing public client information.
 * @export
 * @interface ClientInfoResponse
 */
export interface ClientInfoResponse {
    /**
     * The client name.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'name'?: string;
    /**
     * The client description.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'description'?: string;
    /**
     * The client scopes.
     * @type {Set<string>}
     * @memberof ClientInfoResponse
     */
    'scopes'?: Set<string>;
    /**
     * The client ID.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'client_id'?: string;
    /**
     * The URL to the client\'s website
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'website_url'?: string;
    /**
     * The URL to the client\'s terms of service.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'terms_url'?: string;
    /**
     * The URL to the client\'s privacy policy.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'policy_url'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'logo'?: string;
    /**
     * The authentication methods supported by the client.
     * @type {Set<string>}
     * @memberof ClientInfoResponse
     */
    'authentication_methods'?: Set<string>;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof ClientInfoResponse
     */
    'is_public'?: boolean;
    /**
     * The date and time when the client was created.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'created_on'?: string;
    /**
     * The user who created the client.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'created_by'?: string;
    /**
     * The date and time when the client was last modified.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'modified_on'?: string;
    /**
     * The user who last modified the client.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'modified_by'?: string;
}

