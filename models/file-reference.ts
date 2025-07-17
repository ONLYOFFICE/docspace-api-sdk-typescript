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
import type { FileReferenceData } from './file-reference-data';

/**
 * The file reference parameters.
 * @export
 * @interface FileReference
 */
export interface FileReference {
    /**
     * 
     * @type {FileReferenceData}
     * @memberof FileReference
     */
    'referenceData'?: FileReferenceData;
    /**
     * The error message text.
     * @type {string}
     * @memberof FileReference
     */
    'error'?: string | null;
    /**
     * The file name or relative path for the formula editor.
     * @type {string}
     * @memberof FileReference
     */
    'path'?: string | null;
    /**
     * The URL address to download the current file.
     * @type {string}
     * @memberof FileReference
     */
    'url'?: string | null;
    /**
     * An extension of the document specified with the url parameter.
     * @type {string}
     * @memberof FileReference
     */
    'fileType'?: string | null;
    /**
     * The unique document identifier used by the service to take the data from the co-editing session.
     * @type {string}
     * @memberof FileReference
     */
    'key'?: string | null;
    /**
     * The file URL.
     * @type {string}
     * @memberof FileReference
     */
    'link'?: string | null;
    /**
     * The encrypted signature added to the parameter in the form of a token.
     * @type {string}
     * @memberof FileReference
     */
    'token'?: string | null;
}

