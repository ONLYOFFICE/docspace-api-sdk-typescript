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
import type { DeleteBatchRequestDtoAllOfFileIds } from './delete-batch-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { DeleteBatchRequestDtoAllOfFolderIds } from './delete-batch-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type DeleteBatchRequestDto
 * The files and folders to delete, and how final the deletion is.
 * @export
 */
export type DeleteBatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The folders to delete, by id, each with everything it contains. A number addresses a folder stored in the  portal itself, a string addresses a folder on a connected third-party account, and both kinds may be sent in  one list.
     * @type {Array<DeleteBatchRequestDtoAllOfFolderIds>}
     * @memberof DeleteBatchRequestDto
     */
    'folderIds'?: Array<DeleteBatchRequestDtoAllOfFolderIds> | null;
    /**
     * The files to delete, by id. A number addresses a file stored in the portal itself, a string addresses a file  on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<DeleteBatchRequestDtoAllOfFileIds>}
     * @memberof DeleteBatchRequestDto
     */
    'fileIds'?: Array<DeleteBatchRequestDtoAllOfFileIds> | null;
    /**
     * Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It does not postpone the deletion and does not delete anything of its own.
     * @type {boolean}
     * @memberof DeleteBatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * Where the deleted items go: `false` moves them to the Trash of the caller, from which they can be restored,  `true` removes them at once and for good.
     * @type {boolean}
     * @memberof DeleteBatchRequestDto
     */
    'immediately'?: boolean;
};


