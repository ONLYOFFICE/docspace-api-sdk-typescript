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

// May contain unused imports in some cases
// @ts-ignore
import type { DuplicateRequestDtoAllOfFileIds } from './duplicate-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { SearchArea } from './search-area';

/**
 * The name, the icon and the rooms of a room group to create.
 */
export interface RoomGroupRequestDto {
    /**
     * The name to show the group under. Surrounding spaces are trimmed before it is stored, a name that is blank  once trimmed is refused, and the name does not have to differ from the names of the caller\'s other groups.
     */
    'name': string;
    /**
     * The icon of the group, given as the identifier of one of the built-in covers listed by  `GET api/2.0/files/rooms/covers`. An uploaded image cannot be used, and any value that is not one of those  identifiers is refused.
     */
    'icon': string;
    /**
     * The rooms to gather in the group, each given as a number for a room stored in the portal or as a string for a  room on a connected third-party account. Every identifier has to name a room the caller can read; repeats are  collapsed, and an element of any other shape - a decimal number, a number sent as a string, null - is refused.
     */
    'rooms': Array<DuplicateRequestDtoAllOfFileIds>;
    /**
     * The section the group belongs to: Active for Rooms and Forms for Forms. Active when omitted.
     */
    'searchArea'?: SearchArea;
}



