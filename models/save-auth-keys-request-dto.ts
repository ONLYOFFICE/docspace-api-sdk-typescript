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
import type { AuthKeyRequest } from './auth-key-request';

/**
 * The keys to store for one third-party authorization or storage provider.
 */
export interface SaveAuthKeysRequestDto {
    /**
     * The internal key of the provider, such as `google` or `box`. Take it from the `name` of  `GET api/2.0/settings/authservice`.
     */
    'name'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'title'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'description'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'instruction'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'canSet'?: boolean;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'paid'?: boolean;
    /**
     * The keys of the provider with their new values, by the key names `GET api/2.0/settings/authservice` lists in  `props`.
     */
    'props'?: Array<AuthKeyRequest> | null;
}

