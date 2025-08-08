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
import type { FileEntryBaseDto } from './file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderDtoString } from './folder-dto-string';

/**
 * The folder content information.
 * @export
 * @interface FolderContentDtoString
 */
export interface FolderContentDtoString {
    /**
     * The list of files in the folder.
     * @type {Array<FileEntryBaseDto>}
     * @memberof FolderContentDtoString
     */
    'files'?: Array<FileEntryBaseDto> | null;
    /**
     * The list of folders in the folder.
     * @type {Array<FileEntryBaseDto>}
     * @memberof FolderContentDtoString
     */
    'folders'?: Array<FileEntryBaseDto> | null;
    /**
     * 
     * @type {FolderDtoString}
     * @memberof FolderContentDtoString
     */
    'current'?: FolderDtoString;
    /**
     * The folder path.
     * @type {any}
     * @memberof FolderContentDtoString
     */
    'pathParts'?: any | null;
    /**
     * The folder start index.
     * @type {number}
     * @memberof FolderContentDtoString
     */
    'startIndex'?: number;
    /**
     * The number of folder elements.
     * @type {number}
     * @memberof FolderContentDtoString
     */
    'count'?: number;
    /**
     * The total number of elements in the folder.
     * @type {number}
     * @memberof FolderContentDtoString
     */
    'total'?: number;
    /**
     * The new element index in the folder.
     * @type {number}
     * @memberof FolderContentDtoString
     */
    'new'?: number;
}

