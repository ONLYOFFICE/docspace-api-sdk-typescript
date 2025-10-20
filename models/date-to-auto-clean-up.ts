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
 * [1 - One week, 2 - Two weeks, 3 - One month, 4 - Thirty days, 5 - Two months, 6 - Three months]
 * @export
 * @enum {number}
 */

export const DateToAutoCleanUp = {
    /**
    * One week
    */
    OneWeek: 1,
    /**
    * Two weeks
    */
    TwoWeeks: 2,
    /**
    * One month
    */
    OneMonth: 3,
    /**
    * Thirty days
    */
    ThirtyDays: 4,
    /**
    * Two months
    */
    TwoMonths: 5,
    /**
    * Three months
    */
    ThreeMonths: 6
} as const;

export type DateToAutoCleanUp = typeof DateToAutoCleanUp[keyof typeof DateToAutoCleanUp];



