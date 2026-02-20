/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 */
export interface MemberRequestDto {
    /**
     * The user password.
     */
    'password'?: string | null;
    /**
     * The user password hash.
     */
    'passwordHash'?: string | null;
    /**
     * The user email address.
     */
    'email'?: string | null;
    'type'?: EmployeeType;
    /**
     * Specifies if this is a guest or a user.
     */
    'isUser'?: boolean | null;
    /**
     * The user first name.
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     */
    'lastName'?: string | null;
    /**
     * The list of the user departments IDs.
     */
    'department'?: Array<string> | null;
    /**
     * The user title.
     */
    'title'?: string | null;
    /**
     * The user location.
     */
    'location'?: string | null;
    'sex'?: SexEnum;
    'birthday'?: ApiDateTime;
    'worksfrom'?: ApiDateTime;
    /**
     * The user comment.
     */
    'comment'?: string | null;
    /**
     * The list of the user contacts.
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The avatar photo URL.
     */
    'files'?: string | null;
    /**
     * Specifies if the user is added via the invitation link or not.
     */
    'fromInviteLink'?: boolean;
    /**
     * The user key.
     */
    'key'?: string | null;
    /**
     * The user culture code.
     */
    'cultureName'?: string | null;
    /**
     * The user target ID.
     */
    'target'?: string;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     */
    'spam'?: boolean | null;
}



