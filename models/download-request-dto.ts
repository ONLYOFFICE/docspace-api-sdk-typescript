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
 * The files and folders to pack into one archive, together with the formats they are converted to.
 * @export
 */
export type DownloadRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The folders to pack, by id; everything inside them that the caller may read goes into the archive. A number  addresses a folder stored in the portal itself, a string addresses a folder on a connected third-party  account, and both kinds may be sent in one list.
     * @type {Array<DownloadRequestDtoAllOfFolderIds>}
     * @memberof DownloadRequestDto
     */
    'folderIds'?: Array<DownloadRequestDtoAllOfFolderIds> | null;
    /**
     * The files to pack as they are, by id, without conversion. A number addresses a file stored in the portal  itself, a string addresses a file on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<DownloadRequestDtoAllOfFileIds>}
     * @memberof DownloadRequestDto
     */
    'fileIds'?: Array<DownloadRequestDtoAllOfFileIds> | null;
    /**
     * The files to convert before they are packed, each named together with the format it is converted to. A file  listed here does not have to be repeated in `fileIds`.
     * @type {Array<DownloadRequestItemDto>}
     * @memberof DownloadRequestDto
     */
    'fileConvertIds'?: Array<DownloadRequestItemDto> | null;
};


