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
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupSummaryDto } from './group-summary-dto';

/**
 * The security information.
 * @export
 * @interface SecurityDto
 */
export interface SecurityDto {
    /**
     * The module ID.
     * @type {string}
     * @memberof SecurityDto
     */
    'webItemId'?: string | null;
    /**
     * The list of users with the access to the module.
     * @type {Array<EmployeeDto>}
     * @memberof SecurityDto
     */
    'users'?: Array<EmployeeDto> | null;
    /**
     * The list of groups with the access to the module.
     * @type {Array<GroupSummaryDto>}
     * @memberof SecurityDto
     */
    'groups'?: Array<GroupSummaryDto> | null;
    /**
     * Specifies if the security settings are enabled or not.
     * @type {boolean}
     * @memberof SecurityDto
     */
    'enabled'?: boolean;
    /**
     * Specifies if the module is a subitem or not.
     * @type {boolean}
     * @memberof SecurityDto
     */
    'isSubItem'?: boolean;
}

