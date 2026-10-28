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
 * One entry of the recent-documents list the editor offers.
 */
export interface RecentConfigDto {
    /**
     * The folder shown next to the entry, as a readable name rather than an id.
     */
    'folder'?: string | null;
    /**
     * The name shown for the entry.
     */
    'title'?: string | null;
    /**
     * Where the entry opens.
     */
    'url'?: string | null;
}

