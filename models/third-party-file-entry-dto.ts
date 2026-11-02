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
import type { FileEntryBaseDto } from './file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoAllOfAvailableShareRights } from './file-entry-dto-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoAllOfSecurity } from './file-entry-dto-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoAllOfShareSettings } from './file-entry-dto-all-of-share-settings';
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
import type { MetadataMatchDto } from './metadata-match-dto';

/**
 * @type ThirdPartyFileEntryDto
 * The part of a file or folder that depends on how the entry is identified: by a number on the portal, or by a  string on a connected third-party account.
 * @export
 */
export type ThirdPartyFileEntryDto = FileEntryBaseDto &  {
    /**
     * The identifier to pass back to the other operations of this entry. It is a number for storage on the portal  and a string for a connected third-party account, and it is unique only within its own kind, so files and  folders may carry the same value.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'id'?: string | null;
    /**
     * The section the entry ultimately lies in, as an identifier that can be listed like any other folder. For an  entry inside a room this is the rooms section, not the room.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'rootFolderId'?: string | null;
    /**
     * The folder the entry was deleted from, which is where restoring it puts it back. It is left out of the answer  unless the entry is in the trash.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'originId'?: string | null;
    /**
     * The room the entry was deleted from, left out of the answer for anything that was not deleted out of a room.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'originRoomId'?: string | null;
    /**
     * The name of the folder the entry was deleted from, for showing where it would be restored to. It is null for  an entry that is not in the trash.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'originTitle'?: string | null;
    /**
     * The name of the room the entry was deleted from, null for anything that was not deleted out of a room.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'originRoomTitle'?: string | null;
    /**
     * Whether the calling account may change who has access to the entry, and so whether offering a sharing dialog  for it makes sense. It is false in rooms whose access is fixed by the room itself, such as a private one, even  for its manager.
     * @type {boolean}
     * @memberof ThirdPartyFileEntryDto
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileEntryDtoAllOfShareSettings}
     * @memberof ThirdPartyFileEntryDto
     */
    'shareSettings'?: FileEntryDtoAllOfShareSettings | null;
    /**
     * 
     * @type {FileEntryDtoAllOfSecurity}
     * @memberof ThirdPartyFileEntryDto
     */
    'security'?: FileEntryDtoAllOfSecurity | null;
    /**
     * 
     * @type {FileEntryDtoAllOfAvailableShareRights}
     * @memberof ThirdPartyFileEntryDto
     */
    'availableShareRights'?: FileEntryDtoAllOfAvailableShareRights | null;
    /**
     * The token of the link the entry is being read through, which is the value the external-share operations expect  and which also has to be carried by the download and preview addresses. It is null whenever the entry is not  being read through a link.
     * @type {string}
     * @memberof ThirdPartyFileEntryDto
     */
    'requestToken'?: string | null;
    /**
     * Set when the link being used was made for this very entry, and false when the entry is reached through a link  to the room around it. It is null when no link is involved.
     * @type {boolean}
     * @memberof ThirdPartyFileEntryDto
     */
    'external'?: boolean | null;
    /**
     * When the link being used stops working, written with the offset of the portal\'s time zone. It is null for a  link that never expires and whenever no link is involved.
     * @type {ApiDateTime}
     * @memberof ThirdPartyFileEntryDto
     */
    'expirationDate'?: ApiDateTime;
    /**
     * Set when the link being used has already passed its expiration date, which is why the entry cannot be opened  even though it is described here. It is null when no link is involved.
     * @type {boolean}
     * @memberof ThirdPartyFileEntryDto
     */
    'isLinkExpired'?: boolean | null;
    /**
     * The IDs of the metadata templates assigned to the file entry.
     * @type {Array<number>}
     * @memberof ThirdPartyFileEntryDto
     */
    'assignedMetadataTemplates'?: Array<number> | null;
    /**
     * Whether the entry has a metadata field a user can see and fill, by hand or with the AI filling: a field of a  visible assigned template, or a custom field. False when the entry has no metadata, when its assigned templates  are all hidden, or when they have no fields. It says nothing about the values: it stays true once every field is  filled, and nothing about the caller\'s rights: writing the values still needs the right to edit the entry  (`security.Edit`). It cannot be derived from `assignedMetadataTemplates`, which lists hidden templates too and  never lists the custom fields. Present, with a value, in the folder listing and in the file and folder info  responses; absent in the other responses that carry an entry (the answer to a creation, an upload or a rename),  which do not compute it, and for an entry of a third-party storage, which has no metadata. The same flag is  answered by `GET api/2.0/files/metadata/file/{fileId}` and `GET api/2.0/files/metadata/folder/{folderId}`.
     * @type {boolean}
     * @memberof ThirdPartyFileEntryDto
     */
    'hasMetadataFields'?: boolean | null;
    /**
     * Where the search text of the listing was met in the metadata of the entry: one item per string value holding  the text, in the order of the fields. Present only in a listing filtered by text, and only for the entries whose  metadata contain it; an entry found by its title alone carries nothing here.
     * @type {Array<MetadataMatchDto>}
     * @memberof ThirdPartyFileEntryDto
     */
    'metadataMatches'?: Array<MetadataMatchDto> | null;
};


