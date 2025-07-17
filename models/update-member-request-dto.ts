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
import type { SexEnum } from './sex-enum';

/**
 * The request parameters for updating the user information.
 * @export
 * @interface UpdateMemberRequestDto
 */
export interface UpdateMemberRequestDto {
    /**
     * The user ID.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'userId'?: string | null;
    /**
     * Specifies whether to disable a user or not.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'disable'?: boolean | null;
    /**
     * The user email address.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'email'?: string | null;
    /**
     * Specifies if this is a guest or a user.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'isUser'?: boolean | null;
    /**
     * The user first name.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'lastName'?: string | null;
    /**
     * The list of the user departments.
     * @type {Array<string>}
     * @memberof UpdateMemberRequestDto
     */
    'department'?: Array<string> | null;
    /**
     * The user title.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'title'?: string | null;
    /**
     * The user location.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'location'?: string | null;
    /**
     * 
     * @type {SexEnum}
     * @memberof UpdateMemberRequestDto
     */
    'sex'?: SexEnum;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof UpdateMemberRequestDto
     */
    'birthday'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof UpdateMemberRequestDto
     */
    'worksfrom'?: ApiDateTime;
    /**
     * The user comment.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'comment'?: string | null;
    /**
     * The list of the user contacts.
     * @type {Array<Contact>}
     * @memberof UpdateMemberRequestDto
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The user avatar photo URL.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'files'?: string | null;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'spam'?: boolean | null;
}



