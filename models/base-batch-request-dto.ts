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
import type { BaseBatchRequestDtoAllOfFileIds } from './base-batch-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { BaseBatchRequestDtoAllOfFolderIds } from './base-batch-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type BaseBatchRequestDto
 * The base batch request parameters.
 * @export
 */
export type BaseBatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The list of folder IDs of the base batch request.
     * @type {Array<BaseBatchRequestDtoAllOfFolderIds>}
     * @memberof BaseBatchRequestDto
     */
    'folderIds'?: Array<BaseBatchRequestDtoAllOfFolderIds> | null;
    /**
     * The list of file IDs of the base batch request.
     * @type {Array<BaseBatchRequestDtoAllOfFileIds>}
     * @memberof BaseBatchRequestDto
     */
    'fileIds'?: Array<BaseBatchRequestDtoAllOfFileIds> | null;
};


