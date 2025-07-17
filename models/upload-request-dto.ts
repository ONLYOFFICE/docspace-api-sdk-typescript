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
import type { ContentDisposition } from './content-disposition';
// May contain unused imports in some cases
// @ts-ignore
import type { ContentType } from './content-type';

/**
 * The request parameters for uploading a file.
 * @export
 * @interface UploadRequestDto
 */
export interface UploadRequestDto {
    /**
     * The file to be uploaded.
     * @type {File}
     * @memberof UploadRequestDto
     */
    'file'?: File | null;
    /**
     * 
     * @type {ContentType}
     * @memberof UploadRequestDto
     */
    'contentType'?: ContentType;
    /**
     * 
     * @type {ContentDisposition}
     * @memberof UploadRequestDto
     */
    'contentDisposition'?: ContentDisposition;
    /**
     * The list of files when specified as multipart/form-data.
     * @type {Array<File>}
     * @memberof UploadRequestDto
     */
    'files'?: Array<File> | null;
    /**
     * Specifies whether to create the new file if it already exists or not.
     * @type {boolean}
     * @memberof UploadRequestDto
     */
    'createNewIfExist'?: boolean;
    /**
     * Specifies whether to upload documents in the original formats as well or not.
     * @type {boolean}
     * @memberof UploadRequestDto
     */
    'storeOriginalFileFlag'?: boolean | null;
    /**
     * Specifies whether to keep the file converting status or not.
     * @type {boolean}
     * @memberof UploadRequestDto
     */
    'keepConvertStatus'?: boolean;
    /**
     * The request input stream.
     * @type {File}
     * @memberof UploadRequestDto
     */
    'stream'?: File | null;
}

