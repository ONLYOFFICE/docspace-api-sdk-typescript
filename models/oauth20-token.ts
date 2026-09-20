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
 * The OAuth 2.0 token issued by a third-party provider.
 */
export interface OAuth20Token {
    /**
     * The token sent to the provider with every request made on behalf of the account.
     */
    'access_token'?: string | null;
    /**
     * The token used to obtain a new access token when the current one expires. A provider that issues no refresh  token leaves it empty, and the account then has to be connected again to keep working.
     */
    'refresh_token'?: string | null;
    /**
     * How long the access token stays usable, in seconds counted from `timestamp`. Zero means the provider did not  say, and the token is then treated as expired.
     */
    'expires_in'?: number;
    /**
     * The OAuth 2.0 client ID of the application the token was issued to.
     */
    'client_id'?: string | null;
    /**
     * The client secret of the application the token was issued to, needed when the token is refreshed.
     */
    'client_secret'?: string | null;
    /**
     * The redirect URL the authorization code behind this token was obtained with; providers require the same value  again when the token is refreshed.
     */
    'redirect_uri'?: string | null;
    /**
     * When the token was issued, in UTC. This is the point `expires_in` is counted from.
     */
    'timestamp'?: string;
    /**
     * Whether the access token can no longer be used and has to be refreshed. It is also true when the provider did  not say how long the token lives.
     */
    'isExpired'?: boolean;
}

