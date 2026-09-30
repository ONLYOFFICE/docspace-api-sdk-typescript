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
import type { AiFileEntryDtoAllOfAvailableShareRights } from './ai-file-entry-dto-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfSecurity } from './ai-file-entry-dto-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfShareSettings } from './ai-file-entry-dto-all-of-share-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { ChatSettingsDto } from './chat-settings-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Logo } from './logo';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomType } from './room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ThirdPartyFileEntryDto } from './third-party-file-entry-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkDto } from './watermark-dto';

/**
 * @type ThirdPartyFolderDto
 * The folder, with the fields that only a room carries filled in when the folder is a room.
 * @export
 */
export type ThirdPartyFolderDto = ThirdPartyFileEntryDto &  {
    /**
     * The folder this one is listed in. For a room it is the root of the section the room lives in, and for an entry  opened through a sharing link whose real parent the caller may not read it is the root of the section with the  entries shared with them.
     * @type {string}
     * @memberof ThirdPartyFolderDto
     */
    'parentId'?: string | null;
    /**
     * How many files lie directly in the folder, without counting the subfolders. The roots of the `Rooms`, room  templates and default templates sections always report 0, because the number is not collected for them.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'filesCount'?: number;
    /**
     * How many subfolders lie directly in the folder. For an AI room the two service subfolders it always holds are  subtracted, so the number matches what a listing of it shows, and the roots of the `Rooms` and templates  sections report 0.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'foldersCount'?: number;
    /**
     * Whether the caller may hand out access to the folder. It is filled in only for the folder a folder-contents  answer is about, and is null in every other answer, so null says nothing about the sharing rights.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'isShareable'?: boolean | null;
    /**
     * How many entries inside the folder the caller has not opened yet, the number drawn as the badge on it. An  account that turned the badges off in its own settings always reads 0 here, so 0 alone does not prove that  everything has been seen.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'new'?: number;
    /**
     * Whether the caller silenced the notifications of this room: true means no message about its activity reaches  them. The choice belongs to the reading account rather than to the room, so two members of one room read  different values.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'mute'?: boolean;
    /**
     * The names of the tags attached to the room. Empty for a folder that is not a room, since only rooms carry  tags, and the names are the ones from the portal tag catalogue.
     * @type {Array<string>}
     * @memberof ThirdPartyFolderDto
     */
    'tags'?: Array<string> | null;
    /**
     * The addresses of the room logo in four sizes, together with the colour and the built-in cover that are drawn  when no logo was uploaded. A room without a logo answers with four empty addresses rather than with null, and  the field is null for a folder that is not a room.
     * @type {Logo}
     * @memberof ThirdPartyFolderDto
     */
    'logo'?: Logo;
    /**
     * Whether the caller pinned the room to the top of their own room list. Pinning is personal and is lost when the  room is archived.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'pinned'?: boolean;
    /**
     * The kind of the room, which decides the default access rules of its members. Null for a folder that is not a  room.
     * @type {RoomType}
     * @memberof ThirdPartyFolderDto
     */
    'roomType'?: RoomType;
    /**
     * Whether the room is a private one, which limits it to the accounts invited into it and needs encryption keys  set up for each of them.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'private'?: boolean;
    /**
     * Whether the contents of the room are kept in an explicit numbered order, the one reported as `order` on each  entry, instead of being left to the sorting the reader asks for.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'indexing'?: boolean;
    /**
     * Whether downloading and printing the contents of the room is forbidden, which leaves its members with viewing  and editing in the editor.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'denyDownload'?: boolean;
    /**
     * The rule by which the files of the room are removed once they grow old. Null when the room has no such rule,  which is also what is reported after the rule is switched off, because switching it off erases it.
     * @type {RoomDataLifetimeDto}
     * @memberof ThirdPartyFolderDto
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * The watermark stamped over the documents of the room while they are viewed and printed. Null when the room has  no watermark, and for every folder that is not a room.
     * @type {WatermarkDto}
     * @memberof ThirdPartyFolderDto
     */
    'watermark'?: WatermarkDto;
    /**
     * The part the folder plays inside its room: one of the service folders of the form-filling flow, or the  knowledge and result storages of an AI room. It stays null for an ordinary folder and for the room itself, so  it does not describe folders in general.
     * @type {FolderType}
     * @memberof ThirdPartyFolderDto
     */
    'type'?: FolderType;
    /**
     * Whether the caller holds the room through an invitation of their own: true for the account that created it and  for a member invited personally, false when the access comes from a group they belong to, and null for a  folder that is not a room.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'inRoom'?: boolean | null;
    /**
     * How much space the files of the room may take, in bytes. It is the limit set on this room, or the portal  default for rooms when none was set. Null when the tariff of the portal does not count room statistics, when  room quotas are switched off, when the room lies in the archive or the trash, or when the caller may only read  it.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'quotaLimit'?: number | null;
    /**
     * Whether `quotaLimit` is a limit set on this room (true) or the portal default for rooms (false). Null exactly  when `quotaLimit` is null.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much the files of the room take, in bytes, as of the last time the counter was recomputed. The counter is  refreshed when a file operation finishes, so a read right after an upload or a deletion can still report the  previous figure. Null for a folder that is not a room.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'usedSpace'?: number | null;
    /**
     * Whether the sharing link the folder was opened through asks for a password that has not been entered yet.  While it is true the contents stay unreadable; send the password to `POST api/2.0/files/share/{key}/password`  first. Null when the folder was not reached through a link.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'passwordProtected'?: boolean | null;
    /**
     * Deprecated, read `isLinkExpired` instead: whether the sharing link the folder was opened through has run out  of its lifetime.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     * @deprecated
     */
    'expired'?: boolean | null;
    /**
     * The chat configuration of an AI room. Only the system prompt is reported here, whatever else the room stores,  and the field is null for every folder that is not an AI room.
     * @type {ChatSettingsDto}
     * @memberof ThirdPartyFolderDto
     */
    'chatSettings'?: ChatSettingsDto;
    /**
     * The kind of the room the folder lies in. It is filled in only for the folder a folder-contents answer is  about, and only when that room is an AI room, so it is null in every other answer and for every other room  kind.
     * @type {RoomType}
     * @memberof ThirdPartyFolderDto
     */
    'rootRoomType'?: RoomType;
    /**
     * Whether the answers collected in this form-filling room are also gathered into a spreadsheet next to the  completed copies. Filled in for form-filling rooms only.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'saveFormAsXLSX'?: boolean | null;
    /**
     * Whether the answers collected in this form-filling room are also pushed into the external database configured  for the portal. Filled in for form-filling rooms only.
     * @type {boolean}
     * @memberof ThirdPartyFolderDto
     */
    'sendFormToExternalDB'?: boolean | null;
    /**
     * The form the completed copies in this folder were filled from, taken from the copy submitted last. Null while  the folder holds no completed copy, and for every folder that does not collect them.
     * @type {number}
     * @memberof ThirdPartyFolderDto
     */
    'originalFormId'?: number | null;
};


