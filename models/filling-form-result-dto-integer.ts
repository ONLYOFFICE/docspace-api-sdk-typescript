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
import type { FileDtoInteger } from './file-dto-integer';

/**
 * The parameters of the form filling result.
 * @export
 * @interface FillingFormResultDtoInteger
 */
export interface FillingFormResultDtoInteger {
    /**
     * The filling form number.
     * @type {number}
     * @memberof FillingFormResultDtoInteger
     */
    'formNumber'?: number;
    /**
     * 
     * @type {FileDtoInteger}
     * @memberof FillingFormResultDtoInteger
     */
    'completedForm'?: FileDtoInteger;
    /**
     * 
     * @type {FileDtoInteger}
     * @memberof FillingFormResultDtoInteger
     */
    'originalForm'?: FileDtoInteger;
    /**
     * 
     * @type {EmployeeFullDto}
     * @memberof FillingFormResultDtoInteger
     */
    'manager'?: EmployeeFullDto;
    /**
     * The room ID where filling the form.
     * @type {number}
     * @memberof FillingFormResultDtoInteger
     */
    'roomId'?: number;
    /**
     * Specifies if the manager who fills the form is a room member or not.
     * @type {boolean}
     * @memberof FillingFormResultDtoInteger
     */
    'isRoomMember'?: boolean;
}

