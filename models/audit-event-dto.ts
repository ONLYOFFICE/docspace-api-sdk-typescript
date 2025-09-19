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
import type { ActionType } from './action-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EntryType } from './entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { LocationType } from './location-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageAction } from './message-action';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductType } from './product-type';

/**
 * The audit event parameters.
 * @export
 * @interface AuditEventDto
 */
export interface AuditEventDto {
    /**
     * The audit event ID.
     * @type {number}
     * @memberof AuditEventDto
     */
    'id'?: number;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof AuditEventDto
     */
    'date'?: ApiDateTime;
    /**
     * The name of the user who triggered the audit event.
     * @type {string}
     * @memberof AuditEventDto
     */
    'user'?: string | null;
    /**
     * The ID of the user who triggered the audit event.
     * @type {string}
     * @memberof AuditEventDto
     */
    'userId'?: string;
    /**
     * The audit event action.
     * @type {string}
     * @memberof AuditEventDto
     */
    'action'?: string | null;
    /**
     * 
     * @type {MessageAction}
     * @memberof AuditEventDto
     */
    'actionId'?: MessageAction;
    /**
     * The audit event IP.
     * @type {string}
     * @memberof AuditEventDto
     */
    'ip'?: string | null;
    /**
     * The audit event country.
     * @type {string}
     * @memberof AuditEventDto
     */
    'country'?: string | null;
    /**
     * The audit event city.
     * @type {string}
     * @memberof AuditEventDto
     */
    'city'?: string | null;
    /**
     * The audit event browser.
     * @type {string}
     * @memberof AuditEventDto
     */
    'browser'?: string | null;
    /**
     * The audit event platform.
     * @type {string}
     * @memberof AuditEventDto
     */
    'platform'?: string | null;
    /**
     * The audit event page.
     * @type {string}
     * @memberof AuditEventDto
     */
    'page'?: string | null;
    /**
     * 
     * @type {ActionType}
     * @memberof AuditEventDto
     */
    'actionType'?: ActionType;
    /**
     * 
     * @type {ProductType}
     * @memberof AuditEventDto
     */
    'product'?: ProductType;
    /**
     * 
     * @type {LocationType}
     * @memberof AuditEventDto
     */
    'location'?: LocationType;
    /**
     * The list of target objects affected by the audit event (e.g., document ID, user account).
     * @type {Array<string>}
     * @memberof AuditEventDto
     */
    'target'?: Array<string> | null;
    /**
     * The list of audit entry types (e.g., Folder, User, File).
     * @type {Array<EntryType>}
     * @memberof AuditEventDto
     */
    'entries'?: Array<EntryType> | null;
    /**
     * The audit event context.
     * @type {string}
     * @memberof AuditEventDto
     */
    'context'?: string | null;
}



