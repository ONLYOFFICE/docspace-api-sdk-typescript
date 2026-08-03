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
import type { AiFileEntryType } from './ai-file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileShare } from './ai-file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFolderType } from './ai-folder-type';

/**
 * The file entry information.
 */
export interface AiFileEntryBaseDto {
    /**
     * The file entry title.
     */
    'title'?: string | null;
    'access'?: AiFileShare;
    'sharedBy'?: AiEmployeeDto;
    'ownedBy'?: AiEmployeeDto;
    /**
     * Specifies if the file entry is shared via link or not.
     */
    'shared'?: boolean;
    /**
     * Specifies if the file entry is shared for user or not.
     */
    'sharedForUser'?: boolean;
    /**
     * Specifies if the file entry is shared via a public (non-internal) external link.
     */
    'sharedExternal'?: boolean;
    /**
     * Indicates whether the parent entity is shared.
     */
    'parentShared'?: boolean;
    /**
     * The short Web URL.
     */
    'shortWebUrl'?: string | null;
    'created'?: AiApiDateTime;
    'createdBy'?: AiEmployeeDto;
    'updated'?: AiApiDateTime;
    'autoDelete'?: AiApiDateTime;
    'rootFolderType'?: AiFolderType;
    'parentRoomType'?: AiFolderType;
    'updatedBy'?: AiEmployeeDto;
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
    'fileEntryType'?: AiFileEntryType;
}



