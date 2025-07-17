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

/**
 * The request parameters for deleting files.
 * @export
 * @interface DeleteBatchRequestDto
 */
export interface DeleteBatchRequestDto {
    /**
     * Specifies whether to return only the current operation
     * @type {boolean}
     * @memberof DeleteBatchRequestDto
     */
    'returnSingleOperation'?: boolean;
    /**
     * The list of folder IDs to be deleted.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof DeleteBatchRequestDto
     */
    'folderIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * The list of file IDs to be deleted.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof DeleteBatchRequestDto
     */
    'fileIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * Specifies whether to delete a file after the editing session is finished or not
     * @type {boolean}
     * @memberof DeleteBatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * Specifies whether to move a file to the \\\"Trash\\\" folder or delete it immediately.
     * @type {boolean}
     * @memberof DeleteBatchRequestDto
     */
    'immediately'?: boolean;
}

