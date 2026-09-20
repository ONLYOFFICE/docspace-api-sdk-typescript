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
 * Client update request containing modified client details
 */
export interface UpdateClientRequest {
    /**
     * The display name shown to the user on the consent screen. It has to be between 3 and 256 characters long.
     */
    'name': string;
    /**
     * The free-text description shown next to the name on the consent screen, at most 255 characters.
     */
    'description'?: string;
    /**
     * The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted.
     */
    'logo': string;
    /**
     * The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here.
     */
    'scopes': Set<string>;
    /**
     * Whether the client may use PKCE. Turning it on lets the client authenticate with the none method and prove itself with a code verifier instead of sending a secret, which is what a client that cannot keep a secret needs.
     */
    'allow_pkce'?: boolean;
    /**
     * The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses.
     */
    'allowed_origins': Set<string>;
    /**
     * The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses.
     */
    'redirect_uris': Set<string>;
    /**
     * Whether the client is offered to third-party tenants rather than only to the tenant that registers it.
     */
    'is_public'?: boolean;
}

