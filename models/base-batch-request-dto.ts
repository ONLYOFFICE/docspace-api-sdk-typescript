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
import type { BaseBatchRequestDtoAllOfFileIds } from './base-batch-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { BaseBatchRequestDtoAllOfFolderIds } from './base-batch-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type BaseBatchRequestDto
 * The files and folders a background operation is applied to.
 * @export
 */
export type BaseBatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The folders to act on, by id, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. A number  addresses a folder stored in the portal itself, a string addresses a folder on a connected third-party  account, and both kinds may be sent in one list.
     * @type {Array<BaseBatchRequestDtoAllOfFolderIds>}
     * @memberof BaseBatchRequestDto
     */
    'folderIds'?: Array<BaseBatchRequestDtoAllOfFolderIds> | null;
    /**
     * The files to act on, by id, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. A number  addresses a file stored in the portal itself, a string addresses a file on a connected third-party account,  and both kinds may be sent in one list.
     * @type {Array<BaseBatchRequestDtoAllOfFileIds>}
     * @memberof BaseBatchRequestDto
     */
    'fileIds'?: Array<BaseBatchRequestDtoAllOfFileIds> | null;
};


