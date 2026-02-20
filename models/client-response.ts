/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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


export interface ClientResponse {
    /**
     * The client name.
     */
    'name'?: string;
    /**
     * The client description.
     */
    'description'?: string;
    /**
     * The tenant ID associated with the client.
     */
    'tenant'?: number;
    /**
     * The client scopes.
     */
    'scopes'?: Set<string>;
    /**
     * Specifies if the client is currently enabled or not.
     */
    'enabled'?: boolean;
    /**
     * The client identifier issued to the client during registration.
     */
    'client_id'?: string;
    /**
     * The client secret issued to the client during registration.
     */
    'client_secret'?: string;
    /**
     * The URL to the client\'s website.
     */
    'website_url'?: string;
    /**
     * The URL to the client\'s terms of service.
     */
    'terms_url'?: string;
    /**
     * The URL to the client\'s privacy policy.
     */
    'policy_url'?: string;
    /**
     * The URL to the client\'s logo.
     */
    'logo'?: string;
    /**
     * The authentication methods supported by the client.
     */
    'authentication_methods'?: Set<string>;
    /**
     * The list of allowed redirect URIs.
     */
    'redirect_uris'?: Set<string>;
    /**
     * The list of allowed CORS origins.
     */
    'allowed_origins'?: Set<string>;
    /**
     * The list of allowed logout redirect URIs.
     */
    'logout_redirect_uris'?: Set<string>;
    /**
     * The date and time when the client was created.
     */
    'created_on'?: string;
    /**
     * The user who created the client.
     */
    'created_by'?: string;
    /**
     * The date and time when the client was last modified.
     */
    'modified_on'?: string;
    /**
     * The user who last modified the client.
     */
    'modified_by'?: string;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     */
    'is_public'?: boolean;
}

