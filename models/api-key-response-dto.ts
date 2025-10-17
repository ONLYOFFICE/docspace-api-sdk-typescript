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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';

/**
 * The response data for the API key operations.
 * @export
 * @interface ApiKeyResponseDto
 */
export interface ApiKeyResponseDto {
    /**
     * The API key unique identifier.
     * @type {string}
     * @memberof ApiKeyResponseDto
     */
    'id': string;
    /**
     * The API key name.
     * @type {string}
     * @memberof ApiKeyResponseDto
     */
    'name': string | null;
    /**
     * The full API key value (only returned when creating a new key).
     * @type {string}
     * @memberof ApiKeyResponseDto
     */
    'key': string | null;
    /**
     * The API key postfix (used for identification).
     * @type {string}
     * @memberof ApiKeyResponseDto
     */
    'keyPostfix'?: string | null;
    /**
     * The list of permissions granted to the API key.
     * @type {Array<string>}
     * @memberof ApiKeyResponseDto
     */
    'permissions': Array<string> | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof ApiKeyResponseDto
     */
    'lastUsed'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof ApiKeyResponseDto
     */
    'createOn'?: ApiDateTime;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof ApiKeyResponseDto
     */
    'createBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof ApiKeyResponseDto
     */
    'expiresAt'?: ApiDateTime;
    /**
     * Indicates whether the API key is active or not.
     * @type {boolean}
     * @memberof ApiKeyResponseDto
     */
    'isActive': boolean;
}

