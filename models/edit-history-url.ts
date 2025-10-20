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
 * The file editing history URL parameters.
 * @export
 * @interface EditHistoryUrl
 */
export interface EditHistoryUrl {
    /**
     * The document identifier of the previous version of the document.
     * @type {string}
     * @memberof EditHistoryUrl
     */
    'key'?: string | null;
    /**
     * The url address of the previous version of the document.
     * @type {string}
     * @memberof EditHistoryUrl
     */
    'url'?: string | null;
    /**
     * The document extension.
     * @type {string}
     * @memberof EditHistoryUrl
     */
    'fileType'?: string | null;
}

