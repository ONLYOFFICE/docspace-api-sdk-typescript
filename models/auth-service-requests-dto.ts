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
import type { AuthKey } from './auth-key';

/**
 * The request parameters for handling the authorization service.
 * @export
 * @interface AuthServiceRequestsDto
 */
export interface AuthServiceRequestsDto {
    /**
     * The name of the authorization service.
     * @type {string}
     * @memberof AuthServiceRequestsDto
     */
    'name'?: string | null;
    /**
     * The user-friendly display title of the authorization service.
     * @type {string}
     * @memberof AuthServiceRequestsDto
     */
    'title'?: string | null;
    /**
     * The brief description of the authorization service.
     * @type {string}
     * @memberof AuthServiceRequestsDto
     */
    'description'?: string | null;
    /**
     * The detailed instructions for configuring or using the authorization service.
     * @type {string}
     * @memberof AuthServiceRequestsDto
     */
    'instruction'?: string | null;
    /**
     * Specifies whether the authorization service can be configured by the user.
     * @type {boolean}
     * @memberof AuthServiceRequestsDto
     */
    'canSet'?: boolean;
    /**
     * The collection of authorization keys associated with the authorization service.
     * @type {Array<AuthKey>}
     * @memberof AuthServiceRequestsDto
     */
    'props'?: Array<AuthKey> | null;
}

