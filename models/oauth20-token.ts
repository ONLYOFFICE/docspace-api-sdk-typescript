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
     * Access token
     */
    'access_token'?: string | null;
    /**
     * Refresh token
     */
    'refresh_token'?: string | null;
    /**
     * Expires in
     */
    'expires_in'?: number;
    /**
     * Client id
     */
    'client_id'?: string | null;
    /**
     * Client secret
     */
    'client_secret'?: string | null;
    /**
     * Redirect uri
     */
    'redirect_uri'?: string | null;
    /**
     * Timestamp
     */
    'timestamp'?: string;
    /**
     * Is expired
     */
    'isExpired'?: boolean;
}

