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
import type { AiFileEntryBaseDto } from './ai-file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFolderDtoInteger } from './ai-folder-dto-integer';

/**
 * The folder content information.
 */
export interface AiFolderContentDtoInteger {
    /**
     * The list of files in the folder.
     */
    'files'?: Array<AiFileEntryBaseDto> | null;
    /**
     * The list of folders in the folder.
     */
    'folders'?: Array<AiFileEntryBaseDto> | null;
    'current'?: AiFolderDtoInteger;
    /**
     * The folder path.
     */
    'pathParts': any | null;
    /**
     * The folder start index.
     */
    'startIndex'?: number;
    /**
     * The number of folder elements.
     */
    'count'?: number;
    /**
     * The total number of elements in the folder.
     */
    'total': number;
    /**
     * The new element index in the folder.
     */
    'new'?: number;
}

