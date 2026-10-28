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
import type { EmployeeFullDto } from './employee-full-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDto } from './file-dto';

/**
 * The outcome of one completed form-filling session, as the person who has just filled the form sees it.
 */
export interface FillingFormResultDto {
    /**
     * The number this copy was given among the copies made of the same form, counting up from 1. It is the number  the results of the form are ordered by and the one the title of the copy carries.
     */
    'formNumber': number;
    /**
     * The filled copy that the session produced, as an ordinary file: it can be read and downloaded with the file  operations of this API.
     */
    'completedForm'?: FileDto;
    /**
     * The form the copy was made from, so that a client can offer filling it once more.
     */
    'originalForm'?: FileDto;
    /**
     * The account that owns the original form, reported with its email address, so that the person who has just  filled the form knows who receives it and whom to ask about it.
     */
    'manager'?: EmployeeFullDto;
    /**
     * The room the form was filled in. It comes back as 0 when the session was reached through a link shared for  that single form rather than for its room, in which case there is no room the caller could be sent to.
     */
    'roomId': number;
    /**
     * Tells whether the calling account may open that room: true for a member of the room and for a portal  administrator, in which case a client can offer going to the room; false for the anonymous caller who filled  the form through a link and can only be shown the copy itself.
     */
    'isRoomMember'?: boolean;
}

