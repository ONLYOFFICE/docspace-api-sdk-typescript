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
import type { FileEntryDtoIntegerAllOfAvailableShareRights } from './file-entry-dto-integer-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfSecurity } from './file-entry-dto-integer-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoIntegerAllOfShareSettings } from './file-entry-dto-integer-all-of-share-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiApiDateTime } from './new-ai-api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiEmployeeDto } from './new-ai-employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileEntryBaseDto } from './new-ai-file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileEntryType } from './new-ai-file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileShare } from './new-ai-file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFolderType } from './new-ai-folder-type';

/**
 * @type NewAiFileEntryDtoInteger
 * The generic file entry information.
 * @export
 */
export type NewAiFileEntryDtoInteger = NewAiFileEntryBaseDto &  {
    /**
     * The file entry ID.
     * @type {number}
     * @memberof NewAiFileEntryDtoInteger
     */
    'id'?: number;
    /**
     * The root folder ID of the file entry.
     * @type {number}
     * @memberof NewAiFileEntryDtoInteger
     */
    'rootFolderId'?: number;
    /**
     * The origin ID of the file entry.
     * @type {number}
     * @memberof NewAiFileEntryDtoInteger
     */
    'originId'?: number;
    /**
     * The origin room ID of the file entry.
     * @type {number}
     * @memberof NewAiFileEntryDtoInteger
     */
    'originRoomId'?: number;
    /**
     * The origin title of the file entry.
     * @type {string}
     * @memberof NewAiFileEntryDtoInteger
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     * @type {string}
     * @memberof NewAiFileEntryDtoInteger
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     * @type {boolean}
     * @memberof NewAiFileEntryDtoInteger
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfShareSettings}
     * @memberof NewAiFileEntryDtoInteger
     */
    'shareSettings'?: FileEntryDtoIntegerAllOfShareSettings | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfSecurity}
     * @memberof NewAiFileEntryDtoInteger
     */
    'security'?: FileEntryDtoIntegerAllOfSecurity | null;
    /**
     * 
     * @type {FileEntryDtoIntegerAllOfAvailableShareRights}
     * @memberof NewAiFileEntryDtoInteger
     */
    'availableShareRights'?: FileEntryDtoIntegerAllOfAvailableShareRights | null;
    /**
     * The request token of the file entry.
     * @type {string}
     * @memberof NewAiFileEntryDtoInteger
     */
    'requestToken'?: string | null;
    /**
     * Specifies if the folder can be accessed via an external link or not.
     * @type {boolean}
     * @memberof NewAiFileEntryDtoInteger
     */
    'external'?: boolean | null;
    /**
     * 
     * @type {NewAiApiDateTime}
     * @memberof NewAiFileEntryDtoInteger
     */
    'expirationDate'?: NewAiApiDateTime;
    /**
     * Indicates whether the shareable link associated with the file or folder has expired.
     * @type {boolean}
     * @memberof NewAiFileEntryDtoInteger
     */
    'isLinkExpired'?: boolean | null;
};


