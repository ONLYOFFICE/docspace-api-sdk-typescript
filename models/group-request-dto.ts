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


/**
 * The group request parameters.
 * @export
 * @interface GroupRequestDto
 */
export interface GroupRequestDto {
    /**
     * The list of group member IDs.
     * @type {Array<string>}
     * @memberof GroupRequestDto
     */
    'members'?: Array<string> | null;
    /**
     * The group manager ID.
     * @type {string}
     * @memberof GroupRequestDto
     */
    'groupManager': string;
    /**
     * The group name.
     * @type {string}
     * @memberof GroupRequestDto
     */
    'groupName'?: string | null;
}

