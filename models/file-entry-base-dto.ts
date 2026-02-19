/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
 * The file entry information.
 */
export interface FileEntryBaseDto {
    /**
     * The file entry title.
     */
    'title'?: string;
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
    'shortWebUrl'?: string;
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
    'providerItem'?: boolean;
    /**
     * The provider key of the file entry.
     */
    'providerKey'?: string;
    /**
     * The provider ID of the file entry.
     */
    'providerId'?: number;
    /**
     * The order of the file entry.
     */
    'order'?: string;
    /**
     * Specifies if the file is a favorite or not.
     */
    'isFavorite'?: boolean;
    'fileEntryType'?: FileEntryType;
}



