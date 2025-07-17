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
// May contain unused imports in some cases
// @ts-ignore
import type { MessageAction } from './message-action';

/**
 * The login event parameters.
 * @export
 * @interface LoginEventDto
 */
export interface LoginEventDto {
    /**
     * The login event ID.
     * @type {number}
     * @memberof LoginEventDto
     */
    'id'?: number;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof LoginEventDto
     */
    'date'?: ApiDateTime;
    /**
     * The user name of the login event.
     * @type {string}
     * @memberof LoginEventDto
     */
    'user'?: string | null;
    /**
     * The user ID of the login event.
     * @type {string}
     * @memberof LoginEventDto
     */
    'userId'?: string;
    /**
     * The user login of the login event.
     * @type {string}
     * @memberof LoginEventDto
     */
    'login'?: string | null;
    /**
     * The login event action.
     * @type {string}
     * @memberof LoginEventDto
     */
    'action'?: string | null;
    /**
     * 
     * @type {MessageAction}
     * @memberof LoginEventDto
     */
    'actionId'?: MessageAction;
    /**
     * The login event IP.
     * @type {string}
     * @memberof LoginEventDto
     */
    'ip'?: string | null;
    /**
     * The login event country.
     * @type {string}
     * @memberof LoginEventDto
     */
    'country'?: string | null;
    /**
     * The login event city.
     * @type {string}
     * @memberof LoginEventDto
     */
    'city'?: string | null;
    /**
     * The login event browser.
     * @type {string}
     * @memberof LoginEventDto
     */
    'browser'?: string | null;
    /**
     * The login event platform.
     * @type {string}
     * @memberof LoginEventDto
     */
    'platform'?: string | null;
    /**
     * The login event page.
     * @type {string}
     * @memberof LoginEventDto
     */
    'page'?: string | null;
}



