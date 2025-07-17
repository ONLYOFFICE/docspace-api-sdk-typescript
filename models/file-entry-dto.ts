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
 * @export
 * @interface FileEntryDto
 */
export interface FileEntryDto {
    /**
     * The file entry title.
     * @type {string}
     * @memberof FileEntryDto
     */
    'title'?: string | null;
    /**
     * 
     * @type {FileShare}
     * @memberof FileEntryDto
     */
    'access'?: FileShare;
    /**
     * Specifies if the file entry is shared or not.
     * @type {boolean}
     * @memberof FileEntryDto
     */
    'shared'?: boolean;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'created'?: ApiDateTime;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileEntryDto
     */
    'createdBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'updated'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'autoDelete'?: ApiDateTime;
    /**
     * 
     * @type {FolderType}
     * @memberof FileEntryDto
     */
    'rootFolderType'?: FolderType;
    /**
     * 
     * @type {FolderType}
     * @memberof FileEntryDto
     */
    'parentRoomType'?: FolderType;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileEntryDto
     */
    'updatedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry provider is specified or not.
     * @type {boolean}
     * @memberof FileEntryDto
     */
    'providerItem'?: boolean | null;
    /**
     * The provider key of the file entry.
     * @type {string}
     * @memberof FileEntryDto
     */
    'providerKey'?: string | null;
    /**
     * The provider ID of the file entry.
     * @type {number}
     * @memberof FileEntryDto
     */
    'providerId'?: number | null;
    /**
     * The order of the file entry.
     * @type {string}
     * @memberof FileEntryDto
     */
    'order'?: string | null;
    /**
     * 
     * @type {FileEntryType}
     * @memberof FileEntryDto
     */
    'fileEntryType'?: FileEntryType;
}



