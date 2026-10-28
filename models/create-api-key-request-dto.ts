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


/**
 * The request parameters for creating a new API key.
 */
export interface CreateApiKeyRequestDto {
    /**
     * The label that tells this key apart in the key list. It is required, may be up to 30 characters long, and does  not have to be unique.
     */
    'name': string;
    /**
     * The scopes the key may use. Every value has to come from `GET api/2.0/keys/permissions`, an unknown value or  an empty array is rejected, and passing `*` or omitting the field records a key without scope restrictions.
     */
    'permissions'?: Array<string> | null;
    /**
     * The lifetime of the key in days, counted from the moment it is created, from 1 to 365. Omit it to create a key  that never expires.
     */
    'expiresInDays'?: number | null;
}

