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
import type { ActionType } from './action-type';
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
 */
export interface AuditEventDto {
    /**
     * The audit event ID.
     */
    'id'?: number;
    /**
     * The audit event date.
     */
    'date'?: string | null;
    /**
     * The name of the user who triggered the audit event.
     */
    'user'?: string | null;
    /**
     * The ID of the user who triggered the audit event.
     */
    'userId'?: string;
    /**
     * The audit event action.
     */
    'action'?: string | null;
    /**
     * The specific action that occurred within the audit event.
     */
    'actionId'?: MessageAction;
    /**
     * The audit event IP.
     */
    'ip'?: string | null;
    /**
     * The audit event country.
     */
    'country'?: string | null;
    /**
     * The audit event city.
     */
    'city'?: string | null;
    /**
     * The audit event browser.
     */
    'browser'?: string | null;
    /**
     * The audit event platform.
     */
    'platform'?: string | null;
    /**
     * The audit event page.
     */
    'page'?: string | null;
    /**
     * The type of action performed in the audit event (e.g., Create, Update, Delete).
     */
    'actionType'?: ActionType;
    /**
     * The type of product related to the audit event.
     */
    'product'?: ProductType;
    /**
     * The location where the audit event occurred.
     */
    'location'?: LocationType;
    /**
     * The list of target objects affected by the audit event (e.g., document ID, user account).
     */
    'target'?: Array<string> | null;
    /**
     * The list of audit entry types (e.g., Folder, User, File).
     */
    'entries'?: Array<EntryType> | null;
    /**
     * The audit event context.
     */
    'context'?: string | null;
}



