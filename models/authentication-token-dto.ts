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
 * The authentication token parameters.
 * @export
 * @interface AuthenticationTokenDto
 */
export interface AuthenticationTokenDto {
    /**
     * The authentication token.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'token'?: string | null;
    /**
     * The token expiration time.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'expires'?: string;
    /**
     * Specifies if the authentication code is sent by SMS or not.
     * @type {boolean}
     * @memberof AuthenticationTokenDto
     */
    'sms'?: boolean;
    /**
     * The phone number.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'phoneNoise'?: string | null;
    /**
     * Specifies if the two-factor application is used or not.
     * @type {boolean}
     * @memberof AuthenticationTokenDto
     */
    'tfa'?: boolean;
    /**
     * The two-factor authentication key.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'tfaKey'?: string | null;
    /**
     * The confirmation email URL.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'confirmUrl'?: string | null;
}

