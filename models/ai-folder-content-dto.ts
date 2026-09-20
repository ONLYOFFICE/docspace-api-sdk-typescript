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
import type { AiFolderDto } from './ai-folder-dto';

/**
 * One page of the contents of a folder or of a section: its entries split into files and folders, the folder itself,  and the counters needed to page through the rest.
 */
export interface AiFolderContentDto {
    /**
     * The file entries of this page. It is empty when the folder holds no files, when the filters matched none of  them, and in the sections that list rooms only.
     */
    'files'?: Array<AiFileEntryBaseDto> | null;
    /**
     * The folder entries of this page. In a section of rooms these entries are the rooms themselves, which is where  their type, tags, logo and quota are read from.
     */
    'folders'?: Array<AiFileEntryBaseDto> | null;
    /**
     * The folder or section the page was read from, with its own title, type and access rights. It describes the  container, not the entries, and is filled in even when the page is empty.
     */
    'current'?: AiFolderDto;
    'pathParts': any;
    /**
     * The position of the first entry of this page in the whole result, echoing the requested start index. Add the  number of entries received to it to ask for the next page.
     */
    'startIndex'?: number;
    /**
     * How many entries this page carries, files and folders together. A page shorter than the requested size means  the result is exhausted.
     */
    'count'?: number;
    /**
     * How many entries matched before paging was applied, across the whole folder. Page until the start index plus  the entries received reaches it.
     */
    'total': number;
    /**
     * How many entries of this folder are marked as new for the caller. It is 0 for every listing when the account  has switched the new-item badges off, so a zero here does not prove that nothing has changed.
     */
    'new'?: number;
}

