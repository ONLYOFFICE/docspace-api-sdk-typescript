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
 * [0 - Date and time, 1 - AZ, 2 - Size, 3 - Author, 4 - Type, 5 - New, 6 - Date and time creation, 7 - Room type, 8 - Tags, 9 - Room, 10 - Custom order, 11 - Last opened, 12 - Used space]
 * @export
 * @enum {number}
 */

export const SortedByType = {
    /**
    * Date and time
    */
    DateAndTime: 0,
    /**
    * AZ
    */
    AZ: 1,
    /**
    * Size
    */
    Size: 2,
    /**
    * Author
    */
    Author: 3,
    /**
    * Type
    */
    Type: 4,
    /**
    * New
    */
    New: 5,
    /**
    * Date and time creation
    */
    DateAndTimeCreation: 6,
    /**
    * Room type
    */
    RoomType: 7,
    /**
    * Tags
    */
    Tags: 8,
    /**
    * Room
    */
    Room: 9,
    /**
    * Custom order
    */
    CustomOrder: 10,
    /**
    * Last opened
    */
    LastOpened: 11,
    /**
    * Used space
    */
    UsedSpace: 12
} as const;

export type SortedByType = typeof SortedByType[keyof typeof SortedByType];



