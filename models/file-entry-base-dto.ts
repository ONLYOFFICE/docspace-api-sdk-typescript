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

/**
 * What every file and folder in an answer has in common; the concrete shape is a file or a folder, told apart by the  entry type.
 */
export interface FileEntryBaseDto {
    /**
     * The name shown for the entry. For a file it carries the extension, which is how the format is recognised, and  for a room it is the room name.
     */
    'title'?: string | null;
    /**
     * The level the calling account holds on this entry, resolved from its own rights, the groups it belongs to and  any link it came in through. It is the level itself, not what the account may do with it - the action flags  below answer that.
     */
    'access'?: FileShare;
    /**
     * Who gave the calling account the access it is using. It is filled in only while the entry is being read  through a share, and never for a caller without an account.
     */
    'sharedBy'?: EmployeeDto;
    /**
     * Who owns the place the entry is shared from - the creator of the room it lies in, or of the personal section  that holds it. It is filled in only while the entry is being read through a share, and never for a caller  without an account.
     */
    'ownedBy'?: EmployeeDto;
    /**
     * Whether at least one external link exists for the entry, whichever kind. It says nothing about accounts and  groups - those are counted by the flag for members below.
     */
    'shared'?: boolean;
    /**
     * Whether at least one account or group has been given rights on the entry directly, as opposed to reaching it  through a link or through the room around it.
     */
    'sharedForUser'?: boolean;
    /**
     * Whether one of the entry\'s links is open to people outside the portal, as opposed to a link that only its own  members can follow. This is the flag to watch when the concern is who can reach the content from outside.
     */
    'sharedExternal'?: boolean;
    /**
     * Whether the entry is reachable because the room or folder around it is shared, rather than through rights of  its own. A copy or a move takes the entry out of that scope.
     */
    'parentShared'?: boolean;
    /**
     * A shortened address that opens the entry through the link it is being read with. It is an empty string  whenever no link applies, which is the usual case for a member browsing their own rooms.
     */
    'shortWebUrl'?: string | null;
    /**
     * When the entry was created, written with the offset of the portal\'s time zone. For a file restored from an  older version this is still the moment the file first appeared.
     */
    'created'?: ApiDateTime;
    /**
     * Who created the entry. It is null for a caller without an account, who is told nothing about the portal\'s  members.
     */
    'createdBy'?: EmployeeDto;
    /**
     * When the entry last changed, written with the offset of the portal\'s time zone. It is never reported as  earlier than the creation moment, so the two can be compared safely.
     */
    'updated'?: ApiDateTime;
    /**
     * When the entry will disappear on its own, written with the offset of the portal\'s time zone. It is filled in  only where a removal is actually scheduled - something in the trash while the portal cleans it up  automatically, or a guest\'s own documents - so a null means nothing is scheduled rather than that the entry is  permanent.
     */
    'autoDelete'?: ApiDateTime;
    /**
     * The section the entry ultimately belongs to, which is what tells a personal document from one inside a room,  from a template and from something in the trash or the archive.
     */
    'rootFolderType'?: FolderType;
    /**
     * The kind of room the entry lies in, which decides what the room allows - filling forms, public links,  indexing. It is null for an entry that is not inside a room at all.
     */
    'parentRoomType'?: FolderType;
    /**
     * Who changed the entry last. It is null for a caller without an account.
     */
    'updatedBy'?: EmployeeDto;
    /**
     * Set when the entry is stored on a connected third-party account rather than on the portal, and null when it is  stored on the portal. Such an entry is identified by a string rather than a number, and some operations skip  it.
     */
    'providerItem'?: boolean | null;
    /**
     * Which third-party service holds the entry, matching the keys accepted by the third-party operations. It is  null for an entry stored on the portal.
     */
    'providerKey'?: string | null;
    /**
     * The connected account the entry comes from, for telling apart two connections to the same service. It is null  for an entry stored on the portal.
     */
    'providerId'?: number | null;
    /**
     * The place of the entry in a room where the members arrange the content themselves, given as the position of  the entry preceded by the positions of the folders leading to it, separated by dots. It is empty when nothing  has been arranged.
     */
    'order'?: string | null;
    /**
     * Set when the calling account has marked the entry as a favorite, which is what puts it into the favorites  listing. For a file that is not marked it is null rather than false.
     */
    'isFavorite'?: boolean | null;
    /**
     * Tells a folder from a file, and so which of the two shapes the rest of the object has. A room is reported as a  folder here.
     */
    'fileEntryType'?: FileEntryType;
}



