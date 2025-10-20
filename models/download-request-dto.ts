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
import type { DownloadRequestDtoAllOfFileIds } from './download-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { DownloadRequestDtoAllOfFolderIds } from './download-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { DownloadRequestItemDto } from './download-request-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type DownloadRequestDto
 * The request parameters for downloading files.
 * @export
 */
export type DownloadRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The list of folder IDs to be downloaded.
     * @type {Array<DownloadRequestDtoAllOfFolderIds>}
     * @memberof DownloadRequestDto
     */
    'folderIds'?: Array<DownloadRequestDtoAllOfFolderIds> | null;
    /**
     * The list of file IDs to be downloaded.
     * @type {Array<DownloadRequestDtoAllOfFileIds>}
     * @memberof DownloadRequestDto
     */
    'fileIds'?: Array<DownloadRequestDtoAllOfFileIds> | null;
    /**
     * The list of file IDs which will be converted.
     * @type {Array<DownloadRequestItemDto>}
     * @memberof DownloadRequestDto
     */
    'fileConvertIds'?: Array<DownloadRequestItemDto> | null;
};


