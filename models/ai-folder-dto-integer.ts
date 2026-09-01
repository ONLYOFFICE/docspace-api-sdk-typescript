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
import type { AiChatSettingsDto } from './ai-chat-settings-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEmployeeDto } from './ai-employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoInteger } from './ai-file-entry-dto-integer';
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
import type { AiLogo } from './ai-logo';
// May contain unused imports in some cases
// @ts-ignore
import type { AiRoomDataLifetimeDto } from './ai-room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiRoomType } from './ai-room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AiWatermarkDto } from './ai-watermark-dto';
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
 * @type AiFolderDtoInteger
 * The folder parameters.
 * @export
 */
export type AiFolderDtoInteger = AiFileEntryDtoInteger &  {
    /**
     * The parent folder ID of the folder.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'parentId'?: number;
    /**
     * The number of files that the folder contains.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'filesCount'?: number;
    /**
     * The number of folders that the folder contains.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'foldersCount'?: number;
    /**
     * Specifies if the folder can be shared or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'isShareable'?: boolean | null;
    /**
     * The new element index in the folder.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'new'?: number;
    /**
     * Specifies if the folder notifications are enabled or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'mute'?: boolean;
    /**
     * The list of tags of the folder.
     * @type {Array<string>}
     * @memberof AiFolderDtoInteger
     */
    'tags'?: Array<string> | null;
    /**
     * The folder logo.
     * @type {AiLogo}
     * @memberof AiFolderDtoInteger
     */
    'logo'?: AiLogo;
    /**
     * Specifies if the folder is pinned or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'pinned'?: boolean;
    /**
     * The room type of the folder.
     * @type {AiRoomType}
     * @memberof AiFolderDtoInteger
     */
    'roomType'?: AiRoomType;
    /**
     * Specifies if the folder is private or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'private'?: boolean;
    /**
     * Specifies if the folder is indexed or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'indexing'?: boolean;
    /**
     * Specifies if the folder can be downloaded or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'denyDownload'?: boolean;
    /**
     * The room data lifetime settings of the folder.
     * @type {AiRoomDataLifetimeDto}
     * @memberof AiFolderDtoInteger
     */
    'lifetime'?: AiRoomDataLifetimeDto;
    /**
     * The watermark settings of the folder.
     * @type {AiWatermarkDto}
     * @memberof AiFolderDtoInteger
     */
    'watermark'?: AiWatermarkDto;
    /**
     * The folder type.
     * @type {AiFolderType}
     * @memberof AiFolderDtoInteger
     */
    'type'?: AiFolderType;
    /**
     * Specifies if the folder is placed in the room or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'inRoom'?: boolean | null;
    /**
     * The folder quota limit.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'quotaLimit'?: number | null;
    /**
     * Specifies if the folder room has a custom quota or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much folder space is used (counter).
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the folder is password protected or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'passwordProtected'?: boolean | null;
    /**
     * Specifies if an external link to the folder is expired or not.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     * @deprecated
     */
    'expired'?: boolean | null;
    /**
     * The AI chat settings for the folder room. Contains configuration for AI provider, model selection, and custom prompts.  Only applicable to rooms with AI chat functionality enabled. Null if the room does not have chat settings configured.
     * @type {AiChatSettingsDto}
     * @memberof AiFolderDtoInteger
     */
    'chatSettings'?: AiChatSettingsDto;
    /**
     * The room type of the root folder. Indicates the type of the parent room if the current folder is nested within a room hierarchy.  This property helps identify the context in which a nested folder exists.
     * @type {AiRoomType}
     * @memberof AiFolderDtoInteger
     */
    'rootRoomType'?: AiRoomType;
    /**
     * Specifies whether to save form data as XLSX file.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'saveFormAsXLSX'?: boolean | null;
    /**
     * Specifies whether to send form data to external database.
     * @type {boolean}
     * @memberof AiFolderDtoInteger
     */
    'sendFormToExternalDB'?: boolean | null;
    /**
     * The original form ID that corresponds to this FormFillingFolderDone folder.
     * @type {number}
     * @memberof AiFolderDtoInteger
     */
    'originalFormId'?: number | null;
};


