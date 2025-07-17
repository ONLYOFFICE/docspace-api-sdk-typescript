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

// May contain unused imports in some cases
// @ts-ignore
import type { OAuth20Token } from './oauth20-token';

/**
 * The authentication data.
 * @export
 * @interface AuthData
 */
export interface AuthData {
    /**
     * The authentication login.
     * @type {string}
     * @memberof AuthData
     */
    'login'?: string | null;
    /**
     * The authentication password.
     * @type {string}
     * @memberof AuthData
     */
    'password'?: string | null;
    /**
     * The authentication raw token.
     * @type {string}
     * @memberof AuthData
     */
    'rawToken'?: string | null;
    /**
     * The authentication URL.
     * @type {string}
     * @memberof AuthData
     */
    'url'?: string | null;
    /**
     * The authentication provider.
     * @type {string}
     * @memberof AuthData
     */
    'provider'?: string | null;
    /**
     * 
     * @type {OAuth20Token}
     * @memberof AuthData
     */
    'token'?: OAuth20Token;
}

