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
import type { FilesStatisticsFolder } from './files-statistics-folder';

/**
 * The space that stored documents take in each section of the portal, in bytes. The figures cover every account of  the portal rather than the caller alone, and a section the portal does not have comes back as null instead of a  zero figure.
 */
export interface FilesStatisticsResultDto {
    /**
     * The space taken by the personal Files sections of all accounts of the portal added together. An item deleted  to the trash keeps taking space and is counted in `trashUsedSpace` until the trash is emptied.
     */
    'myDocumentsUsedSpace'?: FilesStatisticsFolder;
    /**
     * The space held by the items deleted to the trash from any section, which is given back only when the trash is  emptied or the items are erased for good.
     */
    'trashUsedSpace'?: FilesStatisticsFolder;
    /**
     * The space taken by the content of the archived rooms, the archived form filling rooms included. Restoring a  room moves its space back to `roomsUsedSpace` or `formsUsedSpace`.
     */
    'archiveUsedSpace'?: FilesStatisticsFolder;
    /**
     * The space taken by the content of the active rooms, except the form filling rooms, whose content is reported  in `formsUsedSpace`. Archiving a room moves its space to `archiveUsedSpace`.
     */
    'roomsUsedSpace'?: FilesStatisticsFolder;
    /**
     * The space taken by the content of the AI agents section, which exists only in a portal where the AI agents  feature is active; creating an AI room is not enough to bring the section into being.
     */
    'aiAgentsUsedSpace'?: FilesStatisticsFolder;
    /**
     * The space taken by the content of the active form filling rooms, which is kept apart from `roomsUsedSpace`  even though those rooms are listed among the rooms.
     */
    'formsUsedSpace'?: FilesStatisticsFolder;
}

