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
 * The file draft parameters.
 * @export
 * @interface DraftLocationString
 */
export interface DraftLocationString {
    /**
     * The InProcess folder ID of the draft.
     * @type {string}
     * @memberof DraftLocationString
     */
    'folderId'?: string | null;
    /**
     * The InProcess folder title of the draft.
     * @type {string}
     * @memberof DraftLocationString
     */
    'folderTitle'?: string | null;
    /**
     * The draft ID.
     * @type {string}
     * @memberof DraftLocationString
     */
    'fileId'?: string | null;
    /**
     * The draft title.
     * @type {string}
     * @memberof DraftLocationString
     */
    'fileTitle'?: string | null;
}

