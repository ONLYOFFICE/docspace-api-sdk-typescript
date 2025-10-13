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
import type { FileEntryBaseDto } from './file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfAvailableShareRights } from './file-entry-dto-integer-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfSecurity } from './file-entry-dto-integer-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfShareSettings } from './file-entry-dto-integer-all-of-share-settings';
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
 * @type FileEntryDtoString
 * The generic file entry information.
 * @export
 */
export type FileEntryDtoString = FileEntryBaseDto &  {
    /**
     * The file entry ID.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'id'?: string | null;
    /**
     * The root folder ID of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'rootFolderId'?: string | null;
    /**
     * The origin ID of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'originId'?: string | null;
    /**
     * The origin room ID of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'originRoomId'?: string | null;
    /**
     * The origin title of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     * @type {boolean}
     * @memberof FileEntryDtoString
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfShareSettings}
     * @memberof FileEntryDtoString
     */
    'shareSettings'?: FileEntryDtoIntegerAllOfShareSettings | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfSecurity}
     * @memberof FileEntryDtoString
     */
    'security'?: FileEntryDtoIntegerAllOfSecurity | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfAvailableShareRights}
     * @memberof FileEntryDtoString
     */
    'availableShareRights'?: FileEntryDtoIntegerAllOfAvailableShareRights | null;
    /**
     * The request token of the file entry.
     * @type {string}
     * @memberof FileEntryDtoString
     */
    'requestToken'?: string | null;
    /**
     * Specifies if the folder can be accessed via an external link or not.
     * @type {boolean}
     * @memberof FileEntryDtoString
     */
    'external'?: boolean | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDtoString
     */
    'expirationDate'?: ApiDateTime;
};


