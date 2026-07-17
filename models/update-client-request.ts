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
 * Client update request containing modified client details
 */
export interface UpdateClientRequest {
    /**
     * The name of the client
     */
    'name'?: string;
    /**
     * The description of the client
     */
    'description'?: string;
    /**
     * The logo of the client in base64 format
     */
    'logo'?: string;
    'public'?: boolean;
    /**
     * Indicates whether PKCE is allowed for the client
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether client is accessible by third-party tenants
     */
    'is_public'?: boolean;
    /**
     * The allowed origins for the client
     */
    'allowed_origins'?: Set<string>;
}

