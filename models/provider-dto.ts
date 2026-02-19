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
 * The provider information.
 */
export interface ProviderDto {
    /**
     * The provider name.
     */
    'name'?: string;
    /**
     * The provider key.
     */
    'key'?: string;
    /**
     * Specifies whether the provider is connected.
     */
    'connected'?: boolean;
    /**
     * Specifies if the provider is OAuth.
     */
    'oauth'?: boolean;
    /**
     * The provider redirect URL.
     */
    'redirectUrl'?: string;
    /**
     * The required connection URL flag.
     */
    'requiredConnectionUrl'?: boolean;
    /**
     * The provider OAuth client ID.
     */
    'clientId'?: string;
}

