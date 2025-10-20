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


/**
 * The file upload result.
 * @export
 * @interface FileUploadResultDto
 */
export interface FileUploadResultDto {
    /**
     * Specifies if the upload operation is successful or not.
     * @type {boolean}
     * @memberof FileUploadResultDto
     */
    'success'?: boolean;
    /**
     * The file upload result data.
     * @type {any}
     * @memberof FileUploadResultDto
     */
    'data'?: any | null;
    /**
     * The file upload result message.
     * @type {string}
     * @memberof FileUploadResultDto
     */
    'message'?: string | null;
}

