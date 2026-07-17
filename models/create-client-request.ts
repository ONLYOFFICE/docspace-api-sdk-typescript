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
 * Client creation request containing client details
 */
export interface CreateClientRequest {
    /**
     * The client name.
     */
    'name'?: string;
    /**
     * The description of the client
     */
    'description'?: string;
    /**
     * The logo of the client in base64 format
     */
    'logo'?: string;
    /**
     * The scopes for the client
     */
    'scopes'?: Set<string>;
    'public'?: boolean;
    /**
     * Indicates whether PKCE is allowed for the client
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates if the client is public
     */
    'is_public'?: boolean;
    /**
     * The website URL of the client
     */
    'website_url'?: string;
    /**
     * The terms URL of the client
     */
    'terms_url'?: string;
    /**
     * The policy URL of the client
     */
    'policy_url'?: string;
    /**
     * The redirect URIs for the client
     */
    'redirect_uris': Set<string>;
    /**
     * The allowed origins for the client
     */
    'allowed_origins': Set<string>;
    /**
     * The logout redirect URI for the client
     */
    'logout_redirect_uri'?: string;
}

