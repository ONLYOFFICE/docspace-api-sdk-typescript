/* tslint:disable */
/* eslint-disable */
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
 * The request parameters for creating a new API key.
 */
export interface CreateApiKeyRequestDto {
    /**
     * The API key name.
     */
    'name': string;
    /**
     * The list of permissions granted to the API key.
     */
    'permissions'?: Array<string> | null;
    /**
     * The number of days until the API key expires (null for no expiration).
     */
    'expiresInDays'?: number | null;
}

