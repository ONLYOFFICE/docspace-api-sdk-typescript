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
 * One entry of the portal audit trail: who changed what, from where, and where it belongs in the product.
 */
export interface AuditEventDto {
    /**
     * The ID of the recorded entry. Nothing accepts it as an argument - no operation fetches a single audit event  - so it serves only to tell two otherwise identical entries apart.
     */
    'id'?: number;
    /**
     * When the action happened, in the portal time zone. The `from` and `to` filters are read as UTC instants, so  the two do not line up on a portal that is not on UTC.
     */
    'date'?: ApiDateTime;
    /**
     * The display name of the user who acted, taken from the account as it stands now rather than as it stood  when the entry was written. A localised placeholder stands in when there is no account to read: a portal  background job, an anonymous guest, or a user who has since been deleted.
     */
    'user'?: string | null;
    /**
     * The ID of the user who acted, which is what the `userId` filter of this operation matches on. It stays  readable after the account is deleted, which is when `user` falls back to a placeholder.
     */
    'userId'?: string;
    /**
     * The whole event as a readable sentence in the portal language, with the names of the objects involved  substituted into it. On the two `audit/.../last` operations each substituted value is cut to 50 characters;  the filtered operations substitute them in full. It is empty when the build has no wording for the action.
     */
    'action'?: string | null;
    /**
     * The action itself, as the `action` filter of this operation spells it and as  `GET api/2.0/security/audit/mappers` lists it under `messageAction`. Use this rather than parsing `action`,  which is prose and changes with the portal language.
     */
    'actionId'?: MessageAction;
    /**
     * The IP address the request came from, with the port stripped off. It is empty for an action a portal  background job performed, which has no request behind it.
     */
    'ip'?: string | null;
    /**
     * The English name of the country the IP address is located in, empty when the address cannot be located -  the normal outcome for private and loopback addresses.
     */
    'country'?: string | null;
    /**
     * The city the IP address is located in, empty under the same conditions as `country`.
     */
    'city'?: string | null;
    /**
     * The browser and its version as parsed from the user agent of the request, empty when the client sent none  that could be parsed or when no request was involved.
     */
    'browser'?: string | null;
    /**
     * The operating system as parsed from the same user agent, empty under the same conditions as `browser`.
     */
    'platform'?: string | null;
    /**
     * Where in the portal the action was made from: the referrer of the request, or that request\'s own path when  it carried no referrer. Long values are cut off at 512 characters.
     */
    'page'?: string | null;
    /**
     * The kind of change the action stands for, as the `actionType` filter of this operation spells it. It is  derived from `actionId`, not stored per entry, so it is the same on every entry of one action.
     */
    'actionType'?: ActionType;
    /**
     * The product the action belongs to. It cannot be filtered on here; the tree that groups actions by product  is `GET api/2.0/security/audit/mappers`.
     */
    'product'?: ProductType;
    /**
     * The location inside that product, as the `moduleType` filter of this operation spells it. It is also  derived from `actionId` rather than stored per entry.
     */
    'location'?: LocationType;
    /**
     * The objects the action was applied to, as the trail recorded them - a title, an account, an ID - one string  each. It is empty for an action that targets nothing, such as a settings change, and the `target` filter of  this operation matches one of these values in full.
     */
    'target'?: Array<string> | null;
    /**
     * The kinds of object the action applies to, holding at most two entries and none at all for an action that  targets nothing. Only the first of them can be filtered on, through `entryType`.
     */
    'entries'?: Array<EntryType> | null;
    /**
     * Where the action took place, spelled out in the portal language rather than as a code: for a Documents  event the room or the root folder it happened in, and for anything else the name of the module. Nothing  filters on it.
     */
    'context'?: string | null;
}



