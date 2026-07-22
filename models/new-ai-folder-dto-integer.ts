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
import type { NewAiChatSettingsDto } from './new-ai-chat-settings-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiEmployeeDto } from './new-ai-employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileEntryDtoInteger } from './new-ai-file-entry-dto-integer';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileEntryType } from './new-ai-file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFileShare } from './new-ai-file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiFolderType } from './new-ai-folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiLogo } from './new-ai-logo';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiRoomDataLifetimeDto } from './new-ai-room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiRoomType } from './new-ai-room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiWatermarkDto } from './new-ai-watermark-dto';

/**
 * @type NewAiFolderDtoInteger
 * The folder parameters.
 * @export
 */
export type NewAiFolderDtoInteger = NewAiFileEntryDtoInteger &  {
    /**
     * The parent folder ID of the folder.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'parentId'?: number;
    /**
     * The number of files that the folder contains.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'filesCount'?: number;
    /**
     * The number of folders that the folder contains.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'foldersCount'?: number;
    /**
     * Specifies if the folder can be shared or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'isShareable'?: boolean | null;
    /**
     * The new element index in the folder.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'new'?: number;
    /**
     * Specifies if the folder notifications are enabled or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'mute'?: boolean;
    /**
     * The list of tags of the folder.
     * @type {Array<string>}
     * @memberof NewAiFolderDtoInteger
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {NewAiLogo}
     * @memberof NewAiFolderDtoInteger
     */
    'logo'?: NewAiLogo;
    /**
     * Specifies if the folder is pinned or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'pinned'?: boolean;
    /**
     * 
     * @type {NewAiRoomType}
     * @memberof NewAiFolderDtoInteger
     */
    'roomType'?: NewAiRoomType;
    /**
     * Specifies if the folder is private or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'private'?: boolean;
    /**
     * Specifies if the folder is indexed or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'indexing'?: boolean;
    /**
     * Specifies if the folder can be downloaded or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'denyDownload'?: boolean;
    /**
     * 
     * @type {NewAiRoomDataLifetimeDto}
     * @memberof NewAiFolderDtoInteger
     */
    'lifetime'?: NewAiRoomDataLifetimeDto;
    /**
     * 
     * @type {NewAiWatermarkDto}
     * @memberof NewAiFolderDtoInteger
     */
    'watermark'?: NewAiWatermarkDto;
    /**
     * 
     * @type {NewAiFolderType}
     * @memberof NewAiFolderDtoInteger
     */
    'type'?: NewAiFolderType;
    /**
     * Specifies if the folder is placed in the room or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'inRoom'?: boolean | null;
    /**
     * The folder quota limit.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'quotaLimit'?: number | null;
    /**
     * Specifies if the folder room has a custom quota or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much folder space is used (counter).
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the folder is password protected or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'passwordProtected'?: boolean | null;
    /**
     * Specifies if an external link to the folder is expired or not.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     * @deprecated
     */
    'expired'?: boolean | null;
    /**
     * 
     * @type {NewAiChatSettingsDto}
     * @memberof NewAiFolderDtoInteger
     */
    'chatSettings'?: NewAiChatSettingsDto;
    /**
     * 
     * @type {NewAiRoomType}
     * @memberof NewAiFolderDtoInteger
     */
    'rootRoomType'?: NewAiRoomType;
    /**
     * Specifies whether to save form data as XLSX file.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'saveFormAsXLSX'?: boolean | null;
    /**
     * Specifies whether to send form data to external database.
     * @type {boolean}
     * @memberof NewAiFolderDtoInteger
     */
    'sendFormToExternalDB'?: boolean | null;
    /**
     * The original form ID that corresponds to this FormFillingFolderDone folder.
     * @type {number}
     * @memberof NewAiFolderDtoInteger
     */
    'originalFormId'?: number | null;
};


