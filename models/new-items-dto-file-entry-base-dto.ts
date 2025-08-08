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

// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryBaseDto } from './file-entry-base-dto';

/**
 * The new item parameters.
 * @export
 * @interface NewItemsDtoFileEntryBaseDto
 */
export interface NewItemsDtoFileEntryBaseDto {
    /**
     * 
     * @type {ApiDateTime}
     * @memberof NewItemsDtoFileEntryBaseDto
     */
    'date'?: ApiDateTime;
    /**
     * The list of items.
     * @type {Array<FileEntryBaseDto>}
     * @memberof NewItemsDtoFileEntryBaseDto
     */
    'items'?: Array<FileEntryBaseDto> | null;
}

