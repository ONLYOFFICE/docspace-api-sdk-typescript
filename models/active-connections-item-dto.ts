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

/**
 * One open connection of a user: where the sign-in behind it came from, and the ID it can be closed by.
 */
export interface ActiveConnectionsItemDto {
    /**
     * The ID of the sign-in this connection was opened by. Pass it as `loginEventId` to  `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to end this one connection; the item whose  value equals `loginEvent` is the connection the current request uses.
     */
    'id': number;
    /**
     * The portal the sign-in was made on. The operation never crosses portals, so it is the current one on every  item.
     */
    'tenantId': number;
    /**
     * The user the connection belongs to, which is the calling user on every item - the operation cannot report  anyone else\'s connections.
     */
    'userId': string;
    /**
     * Whether the sign-in came from a mobile client. No mobile marker is stored with a connection, so the value  is `false` on every item and tells a caller nothing about the device.
     */
    'mobile'?: boolean;
    /**
     * The IP address the sign-in came from, with the port stripped off. On the item that matches `loginEvent` it  is taken from the address the current request arrives from instead of the one stored at sign-in.
     */
    'ip'?: string | null;
    /**
     * The English name of the country the IP address is located in. It is empty when the address cannot be  located, which is the normal outcome for private and loopback addresses.
     */
    'country'?: string | null;
    /**
     * The city the IP address is located in, empty under the same conditions as `country`.
     */
    'city'?: string | null;
    /**
     * The browser and its version as parsed from the user agent of the sign-in, empty when the client sent no  recognisable one. It is refreshed from the current request on the item that matches `loginEvent`.
     */
    'browser'?: string | null;
    /**
     * The operating system as parsed from the user agent of the sign-in, refreshed and left empty under the same  conditions as `browser`.
     */
    'platform'?: string | null;
    /**
     * When the sign-in happened, in the portal time zone rather than in UTC.
     */
    'date'?: ApiDateTime;
    /**
     * Where in the portal the sign-in was made from: the referrer of the request that created it, or that  request\'s own path when it carried no referrer. Long values are cut off at 512 characters.
     */
    'page'?: string | null;
}

