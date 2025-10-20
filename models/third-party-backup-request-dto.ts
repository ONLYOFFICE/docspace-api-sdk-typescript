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
 * The third-party backup request parameters.
 * @export
 * @interface ThirdPartyBackupRequestDto
 */
export interface ThirdPartyBackupRequestDto {
    /**
     * The connection URL for the sharepoint.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'url'?: string | null;
    /**
     * The login.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'login'?: string | null;
    /**
     * The password.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'password'?: string | null;
    /**
     * The authentication token.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'token'?: string | null;
    /**
     * The customer title.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'customerTitle'?: string | null;
    /**
     * The provider key.
     * @type {string}
     * @memberof ThirdPartyBackupRequestDto
     */
    'providerKey'?: string | null;
}

