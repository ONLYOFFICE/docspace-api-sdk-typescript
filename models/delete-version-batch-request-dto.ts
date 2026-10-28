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
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type DeleteVersionBatchRequestDto
 * The file whose versions are deleted, and the versions to delete.
 * @export
 */
export type DeleteVersionBatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It does not postpone the deletion and does not delete anything of its own.
     * @type {boolean}
     * @memberof DeleteVersionBatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * The file whose history the versions are taken from; only files stored in the portal itself are addressed here.
     * @type {number}
     * @memberof DeleteVersionBatchRequestDto
     */
    'fileId': number;
    /**
     * The version numbers to remove, as reported by `GET api/2.0/files/file/{fileId}/history`. At least one number  has to be sent: an empty list removes the file itself instead of one of its versions. The number of the  current version is refused outright, while a number that no longer exists is passed over without a complaint.
     * @type {Array<number>}
     * @memberof DeleteVersionBatchRequestDto
     */
    'versions': Array<number> | null;
};


