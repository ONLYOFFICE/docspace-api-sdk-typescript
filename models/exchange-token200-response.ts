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
 * 
 * @export
 * @interface ExchangeToken200Response
 */
export interface ExchangeToken200Response {
    /**
     * The access token issued by the authorization server.
     * @type {string}
     * @memberof ExchangeToken200Response
     */
    'access_token'?: string;
    /**
     * The type of token issued, typically \'Bearer\'.
     * @type {string}
     * @memberof ExchangeToken200Response
     */
    'token_type'?: string;
    /**
     * The number of seconds until the access token expires.
     * @type {number}
     * @memberof ExchangeToken200Response
     */
    'expires_in'?: number;
    /**
     * The token used to obtain a new access token when the current one expires.
     * @type {string}
     * @memberof ExchangeToken200Response
     */
    'refresh_token'?: string;
}

