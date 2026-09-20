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
import type { FileEntryBaseDto } from './file-entry-base-dto';

/**
 * The unseen entries of one room inside a day group.
 */
export interface RoomNewItemsDto {
    /**
     * The room the entries were found in, in its short form: only the identifier, the title, the room type and the  logo are filled in.
     */
    'room'?: FileEntryBaseDto;
    /**
     * The files of that room the caller has not opened yet, the most recently changed first. Reading them here does  not clear the badges; opening the room itself does.
     */
    'items'?: Array<FileEntryBaseDto> | null;
}

