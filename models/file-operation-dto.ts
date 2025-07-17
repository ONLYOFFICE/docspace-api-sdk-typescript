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
import type { FileEntryDto } from './file-entry-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationType } from './file-operation-type';

/**
 * The file operation information.
 * @export
 * @interface FileOperationDto
 */
export interface FileOperationDto {
    /**
     * The file operation ID.
     * @type {string}
     * @memberof FileOperationDto
     */
    'id'?: string | null;
    /**
     * 
     * @type {FileOperationType}
     * @memberof FileOperationDto
     */
    'Operation'?: FileOperationType;
    /**
     * The file operation progress in percentage.
     * @type {number}
     * @memberof FileOperationDto
     */
    'progress'?: number;
    /**
     * The file operation error message.
     * @type {string}
     * @memberof FileOperationDto
     */
    'error'?: string | null;
    /**
     * The file operation processing status.
     * @type {string}
     * @memberof FileOperationDto
     */
    'processed'?: string | null;
    /**
     * Specifies if the file operation is finished or not.
     * @type {boolean}
     * @memberof FileOperationDto
     */
    'finished'?: boolean;
    /**
     * The file operation URL.
     * @type {string}
     * @memberof FileOperationDto
     */
    'url'?: string | null;
    /**
     * The list of files of the file operation.
     * @type {Array<FileEntryDto>}
     * @memberof FileOperationDto
     */
    'files'?: Array<FileEntryDto> | null;
    /**
     * The list of folders of the file operation.
     * @type {Array<FileEntryDto>}
     * @memberof FileOperationDto
     */
    'folders'?: Array<FileEntryDto> | null;
}



