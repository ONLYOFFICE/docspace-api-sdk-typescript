/* tslint:disable */
/* eslint-disable */
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
 */
export interface GroupDto {
    /**
     * The group name.
     */
    'name': string | null;
    /**
     * The parent group ID.
     */
    'parent'?: string | null;
    /**
     * The group category ID.
     */
    'category': string;
    /**
     * The group ID.
     */
    'id': string;
    /**
     * Specifies if the LDAP settings are enabled for the group or not.
     */
    'isLDAP': boolean;
    /**
     * Indicates whether the group is a system group.
     */
    'isSystem'?: boolean | null;
    'manager'?: EmployeeFullDto;
    /**
     * The list of group members.
     */
    'members'?: Array<EmployeeFullDto> | null;
    /**
     * Specifies whether the group can be shared or not.
     */
    'shared'?: boolean | null;
    /**
     * The number of group members.
     */
    'membersCount'?: number;
}

