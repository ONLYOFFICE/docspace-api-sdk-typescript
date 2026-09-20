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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageAction } from './message-action';

/**
 * One entry of the portal login history: a sign-in, a sign-out or a failed attempt, and where it came from.
 */
export interface LoginEventDto {
    /**
     * The ID of the recorded sign-in. When the entry is a successful sign-in that is still open, this is also  the value `GET api/2.0/security/activeconnections` reports as the connection\'s `id`.
     */
    'id'?: number;
    /**
     * When the attempt was made, in the portal time zone. The `from` and `to` filters are read as UTC instants,  so the two do not line up on a portal that is not on UTC.
     */
    'date'?: ApiDateTime;
    /**
     * The display name of the account the attempt was made against, taken from the account as it stands now  rather than as it stood at the time. A localised placeholder stands in when there is no account to read,  which is the usual case for a failed attempt on an address nobody owns.
     */
    'user'?: string | null;
    /**
     * The ID of that account, which is what the `userId` filter of this operation matches on. It is the empty  GUID when the attempt could not be tied to an account.
     */
    'userId'?: string;
    /**
     * The login string as it was typed - normally the email address. It is the only field that survives a failed  attempt against an unknown account, which makes it the one to read when `user` is a placeholder.
     */
    'login'?: string | null;
    /**
     * The event as a readable sentence in the portal language. On `GET api/2.0/security/audit/login/last` each  substituted value is cut to 50 characters; the filtered operation substitutes them in full.
     */
    'action'?: string | null;
    /**
     * What happened, as the `action` filter of this operation spells it: a successful sign-in, a failed one, a  sign-out. Use this rather than parsing `action`, which is prose and changes with the portal language.
     */
    'actionId'?: MessageAction;
    /**
     * The IP address the attempt came from, with the port stripped off.
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
     * The browser and its version as parsed from the user agent of the attempt, empty when the client sent none  that could be parsed.
     */
    'browser'?: string | null;
    /**
     * The operating system as parsed from the same user agent, empty under the same conditions as `browser`.
     */
    'platform'?: string | null;
    /**
     * Where in the portal the attempt was made from: the referrer of the request, or that request\'s own path  when it carried no referrer. Long values are cut off at 512 characters.
     */
    'page'?: string | null;
}



