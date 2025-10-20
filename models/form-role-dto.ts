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
// May contain unused imports in some cases
// @ts-ignore
import type { FormFillingStatus } from './form-filling-status';

/**
 * The form role parameters.
 * @export
 * @interface FormRoleDto
 */
export interface FormRoleDto {
    /**
     * The role name.
     * @type {string}
     * @memberof FormRoleDto
     */
    'roleName': string | null;
    /**
     * The role color.
     * @type {string}
     * @memberof FormRoleDto
     */
    'roleColor'?: string | null;
    /**
     * 
     * @type {EmployeeFullDto}
     * @memberof FormRoleDto
     */
    'user'?: EmployeeFullDto;
    /**
     * The role sequence.
     * @type {number}
     * @memberof FormRoleDto
     */
    'sequence': number;
    /**
     * Specifies if the role is submitted.
     * @type {boolean}
     * @memberof FormRoleDto
     */
    'submitted': boolean;
    /**
     * 
     * @type {EmployeeFullDto}
     * @memberof FormRoleDto
     */
    'stopedBy'?: EmployeeFullDto;
    /**
     * The role history.
     * @type {{ [key: string]: string; }}
     * @memberof FormRoleDto
     */
    'history'?: { [key: string]: string; } | null;
    /**
     * 
     * @type {FormFillingStatus}
     * @memberof FormRoleDto
     */
    'roleStatus'?: FormFillingStatus;
}



