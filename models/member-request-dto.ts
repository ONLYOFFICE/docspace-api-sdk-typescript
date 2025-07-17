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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeType } from './employee-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SexEnum } from './sex-enum';

/**
 * The user request parameters.
 * @export
 * @interface MemberRequestDto
 */
export interface MemberRequestDto {
    /**
     * The user password.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'password'?: string | null;
    /**
     * The user password hash.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'passwordHash'?: string | null;
    /**
     * The user email address.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'email'?: string | null;
    /**
     * 
     * @type {EmployeeType}
     * @memberof MemberRequestDto
     */
    'type'?: EmployeeType;
    /**
     * Specifies if this is a guest or a user.
     * @type {boolean}
     * @memberof MemberRequestDto
     */
    'isUser'?: boolean | null;
    /**
     * The user first name.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'lastName'?: string | null;
    /**
     * The list of the user departments IDs.
     * @type {Array<string>}
     * @memberof MemberRequestDto
     */
    'department'?: Array<string> | null;
    /**
     * The user title.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'title'?: string | null;
    /**
     * The user location.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'location'?: string | null;
    /**
     * 
     * @type {SexEnum}
     * @memberof MemberRequestDto
     */
    'sex'?: SexEnum;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof MemberRequestDto
     */
    'birthday'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof MemberRequestDto
     */
    'worksfrom'?: ApiDateTime;
    /**
     * The user comment.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'comment'?: string | null;
    /**
     * The list of the user contacts.
     * @type {Array<Contact>}
     * @memberof MemberRequestDto
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The avatar photo URL.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'files'?: string | null;
    /**
     * Specifies if the user is added via the invitation link or not.
     * @type {boolean}
     * @memberof MemberRequestDto
     */
    'fromInviteLink'?: boolean;
    /**
     * The user key.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'key'?: string | null;
    /**
     * The user culture code.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'cultureName'?: string | null;
    /**
     * The user target ID.
     * @type {string}
     * @memberof MemberRequestDto
     */
    'target'?: string;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     * @type {boolean}
     * @memberof MemberRequestDto
     */
    'spam'?: boolean | null;
}



