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
 * The third-party request parameters.
 * @export
 * @interface ThirdPartyRequestDto
 */
export interface ThirdPartyRequestDto {
    /**
     * The connection URL for the sharepoint.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'url'?: string | null;
    /**
     * The third-party request login.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'login'?: string | null;
    /**
     * The third-party request password.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'password'?: string | null;
    /**
     * The authentication token.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'token'?: string | null;
    /**
     * The customer title.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'customerTitle': string | null;
    /**
     * The provider key.
     * @type {string}
     * @memberof ThirdPartyRequestDto
     */
    'providerKey': string | null;
    /**
     * The provider ID.
     * @type {number}
     * @memberof ThirdPartyRequestDto
     */
    'providerId'?: number | null;
}

