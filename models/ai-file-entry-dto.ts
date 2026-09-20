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
import type { AiApiDateTime } from './ai-api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEmployeeDto } from './ai-employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryBaseDto } from './ai-file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfAvailableShareRights } from './ai-file-entry-dto-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfSecurity } from './ai-file-entry-dto-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfShareSettings } from './ai-file-entry-dto-all-of-share-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryType } from './ai-file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileShare } from './ai-file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFolderType } from './ai-folder-type';

/**
 * @type AiFileEntryDto
 * The part of a file or folder that depends on how the entry is identified: by a number on the portal, or by a  string on a connected third-party account.
 * @export
 */
export type AiFileEntryDto = AiFileEntryBaseDto &  {
    /**
     * The identifier to pass back to the other operations of this entry. It is a number for storage on the portal  and a string for a connected third-party account, and it is unique only within its own kind, so files and  folders may carry the same value.
     * @type {number}
     * @memberof AiFileEntryDto
     */
    'id'?: number;
    /**
     * The section the entry ultimately lies in, as an identifier that can be listed like any other folder. For an  entry inside a room this is the rooms section, not the room.
     * @type {number}
     * @memberof AiFileEntryDto
     */
    'rootFolderId'?: number;
    /**
     * The folder the entry was deleted from, which is where restoring it puts it back. It is left out of the answer  unless the entry is in the trash.
     * @type {number}
     * @memberof AiFileEntryDto
     */
    'originId'?: number;
    /**
     * The room the entry was deleted from, left out of the answer for anything that was not deleted out of a room.
     * @type {number}
     * @memberof AiFileEntryDto
     */
    'originRoomId'?: number;
    /**
     * The name of the folder the entry was deleted from, for showing where it would be restored to. It is null for  an entry that is not in the trash.
     * @type {string}
     * @memberof AiFileEntryDto
     */
    'originTitle'?: string | null;
    /**
     * The name of the room the entry was deleted from, null for anything that was not deleted out of a room.
     * @type {string}
     * @memberof AiFileEntryDto
     */
    'originRoomTitle'?: string | null;
    /**
     * Whether the calling account may change who has access to the entry, and so whether offering a sharing dialog  for it makes sense. It is false in rooms whose access is fixed by the room itself, such as a private one, even  for its manager.
     * @type {boolean}
     * @memberof AiFileEntryDto
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {AiFileEntryDtoAllOfShareSettings}
     * @memberof AiFileEntryDto
     */
    'shareSettings'?: AiFileEntryDtoAllOfShareSettings | null;
    /**
     * 
     * @type {AiFileEntryDtoAllOfSecurity}
     * @memberof AiFileEntryDto
     */
    'security'?: AiFileEntryDtoAllOfSecurity | null;
    /**
     * 
     * @type {AiFileEntryDtoAllOfAvailableShareRights}
     * @memberof AiFileEntryDto
     */
    'availableShareRights'?: AiFileEntryDtoAllOfAvailableShareRights | null;
    /**
     * The token of the link the entry is being read through, which is the value the external-share operations expect  and which also has to be carried by the download and preview addresses. It is null whenever the entry is not  being read through a link.
     * @type {string}
     * @memberof AiFileEntryDto
     */
    'requestToken'?: string | null;
    /**
     * Set when the link being used was made for this very entry, and false when the entry is reached through a link  to the room around it. It is null when no link is involved.
     * @type {boolean}
     * @memberof AiFileEntryDto
     */
    'external'?: boolean | null;
    /**
     * When the link being used stops working, written with the offset of the portal\'s time zone. It is null for a  link that never expires and whenever no link is involved.
     * @type {AiApiDateTime}
     * @memberof AiFileEntryDto
     */
    'expirationDate'?: AiApiDateTime;
    /**
     * Set when the link being used has already passed its expiration date, which is why the entry cannot be opened  even though it is described here. It is null when no link is involved.
     * @type {boolean}
     * @memberof AiFileEntryDto
     */
    'isLinkExpired'?: boolean | null;
};


