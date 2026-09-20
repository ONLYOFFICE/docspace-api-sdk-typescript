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
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { LinkType } from './link-type';

/**
 * The link of a room to create, change or revoke.
 */
export interface RoomLinkRequest {
    /**
     * Which link to change, taken from `GET api/2.0/files/rooms/{id}/links`. Leaving it out creates a link, and an  identifier the room does not know creates a link carrying that identifier.
     */
    'linkId'?: string;
    /**
     * What whoever opens the link may do in the room. The value 0 revokes the link instead of changing it, and the  levels a room accepts depend on its kind.
     */
    'access'?: FileShare;
    /**
     * When the link stops working, written with the offset of the portal time zone. A date already past is dropped  silently for an external link and refused for an invitation link, and a date further ahead than the portal  allows is refused as well; leaving it out means the link does not expire.
     */
    'expirationDate'?: ApiDateTime;
    /**
     * Whether the external link works only for people already signed in to the portal. With it off the link opens  the room for anyone who has the address, subject to the password.
     */
    'internal'?: boolean;
    /**
     * The name the link is shown under in the room. An empty value is accepted and the portal names the link itself,  so the answer is what tells the caller the name in use.
     */
    'title'?: string | null;
    /**
     * Which kind of link to create: an invitation link makes whoever opens it a member of the room, while an  external link opens the room without an account. It is fixed when the link is created and is ignored on later  changes.
     */
    'linkType'?: LinkType;
    /**
     * The password an external link asks for before it opens the room. An empty value leaves the link open to anyone  who has the address, and the password is never returned when links are listed.
     */
    'password'?: string | null;
    /**
     * Whether people arriving through the link are stopped from downloading and printing what they open. They can  still read the documents in the editor.
     */
    'denyDownload'?: boolean;
    /**
     * How many people an invitation link may still let in before it stops working. A value below the number of  people who already used it is refused, and leaving it out puts no ceiling on the link.
     */
    'maxUseCount'?: number | null;
    /**
     * How many people have already joined through this invitation link. The value is kept by the portal: it is  reported back when links are listed and anything sent here is ignored.
     */
    'currentUseCount'?: number;
}



