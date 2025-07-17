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
import type { EmployeeFullDto } from './employee-full-dto';

/**
 * The group parameters.
 * @export
 * @interface GroupDto
 */
export interface GroupDto {
    /**
     * The group name.
     * @type {string}
     * @memberof GroupDto
     */
    'name'?: string | null;
    /**
     * The parent group ID.
     * @type {string}
     * @memberof GroupDto
     */
    'parent'?: string | null;
    /**
     * The group category ID.
     * @type {string}
     * @memberof GroupDto
     */
    'category'?: string;
    /**
     * The group ID.
     * @type {string}
     * @memberof GroupDto
     */
    'id'?: string;
    /**
     * Specifies if the LDAP settings are enabled for the group or not.
     * @type {boolean}
     * @memberof GroupDto
     */
    'isLDAP'?: boolean;
    /**
     * 
     * @type {EmployeeFullDto}
     * @memberof GroupDto
     */
    'manager'?: EmployeeFullDto;
    /**
     * The list of group members.
     * @type {Array<EmployeeFullDto>}
     * @memberof GroupDto
     */
    'members'?: Array<EmployeeFullDto> | null;
    /**
     * Specifies whether the group can be shared or not.
     * @type {boolean}
     * @memberof GroupDto
     */
    'shared'?: boolean | null;
    /**
     * The number of group members.
     * @type {number}
     * @memberof GroupDto
     */
    'membersCount'?: number;
}

