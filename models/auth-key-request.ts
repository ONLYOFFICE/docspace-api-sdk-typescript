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
 * One key of a provider and the value to store for it.
 */
export interface AuthKeyRequest {
    /**
     * The key name, as `GET api/2.0/settings/authservice` lists it in `props`.
     */
    'name': string | null;
    /**
     * The value to store. An empty string clears the key.
     */
    'value': string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'title'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'type'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'options'?: Array<string> | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'dependsOn'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'dependsOnValue'?: string | null;
}

