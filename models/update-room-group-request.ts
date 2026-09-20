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
 * The changes to apply to a room group: a new name, rooms to attach and rooms to detach, in any combination.
 */
export interface UpdateRoomGroupRequest {
    /**
     * The rooms to attach to the group, each given as a number for a room stored in the portal or as a string for a  room on a connected third-party account. Every identifier has to name a room the caller can read; repeats and  rooms the group already holds are collapsed rather than refused.
     */
    'roomsToAdd'?: Array<DuplicateRequestDtoAllOfFileIds> | null;
    /**
     * The rooms to detach from the group, in the same two forms. Detaching leaves the room and its content  untouched, and a room the group already holds can be detached even when the caller has lost access to it in  the meantime.
     */
    'roomsToRemove'?: Array<DuplicateRequestDtoAllOfFileIds> | null;
    /**
     * The new name of the group, trimmed of surrounding spaces before it is stored. Leaving the member out keeps the  current name, and a name that is blank once trimmed is refused.
     */
    'groupName'?: string | null;
}

