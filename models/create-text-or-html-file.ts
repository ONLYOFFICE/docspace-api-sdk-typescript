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
 * The parameters for creating an HTML or text file.
 * @export
 * @interface CreateTextOrHtmlFile
 */
export interface CreateTextOrHtmlFile {
    /**
     * The file title for text or HTML file.
     * @type {string}
     * @memberof CreateTextOrHtmlFile
     */
    'title': string | null;
    /**
     * The text or HTML file contents.
     * @type {string}
     * @memberof CreateTextOrHtmlFile
     */
    'content'?: string | null;
    /**
     * Specifies whether to create a new text or HTML file if it exists or not.
     * @type {boolean}
     * @memberof CreateTextOrHtmlFile
     */
    'createNewIfExist'?: boolean;
}

