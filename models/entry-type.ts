/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 * [0 - None, 1 - File, 2 - Folder, 23 - User, 24 - Group, 25 - Room, 26 - Tag, 27 - Agent]
 */

export const EntryType = {
    None: 0,
    File: 1,
    Folder: 2,
    User: 23,
    Group: 24,
    Room: 25,
    Tag: 26,
    Agent: 27
} as const;

export type EntryType = typeof EntryType[keyof typeof EntryType];



