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
import type { AiEmployeeDto } from './ai-employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryBaseDto } from './ai-file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryType } from './ai-file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileShare } from './ai-file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFolderType } from './ai-folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfAvailableShareRights } from './file-entry-dto-integer-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfSecurity } from './file-entry-dto-integer-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfShareSettings } from './file-entry-dto-integer-all-of-share-settings';

/**
 * @type AiFileEntryDtoInteger
 * The generic file entry information.
 * @export
 */
export type AiFileEntryDtoInteger = AiFileEntryBaseDto &  {
    /**
     * The file entry ID.
     * @type {number}
     * @memberof AiFileEntryDtoInteger
     */
    'id'?: number;
    /**
     * The root folder ID of the file entry.
     * @type {number}
     * @memberof AiFileEntryDtoInteger
     */
    'rootFolderId'?: number;
    /**
     * The origin ID of the file entry.
     * @type {number}
     * @memberof AiFileEntryDtoInteger
     */
    'originId'?: number;
    /**
     * The origin room ID of the file entry.
     * @type {number}
     * @memberof AiFileEntryDtoInteger
     */
    'originRoomId'?: number;
    /**
     * The origin title of the file entry.
     * @type {string}
     * @memberof AiFileEntryDtoInteger
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     * @type {string}
     * @memberof AiFileEntryDtoInteger
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     * @type {boolean}
     * @memberof AiFileEntryDtoInteger
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfShareSettings}
     * @memberof AiFileEntryDtoInteger
     */
    'shareSettings'?: FileEntryDtoIntegerAllOfShareSettings | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfSecurity}
     * @memberof AiFileEntryDtoInteger
     */
    'security'?: FileEntryDtoIntegerAllOfSecurity | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfAvailableShareRights}
     * @memberof AiFileEntryDtoInteger
     */
    'availableShareRights'?: FileEntryDtoIntegerAllOfAvailableShareRights | null;
    /**
     * The request token of the file entry.
     * @type {string}
     * @memberof AiFileEntryDtoInteger
     */
    'requestToken'?: string | null;
    /**
     * Specifies if the folder can be accessed via an external link or not.
     * @type {boolean}
     * @memberof AiFileEntryDtoInteger
     */
    'external'?: boolean | null;
    /**
     * Represents the expiration date of the file entry.
     * @type {string}
     * @memberof AiFileEntryDtoInteger
     */
    'expirationDate'?: string | null;
    /**
     * Indicates whether the shareable link associated with the file or folder has expired.
     * @type {boolean}
     * @memberof AiFileEntryDtoInteger
     */
    'isLinkExpired'?: boolean | null;
};


