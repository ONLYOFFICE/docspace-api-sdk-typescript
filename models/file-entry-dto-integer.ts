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

/**
 * The generic file entry information.
 */
export interface FileEntryDtoInteger {
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
    'fileEntryType'?: FileEntryType;
    /**
     * The file entry ID.
     */
    'id'?: number;
    /**
     * The root folder ID of the file entry.
     */
    'rootFolderId'?: number;
    /**
     * The origin ID of the file entry.
     */
    'originId'?: number;
    /**
     * The origin room ID of the file entry.
     */
    'originRoomId'?: number;
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
}



