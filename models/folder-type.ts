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
 * [0 - Default, 1 - Coomon, 2 - Bunch, 3 - Trash, 5 - User, 6 - Share, 8 - Projects, 10 - Favourites, 11 - Recent, 12 - Templates, 13 - Privacy, 14 - Virtual rooms, 15 - Filling forms room, 16 - Editing room, 19 - Custom room, 20 - Archive, 21 - Thirdparty backup, 22 - Public room, 25 - Ready form folder, 26 - In process form folder, 27 - Form filling folder done, 28 - Form filling folder in progress, 29 - Virtual Data Room, 30 - Room templates folder]
 * @export
 * @enum {number}
 */

export const FolderType = {
    /**
    * Default
    */
    DEFAULT: 0,
    /**
    * Coomon
    */
    COMMON: 1,
    /**
    * Bunch
    */
    BUNCH: 2,
    /**
    * Trash
    */
    TRASH: 3,
    /**
    * User
    */
    USER: 5,
    /**
    * Share
    */
    SHARE: 6,
    /**
    * Projects
    */
    Projects: 8,
    /**
    * Favourites
    */
    Favorites: 10,
    /**
    * Recent
    */
    Recent: 11,
    /**
    * Templates
    */
    Templates: 12,
    /**
    * Privacy
    */
    Privacy: 13,
    /**
    * Virtual rooms
    */
    VirtualRooms: 14,
    /**
    * Filling forms room
    */
    FillingFormsRoom: 15,
    /**
    * Editing room
    */
    EditingRoom: 16,
    /**
    * Custom room
    */
    CustomRoom: 19,
    /**
    * Archive
    */
    Archive: 20,
    /**
    * Thirdparty backup
    */
    ThirdpartyBackup: 21,
    /**
    * Public room
    */
    PublicRoom: 22,
    /**
    * Ready form folder
    */
    ReadyFormFolder: 25,
    /**
    * In process form folder
    */
    InProcessFormFolder: 26,
    /**
    * Form filling folder done
    */
    FormFillingFolderDone: 27,
    /**
    * Form filling folder in progress
    */
    FormFillingFolderInProgress: 28,
    /**
    * Virtual Data Room
    */
    VirtualDataRoom: 29,
    /**
    * Room templates folder
    */
    RoomTemplates: 30
} as const;

export type FolderType = typeof FolderType[keyof typeof FolderType];



