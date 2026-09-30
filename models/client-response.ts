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
 * The whole stored record of an OAuth2 client, including the secret and every address the client is allowed to use.
 */
export interface ClientResponse {
    /**
     * The display name shown to the user on the consent screen, between 3 and 256 characters.
     */
    'name'?: string;
    /**
     * The free-text description shown next to the name on the consent screen, at most 255 characters.
     */
    'description'?: string;
    /**
     * The identifier of the portal the client belongs to. A client is visible only inside its own tenant, apart from the unauthenticated public info read.
     */
    'tenant'?: number;
    /**
     * The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here.
     */
    'scopes'?: Set<string>;
    /**
     * Whether the client may currently obtain tokens. A disabled client keeps its registration and the tokens already issued to it, but new authorization requests for it are refused.
     */
    'enabled'?: boolean;
    /**
     * The generated identifier of the client, sent as client_id in every OAuth2 request. It is assigned when the client is registered and never changes afterwards.
     */
    'client_id'?: string;
    /**
     * The client secret, which the client presents at the token endpoint when it authenticates with client_secret_post. It is omitted from the response rather than sent as null when the client has none.
     */
    'client_secret'?: string;
    /**
     * The URL of the client home page, offered to the user before they consent.
     */
    'website_url'?: string;
    /**
     * The URL of the client terms of service, linked from the consent screen.
     */
    'terms_url'?: string;
    /**
     * The URL of the client privacy policy, linked from the consent screen.
     */
    'policy_url'?: string;
    /**
     * The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes.
     */
    'logo'?: string;
    /**
     * How the client authenticates itself at the token endpoint: client_secret_post for a confidential client that sends its secret, none for a public client that proves itself with PKCE instead.
     */
    'authentication_methods'?: Set<string>;
    /**
     * The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses.
     */
    'redirect_uris'?: Set<string>;
    /**
     * The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses.
     */
    'allowed_origins'?: Set<string>;
    /**
     * The URIs the user may be sent back to once they have logged out.
     */
    'logout_redirect_uris'?: Set<string>;
    /**
     * When the client was registered, as an ISO-8601 timestamp with a zone offset.
     */
    'created_on'?: string;
    /**
     * The identifier of the user who registered the client. A plain user may read and change only the clients where this is their own identifier.
     */
    'created_by'?: string;
    /**
     * When the client was last changed, as an ISO-8601 timestamp with a zone offset.
     */
    'modified_on'?: string;
    /**
     * The identifier of the user who last changed the client.
     */
    'modified_by'?: string;
    /**
     * Whether the client is offered to third-party tenants rather than only to the tenant that registered it.
     */
    'is_public'?: boolean;
}

