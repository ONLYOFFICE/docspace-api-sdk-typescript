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
 * @interface OAuth20Token
 */
export interface OAuth20Token {
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'access_token'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'refresh_token'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OAuth20Token
     */
    'expires_in'?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'client_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'client_secret'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'redirect_uri'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuth20Token
     */
    'timestamp'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OAuth20Token
     */
    'isExpired'?: boolean;
}

