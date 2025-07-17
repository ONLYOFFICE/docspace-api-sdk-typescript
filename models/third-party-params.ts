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
import type { AuthData } from './auth-data';

/**
 * The third-party account parameters.
 * @export
 * @interface ThirdPartyParams
 */
export interface ThirdPartyParams {
    /**
     * 
     * @type {AuthData}
     * @memberof ThirdPartyParams
     */
    'auth_data'?: AuthData;
    /**
     * Specifies if this is a corporate account or not.
     * @type {boolean}
     * @memberof ThirdPartyParams
     */
    'corporate'?: boolean;
    /**
     * Specifies if this is a room storage or not.
     * @type {boolean}
     * @memberof ThirdPartyParams
     */
    'roomsStorage'?: boolean;
    /**
     * The customer title.
     * @type {string}
     * @memberof ThirdPartyParams
     */
    'customer_title'?: string | null;
    /**
     * The provider ID.
     * @type {number}
     * @memberof ThirdPartyParams
     */
    'provider_id'?: number | null;
    /**
     * The provider key.
     * @type {string}
     * @memberof ThirdPartyParams
     */
    'provider_key'?: string | null;
}

