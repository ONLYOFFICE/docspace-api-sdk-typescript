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
import type { BatchRequestDtoAllOfDestFolderId } from './batch-request-dto-all-of-dest-folder-id';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoAllOfFileIds } from './batch-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoAllOfFolderIds } from './batch-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileConflictResolveType } from './file-conflict-resolve-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type BatchRequestDto
 * The request parameters for copying/moving files.
 * @export
 */
export type BatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The list of folder IDs to be copied/moved.
     * @type {Array<BatchRequestDtoAllOfFolderIds>}
     * @memberof BatchRequestDto
     */
    'folderIds'?: Array<BatchRequestDtoAllOfFolderIds> | null;
    /**
     * The list of file IDs to be copied/moved.
     * @type {Array<BatchRequestDtoAllOfFileIds>}
     * @memberof BatchRequestDto
     */
    'fileIds'?: Array<BatchRequestDtoAllOfFileIds> | null;
    /**
     * 
     * @type {BatchRequestDtoAllOfDestFolderId}
     * @memberof BatchRequestDto
     */
    'destFolderId'?: BatchRequestDtoAllOfDestFolderId;
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
};


