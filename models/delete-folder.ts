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
 * The parameters for deleting a folder.
 * @export
 * @interface DeleteFolder
 */
export interface DeleteFolder {
    /**
     * Specifies whether to delete a folder after the editing session is finished or not.
     * @type {boolean}
     * @memberof DeleteFolder
     */
    'deleteAfter'?: boolean;
    /**
     * Specifies whether to move a folder to the \\Trash\\ folder or delete it immediately.
     * @type {boolean}
     * @memberof DeleteFolder
     */
    'immediately'?: boolean;
}

