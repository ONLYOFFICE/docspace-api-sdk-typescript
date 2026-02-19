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
 * [0 - None, 1 - Files, 2 - Folders, 3 - Documents settings, 27 - Rooms, 29 - Settings, 30 - Contacts, 31 - Agents]
 * @export
 * @enum {number}
 */

export const LocationType = {
    /**
    * None
    */
    None: 0,
    /**
    * Files
    */
    Files: 1,
    /**
    * Folders
    */
    Folders: 2,
    /**
    * Documents settings
    */
    DocumentsSettings: 3,
    /**
    * Rooms
    */
    Rooms: 27,
    /**
    * Settings
    */
    Settings: 29,
    /**
    * Contacts
    */
    Contacts: 30,
    /**
    * Agents
    */
    Agents: 31
} as const;

export type LocationType = typeof LocationType[keyof typeof LocationType];



