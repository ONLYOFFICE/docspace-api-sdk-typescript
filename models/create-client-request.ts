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


/**
 * The request parameters for creating a client.
 */
export interface CreateClientRequest {
    /**
     * The client name.
     */
    'name'?: string;
    /**
     * The client description.
     */
    'description'?: string;
    /**
     * The client logo in base64 format.
     */
    'logo'?: string;
    /**
     * The client scopes.
     */
    'scopes'?: Set<string>;
    /**
     * Indicates whether PKCE is allowed for the client.
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     */
    'is_public'?: boolean;
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
     * The list of allowed redirect URIs.
     */
    'redirect_uris': Set<string>;
    /**
     * The list of allowed CORS origins.
     */
    'allowed_origins': Set<string>;
    /**
     * The list of allowed logout redirect URIs.
     */
    'logout_redirect_uri'?: string;
}

