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
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type DeleteVersionBatchRequestDto
 * The request parameters for deleting file versions.
 * @export
 */
export type DeleteVersionBatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * Specifies whether to delete a file after the editing session is finished or not.
     * @type {boolean}
     * @memberof DeleteVersionBatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * The file ID to delete.
     * @type {number}
     * @memberof DeleteVersionBatchRequestDto
     */
    'fileId': number;
    /**
     * The collection of file versions to be deleted.
     * @type {Array<number>}
     * @memberof DeleteVersionBatchRequestDto
     */
    'versions': Array<number> | null;
};


