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
import type { EmailInvitationDto } from './email-invitation-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';

/**
 * @type RoomInvitation
 * One membership change in a room: an account or an email address, and the access level it is given.
 * @export
 */
export type RoomInvitation = EmailInvitationDto &  {
    /**
     * The account or the group the entry is about, taken from the portal people and group listings. Leave it out and  give an email address instead to invite somebody who has no account yet.
     * @type {string}
     * @memberof RoomInvitation
     */
    'id'?: string;
    /**
     * What the subject may do in the room. The value 0 removes the subject from the room, and the levels on offer  depend on the kind of room.
     * @type {FileShare}
     * @memberof RoomInvitation
     */
    'access'?: FileShare;
};


