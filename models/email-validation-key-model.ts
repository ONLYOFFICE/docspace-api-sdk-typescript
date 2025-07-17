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
import type { ConfirmType } from './confirm-type';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeType } from './employee-type';

/**
 * The confirmation email parameters.
 * @export
 * @interface EmailValidationKeyModel
 */
export interface EmailValidationKeyModel {
    /**
     * The email validation key.
     * @type {string}
     * @memberof EmailValidationKeyModel
     */
    'key'?: string | null;
    /**
     * 
     * @type {EmployeeType}
     * @memberof EmailValidationKeyModel
     */
    'emplType'?: EmployeeType;
    /**
     * The email address.
     * @type {string}
     * @memberof EmailValidationKeyModel
     */
    'email'?: string | null;
    /**
     * The user ID.
     * @type {string}
     * @memberof EmailValidationKeyModel
     */
    'uiD'?: string | null;
    /**
     * 
     * @type {ConfirmType}
     * @memberof EmailValidationKeyModel
     */
    'type'?: ConfirmType;
    /**
     * Specifies whether it is the first time account access or not.
     * @type {string}
     * @memberof EmailValidationKeyModel
     */
    'first'?: string | null;
    /**
     * The room ID.
     * @type {string}
     * @memberof EmailValidationKeyModel
     */
    'roomId'?: string | null;
}



