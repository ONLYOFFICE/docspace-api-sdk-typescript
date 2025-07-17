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
 * The request parameters for getting reference data.
 * @export
 * @interface GetReferenceDataDtoInteger
 */
export interface GetReferenceDataDtoInteger {
    /**
     * The unique document identifier used by the service to get a link to the file.
     * @type {string}
     * @memberof GetReferenceDataDtoInteger
     */
    'fileKey': string | null;
    /**
     * The unique system identifier.
     * @type {string}
     * @memberof GetReferenceDataDtoInteger
     */
    'instanceId'?: string | null;
    /**
     * The source file ID.
     * @type {number}
     * @memberof GetReferenceDataDtoInteger
     */
    'sourceFileId'?: number;
    /**
     * The file name or relative path for the formula editor.
     * @type {string}
     * @memberof GetReferenceDataDtoInteger
     */
    'path'?: string | null;
    /**
     * The file link.
     * @type {string}
     * @memberof GetReferenceDataDtoInteger
     */
    'link'?: string | null;
}

