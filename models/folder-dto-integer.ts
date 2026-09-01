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
import type { ChatSettingsDto } from './chat-settings-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryDtoInteger } from './file-entry-dto-integer';
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
// May contain unused imports in some cases
// @ts-ignore
import type { Logo } from './logo';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomType } from './room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkDto } from './watermark-dto';

/**
 * @type FolderDtoInteger
 * The folder parameters.
 * @export
 */
export type FolderDtoInteger = FileEntryDtoInteger &  {
    /**
     * The parent folder ID of the folder.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'parentId'?: number;
    /**
     * The number of files that the folder contains.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'filesCount'?: number;
    /**
     * The number of folders that the folder contains.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'foldersCount'?: number;
    /**
     * Specifies if the folder can be shared or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'isShareable'?: boolean | null;
    /**
     * The new element index in the folder.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'new'?: number;
    /**
     * Specifies if the folder notifications are enabled or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'mute'?: boolean;
    /**
     * The list of tags of the folder.
     * @type {Array<string>}
     * @memberof FolderDtoInteger
     */
    'tags'?: Array<string> | null;
    /**
     * The folder logo.
     * @type {Logo}
     * @memberof FolderDtoInteger
     */
    'logo'?: Logo;
    /**
     * Specifies if the folder is pinned or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'pinned'?: boolean;
    /**
     * The room type of the folder.
     * @type {RoomType}
     * @memberof FolderDtoInteger
     */
    'roomType'?: RoomType;
    /**
     * Specifies if the folder is private or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'private'?: boolean;
    /**
     * Specifies if the folder is indexed or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'indexing'?: boolean;
    /**
     * Specifies if the folder can be downloaded or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'denyDownload'?: boolean;
    /**
     * The room data lifetime settings of the folder.
     * @type {RoomDataLifetimeDto}
     * @memberof FolderDtoInteger
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * The watermark settings of the folder.
     * @type {WatermarkDto}
     * @memberof FolderDtoInteger
     */
    'watermark'?: WatermarkDto;
    /**
     * The folder type.
     * @type {FolderType}
     * @memberof FolderDtoInteger
     */
    'type'?: FolderType;
    /**
     * Specifies if the folder is placed in the room or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'inRoom'?: boolean | null;
    /**
     * The folder quota limit.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'quotaLimit'?: number | null;
    /**
     * Specifies if the folder room has a custom quota or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much folder space is used (counter).
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the folder is password protected or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'passwordProtected'?: boolean | null;
    /**
     * Specifies if an external link to the folder is expired or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     * @deprecated
     */
    'expired'?: boolean | null;
    /**
     * The AI chat settings for the folder room. Contains configuration for AI provider, model selection, and custom prompts.  Only applicable to rooms with AI chat functionality enabled. Null if the room does not have chat settings configured.
     * @type {ChatSettingsDto}
     * @memberof FolderDtoInteger
     */
    'chatSettings'?: ChatSettingsDto;
    /**
     * The room type of the root folder. Indicates the type of the parent room if the current folder is nested within a room hierarchy.  This property helps identify the context in which a nested folder exists.
     * @type {RoomType}
     * @memberof FolderDtoInteger
     */
    'rootRoomType'?: RoomType;
    /**
     * Specifies whether to save form data as XLSX file.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'saveFormAsXLSX'?: boolean | null;
    /**
     * Specifies whether to send form data to external database.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'sendFormToExternalDB'?: boolean | null;
    /**
     * The original form ID that corresponds to this FormFillingFolderDone folder.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'originalFormId'?: number | null;
};


