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

/**
 * The changes to apply to a room group: its name and the rooms to add or remove.
 */
export interface UpdateRoomGroupRequest {
    /**
     * The list of room IDs to add to the group.
     */
    'roomsToAdd'?: Array<DuplicateRequestDtoAllOfFileIds> | null;
    /**
     * The list of room IDs to remove from the group.
     */
    'roomsToRemove'?: Array<DuplicateRequestDtoAllOfFileIds> | null;
    /**
     * The group name.
     */
    'groupName'?: string | null;
}

