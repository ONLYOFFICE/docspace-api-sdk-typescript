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
 * The form role.
 * @export
 * @interface FormRole
 */
export interface FormRole {
    /**
     * The room ID.
     * @type {number}
     * @memberof FormRole
     */
    'roomId'?: number;
    /**
     * The role name.
     * @type {string}
     * @memberof FormRole
     */
    'roleName'?: string | null;
    /**
     * The role color.
     * @type {string}
     * @memberof FormRole
     */
    'roleColor'?: string | null;
    /**
     * The user ID.
     * @type {string}
     * @memberof FormRole
     */
    'userId'?: string;
    /**
     * The role sequence.
     * @type {number}
     * @memberof FormRole
     */
    'sequence'?: number;
    /**
     * Specifies if the role was submitted or not.
     * @type {boolean}
     * @memberof FormRole
     */
    'submitted'?: boolean;
    /**
     * The date and time when the role was opened.
     * @type {string}
     * @memberof FormRole
     */
    'openedAt'?: string;
    /**
     * The date and time when the role was submitted.
     * @type {string}
     * @memberof FormRole
     */
    'submissionDate'?: string;
}

