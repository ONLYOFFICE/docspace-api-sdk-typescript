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
import type { DraftLocationInteger } from './draft-location-integer';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoIntegerSecurity } from './file-dto-integer-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoIntegerViewAccessibility } from './file-dto-integer-view-accessibility';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FileStatus } from './file-status';
// May contain unused imports in some cases
// @ts-ignore
import type { FileType } from './file-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FormFillingStatus } from './form-filling-status';
// May contain unused imports in some cases
// @ts-ignore
import type { Thumbnail } from './thumbnail';

/**
 * The file parameters.
 * @export
 * @interface FileDtoInteger
 */
export interface FileDtoInteger {
    /**
     * The file entry title.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'title'?: string | null;
    /**
     * 
     * @type {FileShare}
     * @memberof FileDtoInteger
     */
    'access'?: FileShare;
    /**
     * Specifies if the file entry is shared or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'shared'?: boolean;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoInteger
     */
    'created'?: ApiDateTime;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileDtoInteger
     */
    'createdBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoInteger
     */
    'updated'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoInteger
     */
    'autoDelete'?: ApiDateTime;
    /**
     * 
     * @type {FolderType}
     * @memberof FileDtoInteger
     */
    'rootFolderType'?: FolderType;
    /**
     * 
     * @type {FolderType}
     * @memberof FileDtoInteger
     */
    'parentRoomType'?: FolderType;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileDtoInteger
     */
    'updatedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry provider is specified or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'providerItem'?: boolean | null;
    /**
     * The provider key of the file entry.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'providerKey'?: string | null;
    /**
     * The provider ID of the file entry.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'providerId'?: number | null;
    /**
     * The order of the file entry.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'order'?: string | null;
    /**
     * The file entry ID.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'id'?: number;
    /**
     * The root folder ID of the file entry.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'rootFolderId'?: number;
    /**
     * The origin ID of the file entry.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'originId'?: number;
    /**
     * The origin room ID of the file entry.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'originRoomId'?: number;
    /**
     * The origin title of the file entry.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileDtoIntegerSecurity}
     * @memberof FileDtoInteger
     */
    'security'?: FileDtoIntegerSecurity | null;
    /**
     * The request token of the file entry.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'requestToken'?: string | null;
    /**
     * The folder ID where the file is located.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'folderId'?: number;
    /**
     * The file version.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'version'?: number;
    /**
     * The version group of the file.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'versionGroup'?: number;
    /**
     * The content length of the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'contentLength'?: string | null;
    /**
     * The pure content length of the file.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'pureContentLength'?: number | null;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileDtoInteger
     */
    'fileStatus'?: FileStatus;
    /**
     * Specifies if the file is muted or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'mute'?: boolean;
    /**
     * The URL link to view the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'viewUrl'?: string | null;
    /**
     * The Web URL link to the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'webUrl'?: string | null;
    /**
     * The short Web URL.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'shortWebUrl'?: string | null;
    /**
     * 
     * @type {FileType}
     * @memberof FileDtoInteger
     */
    'fileType'?: FileType;
    /**
     * The file extension.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'fileExst'?: string | null;
    /**
     * The comment to the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'comment'?: string | null;
    /**
     * Specifies if the file is encrypted or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'encrypted'?: boolean | null;
    /**
     * The thumbnail URL of the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'thumbnailUrl'?: string | null;
    /**
     * 
     * @type {Thumbnail}
     * @memberof FileDtoInteger
     */
    'thumbnailStatus'?: Thumbnail;
    /**
     * Specifies if the file is locked or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'locked'?: boolean | null;
    /**
     * The user ID of the person who locked the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'lockedBy'?: string | null;
    /**
     * Specifies if the file has a draft or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'hasDraft'?: boolean | null;
    /**
     * 
     * @type {FormFillingStatus}
     * @memberof FileDtoInteger
     */
    'formFillingStatus'?: FormFillingStatus;
    /**
     * Specifies if the file is a form or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'isForm'?: boolean | null;
    /**
     * Specifies if the Custom Filter editing mode is enabled for a file or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'customFilterEnabled'?: boolean | null;
    /**
     * The name of the user who enabled a Custom Filter editing mode for a file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'customFilterEnabledBy'?: string | null;
    /**
     * Specifies if the filling has started or not.
     * @type {boolean}
     * @memberof FileDtoInteger
     */
    'startFilling'?: boolean | null;
    /**
     * The InProcess folder ID of the file.
     * @type {number}
     * @memberof FileDtoInteger
     */
    'inProcessFolderId'?: number | null;
    /**
     * The InProcess folder title of the file.
     * @type {string}
     * @memberof FileDtoInteger
     */
    'inProcessFolderTitle'?: string | null;
    /**
     * 
     * @type {DraftLocationInteger}
     * @memberof FileDtoInteger
     */
    'draftLocation'?: DraftLocationInteger;
    /**
     * 
     * @type {FileDtoIntegerViewAccessibility}
     * @memberof FileDtoInteger
     */
    'viewAccessibility'?: FileDtoIntegerViewAccessibility | null;
    /**
     * The available external rights of the file.
     * @type {{ [key: string]: boolean; }}
     * @memberof FileDtoInteger
     */
    'availableExternalRights'?: { [key: string]: boolean; } | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoInteger
     */
    'lastOpened'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoInteger
     */
    'expired'?: ApiDateTime;
    /**
     * 
     * @type {FileEntryType}
     * @memberof FileDtoInteger
     */
    'fileEntryType'?: FileEntryType;
}



