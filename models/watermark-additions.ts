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
 * [1 - User name, 2 - User email, 4 - User ip adress, 8 - Current date, 16 - Room name]
 * @export
 * @enum {number}
 */

export const WatermarkAdditions = {
    /**
    * User name
    */
    UserName: 1,
    /**
    * User email
    */
    UserEmail: 2,
    /**
    * User ip adress
    */
    UserIpAdress: 4,
    /**
    * Current date
    */
    CurrentDate: 8,
    /**
    * Room name
    */
    RoomName: 16
} as const;

export type WatermarkAdditions = typeof WatermarkAdditions[keyof typeof WatermarkAdditions];



