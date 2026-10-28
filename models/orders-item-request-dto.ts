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
import type { FileEntryType } from './file-entry-type';

/**
 * One entry to move to a given position inside its folder.
 */
export interface OrdersItemRequestDto {
    /**
     * The file or folder to move.
     */
    'entryId': number;
    /**
     * Which of the two the identifier names, because a file and a folder may carry the same number.
     */
    'entryType': FileEntryType;
    /**
     * The position the entry is to take, counting from 1. The entry that held it, and everything after it, is  shifted to make room. A dotted path such as 1.2.3 is accepted as well, of which only the last segment is  read.
     */
    'order': number;
}



