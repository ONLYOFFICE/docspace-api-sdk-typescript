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

/**
 * The active connection item parameters.
 * @export
 * @interface ActiveConnectionsItemDto
 */
export interface ActiveConnectionsItemDto {
    /**
     * The active connection ID.
     * @type {number}
     * @memberof ActiveConnectionsItemDto
     */
    'id': number;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof ActiveConnectionsItemDto
     */
    'tenantId': number;
    /**
     * The user ID.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'userId': string;
    /**
     * Specifies if the active connection has a mobile phone or not.
     * @type {boolean}
     * @memberof ActiveConnectionsItemDto
     */
    'mobile'?: boolean;
    /**
     * The IP address of the active connection.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'ip'?: string | null;
    /**
     * The active connection country.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'country'?: string | null;
    /**
     * The active connection city.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'city'?: string | null;
    /**
     * The active connection browser.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'browser'?: string | null;
    /**
     * The active connection platform.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'platform'?: string | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof ActiveConnectionsItemDto
     */
    'date'?: ApiDateTime;
    /**
     * The active connection page.
     * @type {string}
     * @memberof ActiveConnectionsItemDto
     */
    'page'?: string | null;
}

