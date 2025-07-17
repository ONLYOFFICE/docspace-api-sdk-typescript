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
import type { BaseBatchRequestDtoFolderIdsInner } from './base-batch-request-dto-folder-ids-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoDestFolderId } from './batch-request-dto-dest-folder-id';
// May contain unused imports in some cases
// @ts-ignore
import type { FileConflictResolveType } from './file-conflict-resolve-type';

/**
 * The request parameters for copying/moving files.
 * @export
 * @interface BatchRequestDto
 */
export interface BatchRequestDto {
    /**
     * Specifies whether to return only the current operation
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'returnSingleOperation'?: boolean;
    /**
     * The list of folder IDs to be copied/moved.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof BatchRequestDto
     */
    'folderIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * The list of file IDs to be copied/moved.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof BatchRequestDto
     */
    'fileIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * 
     * @type {BatchRequestDtoDestFolderId}
     * @memberof BatchRequestDto
     */
    'destFolderId'?: BatchRequestDtoDestFolderId;
    /**
     * 
     * @type {FileConflictResolveType}
     * @memberof BatchRequestDto
     */
    'conflictResolveType'?: FileConflictResolveType;
    /**
     * Specifies whether to delete the source files/folders after they are moved or copied to the destination folder.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * Specifies whether to copy or move the folder content or not.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'content'?: boolean;
    /**
     * Specifies whether the file is copied for filling out
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'toFillOut'?: boolean;
}



