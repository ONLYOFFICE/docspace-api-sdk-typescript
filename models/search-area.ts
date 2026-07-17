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
 * [0 - Active, 1 - Archive, 2 - Any, 3 - Recent by links, 4 - Template, 5 - Knowledge, 6 - Result storage, 7 - AiAgents]
 */

export const SearchArea = {
    Active: 0,
    Archive: 1,
    Any: 2,
    RecentByLinks: 3,
    Templates: 4,
    Knowledge: 5,
    ResultStorage: 6,
    AiAgents: 7,
} as const;

export type SearchArea = typeof SearchArea[keyof typeof SearchArea];



