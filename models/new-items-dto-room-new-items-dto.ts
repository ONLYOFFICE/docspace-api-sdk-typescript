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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomNewItemsDto } from './room-new-items-dto';

/**
 * One day of the entries the caller has not opened yet, the groups running from the most recent day backwards.
 */
export interface NewItemsDtoRoomNewItemsDto {
    /**
     * The day the grouped entries were last changed, written with the offset of the portal time zone. The time part  is the moment of the newest entry of the group.
     */
    'date': ApiDateTime;
    /**
     * What changed on that day, the most recent first. Folders are left out of it, so an entry here is always a file  or a room that holds them.
     */
    'items': Array<RoomNewItemsDto> | null;
}

