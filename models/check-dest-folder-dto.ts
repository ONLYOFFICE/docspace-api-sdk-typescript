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
import type { CheckDestFolderResult } from './check-dest-folder-result';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryBaseDto } from './file-entry-base-dto';

/**
 * The verdict on placing the requested files in the destination folder.
 */
export interface CheckDestFolderDto {
    /**
     * Whether the destination folder accepts all of the requested files, only some of them or none at all.
     */
    'result'?: CheckDestFolderResult;
    /**
     * The requested files the destination accepts, each with the information it was listed under. The files it  rejects are absent, so an empty list means that none of them is accepted.
     */
    'files'?: Array<FileEntryBaseDto> | null;
}



