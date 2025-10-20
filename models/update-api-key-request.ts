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
 * The request parameters for updating an existing API key.
 * @export
 * @interface UpdateApiKeyRequest
 */
export interface UpdateApiKeyRequest {
    /**
     * The new name for the API key.
     * @type {string}
     * @memberof UpdateApiKeyRequest
     */
    'name'?: string | null;
    /**
     * The new list of permissions for the API key.
     * @type {Array<string>}
     * @memberof UpdateApiKeyRequest
     */
    'permissions'?: Array<string> | null;
    /**
     * Indicates whether the API key should be active or not.
     * @type {boolean}
     * @memberof UpdateApiKeyRequest
     */
    'isActive'?: boolean | null;
}

