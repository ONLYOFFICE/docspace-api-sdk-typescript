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
 * [0 - None, 1 - File, 2 - Folder, 23 - User, 24 - Group, 25 - Room, 26 - Tag]
 * @export
 * @enum {number}
 */

export const EntryType = {
    /**
    * None
    */
    None: 0,
    /**
    * File
    */
    File: 1,
    /**
    * Folder
    */
    Folder: 2,
    /**
    * User
    */
    User: 23,
    /**
    * Group
    */
    Group: 24,
    /**
    * Room
    */
    Room: 25,
    /**
    * Tag
    */
    Tag: 26
} as const;

export type EntryType = typeof EntryType[keyof typeof EntryType];



