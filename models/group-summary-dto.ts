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
 * The group summary parameters.
 * @export
 * @interface GroupSummaryDto
 */
export interface GroupSummaryDto {
    /**
     * The group ID.
     * @type {string}
     * @memberof GroupSummaryDto
     */
    'id': string;
    /**
     * The group name.
     * @type {string}
     * @memberof GroupSummaryDto
     */
    'name': string | null;
    /**
     * The group manager.
     * @type {string}
     * @memberof GroupSummaryDto
     */
    'manager'?: string | null;
    /**
     * Indicates whether the group is a system group.
     * @type {boolean}
     * @memberof GroupSummaryDto
     */
    'isSystem'?: boolean | null;
}

