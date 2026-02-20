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

// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';

/**
 * The response data for the API key operations.
 */
export interface ApiKeyResponseDto {
    /**
     * The API key unique identifier.
     */
    'id': string;
    /**
     * The API key name.
     */
    'name': string | null;
    /**
     * The full API key value (only returned when creating a new key).
     */
    'key': string | null;
    /**
     * The API key postfix (used for identification).
     */
    'keyPostfix'?: string | null;
    /**
     * The list of permissions granted to the API key.
     */
    'permissions': Array<string> | null;
    'lastUsed'?: ApiDateTime;
    'createOn'?: ApiDateTime;
    'createBy'?: EmployeeDto;
    'expiresAt'?: ApiDateTime;
    /**
     * Indicates whether the API key is active or not.
     */
    'isActive': boolean;
}

