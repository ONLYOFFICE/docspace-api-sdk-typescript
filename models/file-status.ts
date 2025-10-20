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
 * [0 - None, 1 - Is editing, 2 - Is new, 4 - Is converting, 8 - Is original, 16 - Is editing alone, 32 - Is favorite, 64 - Is template, 128 - Is fill form draft, 256 - Is completed form]
 * @export
 * @enum {number}
 */

export const FileStatus = {
    /**
    * None
    */
    None: 0,
    /**
    * Is editing
    */
    IsEditing: 1,
    /**
    * Is new
    */
    IsNew: 2,
    /**
    * Is converting
    */
    IsConverting: 4,
    /**
    * Is original
    */
    IsOriginal: 8,
    /**
    * Is editing alone
    */
    IsEditingAlone: 16,
    /**
    * Is favorite
    */
    IsFavorite: 32,
    /**
    * Is template
    */
    IsTemplate: 64,
    /**
    * Is fill form draft
    */
    IsFillFormDraft: 128,
    /**
    * Is completed form
    */
    IsCompletedForm: 256
} as const;

export type FileStatus = typeof FileStatus[keyof typeof FileStatus];



