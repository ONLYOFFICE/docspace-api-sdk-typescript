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
 * The tag names a request attaches to a room or detaches from it.
 */
export interface BatchTagsRequestDto {
    /**
     * The tags, by name: a tag has no identifier of its own, and the name is what links a room to it.  `GET api/2.0/files/tags` lists the names already in the portal catalogue. An empty list is accepted and does  nothing, while a blank or overlong entry makes the whole request invalid.
     */
    'names': Array<string>;
}

