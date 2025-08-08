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
import type { DraftLocationString } from './draft-location-string';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoIntegerAllOfViewAccessibility } from './file-dto-integer-all-of-view-accessibility';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfSecurity } from './file-entry-dto-integer-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoString } from './file-entry-dto-string';
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
 * @type FileDtoString
 * The file parameters.
 * @export
 */
export type FileDtoString = FileEntryDtoString &  {
    /**
     * The folder ID where the file is located.
     * @type {string}
     * @memberof FileDtoString
     */
    'folderId'?: string | null;
    /**
     * The file version.
     * @type {number}
     * @memberof FileDtoString
     */
    'version'?: number;
    /**
     * The version group of the file.
     * @type {number}
     * @memberof FileDtoString
     */
    'versionGroup'?: number;
    /**
     * The content length of the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'contentLength'?: string | null;
    /**
     * The pure content length of the file.
     * @type {number}
     * @memberof FileDtoString
     */
    'pureContentLength'?: number | null;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileDtoString
     */
    'fileStatus'?: FileStatus;
    /**
     * Specifies if the file is muted or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'mute'?: boolean;
    /**
     * The URL link to view the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'viewUrl'?: string | null;
    /**
     * The Web URL link to the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'webUrl'?: string | null;
    /**
     * The short Web URL.
     * @type {string}
     * @memberof FileDtoString
     */
    'shortWebUrl'?: string | null;
    /**
     * 
     * @type {FileType}
     * @memberof FileDtoString
     */
    'fileType'?: FileType;
    /**
     * The file extension.
     * @type {string}
     * @memberof FileDtoString
     */
    'fileExst'?: string | null;
    /**
     * The comment to the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'comment'?: string | null;
    /**
     * Specifies if the file is encrypted or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'encrypted'?: boolean | null;
    /**
     * The thumbnail URL of the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'thumbnailUrl'?: string | null;
    /**
     * 
     * @type {Thumbnail}
     * @memberof FileDtoString
     */
    'thumbnailStatus'?: Thumbnail;
    /**
     * Specifies if the file is locked or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'locked'?: boolean | null;
    /**
     * The user ID of the person who locked the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'lockedBy'?: string | null;
    /**
     * Specifies if the file has a draft or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'hasDraft'?: boolean | null;
    /**
     * 
     * @type {FormFillingStatus}
     * @memberof FileDtoString
     */
    'formFillingStatus'?: FormFillingStatus;
    /**
     * Specifies if the file is a form or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'isForm'?: boolean | null;
    /**
     * Specifies if the Custom Filter editing mode is enabled for a file or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'customFilterEnabled'?: boolean | null;
    /**
     * The name of the user who enabled a Custom Filter editing mode for a file.
     * @type {string}
     * @memberof FileDtoString
     */
    'customFilterEnabledBy'?: string | null;
    /**
     * Specifies if the filling has started or not.
     * @type {boolean}
     * @memberof FileDtoString
     */
    'startFilling'?: boolean | null;
    /**
     * The InProcess folder ID of the file.
     * @type {number}
     * @memberof FileDtoString
     */
    'inProcessFolderId'?: number | null;
    /**
     * The InProcess folder title of the file.
     * @type {string}
     * @memberof FileDtoString
     */
    'inProcessFolderTitle'?: string | null;
    /**
     * 
     * @type {DraftLocationString}
     * @memberof FileDtoString
     */
    'draftLocation'?: DraftLocationString;
    /**
     * 
     * @type {FileDtoIntegerAllOfViewAccessibility}
     * @memberof FileDtoString
     */
    'viewAccessibility'?: FileDtoIntegerAllOfViewAccessibility | null;
    /**
     * The available external rights of the file.
     * @type {{ [key: string]: boolean; }}
     * @memberof FileDtoString
     */
    'availableExternalRights'?: { [key: string]: boolean; } | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoString
     */
    'lastOpened'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileDtoString
     */
    'expired'?: ApiDateTime;
};


