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
import type { FolderDtoIntegerAvailableShareRights } from './folder-dto-integer-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderDtoIntegerSecurity } from './folder-dto-integer-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderDtoIntegerShareSettings } from './folder-dto-integer-share-settings';
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
import type { WatermarkDto } from './watermark-dto';

/**
 * The folder parameters.
 */
export interface FolderDtoString {
    /**
     * The file entry title.
     */
    'title'?: string | null;
    'access'?: FileShare;
    'sharedBy'?: EmployeeDto;
    'ownedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry is shared via link or not.
     */
    'shared'?: boolean;
    /**
     * Specifies if the file entry is shared for user or not.
     */
    'sharedForUser'?: boolean;
    /**
     * Indicates whether the parent entity is shared.
     */
    'parentShared'?: boolean;
    /**
     * The short Web URL.
     */
    'shortWebUrl'?: string | null;
    'created'?: ApiDateTime;
    'createdBy'?: EmployeeDto;
    'updated'?: ApiDateTime;
    'autoDelete'?: ApiDateTime;
    'rootFolderType'?: FolderType;
    'parentRoomType'?: FolderType;
    'updatedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry provider is specified or not.
     */
    'providerItem'?: boolean | null;
    /**
     * The provider key of the file entry.
     */
    'providerKey'?: string | null;
    /**
     * The provider ID of the file entry.
     */
    'providerId'?: number | null;
    /**
     * The order of the file entry.
     */
    'order'?: string | null;
    /**
     * Specifies if the file is a favorite or not.
     */
    'isFavorite'?: boolean | null;
    /**
     * The file entry ID.
     */
    'id'?: string | null;
    /**
     * The root folder ID of the file entry.
     */
    'rootFolderId'?: string | null;
    /**
     * The origin ID of the file entry.
     */
    'originId'?: string | null;
    /**
     * The origin room ID of the file entry.
     */
    'originRoomId'?: string | null;
    /**
     * The origin title of the file entry.
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     */
    'canShare'?: boolean;
    'shareSettings'?: FolderDtoIntegerShareSettings | null;
    'security'?: FolderDtoIntegerSecurity | null;
    'availableShareRights'?: FolderDtoIntegerAvailableShareRights | null;
    /**
     * The request token of the file entry.
     */
    'requestToken'?: string | null;
    /**
     * Specifies if the folder can be accessed via an external link or not.
     */
    'external'?: boolean | null;
    'expirationDate'?: ApiDateTime;
    /**
     * Indicates whether the shareable link associated with the file or folder has expired.
     */
    'isLinkExpired'?: boolean | null;
    /**
     * The parent folder ID of the folder.
     */
    'parentId'?: string | null;
    /**
     * The number of files that the folder contains.
     */
    'filesCount'?: number;
    /**
     * The number of folders that the folder contains.
     */
    'foldersCount'?: number;
    /**
     * Specifies if the folder can be shared or not.
     */
    'isShareable'?: boolean | null;
    /**
     * The new element index in the folder.
     */
    'new'?: number;
    /**
     * Specifies if the folder notifications are enabled or not.
     */
    'mute'?: boolean;
    /**
     * The list of tags of the folder.
     */
    'tags'?: Array<string> | null;
    'logo'?: Logo;
    /**
     * Specifies if the folder is pinned or not.
     */
    'pinned'?: boolean;
    'roomType'?: RoomType;
    /**
     * Specifies if the folder is private or not.
     */
    'private'?: boolean;
    /**
     * Specifies if the folder is indexed or not.
     */
    'indexing'?: boolean;
    /**
     * Specifies if the folder can be downloaded or not.
     */
    'denyDownload'?: boolean;
    'lifetime'?: RoomDataLifetimeDto;
    'watermark'?: WatermarkDto;
    'type'?: FolderType;
    /**
     * Specifies if the folder is placed in the room or not.
     */
    'inRoom'?: boolean | null;
    /**
     * The folder quota limit.
     */
    'quotaLimit'?: number | null;
    /**
     * Specifies if the folder room has a custom quota or not.
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much folder space is used (counter).
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the folder is password protected or not.
     */
    'passwordProtected'?: boolean | null;
    /**
     * Specifies if an external link to the folder is expired or not.
     * @deprecated
     */
    'expired'?: boolean | null;
    'fileEntryType'?: FileEntryType;
    'chatSettings'?: ChatSettingsDto;
    'rootRoomType'?: RoomType;
    /**
     * Specifies whether to save form data as XLSX file.
     */
    'saveFormAsXLSX'?: boolean | null;
    /**
     * Specifies whether to send form data to external database.
     */
    'sendFormToExternalDB'?: boolean | null;
}



