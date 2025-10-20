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
 * [0 - Badges, 1 - Rooms activity, 2 - Daily feed, 3 - Usefull tips]
 * @export
 * @enum {number}
 */

export const NotificationType = {
    /**
    * Badges
    */
    Badges: 0,
    /**
    * Rooms activity
    */
    RoomsActivity: 1,
    /**
    * Daily feed
    */
    DailyFeed: 2,
    /**
    * Usefull tips
    */
    UsefullTips: 3
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];



